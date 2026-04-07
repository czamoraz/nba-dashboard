"""
conf_rank.py — Posición en conferencia via nba_api.
"""

import time
from nba_api.stats.endpoints import leaguestandingsv3

from .team_ids import get_team_id


def scrape_conf_rank_nba(team: str, season_label: str) -> int:
    """
    Obtiene la posición actual del equipo en su conferencia.

    Args:
        team:         Abreviatura del equipo (ej: "ATL")
        season_label: Temporada en formato "2025-26"

    Returns:
        Posición en conferencia (1-15), o 0 si no se encuentra.
    """
    team_id = get_team_id(team)
    print(f"  → nba_api: LeagueStandingsV3 {season_label}")

    standings = leaguestandingsv3.LeagueStandingsV3(
        season=season_label,
        timeout=30,
    )
    time.sleep(1)

    df = standings.get_data_frames()[0]

    row = df[df["TeamID"] == team_id]
    if row.empty:
        return 0

    return int(row["PlayoffRank"].iloc[0])
