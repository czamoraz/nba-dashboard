"""
js_writer.py — Lee los CSVs del scraper y genera js/data/{TEAM}.js.
"""

import os
import json
import pandas as pd

from pipeline.transforms.games import build_season_games
from pipeline.transforms.leaders import build_leaders
from pipeline.transforms.availability import build_avail


def load_csvs(team: str):
    """Carga los CSVs generados por scraper.py para un equipo dado."""
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


def generate_data_js(team: str, team_config: dict, conf_ranks: dict):
    """
    Orquesta la lectura de CSVs, la transformación y la escritura
    del archivo js/data/{TEAM}.js.
    """
    games_df, leaders_df, _ = load_csvs(team)

    if games_df.empty and leaders_df.empty:
        print(f"ERROR: No se encontraron CSVs para '{team}'.")
        print(f"       Asegúrate de haber corrido: python scraper.py --team {team}")
        return

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

    _write_js_file(team, team_config, season_blocks)


def _write_js_file(team: str, team_config: dict, season_blocks: dict):
    """Serializa season_blocks al formato JS del dashboard."""
    tc = team_config
    seasons = list(season_blocks.keys())
    season_range = f"{seasons[0]} → {seasons[-1]}" if seasons else ""

    lines = []
    lines.append('/* ================================================================')
    lines.append(f'   {team}.js — {tc["name"]} · Generado por csv_to_data_js.py')
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
                all_json = json.dumps(ld[stat].get("all", []), ensure_ascii=False)
                lines.append(f'      {stat}: {{ name: "{ld[stat]["name"]}", val: {ld[stat]["val"]}, all: {all_json} }},')
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

    # Companion JSON — fuente de verdad para update_current_season.py
    # Se commitea junto al JS para que GitHub Actions pueda leer el historial
    # sin necesitar los CSVs (que están en .gitignore).
    json_path = os.path.join(output_dir, f"{team}_data.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(season_blocks, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Archivos generados:")
    print(f"   {output_path}")
    print(f"   {json_path}")
    print(f"   Equipo    : {tc['name']} ({tc['abbr']})")
    print(f"   Temporadas: {', '.join(season_blocks.keys())}")
    if any(v == 0 for v in [season_blocks[s]["conf_rank"] for s in season_blocks]):
        print("\n⚠️  Algunos conf_rank son 0. Pásalos con --ranks 2020-21:5 2021-22:8 ...")
