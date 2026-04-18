/* ================================================================
   BOS.js — Boston Celtics · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Boston Celtics",
  abbr:          "BOS",
  conference:    "East",
  primaryColor:  "#007A33",
  secondaryColor:"#BA9653",
  subtitleText:  "Performance Dashboard · 2025-26 → 2025-26",
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

  "2025-26": {
    w: 56, l: 26,
    topW:   { pts: 146, opp: 101, against: "WAS" },
    worstL: { pts: 89, opp: 118, against: "CHA" },
    conf_rank: 2,
    games: buildGames(
      "LLLWWWLLWLWLWWWLWWLWWWWWLLWWWWLWWWWLWLLWWLWWLWLWWWWWLWWWWLWWWLWWLLWWWWLWWWLWWWWLWW",
      ["PHI", "NYK", "DET", "NOP", "CLE", "PHI", "HOU", "UTA", "WAS", "ORL", "ORL", "PHI", "MEM", "LAC", "BKN", "BKN", "ORL", "DET", "MIN", "CLE", "NYK", "WAS", "LAL", "TOR", "MIL", "DET", "MIA", "TOR", "IND", "IND", "POR", "UTA", "SAC", "LAC", "CHI", "DEN", "TOR", "SAS", "IND", "MIA", "ATL", "DET", "IND", "BKN", "CHI", "POR", "ATL", "SAC", "MIL", "DAL", "HOU", "MIA", "NYK", "CHI", "GSW", "LAL", "PHX", "DEN", "BKN", "PHI", "MIL", "CHA", "DAL", "CLE", "SAS", "OKC", "WAS", "PHX", "GSW", "MEM", "MIN", "OKC", "ATL", "CHA", "ATL", "MIA", "MIL", "TOR", "CHA", "NYK", "NOP", "ORL"],
      [116, 95, 113, 122, 125, 109, 101, 103, 136, 110, 111, 100, 131, 121, 113, 105, 138, 117, 115, 117, 123, 146, 126, 121, 101, 105, 129, 112, 103, 140, 108, 129, 120, 146, 115, 110, 125, 95, 96, 119, 132, 103, 119, 130, 111, 102, 106, 112, 107, 110, 114, 98, 89, 124, 121, 111, 97, 84, 148, 114, 108, 89, 120, 109, 116, 102, 111, 120, 120, 117, 92, 119, 109, 114, 102, 147, 133, 115, 113, 106, 144, 113],
      [-1, -10, -6, 32, 20, 1, -27, -2, 29, -13, 4, -2, 36, 3, 14, -8, 9, 3, -4, 2, 6, 45, 21, 8, -15, -7, 13, 16, 8, 18, -6, 10, 14, 31, 14, -4, 8, -5, -2, 5, 26, -1, 15, 4, -3, 8, -11, 19, 28, 10, 21, 2, -22, 19, 11, 22, 16, -19, 37, 16, 27, -29, 20, 11, -9, -2, 11, 8, 21, 5, -10, 10, 7, 15, -10, 18, 32, 14, 11, -6, 26, 5]
    ),
    leaders: {
      pts: { name: "Jaylen Brown", val: 28.7, all: [{"name": "Jaylen Brown", "val": 28.7}, {"name": "Jayson Tatum", "val": 21.8}, {"name": "Payton Pritchard", "val": 17.0}, {"name": "Derrick White", "val": 16.5}, {"name": "Anfernee Simons", "val": 14.2}, {"name": "Neemias Queta", "val": 10.2}, {"name": "Nikola Vučević", "val": 9.7}, {"name": "Sam Hauser", "val": 9.2}, {"name": "Luka Garza", "val": 8.1}, {"name": "Josh Minott", "val": 5.8}, {"name": "Baylor Scheierman", "val": 5.5}, {"name": "Jordan Walsh", "val": 5.4}, {"name": "Ron Harper Jr.", "val": 4.2}, {"name": "Hugo González", "val": 3.9}, {"name": "Charles Bassey", "val": 2.8}, {"name": "John Tonje", "val": 2.5}, {"name": "Chris Boucher", "val": 2.3}, {"name": "Xavier Tillman", "val": 2.2}, {"name": "Dalano Banton", "val": 1.5}, {"name": "Amari Williams", "val": 1.4}, {"name": "Max Shulga", "val": 0.6}] },
      reb: { name: "Jayson Tatum", val: 10.0, all: [{"name": "Jayson Tatum", "val": 10.0}, {"name": "Neemias Queta", "val": 8.4}, {"name": "Jaylen Brown", "val": 6.9}, {"name": "Nikola Vučević", "val": 6.6}, {"name": "Derrick White", "val": 4.4}, {"name": "Luka Garza", "val": 4.1}, {"name": "Jordan Walsh", "val": 4.0}, {"name": "Payton Pritchard", "val": 3.9}, {"name": "Sam Hauser", "val": 3.8}, {"name": "Josh Minott", "val": 3.6}, {"name": "Baylor Scheierman", "val": 3.5}, {"name": "Hugo González", "val": 3.3}, {"name": "Anfernee Simons", "val": 2.4}, {"name": "Chris Boucher", "val": 2.0}, {"name": "Amari Williams", "val": 1.8}, {"name": "Xavier Tillman", "val": 1.8}, {"name": "Ron Harper Jr.", "val": 1.7}, {"name": "Charles Bassey", "val": 1.2}, {"name": "Dalano Banton", "val": 1.0}, {"name": "John Tonje", "val": 1.0}, {"name": "Max Shulga", "val": 0.5}] },
      ast: { name: "Derrick White", val: 5.4, all: [{"name": "Derrick White", "val": 5.4}, {"name": "Jayson Tatum", "val": 5.3}, {"name": "Payton Pritchard", "val": 5.2}, {"name": "Jaylen Brown", "val": 5.1}, {"name": "Anfernee Simons", "val": 2.4}, {"name": "Dalano Banton", "val": 2.3}, {"name": "Nikola Vučević", "val": 2.0}, {"name": "Neemias Queta", "val": 1.7}, {"name": "Baylor Scheierman", "val": 1.5}, {"name": "Sam Hauser", "val": 1.5}, {"name": "Luka Garza", "val": 1.0}, {"name": "Josh Minott", "val": 1.0}, {"name": "Jordan Walsh", "val": 0.8}, {"name": "Ron Harper Jr.", "val": 0.8}, {"name": "Hugo González", "val": 0.5}, {"name": "Amari Williams", "val": 0.5}, {"name": "Xavier Tillman", "val": 0.4}, {"name": "John Tonje", "val": 0.3}, {"name": "Chris Boucher", "val": 0.3}, {"name": "Max Shulga", "val": 0.2}, {"name": "Charles Bassey", "val": 0.0}] },
      stl: { name: "Jayson Tatum", val: 1.4, all: [{"name": "Jayson Tatum", "val": 1.4}, {"name": "Derrick White", "val": 1.1}, {"name": "Jaylen Brown", "val": 1.0}, {"name": "Neemias Queta", "val": 0.8}, {"name": "Josh Minott", "val": 0.7}, {"name": "Payton Pritchard", "val": 0.7}, {"name": "Jordan Walsh", "val": 0.7}, {"name": "Anfernee Simons", "val": 0.6}, {"name": "Chris Boucher", "val": 0.6}, {"name": "Hugo González", "val": 0.6}, {"name": "Sam Hauser", "val": 0.5}, {"name": "Baylor Scheierman", "val": 0.5}, {"name": "Nikola Vučević", "val": 0.4}, {"name": "Xavier Tillman", "val": 0.4}, {"name": "Luka Garza", "val": 0.4}, {"name": "John Tonje", "val": 0.3}, {"name": "Dalano Banton", "val": 0.3}, {"name": "Ron Harper Jr.", "val": 0.3}, {"name": "Charles Bassey", "val": 0.2}, {"name": "Amari Williams", "val": 0.1}, {"name": "Max Shulga", "val": 0.1}] },
      blk: { name: "Dalano Banton", val: 1.3, all: [{"name": "Dalano Banton", "val": 1.3}, {"name": "Derrick White", "val": 1.3}, {"name": "Neemias Queta", "val": 1.3}, {"name": "Chris Boucher", "val": 0.8}, {"name": "Nikola Vučević", "val": 0.6}, {"name": "Jordan Walsh", "val": 0.5}, {"name": "Amari Williams", "val": 0.5}, {"name": "Charles Bassey", "val": 0.4}, {"name": "Luka Garza", "val": 0.4}, {"name": "Josh Minott", "val": 0.4}, {"name": "Jaylen Brown", "val": 0.4}, {"name": "Sam Hauser", "val": 0.3}, {"name": "Ron Harper Jr.", "val": 0.3}, {"name": "Hugo González", "val": 0.3}, {"name": "Jayson Tatum", "val": 0.2}, {"name": "Anfernee Simons", "val": 0.1}, {"name": "Baylor Scheierman", "val": 0.1}, {"name": "Xavier Tillman", "val": 0.1}, {"name": "Payton Pritchard", "val": 0.1}, {"name": "John Tonje", "val": 0.0}, {"name": "Max Shulga", "val": 0.0}] },
    },
    avail: [
      { name: "Payton Pritchard", g: 79 },
      { name: "Sam Hauser", g: 78 },
      { name: "Derrick White", g: 77 },
      { name: "Baylor Scheierman", g: 77 },
      { name: "Neemias Queta", g: 76 },
      { name: "Hugo González", g: 74 },
      { name: "Jaylen Brown", g: 71 },
      { name: "Luka Garza", g: 69 },
      { name: "Jordan Walsh", g: 68 },
      { name: "Anfernee Simons", g: 49 },
      { name: "Josh Minott", g: 33 },
      { name: "Ron Harper Jr.", g: 29 },
      { name: "Amari Williams", g: 22 },
      { name: "Jayson Tatum", g: 16 },
      { name: "Nikola Vučević", g: 16 },
      { name: "Xavier Tillman", g: 14 },
      { name: "Max Shulga", g: 11 },
      { name: "Chris Boucher", g: 9 },
      { name: "John Tonje", g: 6 },
      { name: "Charles Bassey", g: 5 },
      { name: "Dalano Banton", g: 4 },
    ]
  },

};
