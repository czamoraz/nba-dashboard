"""
games.py — Scraping del log de partidos por temporada.
"""

import pandas as pd
from .base import fetch, table_to_df


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
        "Notes"      : "notes"
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
        "wins", "losses", "win_pct", "streak", "notes"
    ]
    return df[[c for c in cols if c in df.columns]]
