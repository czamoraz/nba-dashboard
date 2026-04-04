"""
setup_team.py — Un solo comando para agregar un equipo al dashboard
====================================================================
Corre el scraper Y el converter en secuencia.

Uso:
  python setup_team.py --team ATL
  python setup_team.py --team GSW --seasons 2021 2022 2023 2024 2025
  python setup_team.py --team LAL --ranks 2020-21:4 2021-22:11 2022-23:4 2023-24:8 2024-25:3
  python setup_team.py --team BOS --delay 6 --ranks 2020-21:3 2021-22:2

Flags:
  --team      Abreviatura del equipo (obligatorio)
  --seasons   Años en que TERMINA cada temporada (default: 2021 2022 2023 2024 2025)
  --ranks     Posición final en conferencia por temporada (ej: 2020-21:5 2021-22:8)
  --delay     Segundos entre requests al scraper (default: 4, sube a 8+ si te bloquean)
  --skip-scrape  Omite el scraping y solo regenera data.js (útil si ya tienes los CSVs)
"""

import argparse
import subprocess
import sys
import os
import time

# ─── Colores para la terminal ─────────────────────────────────────────────────

GREEN  = "\033[92m"
YELLOW = "\033[93m"
RED    = "\033[91m"
BOLD   = "\033[1m"
RESET  = "\033[0m"

def ok(msg):    print(f"  {GREEN}✓{RESET} {msg}")
def warn(msg):  print(f"  {YELLOW}⚠{RESET}  {msg}")
def err(msg):   print(f"  {RED}✗{RESET} {msg}")
def header(msg):print(f"\n{BOLD}{msg}{RESET}")
def step(msg):  print(f"\n{BOLD}{'─'*55}{RESET}\n  {msg}\n{BOLD}{'─'*55}{RESET}")


# ─── Argparse ─────────────────────────────────────────────────────────────────

def parse_args():
    parser = argparse.ArgumentParser(
        description="Scraping + generación de data.js en un solo paso.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
  python setup_team.py --team ATL
  python setup_team.py --team GSW --seasons 2023 2024 2025
  python setup_team.py --team LAL --ranks 2020-21:4 2021-22:11 --delay 6
  python setup_team.py --team ATL --skip-scrape --ranks 2020-21:5 2021-22:8
        """
    )
    parser.add_argument("--team",        "-t", type=str.upper, required=True,  metavar="ABBR")
    parser.add_argument("--seasons",     "-s", type=int, nargs="+",
                        default=[2021, 2022, 2023, 2024, 2025], metavar="AÑO")
    parser.add_argument("--ranks",             type=str, nargs="*", default=[], metavar="SEASON:RANK")
    parser.add_argument("--delay",       "-d", type=float, default=4.0,        metavar="SEGS")
    parser.add_argument("--skip-scrape",       action="store_true",
                        help="Omite el scraping; usa los CSVs ya existentes.")
    return parser.parse_args()


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    args   = parse_args()
    team   = args.team
    python = sys.executable   # usa el mismo Python con el que se corre este script

    season_labels = [f"{s-1}-{str(s)[-2:]}" for s in args.seasons]

    print(f"\n{'='*55}")
    print(f"  {BOLD}NBA Dashboard Setup — {team}{RESET}")
    print(f"  Temporadas : {', '.join(season_labels)}")
    if args.ranks:
        print(f"  Conf ranks : {', '.join(args.ranks)}")
    print(f"{'='*55}")

    # ── Paso 1: Scraping ──────────────────────────────────────────
    if args.skip_scrape:
        warn("Scraping omitido (--skip-scrape). Usando CSVs existentes.")
    else:
        step(f"Paso 1/2 · Scraping de Basketball-Reference ({team})")
        print(f"  Esto puede tardar {len(args.seasons) * 2}-{len(args.seasons) * 4} minutos")
        print(f"  (delays necesarios para no ser bloqueado por B-Ref)\n")

        scraper_cmd = [
            python, "scraper.py",
            "--team", team,
            "--delay", str(args.delay),
            "--seasons", *[str(s) for s in args.seasons],
        ]

        start = time.time()
        result = subprocess.run(scraper_cmd)
        elapsed = round(time.time() - start)

        if result.returncode != 0:
            err(f"El scraper terminó con errores (código {result.returncode}).")
            err("Revisa los mensajes anteriores. Puedes reintentar con --delay 8.")
            sys.exit(1)

        ok(f"Scraping completado en {elapsed}s")

    # ── Paso 2: Generar js/data/{TEAM}.js ────────────────────────
    step(f"Paso 2/2 · Generando js/data/{team}.js")

    converter_cmd = [
        python, "csv_to_data_js.py",
        "--team", team,
    ]
    if args.ranks:
        converter_cmd += ["--ranks"] + args.ranks

    result = subprocess.run(converter_cmd)

    if result.returncode != 0:
        err(f"El converter terminó con errores (código {result.returncode}).")
        sys.exit(1)

    # ── Resumen final ─────────────────────────────────────────────
    data_file = os.path.join("js", "data", f"{team}.js")
    print(f"\n{'='*55}")
    print(f"  {GREEN}{BOLD}¡Todo listo!{RESET}")
    print(f"{'='*55}")
    ok(f"Datos generados: {data_file}")
    print()
    print(f"  Próximos pasos:")
    print(f"    1. Abre {BOLD}landing.html{RESET} en tu navegador")
    print(f"    2. Selecciona {BOLD}{team}{RESET}")
    print()
    print(f"  Para subir a GitHub:")
    print(f"    git add js/data/{team}.js")
    print(f"    git commit -m \"feat: add {team} dashboard data\"")
    print(f"    git push")
    print()


if __name__ == "__main__":
    main()
