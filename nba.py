"""
nba.py — CLI unificado para el NBA Dashboard
=============================================
Un solo punto de entrada para todas las operaciones.

Subcomandos:
  rebuild   Regenera js/data/{TEAM}.js desde los CSVs locales
  update    Actualiza la temporada en curso desde Basketball-Reference
  setup     Scrapea + regenera un equipo nuevo completo

Ejemplos:
  python nba.py rebuild --all
  python nba.py rebuild --team ATL BOS LAL
  python nba.py update --all
  python nba.py update --team ATL --delay 8
  python nba.py setup --team ATL
  python nba.py setup --all --delay 6
"""

import argparse
import os
import subprocess
import sys
import time

import pandas as pd

from pipeline.catalog import TEAM_CATALOG, NBA_TEAMS
from pipeline.writers.js_writer import generate_data_js
from update_current_season import (
    update_team,
    detect_current_season,
    season_to_int,
)
from pipeline.scrapers.conf_rank import scrape_all_conf_ranks

# ─── Colores ──────────────────────────────────────────────────────────────────

GREEN  = "\033[92m"
YELLOW = "\033[93m"
RED    = "\033[91m"
BOLD   = "\033[1m"
RESET  = "\033[0m"

def ok(msg):   print(f"  {GREEN}✓{RESET} {msg}")
def warn(msg): print(f"  {YELLOW}⚠{RESET}  {msg}")
def err(msg):  print(f"  {RED}✗{RESET} {msg}")

# ─── Equipos activos (sin abreviaturas históricas) ────────────────────────────

ACTIVE_TEAMS = sorted(
    t for t in NBA_TEAMS
    if len(t) == 3 and t not in {"NJN", "NOH", "NOK", "SEA", "VAN"}
)


def resolve_teams(args_team, args_all):
    if args_all:
        return ACTIVE_TEAMS
    if args_team:
        return args_team
    print("Error: usa --team ABBR... o --all.")
    sys.exit(1)


# ─── Subcomando: rebuild ──────────────────────────────────────────────────────

def cmd_rebuild(args):
    teams = resolve_teams(args.team, args.all)

    print(f"\n{'='*55}")
    print(f"  {BOLD}NBA Dashboard — Rebuild desde CSVs{RESET}")
    print(f"  Equipos: {' '.join(teams)}")
    print(f"{'='*55}\n")

    ok_count, failed = 0, []
    for team in teams:
        catalog_entry = TEAM_CATALOG.get(team, {})
        team_config = {
            "name":           catalog_entry.get("name",  team),
            "abbr":           team,
            "conference":     catalog_entry.get("conf",  "East"),
            "primaryColor":   catalog_entry.get("c1",    "#000000"),
            "secondaryColor": catalog_entry.get("c2",    "#FFFFFF"),
        }

        conf_ranks = {}
        ranks_file = f"{team}_conf_ranks.csv"
        if os.path.exists(ranks_file):
            try:
                ranks_df = pd.read_csv(ranks_file)
                for _, row in ranks_df.iterrows():
                    conf_ranks[str(row["season"])] = int(row["rank"])
            except Exception as e:
                warn(f"{team}: no se pudo leer {ranks_file}: {e}")

        games_csv = f"{team}_games.csv"
        if not os.path.exists(games_csv):
            warn(f"{team}: no existe {games_csv}, saltando.")
            failed.append(team)
            continue

        try:
            generate_data_js(team, team_config, conf_ranks)
            ok(f"{team} generado.")
            ok_count += 1
        except Exception as e:
            err(f"{team}: {e}")
            failed.append(team)

    print(f"\n{'='*55}")
    print(f"  {GREEN}{BOLD}¡Listo!{RESET} {ok_count}/{len(teams)} equipos regenerados.")
    if failed:
        print(f"  {YELLOW}Fallaron{RESET}: {' '.join(failed)}")
    print(f"{'='*55}\n")


# ─── Subcomando: update ───────────────────────────────────────────────────────

def cmd_update(args):
    teams      = resolve_teams(args.team, args.all)
    season     = args.season or detect_current_season()
    season_int = season_to_int(season)
    delay      = args.delay

    print(f"\n{'='*55}")
    print(f"  {BOLD}NBA Dashboard — Actualización temporada en curso{RESET}")
    print(f"  Equipos   : {' '.join(teams)}")
    print(f"  Temporada : {season}")
    print(f"  Fuente    : basketball-reference.com")
    print(f"{'='*55}")

    conf_ranks = {}
    try:
        print(f"\n[0/{len(teams)}] Descargando standings (una vez para todos)...")
        conf_ranks = scrape_all_conf_ranks(season_int, delay)
        ok(f"Rankings obtenidos para {len(conf_ranks)} equipos")
    except Exception as e:
        warn(f"Standings: {e} — se usará rank=0 para todos")

    failed = []
    for i, team in enumerate(teams, 1):
        try:
            update_team(team, season, season_int, delay, False, conf_ranks)
        except Exception as e:
            err(f"{team}: {e}")
            failed.append(team)

    print(f"\n{'='*55}")
    print(f"  {GREEN}{BOLD}¡Listo!{RESET} {len(teams)-len(failed)}/{len(teams)} equipos actualizados.")
    if failed:
        print(f"  {YELLOW}Fallaron{RESET}: {' '.join(failed)}")
    print(f"{'='*55}\n")


# ─── Subcomando: setup ────────────────────────────────────────────────────────

def cmd_setup(args):
    teams = resolve_teams(args.team, args.all)
    python = sys.executable

    print(f"\n{'='*55}")
    print(f"  {BOLD}NBA Dashboard — Setup inicial{RESET}")
    print(f"  Equipos: {' '.join(teams)}")
    print(f"{'='*55}\n")

    failed = []
    for i, team in enumerate(teams, 1):
        print(f"\n[{i}/{len(teams)}] {BOLD}{team}{RESET}")

        if not args.skip_scrape:
            scraper_cmd = [
                python, "scraper.py",
                "--team", team,
                "--delay", str(args.delay),
                "--seasons", *[str(s) for s in args.seasons],
            ]
            start = time.time()
            result = subprocess.run(scraper_cmd)
            elapsed = round(time.time() - start)
            if result.returncode != 0:
                err(f"{team}: scraper falló. Saltando a siguiente equipo.")
                failed.append(team)
                continue
            ok(f"{team}: scraping completado en {elapsed}s")

        catalog_entry = TEAM_CATALOG.get(team, {})
        team_config = {
            "name":           catalog_entry.get("name",  team),
            "abbr":           team,
            "conference":     catalog_entry.get("conf",  "East"),
            "primaryColor":   catalog_entry.get("c1",    "#000000"),
            "secondaryColor": catalog_entry.get("c2",    "#FFFFFF"),
        }
        conf_ranks = {}
        ranks_file = f"{team}_conf_ranks.csv"
        if os.path.exists(ranks_file):
            try:
                ranks_df = pd.read_csv(ranks_file)
                for _, row in ranks_df.iterrows():
                    conf_ranks[str(row["season"])] = int(row["rank"])
            except Exception:
                pass

        try:
            generate_data_js(team, team_config, conf_ranks)
            ok(f"{team}: js/data/{team}.js generado.")
        except Exception as e:
            err(f"{team}: {e}")
            failed.append(team)

    print(f"\n{'='*55}")
    print(f"  {GREEN}{BOLD}¡Listo!{RESET} {len(teams)-len(failed)}/{len(teams)} equipos configurados.")
    if failed:
        print(f"  {YELLOW}Fallaron{RESET}: {' '.join(failed)}")
    print(f"{'='*55}\n")


# ─── Argparse ─────────────────────────────────────────────────────────────────

def build_parser():
    parser = argparse.ArgumentParser(
        prog="nba.py",
        description="CLI unificado para el NBA Dashboard.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
  python nba.py rebuild --all
  python nba.py rebuild --team ATL BOS LAL
  python nba.py update --all
  python nba.py update --all --delay 8
  python nba.py update --team GSW --season 2024-25
  python nba.py setup --team ATL
  python nba.py setup --all --delay 6
  python nba.py setup --team ATL --skip-scrape
        """
    )
    sub = parser.add_subparsers(dest="cmd", required=True)

    # ── rebuild ──────────────────────────────────────────────────────
    p_rebuild = sub.add_parser("rebuild", help="Regenera JS desde CSVs locales")
    p_rebuild.add_argument("--team", "-t", type=str.upper, nargs="+", metavar="ABBR")
    p_rebuild.add_argument("--all",  action="store_true", help="Todos los equipos activos")

    # ── update ───────────────────────────────────────────────────────
    p_update = sub.add_parser("update", help="Actualiza temporada en curso (live scraping)")
    p_update.add_argument("--team",   "-t", type=str.upper, nargs="+", metavar="ABBR")
    p_update.add_argument("--all",    action="store_true", help="Todos los equipos activos")
    p_update.add_argument("--season", type=str, default=None, metavar="YYYY-YY")
    p_update.add_argument("--delay",  "-d", type=float, default=4.0, metavar="SECS")

    # ── setup ────────────────────────────────────────────────────────
    p_setup = sub.add_parser("setup", help="Scraping + generación inicial de un equipo nuevo")
    p_setup.add_argument("--team",        "-t", type=str.upper, nargs="+", metavar="ABBR")
    p_setup.add_argument("--all",         action="store_true", help="Todos los equipos activos")
    p_setup.add_argument("--seasons",     "-s", type=int, nargs="+",
                         default=[2021, 2022, 2023, 2024, 2025, 2026], metavar="AÑO")
    p_setup.add_argument("--delay",       "-d", type=float, default=4.0, metavar="SECS")
    p_setup.add_argument("--skip-scrape", action="store_true",
                         help="Omite el scraping; usa los CSVs ya existentes.")

    return parser


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = build_parser()
    args   = parser.parse_args()

    if args.cmd == "rebuild":
        cmd_rebuild(args)
    elif args.cmd == "update":
        cmd_update(args)
    elif args.cmd == "setup":
        cmd_setup(args)


if __name__ == "__main__":
    main()
