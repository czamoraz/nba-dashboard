/* ================================================================
   data.js — Atlanta Hawks · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Atlanta Hawks",
  abbr:          "ATL",
  conference:    "East",
  primaryColor:  "#C8102E",
  secondaryColor:"#FDB927",
  subtitleText:  "Performance Dashboard · 2020-21 → 2020-21",
};

/* ── Helper interno ──────────────────────────────────────────── */
function buildGames(resStr, opps, scores, margins) {
  const res = resStr.split("");
  let w = 0, l = 0;
  return res.map((r, i) => {
    if (r === "W") w++; else l++;
    const m  = margins[i % margins.length];
    const pf = scores[i % scores.length];
    const pa = pf - m;
    return { n: i + 1, r, pf, pa, opp: opps[i % opps.length] || "OPP", w, l, m };
  });
}

/* ── Datos por temporada ─────────────────────────────────────── */
window.SEASON_DATA = {

  "2020-21": {
    w: 41, l: 31,
    topW:   { pts: 135, opp: 103, against: "Phoenix Suns" },
    worstL: { pts: 83, opp: 127, against: "Philadelphia 76ers" },
    conf_rank: 5,
    games: buildGames(
      "WWWLWLLLLWLLWWWLWLWLLLWLLLLWLWLWLLWWWWWWWWLLWLLWWWWLWWWLWWLWWLLLWWWLWWWW",
      ["Chicago Bulls", "Memphis Grizzlies", "Detroit Pistons", "Brooklyn Nets", "Brooklyn Nets", "Cleveland Cavaliers", "New York Knicks", "Charlotte Hornets", "Charlotte Hornets", "Philadelphia 76ers", "Utah Jazz", "Portland Trail Blazers", "Minnesota Timberwolves", "Detroit Pistons", "Minnesota Timberwolves", "Milwaukee Bucks", "Los Angeles Clippers", "Brooklyn Nets", "Washington Wizards", "Los Angeles Lakers", "Dallas Mavericks", "Utah Jazz", "Toronto Raptors", "Dallas Mavericks", "San Antonio Spurs", "Indiana Pacers", "New York Knicks", "Boston Celtics", "Boston Celtics", "Denver Nuggets", "Cleveland Cavaliers", "Boston Celtics", "Oklahoma City Thunder", "Miami Heat", "Miami Heat", "Orlando Magic", "Toronto Raptors", "Sacramento Kings", "Cleveland Cavaliers", "Houston Rockets", "Oklahoma City Thunder", "Los Angeles Lakers", "Los Angeles Clippers", "Sacramento Kings", "Golden State Warriors", "Denver Nuggets", "Phoenix Suns", "San Antonio Spurs", "New Orleans Pelicans", "Golden State Warriors", "New Orleans Pelicans", "Memphis Grizzlies", "Chicago Bulls", "Charlotte Hornets", "Toronto Raptors", "Milwaukee Bucks", "Indiana Pacers", "Orlando Magic", "New York Knicks", "Miami Heat", "Milwaukee Bucks", "Detroit Pistons", "Philadelphia 76ers", "Philadelphia 76ers", "Chicago Bulls", "Portland Trail Blazers", "Phoenix Suns", "Indiana Pacers", "Washington Wizards", "Washington Wizards", "Orlando Magic", "Houston Rockets"],
      [124, 122, 128, 141, 114, 91, 108, 94, 105, 112, 92, 106, 108, 123, 116, 115, 108, 128, 116, 99, 116, 91, 132, 117, 114, 113, 112, 122, 109, 123, 111, 127, 109, 99, 94, 115, 121, 121, 100, 119, 116, 99, 110, 108, 124, 102, 110, 134, 126, 117, 123, 113, 120, 105, 108, 109, 129, 112, 127, 118, 111, 86, 83, 104, 108, 123, 135, 126, 125, 120, 116, 124],
      [20, 10, 8, -4, 18, -5, -5, -8, -8, 18, -24, -6, 11, 8, 18, -14, 9, -4, 16, -8, -6, -21, 11, -1, -11, -12, -11, 8, -12, 8, -1, 15, -9, -10, 14, 3, 1, 15, 18, 12, 23, 5, -9, -2, 16, -24, -7, 5, 23, 6, 16, -18, 12, 4, 5, -11, 12, 16, -10, 15, 7, -14, -44, -22, 11, 9, 32, -7, 1, 4, 23, 29]
    ),
    leaders: {
      pts: { name: "Trae Young", val: 25.3 },
      reb: { name: "Clint Capela", val: 14.3 },
      ast: { name: "Trae Young", val: 9.4 },
      stl: { name: "Cam Reddish", val: 1.3 },
      blk: { name: "Clint Capela", val: 2.0 },
    },
    avail: [
      { name: "Solomon Hill", g: 71 },
      { name: "Kevin Huerter", g: 69 },
      { name: "Trae Young", g: 63 },
      { name: "Clint Capela", g: 63 },
      { name: "John Collins", g: 63 },
    ]
  },

};
