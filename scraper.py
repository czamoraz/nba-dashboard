"""
NBA Teams Stats Scraper — Basketball-Reference
====================================================
Extrae datos de temporadas y genera 4 archivos CSV:

  {TEAM}_games.csv        → Resultado de cada partido
  {TEAM}_leaders.csv      → Líderes estadísticos por temporada
  {TEAM}_availability.csv → Partidos jugados/perdidos por jugador
  {TEAM}_conf_ranks.csv   → Posición en conferencia por temporada

Dependencias:
  pip install requests beautifulsoup4 pandas lxml

Uso:
  python scraper.py --team ATL
  python scraper.py --team GSW --seasons 2023 2024 2025 2026
  python scraper.py --team LAL --seasons 2021 2022 2023 2024 2025 2026

Abreviaturas comunes:
  ATL BOS BRK CHA CHI CLE DAL DEN DET GSW
  HOU IND LAC LAL MEM MIA MIL MIN NOP NYK
  OKC ORL PHI PHX POR SAC SAS TOR UTA WAS

Nota sobre rate-limiting de Basketball-Reference:
  El script incluye delays entre requests (3-5 seg).
  Si te bloquean, sube DELAY a 8-10 segundos con --delay 10.
"""

import argparse
import sys
import pandas as pd

from pipeline.catalog import NBA_TEAMS
from pipeline.scrapers.games import scrape_games
from pipeline.scrapers.leaders import scrape_leaders
from pipeline.scrapers.availability import scrape_availability
from pipeline.scrapers.conf_rank import scrape_conf_rank


# ─── Argparse ─────────────────────────────────────────────────────────────────

def parse_args():
    parser = argparse.ArgumentParser(
        description="Scraper de estadísticas NBA desde Basketball-Reference.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
  python scraper.py --team ATL
  python scraper.py --team GSW --seasons 2023 2024 2025 2026
  python scraper.py --team LAL --seasons 2021 2022 2023 2024 2025 2026 --delay 6
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
        "--seasons", "-s",
        type=int,
        nargs="+",
        default=[2021, 2022, 2023, 2024, 2025, 2026],
        metavar="AÑO",
        help="Año(s) en que TERMINA la temporada (default: 2021 2022 2023 2024 2025 2026)"
    )
    parser.add_argument(
        "--delay", "-d",
        type=float,
        default=4.0,
        metavar="SEGS",
        help="Delay base entre requests en segundos (default: 4)"
    )
    return parser.parse_args()


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    args = parse_args()
    team    = args.team
    seasons = sorted(args.seasons)
    delay   = args.delay

    if team not in NBA_TEAMS:
        print(f"⚠️  Advertencia: '{team}' no está en la lista de equipos conocidos.")
        print(f"   Equipos válidos: {', '.join(sorted(NBA_TEAMS))}")
        print(f"   Continuando de todas formas...\n")

    print(f"\n{'='*55}")
    print(f"  Equipo : {team}")
    print(f"  Temporadas: {', '.join(str(s-1)+'-'+str(s)[-2:] for s in seasons)}")
    print(f"  Delay  : {delay}s")
    print(f"{'='*55}")

    all_games        = []
    all_leaders      = []
    all_availability = []
    all_conf_ranks   = {}

    for season in seasons:
        label = f"{season-1}-{str(season)[-2:]}"
        print(f"\n{'─'*50}")
        print(f"  Temporada {label}")
        print(f"{'─'*50}")

        total_games = 82

        try:
            print("  [1/4] Partidos...")
            games = scrape_games(team, season, delay)
            all_games.append(games)
            total_games = len(games)
            print(f"        ✓ {total_games} partidos encontrados")
        except Exception as e:
            print(f"        ✗ ERROR: {e}")

        try:
            print("  [2/4] Líderes estadísticos...")
            leaders = scrape_leaders(team, season, delay)
            all_leaders.append(leaders)
            print(f"        ✓ {len(leaders)} jugadores encontrados")
        except Exception as e:
            print(f"        ✗ ERROR: {e}")

        try:
            print("  [3/4] Disponibilidad...")
            avail = scrape_availability(team, season, total_games, delay)
            all_availability.append(avail)
            print(f"        ✓ {len(avail)} jugadores procesados")
        except Exception as e:
            print(f"        ✗ ERROR: {e}")

        try:
            print("  [4/4] Posición en conferencia...")
            rank = scrape_conf_rank(team, season, delay)
            if rank > 0:
                all_conf_ranks[label] = rank
                print(f"        ✓ Posición #{rank} en conferencia")
            else:
                print(f"        ⚠ Equipo no encontrado en tabla de standings")
        except Exception as e:
            print(f"        ✗ ERROR: {e}")

    # ─── Guardar CSVs ─────────────────────────────────────────────
    print(f"\n\nGuardando CSVs para {team}...")

    if all_games:
        path = f"{team}_games.csv"
        pd.concat(all_games, ignore_index=True).to_csv(path, index=False)
        print(f"  ✓ {path}")

    if all_leaders:
        path = f"{team}_leaders.csv"
        pd.concat(all_leaders, ignore_index=True).to_csv(path, index=False)
        print(f"  ✓ {path}")

    if all_availability:
        path = f"{team}_availability.csv"
        pd.concat(all_availability, ignore_index=True).to_csv(path, index=False)
        print(f"  ✓ {path}")

    if all_conf_ranks:
        path = f"{team}_conf_ranks.csv"
        pd.DataFrame(
            list(all_conf_ranks.items()), columns=["season", "rank"]
        ).to_csv(path, index=False)
        print(f"  ✓ {path}")

    print(f"\n✅ ¡Listo! Ahora corre:")
    print(f"   python csv_to_data_js.py --team {team}")


if __name__ == "__main__":
    main()
