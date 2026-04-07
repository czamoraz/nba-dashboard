"""
conf_rank.py — Scraping de la posición en conferencia al final de la temporada.
"""

from .base import fetch


def scrape_conf_rank(team: str, season: int, delay: float) -> int:
    """
    Obtiene la posición del equipo en su conferencia al final de la temporada.
    URL: /leagues/NBA_{season}.html
    Retorna 0 si no se encuentra el equipo.
    """
    url  = f"https://www.basketball-reference.com/leagues/NBA_{season}.html"
    soup = fetch(url, delay)

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
            if link and f"/teams/{team}/" in link.get("href", ""):
                return rank
            rank += 1

    return 0
