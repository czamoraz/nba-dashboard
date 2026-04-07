"""
leaders.py — Estadísticas por partido de los jugadores via nba_api.

Devuelve un DataFrame con el mismo schema que pipeline/scrapers/leaders.py
(B-Ref), para que pipeline/transforms/leaders.py y availability.py
funcionen sin cambios.
"""

import time
import pandas as pd
from nba_api.stats.endpoints import leaguedashplayerstats

from .team_ids import get_team_id


def scrape_leaders_nba(team: str, season_label: str) -> pd.DataFrame:
    """
    Extrae estadísticas per-game desde stats.nba.com.

    Args:
        team:         Abreviatura del equipo (ej: "ATL")
        season_label: Temporada en formato "2025-26"

    Returns:
        DataFrame con las mismas columnas que scrape_leaders() de B-Ref.
        Incluye la columna 'games' (GP) que build_avail() necesita.
    """
    team_id = get_team_id(team)
    print(f"  → nba_api: LeagueDashPlayerStats {team} {season_label}")

    stats = leaguedashplayerstats.LeagueDashPlayerStats(
        season=season_label,
        per_mode_detailed="PerGame",
        team_id_nullable=team_id,
        timeout=30,
    )
    time.sleep(1)

    df = stats.get_data_frames()[0]

    if df.empty:
        raise ValueError(f"No se encontraron estadísticas para {team} {season_label}.")

    df = df.rename(columns={
        "PLAYER_NAME": "player",
        "GP":          "games",
        "PTS":         "pts",
        "REB":         "reb",
        "AST":         "ast",
        "STL":         "stl",
        "BLK":         "blk",
        "TOV":         "tov",
        "FG_PCT":      "fg_pct",
        "FG3_PCT":     "3p_pct",
        "FT_PCT":      "ft_pct",
        "MIN":         "min_per_game",
    })

    for col in ["games", "pts", "reb", "ast", "stl", "blk", "tov", "min_per_game"]:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")

    df["season"] = season_label
    df["team"]   = team

    output_cols = ["team", "season", "player", "games", "pts", "reb", "ast",
                   "stl", "blk", "tov", "fg_pct", "3p_pct", "ft_pct", "min_per_game"]
    return df[[c for c in output_cols if c in df.columns]]
