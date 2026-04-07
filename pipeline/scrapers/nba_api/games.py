"""
games.py — Log de partidos de la temporada en curso via nba_api.

Usa LeagueGameLog en lugar de TeamGameLog porque TeamGameLog no incluye
PLUS_MINUS en nba_api >= 1.x. LeagueGameLog sí lo tiene.

Devuelve un DataFrame con el mismo schema que pipeline/scrapers/games.py
(B-Ref), para que pipeline/transforms/games.py funcione sin cambios.
"""

import time
import pandas as pd
from nba_api.stats.endpoints import leaguegamelog

from .team_ids import get_team_id


def scrape_games_nba(team: str, season_label: str) -> pd.DataFrame:
    """
    Extrae el log de partidos desde stats.nba.com.

    Args:
        team:         Abreviatura del equipo (ej: "ATL")
        season_label: Temporada en formato "2025-26"

    Returns:
        DataFrame con las mismas columnas que scrape_games() de B-Ref.
    """
    get_team_id(team)  # Valida que la abreviatura existe
    print(f"  → nba_api: LeagueGameLog {team} {season_label}")

    lgl = leaguegamelog.LeagueGameLog(
        season=season_label,
        player_or_team_abbreviation="T",
        timeout=30,
    )
    time.sleep(1)

    df = lgl.get_data_frames()[0]

    if df.empty:
        raise ValueError(f"No se encontraron partidos para {season_label}.")

    # Filtrar solo los partidos del equipo solicitado
    df = df[df["TEAM_ABBREVIATION"] == team].copy()

    if df.empty:
        raise ValueError(f"No se encontraron partidos para {team} en {season_label}.")

    # Ordenar cronológicamente (la API devuelve el más reciente primero)
    df = df.sort_values("GAME_DATE").reset_index(drop=True)
    df["game_num"] = range(1, len(df) + 1)

    # Localía y rival desde MATCHUP ("ATL vs. BOS" → H, "ATL @ BOS" → A)
    df["home_away"] = df["MATCHUP"].apply(lambda m: "H" if "vs." in m else "A")
    df["opponent"]  = df["MATCHUP"].apply(lambda m: m.split()[-1])

    df["pts_for"]     = df["PTS"].astype(int)
    df["margin"]      = df["PLUS_MINUS"].astype(int)
    df["pts_against"] = (df["pts_for"] - df["margin"]).astype(int)

    df["result_clean"] = df["WL"]

    # Calcular W/L acumulado cronológicamente
    df["wins"]   = (df["result_clean"] == "W").cumsum().astype(int)
    df["losses"] = (df["result_clean"] == "L").cumsum().astype(int)
    df["win_pct"] = df["wins"] / (df["wins"] + df["losses"])

    df["date"]   = df["GAME_DATE"]
    df["season"] = season_label
    df["team"]   = team
    df["streak"] = None
    df["notes"]  = None

    cols = [
        "team", "season", "game_num", "date", "home_away", "opponent",
        "result_clean", "pts_for", "pts_against", "margin",
        "wins", "losses", "win_pct", "streak", "notes",
    ]
    return df[cols]
