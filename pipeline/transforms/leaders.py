"""
leaders.py — Transforma estadísticas de jugadores al formato del dashboard.
"""

import pandas as pd


def build_leaders(season_leaders: pd.DataFrame) -> dict:
    """
    Encuentra el líder de cada categoría estadística para una temporada.
    """
    def leader(df, col):
        df_clean = df[df[col].notna()].copy()
        if df_clean.empty:
            return {"name": "N/A", "val": 0.0}
        row = df_clean.loc[df_clean[col].idxmax()]
        return {"name": str(row["player"]), "val": round(float(row[col]), 1)}

    return {
        "pts": leader(season_leaders, "pts"),
        "reb": leader(season_leaders, "reb"),
        "ast": leader(season_leaders, "ast"),
        "stl": leader(season_leaders, "stl"),
        "blk": leader(season_leaders, "blk"),
    }
