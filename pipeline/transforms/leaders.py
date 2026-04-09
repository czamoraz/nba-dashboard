"""
leaders.py — Transforma estadísticas de jugadores al formato del dashboard.
"""

import pandas as pd


def build_leaders(season_leaders: pd.DataFrame) -> dict:
    """
    Encuentra el líder de cada categoría y devuelve el ranking completo de jugadores.
    """
    def leader(df, col):
        df_clean = df[df[col].notna()].copy()
        if df_clean.empty:
            return {"name": "N/A", "val": 0.0, "all": []}
        df_sorted = df_clean.sort_values(col, ascending=False)
        top = df_sorted.iloc[0]
        all_players = [
            {"name": str(r["player"]), "val": round(float(r[col]), 1)}
            for _, r in df_sorted.iterrows()
        ]
        return {
            "name": str(top["player"]),
            "val":  round(float(top[col]), 1),
            "all":  all_players,
        }

    return {
        "pts": leader(season_leaders, "pts"),
        "reb": leader(season_leaders, "reb"),
        "ast": leader(season_leaders, "ast"),
        "stl": leader(season_leaders, "stl"),
        "blk": leader(season_leaders, "blk"),
    }
