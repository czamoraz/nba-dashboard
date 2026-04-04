"""
csv_to_data_js.py — Convierte los CSVs del scraper → data.js
=============================================================
Uso:
  1. Corre primero: python scraper.py --team ATL
  2. Luego:         python csv_to_data_js.py --team ATL

  Para otro equipo:
    python scraper.py --team GSW
    python csv_to_data_js.py --team GSW --name "Golden State Warriors" --conf West --color1 "#1D428A" --color2 "#FFC72C"

Genera js/data.js listo para usar en el dashboard.

Nota: conf_rank se puede pasar con --ranks o editar manualmente en data.js.
"""

import argparse
import pandas as pd
import json
import os

# ─── Catálogo de equipos (nombre, conferencia, colores) ──────────────────────
# Edita o amplía este diccionario para tener los datos listos sin flags.

TEAM_CATALOG = {
    "ATL": {"name": "Atlanta Hawks",          "conf": "East", "c1": "#C8102E", "c2": "#FDB927"},
    "BOS": {"name": "Boston Celtics",          "conf": "East", "c1": "#007A33", "c2": "#BA9653"},
    "BKN": {"name": "Brooklyn Nets",           "conf": "East", "c1": "#000000", "c2": "#FFFFFF"},
    "CHA": {"name": "Charlotte Hornets",       "conf": "East", "c1": "#1D1160", "c2": "#00788C"},
    "CHI": {"name": "Chicago Bulls",           "conf": "East", "c1": "#CE1141", "c2": "#000000"},
    "CLE": {"name": "Cleveland Cavaliers",     "conf": "East", "c1": "#860038", "c2": "#FDBB30"},
    "DAL": {"name": "Dallas Mavericks",        "conf": "West", "c1": "#00538C", "c2": "#002B5E"},
    "DEN": {"name": "Denver Nuggets",          "conf": "West", "c1": "#0E2240", "c2": "#FEC524"},
    "DET": {"name": "Detroit Pistons",         "conf": "East", "c1": "#C8102E", "c2": "#1D42BA"},
    "GSW": {"name": "Golden State Warriors",   "conf": "West", "c1": "#1D428A", "c2": "#FFC72C"},
    "HOU": {"name": "Houston Rockets",         "conf": "West", "c1": "#CE1141", "c2": "#000000"},
    "IND": {"name": "Indiana Pacers",          "conf": "East", "c1": "#002D62", "c2": "#FDBB30"},
    "LAC": {"name": "Los Angeles Clippers",    "conf": "West", "c1": "#C8102E", "c2": "#1D428A"},
    "LAL": {"name": "Los Angeles Lakers",      "conf": "West", "c1": "#552583", "c2": "#FDB927"},
    "MEM": {"name": "Memphis Grizzlies",       "conf": "West", "c1": "#5D76A9", "c2": "#12173F"},
    "MIA": {"name": "Miami Heat",              "conf": "East", "c1": "#98002E", "c2": "#F9A01B"},
    "MIL": {"name": "Milwaukee Bucks",         "conf": "East", "c1": "#00471B", "c2": "#EEE1C6"},
    "MIN": {"name": "Minnesota Timberwolves",  "conf": "West", "c1": "#0C2340", "c2": "#236192"},
    "NOP": {"name": "New Orleans Pelicans",    "conf": "West", "c1": "#0C2340", "c2": "#C8102E"},
    "NYK": {"name": "New York Knicks",         "conf": "East", "c1": "#006BB6", "c2": "#F58426"},
    "OKC": {"name": "Oklahoma City Thunder",   "conf": "West", "c1": "#007AC1", "c2": "#EF3B24"},
    "ORL": {"name": "Orlando Magic",           "conf": "East", "c1": "#0077C0", "c2": "#C4CED4"},
    "PHI": {"name": "Philadelphia 76ers",      "conf": "East", "c1": "#006BB6", "c2": "#ED174C"},
    "PHX": {"name": "Phoenix Suns",            "conf": "West", "c1": "#1D1160", "c2": "#E56020"},
    "POR": {"name": "Portland Trail Blazers",  "conf": "West", "c1": "#E03A3E", "c2": "#000000"},
    "SAC": {"name": "Sacramento Kings",        "conf": "West", "c1": "#5A2D81", "c2": "#63727A"},
    "SAS": {"name": "San Antonio Spurs",       "conf": "West", "c1": "#C4CED4", "c2": "#000000"},
    "TOR": {"name": "Toronto Raptors",         "conf": "East", "c1": "#CE1141", "c2": "#000000"},
    "UTA": {"name": "Utah Jazz",               "conf": "West", "c1": "#002B5C", "c2": "#00471B"},
    "WAS": {"name": "Washington Wizards",      "conf": "East", "c1": "#002B5C", "c2": "#E31837"},
}

# ─── Argparse ────────────────────────────────────────────────────────────────

def parse_args():
    parser = argparse.ArgumentParser(
        description="Convierte los CSVs del scraper → js/data.js",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
  python csv_to_data_js.py --team ATL
  python csv_to_data_js.py --team GSW
  python csv_to_data_js.py --team LAL --ranks 2021:5 2022:3 2023:4
  python csv_to_data_js.py --team XYZ --name "Mi Equipo" --conf West --color1 "#FF0000" --color2 "#000000"
        """
    )
    parser.add_argument(
        "--team", "-t",
        type=str.upper,
        required=True,
        metavar="ABBR",
        help="Abreviatura del equipo (ej: ATL, GSW, LAL)"
    )
    parser.add_argument(
        "--name",
        type=str,
        default=None,
        help="Nombre completo del equipo (opcional, se toma del catálogo si existe)"
    )
    parser.add_argument(
        "--conf",
        type=str,
        choices=["East", "West"],
        default=None,
        help="Conferencia: East o West"
    )
    parser.add_argument(
        "--color1",
        type=str,
        default=None,
        metavar="#RRGGBB",
        help="Color primario en hex (ej: #C8102E)"
    )
    parser.add_argument(
        "--color2",
        type=str,
        default=None,
        metavar="#RRGGBB",
        help="Color secundario en hex (ej: #FDB927)"
    )
    parser.add_argument(
        "--ranks",
        type=str,
        nargs="*",
        default=[],
        metavar="SEASON:RANK",
        help="Posición en conferencia por temporada (ej: 2020-21:5 2021-22:8)"
    )
    return parser.parse_args()


# ─── Helpers ──────────────────────────────────────────────────────────────────

def load_csvs(team: str):
    """Carga los 3 CSVs generados por scraper.py para un equipo dado."""
    def read(path):
        return pd.read_csv(path) if os.path.exists(path) else pd.DataFrame()

    games_df   = read(f"{team}_games.csv")
    leaders_df = read(f"{team}_leaders.csv")
    avail_df   = read(f"{team}_availability.csv")

    # Compatibilidad con nombres legacy (sin prefijo de equipo)
    if games_df.empty:
        games_df = read("team_games.csv")
    if leaders_df.empty:
        leaders_df = read("team_leaders.csv")
    if avail_df.empty:
        avail_df = read("team_availability.csv")

    return games_df, leaders_df, avail_df


def build_season_games(season_games: pd.DataFrame) -> dict:
    """
    Convierte el DataFrame de partidos de UNA temporada al formato
    que usa buildGames() en data.js.
    """
    sg = season_games.sort_values("game_num").copy()

    result_str = "".join(sg["result_clean"].fillna("L").astype(str).tolist())
    opponents  = sg["opponent"].fillna("OPP").tolist()
    pts_for    = sg["pts_for"].fillna(100).astype(int).tolist()
    margins    = (sg["pts_for"] - sg["pts_against"]).fillna(0).astype(int).tolist()

    # Mejor victoria y peor derrota
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

    w = int(sg["wins"].max())  if not sg.empty else 0
    l = int(sg["losses"].max()) if not sg.empty else 0

    return {
        "w": w,
        "l": l,
        "topW":    top_w,
        "worstL":  worst_l,
        "result_str": result_str,
        "opponents":  opponents,
        "pts_for":    pts_for,
        "margins":    margins,
    }


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


def build_avail(season_leaders: pd.DataFrame, top_n: int = 5) -> list:
    """
    Top N jugadores por partidos jugados (columna 'games').
    """
    df = season_leaders[season_leaders["games"].notna()].copy()
    df = df[df["player"] != "Team Totals"]
    df = df.sort_values("games", ascending=False).head(top_n)
    return [{"name": str(row["player"]), "g": int(row["games"])} for _, row in df.iterrows()]


# ─── Generador principal ───────────────────────────────────────────────────────

def generate_data_js(team: str, team_config: dict, conf_ranks: dict):
    games_df, leaders_df, avail_df = load_csvs(team)

    if games_df.empty and leaders_df.empty:
        print(f"ERROR: No se encontraron CSVs para '{team}'.")
        print(f"       Asegúrate de haber corrido: python scraper.py --team {team}")
        return

    # Obtener todas las temporadas disponibles
    seasons = sorted(set(
        list(games_df["season"].unique()   if not games_df.empty   else []) +
        list(leaders_df["season"].unique() if not leaders_df.empty else [])
    ))

    season_blocks = {}

    for season in seasons:
        print(f"  Procesando temporada {season}...")

        sg = games_df[games_df["season"] == season]     if not games_df.empty   else pd.DataFrame()
        sl = leaders_df[leaders_df["season"] == season] if not leaders_df.empty else pd.DataFrame()

        game_data   = build_season_games(sg) if not sg.empty else {}
        leader_data = build_leaders(sl)      if not sl.empty else {}
        avail_data  = build_avail(sl)        if not sl.empty else []

        season_blocks[season] = {
            "w":          game_data.get("w", 0),
            "l":          game_data.get("l", 0),
            "topW":       game_data.get("topW",   {"pts": 0, "opp": 0, "against": "N/A"}),
            "worstL":     game_data.get("worstL", {"pts": 0, "opp": 0, "against": "N/A"}),
            "conf_rank":  conf_ranks.get(season, 0),
            "result_str": game_data.get("result_str", ""),
            "opponents":  game_data.get("opponents", []),
            "pts_for":    game_data.get("pts_for", []),
            "margins":    game_data.get("margins", []),
            "leaders":    leader_data,
            "avail":      avail_data,
        }

    # ─── Generar el archivo JS ─────────────────────────────────────
    tc = team_config
    season_range = f"{seasons[0]} → {seasons[-1]}" if seasons else ""

    lines = []
    lines.append('/* ================================================================')
    lines.append(f'   data.js — {tc["name"]} · Generado por csv_to_data_js.py')
    lines.append('   ================================================================ */')
    lines.append('')
    lines.append('"use strict";')
    lines.append('')

    lines.append('/* ── Configuración del equipo ────────────────────────────────── */')
    lines.append('window.TEAM_CONFIG = {')
    lines.append(f'  name:          "{tc["name"]}",')
    lines.append(f'  abbr:          "{tc["abbr"]}",')
    lines.append(f'  conference:    "{tc["conference"]}",')
    lines.append(f'  primaryColor:  "{tc["primaryColor"]}",')
    lines.append(f'  secondaryColor:"{tc["secondaryColor"]}",')
    lines.append(f'  subtitleText:  "Performance Dashboard · {season_range}",')
    lines.append('};')
    lines.append('')

    lines.append('/* ── Helper interno ──────────────────────────────────────────── */')
    lines.append('function buildGames(resStr, opps, scores, margins) {')
    lines.append('  const res = resStr.split("");')
    lines.append('  let w = 0, l = 0;')
    lines.append('  return res.map((r, i) => {')
    lines.append('    if (r === "W") w++; else l++;')
    lines.append('    const m  = margins[i % margins.length];')
    lines.append('    const pf = scores[i % scores.length];')
    lines.append('    const pa = pf - m;')
    lines.append('    return { n: i + 1, r, pf, pa, opp: opps[i % opps.length] || "OPP", w, l, m };')
    lines.append('  });')
    lines.append('}')
    lines.append('')

    lines.append('/* ── Datos por temporada ─────────────────────────────────────── */')
    lines.append('window.SEASON_DATA = {')
    lines.append('')

    for season, data in season_blocks.items():
        lines.append(f'  "{season}": {{')
        lines.append(f'    w: {data["w"]}, l: {data["l"]},')

        tw = data["topW"]
        wl = data["worstL"]
        lines.append(f'    topW:   {{ pts: {tw["pts"]}, opp: {tw["opp"]}, against: "{tw["against"]}" }},')
        lines.append(f'    worstL: {{ pts: {wl["pts"]}, opp: {wl["opp"]}, against: "{wl["against"]}" }},')
        lines.append(f'    conf_rank: {data["conf_rank"]},')

        res_str = data["result_str"]
        opps    = json.dumps(data["opponents"])
        pts     = json.dumps(data["pts_for"])
        margs   = json.dumps(data["margins"])
        lines.append(f'    games: buildGames(')
        lines.append(f'      "{res_str}",')
        lines.append(f'      {opps},')
        lines.append(f'      {pts},')
        lines.append(f'      {margs}')
        lines.append(f'    ),')

        ld = data["leaders"]
        lines.append(f'    leaders: {{')
        for stat in ["pts", "reb", "ast", "stl", "blk"]:
            if stat in ld:
                lines.append(f'      {stat}: {{ name: "{ld[stat]["name"]}", val: {ld[stat]["val"]} }},')
        lines.append(f'    }},')

        lines.append(f'    avail: [')
        for a in data["avail"]:
            lines.append(f'      {{ name: "{a["name"]}", g: {a["g"]} }},')
        lines.append(f'    ]')

        lines.append(f'  }},')
        lines.append('')

    lines.append('};')
    lines.append('')

    output_dir  = os.path.join("js", "data")
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, f"{team}.js")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"\n✅ Archivo generado: {output_path}")
    print(f"   Equipo    : {tc['name']} ({tc['abbr']})")
    print(f"   Temporadas: {', '.join(season_blocks.keys())}")
    print(f"\n   Abre en el navegador: landing.html → selecciona {team}")
    if any(v == 0 for v in [season_blocks[s]["conf_rank"] for s in season_blocks]):
        print("\n⚠️  Algunos conf_rank son 0. Pásalos con --ranks 2020-21:5 2021-22:8 ...")


if __name__ == "__main__":
    args = parse_args()
    team = args.team

    # ── Resolver configuración del equipo ─────────────────────────
    catalog_entry = TEAM_CATALOG.get(team, {})

    team_config = {
        "name":          args.name   or catalog_entry.get("name",  team),
        "abbr":          team,
        "conference":    args.conf   or catalog_entry.get("conf",  "East"),
        "primaryColor":  args.color1 or catalog_entry.get("c1",    "#000000"),
        "secondaryColor":args.color2 or catalog_entry.get("c2",    "#FFFFFF"),
    }

    # ── Resolver conf_ranks ───────────────────────────────────────
    conf_ranks = {}
    for item in args.ranks:
        try:
            season, rank = item.split(":")
            conf_ranks[season.strip()] = int(rank.strip())
        except ValueError:
            print(f"⚠️  Formato inválido en --ranks: '{item}'. Usa SEASON:RANK (ej: 2020-21:5)")

    print(f"\n{'='*55}")
    print(f"  Generando data.js para {team_config['name']} ({team})")
    print(f"{'='*55}")

    generate_data_js(team, team_config, conf_ranks)
