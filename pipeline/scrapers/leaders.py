"""
leaders.py — Scraping de estadísticas por partido de los jugadores.
"""

import pandas as pd
from .base import fetch, table_to_df

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
