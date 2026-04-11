/* ================================================================
   ATL.js — Atlanta Hawks · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Atlanta Hawks",
  abbr:          "ATL",
  conference:    "East",
  primaryColor:  "#C8102E",
  secondaryColor:"#FDB927",
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
    w: 46, l: 35,
    topW:   { pts: 146, opp: 107, against: "MEM" },
    worstL: { pts: 97, opp: 128, against: "MIA" },
    conf_rank: 5,
    games: buildGames(
      "LWLLWWLWLWWWWWLLWWLWWLLLWLWLLLLLLLWWLLWWWLLLLWWWWLLWWLLLWLWWWWWWWWWWWLWWWLWWWWLLW",
      ["TOR", "ORL", "OKC", "CHI", "BKN", "IND", "CLE", "ORL", "TOR", "LAL", "LAC", "SAC", "UTA", "PHX", "DET", "SAS", "NOP", "CHA", "WAS", "CLE", "PHI", "DET", "LAC", "DEN", "WAS", "DET", "PHI", "CHA", "SAS", "CHI", "CHI", "MIA", "NYK", "OKC", "MIN", "NYK", "TOR", "TOR", "NOP", "DEN", "GSW", "LAL", "POR", "BOS", "MIL", "MEM", "PHX", "IND", "BOS", "HOU", "IND", "MIA", "UTA", "CHA", "MIN", "CHA", "PHI", "MIA", "BKN", "WAS", "WAS", "POR", "MIL", "PHI", "DAL", "BKN", "MIL", "ORL", "DAL", "HOU", "GSW", "MEM", "DET", "BOS", "SAC", "BOS", "ORL", "BKN", "NYK", "CLE", "CLE"],
      [118, 111, 100, 123, 117, 128, 109, 127, 97, 122, 105, 133, 132, 124, 112, 126, 115, 113, 113, 130, 142, 98, 92, 133, 131, 115, 120, 126, 98, 150, 123, 111, 125, 129, 126, 111, 117, 100, 117, 110, 124, 116, 101, 106, 110, 124, 110, 132, 117, 86, 124, 127, 121, 119, 116, 107, 117, 97, 115, 119, 126, 135, 131, 125, 124, 108, 122, 124, 135, 95, 126, 146, 130, 102, 123, 112, 130, 141, 105, 116, 124],
      [-20, 4, -17, -5, 5, 20, -8, 15, -12, 20, 3, 33, 10, 2, -8, -9, 17, 3, -19, 7, 8, -1, -23, -1, 15, -27, 3, -7, -28, -2, -3, -15, -3, -11, 24, 12, -17, -18, 17, 23, 13, -25, -16, -26, -2, 2, 7, 16, 11, -18, -5, 12, 2, -7, -22, -3, 10, -31, 11, 21, 30, 34, 18, 9, 12, 11, 23, 12, 15, -22, 16, 39, 1, -7, 10, 10, 29, 34, -3, -6, 22]
    ),
    leaders: {
      pts: { name: "Jalen Johnson", val: 22.6, all: [{"name": "Jalen Johnson", "val": 22.6}, {"name": "Nickeil Alexander-Walker", "val": 20.9}, {"name": "Trae Young", "val": 19.3}, {"name": "CJ McCollum", "val": 18.4}, {"name": "Kristaps Porziņģis", "val": 17.1}, {"name": "Onyeka Okongwu", "val": 15.4}, {"name": "Jonathan Kuminga", "val": 12.1}, {"name": "Dyson Daniels", "val": 11.8}, {"name": "Zaccharie Risacher", "val": 9.6}, {"name": "Jock Landale", "val": 9.1}, {"name": "Vít Krejčí", "val": 9.0}, {"name": "Corey Kispert", "val": 8.9}, {"name": "Luke Kennard", "val": 7.9}, {"name": "Asa Newell", "val": 5.0}, {"name": "Mouhamed Gueye", "val": 4.4}, {"name": "Gabe Vincent", "val": 3.9}, {"name": "Keaton Wallace", "val": 3.5}, {"name": "Christian Koloko", "val": 3.1}, {"name": "Caleb Houstan", "val": 2.3}, {"name": "Jacob Toppin", "val": 1.6}, {"name": "Buddy Hield", "val": 0.8}, {"name": "N'Faly Dante", "val": 0.8}, {"name": "RayJ Dennis", "val": 0.0}, {"name": "Tony Bradley", "val": 0.0}] },
      reb: { name: "Jalen Johnson", val: 10.3, all: [{"name": "Jalen Johnson", "val": 10.3}, {"name": "Onyeka Okongwu", "val": 7.6}, {"name": "Dyson Daniels", "val": 6.8}, {"name": "Jonathan Kuminga", "val": 5.3}, {"name": "Kristaps Porziņģis", "val": 5.1}, {"name": "Jock Landale", "val": 4.1}, {"name": "Zaccharie Risacher", "val": 3.8}, {"name": "Mouhamed Gueye", "val": 3.6}, {"name": "Nickeil Alexander-Walker", "val": 3.5}, {"name": "CJ McCollum", "val": 3.1}, {"name": "Corey Kispert", "val": 2.3}, {"name": "Luke Kennard", "val": 2.2}, {"name": "Christian Koloko", "val": 2.2}, {"name": "Vít Krejčí", "val": 2.1}, {"name": "Tony Bradley", "val": 2.0}, {"name": "Asa Newell", "val": 2.0}, {"name": "N'Faly Dante", "val": 1.8}, {"name": "Trae Young", "val": 1.5}, {"name": "Gabe Vincent", "val": 1.1}, {"name": "Keaton Wallace", "val": 1.0}, {"name": "Buddy Hield", "val": 0.8}, {"name": "Caleb Houstan", "val": 0.6}, {"name": "Jacob Toppin", "val": 0.2}, {"name": "RayJ Dennis", "val": 0.0}] },
      ast: { name: "Trae Young", val: 8.9, all: [{"name": "Trae Young", "val": 8.9}, {"name": "Jalen Johnson", "val": 7.9}, {"name": "Dyson Daniels", "val": 5.8}, {"name": "CJ McCollum", "val": 4.1}, {"name": "Nickeil Alexander-Walker", "val": 3.7}, {"name": "Onyeka Okongwu", "val": 3.2}, {"name": "Kristaps Porziņģis", "val": 2.7}, {"name": "Luke Kennard", "val": 2.1}, {"name": "Jonathan Kuminga", "val": 2.1}, {"name": "RayJ Dennis", "val": 2.0}, {"name": "Jock Landale", "val": 1.7}, {"name": "Keaton Wallace", "val": 1.7}, {"name": "Gabe Vincent", "val": 1.7}, {"name": "Corey Kispert", "val": 1.5}, {"name": "Vít Krejčí", "val": 1.5}, {"name": "Zaccharie Risacher", "val": 1.1}, {"name": "Mouhamed Gueye", "val": 0.9}, {"name": "Asa Newell", "val": 0.5}, {"name": "Christian Koloko", "val": 0.5}, {"name": "Buddy Hield", "val": 0.3}, {"name": "Caleb Houstan", "val": 0.2}, {"name": "Jacob Toppin", "val": 0.2}, {"name": "N'Faly Dante", "val": 0.0}, {"name": "Tony Bradley", "val": 0.0}] },
      stl: { name: "Dyson Daniels", val: 2.0, all: [{"name": "Dyson Daniels", "val": 2.0}, {"name": "Jalen Johnson", "val": 1.3}, {"name": "Nickeil Alexander-Walker", "val": 1.3}, {"name": "Onyeka Okongwu", "val": 1.1}, {"name": "Trae Young", "val": 1.0}, {"name": "CJ McCollum", "val": 1.0}, {"name": "Zaccharie Risacher", "val": 0.9}, {"name": "Jonathan Kuminga", "val": 0.8}, {"name": "Mouhamed Gueye", "val": 0.8}, {"name": "Vít Krejčí", "val": 0.8}, {"name": "Luke Kennard", "val": 0.7}, {"name": "Gabe Vincent", "val": 0.6}, {"name": "RayJ Dennis", "val": 0.5}, {"name": "N'Faly Dante", "val": 0.5}, {"name": "Keaton Wallace", "val": 0.5}, {"name": "Kristaps Porziņģis", "val": 0.5}, {"name": "Asa Newell", "val": 0.4}, {"name": "Jock Landale", "val": 0.4}, {"name": "Christian Koloko", "val": 0.3}, {"name": "Buddy Hield", "val": 0.2}, {"name": "Corey Kispert", "val": 0.2}, {"name": "Caleb Houstan", "val": 0.1}, {"name": "Jacob Toppin", "val": 0.0}, {"name": "Tony Bradley", "val": 0.0}] },
      blk: { name: "Kristaps Porziņģis", val: 1.3, all: [{"name": "Kristaps Porziņģis", "val": 1.3}, {"name": "Onyeka Okongwu", "val": 1.1}, {"name": "CJ McCollum", "val": 0.7}, {"name": "Christian Koloko", "val": 0.7}, {"name": "Jock Landale", "val": 0.6}, {"name": "Mouhamed Gueye", "val": 0.5}, {"name": "Zaccharie Risacher", "val": 0.5}, {"name": "Nickeil Alexander-Walker", "val": 0.5}, {"name": "Jalen Johnson", "val": 0.4}, {"name": "Dyson Daniels", "val": 0.4}, {"name": "Vít Krejčí", "val": 0.3}, {"name": "Jonathan Kuminga", "val": 0.3}, {"name": "Asa Newell", "val": 0.3}, {"name": "Jacob Toppin", "val": 0.2}, {"name": "Corey Kispert", "val": 0.2}, {"name": "Caleb Houstan", "val": 0.1}, {"name": "Trae Young", "val": 0.1}, {"name": "Gabe Vincent", "val": 0.1}, {"name": "Luke Kennard", "val": 0.1}, {"name": "Keaton Wallace", "val": 0.1}, {"name": "Buddy Hield", "val": 0.0}, {"name": "N'Faly Dante", "val": 0.0}, {"name": "RayJ Dennis", "val": 0.0}, {"name": "Tony Bradley", "val": 0.0}] },
    },
    avail: [
      { name: "Nickeil Alexander-Walker", g: 77 },
      { name: "Mouhamed Gueye", g: 76 },
      { name: "Dyson Daniels", g: 75 },
      { name: "Onyeka Okongwu", g: 73 },
      { name: "Jalen Johnson", g: 71 },
      { name: "Zaccharie Risacher", g: 65 },
      { name: "Keaton Wallace", g: 51 },
      { name: "Vít Krejčí", g: 46 },
      { name: "Luke Kennard", g: 46 },
      { name: "Asa Newell", g: 42 },
      { name: "CJ McCollum", g: 40 },
      { name: "Corey Kispert", g: 37 },
      { name: "Jock Landale", g: 23 },
      { name: "Gabe Vincent", g: 23 },
      { name: "Caleb Houstan", g: 18 },
      { name: "Kristaps Porziņģis", g: 17 },
      { name: "Jonathan Kuminga", g: 15 },
      { name: "Christian Koloko", g: 13 },
      { name: "Trae Young", g: 10 },
      { name: "Buddy Hield", g: 6 },
      { name: "Jacob Toppin", g: 5 },
      { name: "N'Faly Dante", g: 4 },
      { name: "RayJ Dennis", g: 2 },
      { name: "Tony Bradley", g: 1 },
    ]
  },

};
