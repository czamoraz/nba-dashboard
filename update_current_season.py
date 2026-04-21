"""
update_current_season.py — Actualiza la temporada en curso via nba_api.
=========================================================================
Usa nba_api (stats.nba.com) para los datos frescos de la temporada activa.
El historial de temporadas anteriores se lee desde js/data/{TEAM}_data.json,
que se commitea junto al JS y está disponible tanto localmente como en
GitHub Actions (sin necesidad de los CSVs).

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
import json
import os
import sys
import pandas as pd

from pipeline.catalog import TEAM_CATALOG
from pipeline.scrapers.nba_api.games     import scrape_games_nba
from pipeline.scrapers.nba_api.leaders   import scrape_leaders_nba
from pipeline.scrapers.nba_api.conf_rank import scrape_conf_rank_nba
from pipeline.transforms.games        import build_season_games
from pipeline.transforms.leaders      import build_leaders
from pipeline.transforms.availability import build_avail
from pipeline.writers.js_writer       import _write_js_file

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


# ─── JSON histórico ───────────────────────────────────────────────────────────

def load_season_blocks(team: str) -> dict:
    """
    Carga todos los season_blocks desde js/data/{TEAM}_data.json.
    Este archivo se commitea al repo y contiene el historial completo.
    Retorna dict vacío si el archivo no existe (primera ejecución).
    """
    json_path = os.path.join("js", "data", f"{team}_data.json")
    if not os.path.exists(json_path):
        return {}
    with open(json_path, encoding="utf-8") as f:
        return json.load(f)


def build_current_block(
    games_df,
    leaders_df,
    conf_rank: int,
    existing_block: dict,
) -> dict:
    """
    Construye el bloque de la temporada actual combinando datos frescos
    de nba_api con el bloque existente (para no perder datos si algo falla).
    """
    # Partir del bloque existente como base (preserva lo que no se pudo actualizar)
    block = dict(existing_block)

    if games_df is not None and not games_df.empty:
        game_data = build_season_games(games_df)
        block.update({
            "w":          game_data.get("w", 0),
            "l":          game_data.get("l", 0),
            "topW":       game_data.get("topW",   {"pts": 0, "opp": 0, "against": "N/A"}),
            "worstL":     game_data.get("worstL", {"pts": 0, "opp": 0, "against": "N/A"}),
            "result_str": game_data.get("result_str", ""),
            "opponents":  game_data.get("opponents", []),
            "pts_for":    game_data.get("pts_for", []),
            "margins":    game_data.get("margins", []),
        })

    if leaders_df is not None and not leaders_df.empty:
        block["leaders"] = build_leaders(leaders_df)
        block["avail"]   = build_avail(leaders_df)

    if conf_rank > 0:
        block["conf_rank"] = conf_rank

    # Valores por defecto para campos faltantes (primera vez sin historial)
    block.setdefault("w", 0)
    block.setdefault("l", 0)
    block.setdefault("topW",   {"pts": 0, "opp": 0, "against": "N/A"})
    block.setdefault("worstL", {"pts": 0, "opp": 0, "against": "N/A"})
    block.setdefault("conf_rank", conf_rank)
    block.setdefault("result_str", "")
    block.setdefault("opponents", [])
    block.setdefault("pts_for", [])
    block.setdefault("margins", [])
    block.setdefault("leaders", {})
    block.setdefault("avail", [])

    return block


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
        help="Solo muestra los datos obtenidos sin regenerar js/data/{TEAM}.js"
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

    # ── Cargar historial desde JSON comprometido ──────────────────
    season_blocks = load_season_blocks(team)
    if season_blocks:
        ok(f"Historial cargado desde js/data/{team}_data.json "
           f"({len(season_blocks)} temporadas)")
    else:
        warn(f"js/data/{team}_data.json no encontrado. "
             f"Corre primero: python csv_to_data_js.py --team {team}")

    existing_block = season_blocks.get(season, {})

    # ── 1. Partidos ───────────────────────────────────────────────
    games_df = None
    try:
        print("\n[1/3] Partidos...")
        games_df = scrape_games_nba(team, season)
        ok(f"{len(games_df)} partidos obtenidos")
    except Exception as e:
        err(f"Partidos: {e}")

    # ── 2. Estadísticas de jugadores ──────────────────────────────
    leaders_df = None
    try:
        print("\n[2/3] Estadísticas de jugadores...")
        leaders_df = scrape_leaders_nba(team, season)
        ok(f"{len(leaders_df)} jugadores obtenidos")
    except Exception as e:
        err(f"Estadísticas: {e}")

    # ── 3. Posición en conferencia ────────────────────────────────
    conf_rank = 0
    try:
        print("\n[3/3] Posición en conferencia...")
        conf_rank = scrape_conf_rank_nba(team, season)
        if conf_rank > 0:
            ok(f"Posición #{conf_rank} en conferencia")
        else:
            warn("No se encontró al equipo en standings (¿temporada no iniciada?)")
    except Exception as e:
        err(f"Standings: {e}")

    # ── 4. Regenerar JS + JSON ────────────────────────────────────
    if args.skip_js:
        warn("--skip-js activo: js/data/{}.js NO fue regenerado.".format(team))
        return

    if not season_blocks and games_df is None:
        err("Sin historial JSON ni datos nuevos. Corre setup_team.py primero.")
        sys.exit(1)

    print(f"\n[4/4] Actualizando js/data/{team}.js + {team}_data.json...")

    # Construir bloque de temporada actual (combinando frescos + existente)
    current_block = build_current_block(games_df, leaders_df, conf_rank, existing_block)

    # Solo actualizar la temporada actual si obtuvimos datos de partidos
    if games_df is not None:
        season_blocks[season] = current_block
    elif conf_rank > 0 and season in season_blocks:
        # Al menos actualizar el conf_rank si los partidos fallaron
        season_blocks[season]["conf_rank"] = conf_rank

    # Ordenar cronológicamente
    season_blocks = dict(sorted(season_blocks.items()))

    _write_js_file(team, team_config, season_blocks)

    print(f"\n{'='*55}")
    print(f"  {GREEN}{BOLD}¡Listo!{RESET} Dashboard actualizado.")
    print(f"{'='*55}")
    updated = []
    if games_df is not None:   updated.append("partidos")
    if leaders_df is not None: updated.append("estadísticas")
    if conf_rank > 0:          updated.append("posición en conferencia")
    print(f"\n  Actualizado : {', '.join(updated) or 'nada (datos sin cambios)'}")
    print(f"  Historial   : {len(season_blocks)} temporadas preservadas")
    print(f"\n  Abre: dashboard.html?team={team}\n")


if __name__ == "__main__":
    main()
