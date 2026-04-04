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
  ATL BOS BKN CHA CHI CLE DAL DEN DET GSW
  HOU IND LAC LAL MEM MIA MIL MIN NOP NYK
  OKC ORL PHI PHX POR SAC SAS TOR UTA WAS

Nota sobre rate-limiting de Basketball-Reference:
  El script incluye delays entre requests (3-5 seg).
  Si te bloquean, sube DELAY a 8-10 segundos con --delay 10.
"""

import argparse
import sys
import time
import random
import requests
import pandas as pd
from bs4 import BeautifulSoup
from io import StringIO

# ─── Abreviaturas válidas de la NBA ───────────────────────────────────────────

NBA_TEAMS = {
    "ATL", "BOS", "BKN", "CHA", "CHI", "CLE", "DAL", "DEN", "DET", "GSW",
    "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK",
    "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS", "TOR", "UTA", "WAS",
    # Nombres históricos también aceptados
    "NJN", "NOH", "NOK", "SEA", "VAN",
}

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}

# ─── Helpers ──────────────────────────────────────────────────────────────────

def fetch(url: str, delay: float) -> BeautifulSoup:
    """Descarga una página y retorna su BeautifulSoup."""
    print(f"  → Descargando: {url}")
    r = requests.get(url, headers=HEADERS, timeout=15)
    r.raise_for_status()
    r.encoding = "utf-8"
    time.sleep(delay + random.uniform(0, 2))
    return BeautifulSoup(r.text, "lxml")


def table_to_df(soup: BeautifulSoup, table_id: str) -> pd.DataFrame:
    """Extrae una tabla HTML de B-Ref y la convierte en DataFrame."""
    table = soup.find("table", {"id": table_id})
    if table is None:
        raise ValueError(f"Tabla '{table_id}' no encontrada en la página.")
    for tr in table.find_all("tr", class_="thead"):
        tr.decompose()
    return pd.read_html(StringIO(str(table)))[0]


# ─── 1. Registro de partidos ──────────────────────────────────────────────────

def scrape_games(team: str, season: int, delay: float) -> pd.DataFrame:
    """
    Extrae el log de partidos de una temporada.
    URL: /teams/{TEAM}/{season}_games.html
    """
    url  = f"https://www.basketball-reference.com/teams/{team}/{season}_games.html"
    soup = fetch(url, delay)

    df = table_to_df(soup, "games")

    df = df.rename(columns={
        "G"          : "game_num",
        "Date"       : "date",
        "Unnamed: 5" : "home_away",
        "Opponent"   : "opponent",
        "Unnamed: 7" : "result",
        "Tm"         : "pts_for",
        "Opp"        : "pts_against",
        "W"          : "wins",
        "L"          : "losses",
        "Streak"     : "streak",
    })

    df = df[pd.to_numeric(df["game_num"], errors="coerce").notna()].copy()
    df["game_num"]    = df["game_num"].astype(int)
    df["pts_for"]     = pd.to_numeric(df["pts_for"],     errors="coerce")
    df["pts_against"] = pd.to_numeric(df["pts_against"], errors="coerce")
    df["wins"]        = pd.to_numeric(df["wins"],        errors="coerce")
    df["losses"]      = pd.to_numeric(df["losses"],      errors="coerce")
    df["margin"]      = df["pts_for"] - df["pts_against"]
    df["season"]      = f"{season-1}-{str(season)[-2:]}"
    df["team"]        = team
    df["home_away"]   = df["home_away"].fillna("H").replace("@", "A")
    df["result_clean"] = df["result"].str.extract(r"^([WL])")
    df["win_pct"]     = df["wins"] / (df["wins"] + df["losses"])

    cols = [
        "team", "season", "game_num", "date", "home_away", "opponent",
        "result_clean", "pts_for", "pts_against", "margin",
        "wins", "losses", "win_pct", "streak"
    ]
    return df[[c for c in cols if c in df.columns]]


# ─── 2. Líderes estadísticos ──────────────────────────────────────────────────

STAT_COLS = {
    "Player" : "player",
    "G"      : "games",
    "PTS"    : "pts",
    "TRB"    : "reb",
    "AST"    : "ast",
    "STL"    : "stl",
    "BLK"    : "blk",
    "TOV"    : "tov",
    "FG%"    : "fg_pct",
    "3P%"    : "3p_pct",
    "FT%"    : "ft_pct",
    "MP"     : "min_per_game",
}

def scrape_leaders(team: str, season: int, delay: float) -> pd.DataFrame:
    """
    Extrae estadísticas por partido de la página de equipo.
    URL: /teams/{TEAM}/{season}.html
    """
    url  = f"https://www.basketball-reference.com/teams/{team}/{season}.html"
    soup = fetch(url, delay)

    df = table_to_df(soup, "per_game_stats")

    rename_map = {k: v for k, v in STAT_COLS.items() if k in df.columns}
    df = df.rename(columns=rename_map)

    df = df[df["player"].notna()].copy()
    df = df[df["player"] != "Team Totals"].copy()

    for col in ["games", "pts", "reb", "ast", "stl", "blk", "tov", "min_per_game"]:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")

    df["season"] = f"{season-1}-{str(season)[-2:]}"
    df["team"]   = team

    return df[["team", "season", "player"] + [v for v in STAT_COLS.values() if v in df.columns and v != "player"]]


# ─── 3. Disponibilidad de jugadores ──────────────────────────────────────────

def scrape_availability(team: str, season: int, total_games: int, delay: float) -> pd.DataFrame:
    """
    Calcula partidos jugados/perdidos por jugador.
    Reutiliza la página de líderes para no hacer un request extra.
    """
    url  = f"https://www.basketball-reference.com/teams/{team}/{season}.html"
    soup = fetch(url, delay)

    df = table_to_df(soup, "per_game_stats")
    df = df.rename(columns={"Player": "player", "G": "games"})
    df = df[df["player"].notna() & (df["player"] != "Team Totals")].copy()
    df["games"]        = pd.to_numeric(df["games"], errors="coerce")
    df["games_missed"] = total_games - df["games"]
    df["season"]       = f"{season-1}-{str(season)[-2:]}"
    df["team"]         = team
    df["avail_pct"]    = (df["games"] / total_games * 100).round(1)

    return df[["team", "season", "player", "games", "games_missed", "avail_pct"]].dropna()


# ─── 4. Posición en conferencia ───────────────────────────────────────────────

def scrape_conf_rank(team: str, season: int, delay: float) -> int:
    """
    Obtiene la posición del equipo en su conferencia al final de la temporada.
    URL: /leagues/NBA_{season}.html
    Retorna 0 si no se encuentra el equipo.
    """
    url = f"https://www.basketball-reference.com/leagues/NBA_{season}.html"
    soup = fetch(url, delay)

    for table_id in ["confs_standings_E", "confs_standings_W"]:
        table = soup.find("table", {"id": table_id})
        if table is None:
            continue
        tbody = table.find("tbody")
        if tbody is None:
            continue
        rank = 1
        for row in tbody.find_all("tr"):
            # Saltar filas de encabezado interno (division headers)
            if "thead" in row.get("class", []):
                continue
            link = row.find("a", href=True)
            if link and f"/teams/{team}/" in link.get("href", ""):
                return rank
            rank += 1

    return 0


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

    # Validar abreviatura
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
