"""
availability.py — Scraping de partidos jugados/perdidos por jugador.
"""

import pandas as pd
from .base import fetch, table_to_df


def scrape_availability(team: str, season: int, total_games: int, delay: float) -> pd.DataFrame:
    """
    Calcula partidos jugados/perdidos por jugador.
    URL: /teams/{TEAM}/{season}.html
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
