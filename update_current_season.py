"""
update_current_season.py — Actualiza la temporada en curso via nba_api.
=========================================================================
Usa nba_api (stats.nba.com) para los datos frescos de la temporada activa.
Los datos históricos de temporadas anteriores se mantienen desde los CSVs
existentes (generados por scraper.py con Basketball-Reference).

Uso:
  python update_current_season.py --team ATL
  python update_current_season.py --team ATL --season 2025-26
  python update_current_season.py --team ATL --skip-js   # solo actualiza CSVs

Dependencias:
  pip install nba_api

Nota: stats.nba.com puede cambiar sus endpoints sin aviso. Si este script
falla, verifica que nba_api esté actualizado: pip install --upgrade nba_api
"""

import argparse
import datetime
import os
import sys
import pandas as pd

from pipeline.catalog import TEAM_CATALOG
from pipeline.scrapers.nba_api.games    import scrape_games_nba
from pipeline.scrapers.nba_api.leaders  import scrape_leaders_nba
from pipeline.scrapers.nba_api.conf_rank import scrape_conf_rank_nba
from pipeline.writers.js_writer import generate_data_js

# ─── Colores terminal ─────────────────────────────────────────────────────────

GREEN  = "\033[92m"
YELLOW = "\033[93m"
RED    = "\033[91m"
BOLD   = "\033[1m"
RESET  = "\033[0m"

def ok(msg):   print(f"  {GREEN}✓{RESET} {msg}")
def warn(msg): print(f"  {YELLOW}⚠{RESET}  {msg}")
def err(msg):  print(f"  {RED}✗{RESET} {msg}")


# ─── Detección de temporada actual ───────────────────────────────────────────

def detect_current_season() -> str:
    """
    Infiere la temporada en curso según la fecha actual.
      Oct–Dic → temporada termina el año siguiente  (ej: oct 2025 → "2025-26")
      Ene–Sep → temporada termina este año          (ej: abr 2026 → "2025-26")
    """
    today = datetime.date.today()
    year  = today.year
    if today.month >= 10:
        return f"{year}-{str(year + 1)[-2:]}"
    else:
        return f"{year - 1}-{str(year)[-2:]}"


# ─── Actualización de CSVs ────────────────────────────────────────────────────

def update_csv(path: str, new_rows: pd.DataFrame, season_label: str):
    """
    Reemplaza las filas de `season_label` en el CSV con `new_rows`.
    Crea el CSV si no existe.
    """
    if os.path.exists(path):
        existing = pd.read_csv(path)
        existing = existing[existing["season"] != season_label]
        updated  = pd.concat([existing, new_rows], ignore_index=True)
    else:
        updated = new_rows

    updated.to_csv(path, index=False)


# ─── Argparse ─────────────────────────────────────────────────────────────────

def parse_args():
    parser = argparse.ArgumentParser(
        description="Actualiza la temporada en curso via nba_api.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
  python update_current_season.py --team ATL
  python update_current_season.py --team GSW --season 2024-25
  python update_current_season.py --team ATL --skip-js
        """
    )
    parser.add_argument(
        "--team", "-t",
        type=str.upper,
        required=True,
        metavar="ABBR",
        help="Abreviatura del equipo (ej: ATL, GSW, LAL)"
    )
    parser.add_argument(
        "--season",
        type=str,
        default=None,
        metavar="YYYY-YY",
        help="Temporada a actualizar (default: detecta automáticamente)"
    )
    parser.add_argument(
        "--skip-js",
        action="store_true",
        help="Solo actualiza los CSVs; no regenera js/data/{TEAM}.js"
    )
    return parser.parse_args()


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    args   = parse_args()
    team   = args.team
    season = args.season or detect_current_season()

    catalog_entry = TEAM_CATALOG.get(team, {})
    team_config = {
        "name":          catalog_entry.get("name",  team),
        "abbr":          team,
        "conference":    catalog_entry.get("conf",  "East"),
        "primaryColor":  catalog_entry.get("c1",    "#000000"),
        "secondaryColor":catalog_entry.get("c2",    "#FFFFFF"),
    }

    print(f"\n{'='*55}")
    print(f"  {BOLD}NBA Dashboard — Actualización de temporada en curso{RESET}")
    print(f"  Equipo    : {team_config['name']} ({team})")
    print(f"  Temporada : {season}")
    print(f"  Fuente    : nba_api (stats.nba.com)")
    print(f"{'='*55}\n")

    # ── 1. Partidos ───────────────────────────────────────────────
    games_df = None
    try:
        print("[1/3] Partidos...")
        games_df = scrape_games_nba(team, season)
        update_csv(f"{team}_games.csv", games_df, season)
        ok(f"{len(games_df)} partidos actualizados en {team}_games.csv")
    except Exception as e:
        err(f"Partidos: {e}")

    # ── 2. Estadísticas de jugadores ──────────────────────────────
    leaders_df = None
    try:
        print("\n[2/3] Estadísticas de jugadores...")
        leaders_df = scrape_leaders_nba(team, season)
        update_csv(f"{team}_leaders.csv", leaders_df, season)
        ok(f"{len(leaders_df)} jugadores actualizados en {team}_leaders.csv")
    except Exception as e:
        err(f"Estadísticas: {e}")

    # ── 3. Posición en conferencia ────────────────────────────────
    conf_rank = 0
    try:
        print("\n[3/3] Posición en conferencia...")
        conf_rank = scrape_conf_rank_nba(team, season)
        if conf_rank > 0:
            ranks_path = f"{team}_conf_ranks.csv"
            ranks_df   = pd.read_csv(ranks_path) if os.path.exists(ranks_path) else pd.DataFrame(columns=["season", "rank"])
            ranks_df   = ranks_df[ranks_df["season"] != season]
            ranks_df   = pd.concat([ranks_df, pd.DataFrame([{"season": season, "rank": conf_rank}])], ignore_index=True)
            ranks_df.to_csv(ranks_path, index=False)
            ok(f"Posición #{conf_rank} en conferencia → {ranks_path}")
        else:
            warn("No se encontró al equipo en standings (¿temporada no iniciada?)")
    except Exception as e:
        err(f"Standings: {e}")

    # ── 4. Regenerar JS ───────────────────────────────────────────
    if args.skip_js:
        warn("--skip-js activo: js/data/{}.js NO fue regenerado.".format(team))
        return

    if games_df is None and leaders_df is None:
        err("No hay datos nuevos. js/data/{}.js no se regeneró.".format(team))
        sys.exit(1)

    print(f"\n[4/4] Regenerando js/data/{team}.js con datos históricos + temporada actual...")

    # Cargar conf_ranks completos desde CSV
    conf_ranks = {}
    ranks_path = f"{team}_conf_ranks.csv"
    if os.path.exists(ranks_path):
        try:
            ranks_df = pd.read_csv(ranks_path)
            for _, row in ranks_df.iterrows():
                conf_ranks[str(row["season"])] = int(row["rank"])
        except Exception as e:
            warn(f"No se pudo leer {ranks_path}: {e}")

    generate_data_js(team, team_config, conf_ranks)

    print(f"\n{'='*55}")
    print(f"  {GREEN}{BOLD}¡Listo!{RESET} Dashboard actualizado con datos de {season}.")
    print(f"{'='*55}")
    print(f"\n  Datos históricos : Basketball-Reference (CSVs existentes)")
    print(f"  Temporada actual : nba_api / stats.nba.com")
    print(f"\n  Abre: index.html?team={team}\n")


if __name__ == "__main__":
    main()
