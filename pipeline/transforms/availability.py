"""
availability.py — Transforma datos de jugadores a disponibilidad para el dashboard.
"""

import pandas as pd


def build_avail(season_leaders: pd.DataFrame, top_n: int = 5) -> list:
    """
    Top N jugadores por partidos jugados (columna 'games').
    """
    df = season_leaders[season_leaders["games"].notna()].copy()
    df = df[df["player"] != "Team Totals"]
    df = df.sort_values("games", ascending=False).head(top_n)
    return [{"name": str(row["player"]), "g": int(row["games"])} for _, row in df.iterrows()]
