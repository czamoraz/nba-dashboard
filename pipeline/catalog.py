"""
catalog.py — Abreviaturas y configuración de los 30 equipos NBA.
"""

NBA_TEAMS = {
    "ATL", "BOS", "BKN", "CHA", "CHI", "CLE", "DAL", "DEN", "DET", "GSW",
    "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK",
    "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS", "TOR", "UTA", "WAS",
    # Nombres históricos también aceptados
    "NJN", "NOH", "NOK", "SEA", "VAN",
}

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
