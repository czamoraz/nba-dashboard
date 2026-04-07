"""
csv_to_data_js.py — Convierte los CSVs del scraper → js/data/{TEAM}.js
=======================================================================
Uso:
  1. Corre primero: python scraper.py --team ATL
  2. Luego:         python csv_to_data_js.py --team ATL

  Para otro equipo:
    python scraper.py --team GSW
    python csv_to_data_js.py --team GSW

Genera js/data/{TEAM}.js listo para usar en el dashboard.

Nota: conf_rank se puede pasar con --ranks o editar manualmente en el .js generado.
"""

import argparse
import os

from pipeline.catalog import TEAM_CATALOG
from pipeline.writers.js_writer import generate_data_js


# ─── Argparse ────────────────────────────────────────────────────────────────

def parse_args():
    parser = argparse.ArgumentParser(
        description="Convierte los CSVs del scraper → js/data/{TEAM}.js",
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


# ─── Main ─────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import pandas as pd

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

    conf_ranks_file = f"{team}_conf_ranks.csv"
    if os.path.exists(conf_ranks_file):
        try:
            ranks_df = pd.read_csv(conf_ranks_file)
            for _, row in ranks_df.iterrows():
                conf_ranks[str(row["season"])] = int(row["rank"])
            print(f"  Posiciones en conferencia cargadas desde {conf_ranks_file}")
        except Exception as e:
            print(f"  ⚠️  No se pudo leer {conf_ranks_file}: {e}")

    for item in args.ranks:
        try:
            season, rank = item.split(":")
            conf_ranks[season.strip()] = int(rank.strip())
        except ValueError:
            print(f"⚠️  Formato inválido en --ranks: '{item}'. Usa SEASON:RANK (ej: 2020-21:5)")

    print(f"\n{'='*55}")
    print(f"  Generando {team}.js para {team_config['name']} ({team})")
    print(f"{'='*55}")

    generate_data_js(team, team_config, conf_ranks)
