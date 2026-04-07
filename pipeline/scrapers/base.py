"""
base.py — HTTP helpers compartidos por todos los scrapers.
"""

import time
import random
import requests
import pandas as pd
from bs4 import BeautifulSoup
from io import StringIO

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}


def fetch(url: str, delay: float) -> BeautifulSoup:
    """Descarga una página y retorna su BeautifulSoup."""
    print(f"  → Descargando: {url}")
    r = requests.get(url, headers=HEADERS, timeout=15)
    r.raise_for_status()
    r.encoding = "utf-8"
    time.sleep(delay + random.uniform(0, 2))
    return BeautifulSoup(r.text, "lxml")


def table_to_df(soup: BeautifulSoup, table_id: str) -> pd.DataFrame:
    """Extrae una tabla HTML de B-Ref y la convierte en DataFrame."""
    table = soup.find("table", {"id": table_id})
    if table is None:
        raise ValueError(f"Tabla '{table_id}' no encontrada en la página.")
    for tr in table.find_all("tr", class_="thead"):
        tr.decompose()
    return pd.read_html(StringIO(str(table)))[0]
