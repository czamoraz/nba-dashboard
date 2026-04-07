"""
games.py — Transforma el DataFrame de partidos al formato del dashboard.
"""

import pandas as pd


def build_season_games(season_games: pd.DataFrame) -> dict:
    """
    Convierte el DataFrame de partidos de UNA temporada al formato
    que usa buildGames() en el archivo JS generado.
    """
    sg = season_games.sort_values("game_num").copy()

    sg = sg[sg["result_clean"].notna()].copy()

    if "notes" in sg.columns:
        sg = sg[sg["notes"].fillna("").str.strip() != "Play-In Game"].copy()

    result_str = "".join(sg["result_clean"].astype(str).tolist())
    opponents  = sg["opponent"].fillna("OPP").tolist()
    pts_for    = sg["pts_for"].fillna(100).astype(int).tolist()
    margins    = (sg["pts_for"] - sg["pts_against"]).fillna(0).astype(int).tolist()

    wins   = sg[sg["result_clean"] == "W"]
    losses = sg[sg["result_clean"] == "L"]

    if not wins.empty:
        best_win = wins.loc[wins["margin"].idxmax()]
        top_w = {
            "pts":     int(best_win["pts_for"]),
            "opp":     int(best_win["pts_against"]),
            "against": str(best_win["opponent"]),
        }
    else:
        top_w = {"pts": 0, "opp": 0, "against": "N/A"}

    if not losses.empty:
        worst_loss = losses.loc[losses["margin"].idxmin()]
        worst_l = {
            "pts":     int(worst_loss["pts_for"]),
            "opp":     int(worst_loss["pts_against"]),
            "against": str(worst_loss["opponent"]),
        }
    else:
        worst_l = {"pts": 0, "opp": 0, "against": "N/A"}

    w = int(sg["wins"].max())   if not sg.empty else 0
    l = int(sg["losses"].max()) if not sg.empty else 0

    return {
        "w": w,
        "l": l,
        "topW":       top_w,
        "worstL":     worst_l,
        "result_str": result_str,
        "opponents":  opponents,
        "pts_for":    pts_for,
        "margins":    margins,
    }
