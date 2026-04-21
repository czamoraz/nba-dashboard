"""
conf_rank.py — Scraping de la posición en conferencia al final de la temporada.
"""

import re
from .base import fetch


def _parse_conf_ranks(soup) -> dict:
    """Extrae {team_abbr: rank} para todos los equipos de ambas conferencias."""
    ranks = {}
    for table_id in ["confs_standings_E", "confs_standings_W"]:
        table = soup.find("table", {"id": table_id})
        if table is None:
            continue
        tbody = table.find("tbody")
        if tbody is None:
            continue
        rank = 1
        for row in tbody.find_all("tr"):
            if "thead" in row.get("class", []):
                continue
            link = row.find("a", href=True)
            if link:
                m = re.search(r"/teams/(\w+)/", link.get("href", ""))
                if m:
                    ranks[m.group(1)] = rank
            rank += 1
    return ranks


def scrape_all_conf_ranks(season: int, delay: float) -> dict:
    """
    Descarga la página de standings una sola vez y retorna {team_abbr: rank}
    para los 30 equipos. Usar cuando se actualicen múltiples equipos.
    """
    url  = f"https://www.basketball-reference.com/leagues/NBA_{season}.html"
    soup = fetch(url, delay)
    return _parse_conf_ranks(soup)


def scrape_conf_rank(team: str, season: int, delay: float) -> int:
    """
    Obtiene la posición del equipo en su conferencia.
    Retorna 0 si no se encuentra el equipo.
    """
    url  = f"https://www.basketball-reference.com/leagues/NBA_{season}.html"
    soup = fetch(url, delay)
    return _parse_conf_ranks(soup).get(team, 0)
