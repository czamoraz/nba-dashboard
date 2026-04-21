"""
update_current_season.py — Actualiza la temporada en curso via basketball-reference.com.
=========================================================================================
El historial de temporadas anteriores se lee desde js/data/{TEAM}_data.json,
que se commitea junto al JS y está disponible tanto localmente como en
GitHub Actions (sin necesidad de los CSVs).

Uso:
  python update_current_season.py --team ATL
  python update_current_season.py --team ATL --season 2025-26
  python update_current_season.py --team ATL --delay 8   # más lento si B-Ref bloquea
  python update_current_season.py --team ATL --skip-js   # solo muestra los datos
"""

import argparse
import datetime
import json
import os
import sys
import pandas as pd

from pipeline.catalog import TEAM_CATALOG
from pipeline.scrapers.games     import scrape_games
from pipeline.scrapers.leaders   import scrape_leaders
from pipeline.scrapers.conf_rank import scrape_conf_rank, scrape_all_conf_ranks
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


# ─── Helpers de temporada ─────────────────────────────────────────────────────

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


def season_to_int(season: str) -> int:
    """Convierte "2025-26" → 2026 (año final, usado por basketball-reference)."""
    return int(season.split("-")[0]) + 1


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
    con el bloque existente (para no perder datos si algo falla).
    """
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
        description="Actualiza la temporada en curso via basketball-reference.com.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
  python update_current_season.py --team ATL
  python update_current_season.py --team GSW --season 2024-25
  python update_current_season.py --team ATL --delay 8
  python update_current_season.py --team ATL --skip-js
        """
    )
    parser.add_argument(
        "--team", "-t",
        type=str.upper,
        required=True,
        nargs="+",
        metavar="ABBR",
        help="Abreviatura(s) del equipo (ej: ATL, o ATL BOS LAL)"
    )
    parser.add_argument(
        "--season",
        type=str,
        default=None,
        metavar="YYYY-YY",
        help="Temporada a actualizar (default: detecta automáticamente)"
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=4.0,
        metavar="SECS",
        help="Segundos de espera entre requests (default: 4). Usa 8-10 si B-Ref bloquea."
    )
    parser.add_argument(
        "--skip-js",
        action="store_true",
        help="Solo muestra los datos obtenidos sin regenerar js/data/{TEAM}.js"
    )
    return parser.parse_args()


# ─── Main ─────────────────────────────────────────────────────────────────────

def update_team(team: str, season: str, season_int: int, delay: float,
                skip_js: bool, conf_ranks: dict) -> bool:
    """Actualiza un equipo. Retorna True si hubo cambios."""
    catalog_entry = TEAM_CATALOG.get(team, {})
    team_config = {
        "name":          catalog_entry.get("name",  team),
        "abbr":          team,
        "conference":    catalog_entry.get("conf",  "East"),
        "primaryColor":  catalog_entry.get("c1",    "#000000"),
        "secondaryColor":catalog_entry.get("c2",    "#FFFFFF"),
    }

    print(f"\n{'='*55}")
    print(f"  {BOLD}{team_config['name']} ({team}) — {season}{RESET}")
    print(f"{'='*55}\n")

    season_blocks  = load_season_blocks(team)
    existing_block = season_blocks.get(season, {})

    if season_blocks:
        ok(f"Historial: {len(season_blocks)} temporadas")
    else:
        warn(f"js/data/{team}_data.json no encontrado. "
             f"Corre primero: python csv_to_data_js.py --team {team}")

    # ── 1. Partidos ───────────────────────────────────────────────
    games_df = None
    try:
        print("\n  [1/3] Partidos...")
        games_df = scrape_games(team, season_int, delay)
        ok(f"{len(games_df)} partidos obtenidos")
    except Exception as e:
        err(f"Partidos: {e}")

    # ── 2. Estadísticas de jugadores ──────────────────────────────
    leaders_df = None
    try:
        print("\n  [2/3] Estadísticas de jugadores...")
        leaders_df = scrape_leaders(team, season_int, delay)
        ok(f"{len(leaders_df)} jugadores obtenidos")
    except Exception as e:
        err(f"Estadísticas: {e}")

    # ── 3. Posición en conferencia (del caché compartido) ─────────
    conf_rank = conf_ranks.get(team, 0)
    if conf_rank > 0:
        ok(f"Posición #{conf_rank} en conferencia")
    else:
        warn("No se encontró al equipo en standings (¿temporada no iniciada?)")

    if skip_js:
        warn(f"--skip-js activo: js/data/{team}.js NO fue regenerado.")
        return False

    if not season_blocks and games_df is None:
        err(f"Sin historial JSON ni datos nuevos para {team}. Corre setup_team.py primero.")
        return False

    print(f"\n  [4/4] Actualizando js/data/{team}.js + {team}_data.json...")

    current_block = build_current_block(games_df, leaders_df, conf_rank, existing_block)

    if games_df is not None:
        season_blocks[season] = current_block
    elif conf_rank > 0 and season in season_blocks:
        season_blocks[season]["conf_rank"] = conf_rank

    season_blocks = dict(sorted(season_blocks.items()))
    _write_js_file(team, team_config, season_blocks)

    updated = []
    if games_df is not None:   updated.append("partidos")
    if leaders_df is not None: updated.append("estadísticas")
    if conf_rank > 0:          updated.append("conf rank")
    ok(f"Actualizado: {', '.join(updated) or 'nada'}")
    return games_df is not None


def main():
    args       = parse_args()
    teams      = args.team
    season     = args.season or detect_current_season()
    season_int = season_to_int(season)
    delay      = args.delay

    print(f"\n{'='*55}")
    print(f"  {BOLD}NBA Dashboard — Actualización de temporada en curso{RESET}")
    print(f"  Equipos   : {' '.join(teams)}")
    print(f"  Temporada : {season}")
    print(f"  Fuente    : basketball-reference.com")
    print(f"{'='*55}")

    # ── Standings: una sola descarga para todos los equipos ───────
    conf_ranks = {}
    try:
        print(f"\n[0/{len(teams)}] Descargando standings (una vez para todos)...")
        conf_ranks = scrape_all_conf_ranks(season_int, delay)
        ok(f"Rankings obtenidos para {len(conf_ranks)} equipos")
    except Exception as e:
        err(f"Standings: {e} — se usará rank=0 para todos los equipos")

    # ── Actualizar cada equipo ────────────────────────────────────
    failed = []
    for i, team in enumerate(teams, 1):
        try:
            update_team(team, season, season_int, delay, args.skip_js, conf_ranks)
        except Exception as e:
            err(f"{team}: {e}")
            failed.append(team)

    print(f"\n{'='*55}")
    print(f"  {GREEN}{BOLD}¡Listo!{RESET} {len(teams) - len(failed)}/{len(teams)} equipos actualizados.")
    if failed:
        print(f"  {YELLOW}Fallaron{RESET}: {' '.join(failed)}")
    print(f"{'='*55}\n")


if __name__ == "__main__":
    main()
