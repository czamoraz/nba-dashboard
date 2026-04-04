/* ================================================================
   render.js — Funciones de renderizado DOM. Reutilizable entre equipos.
   Depende de: window.TEAM_CONFIG, window.SEASON_DATA, window.State
   ================================================================ */

"use strict";

window.Render = (() => {

  /* ── Tabs de temporada ───────────────────────────────────────── */
  function tabs(seasons, current, onSelect) {
    const container = document.getElementById("seasonTabs");
    if (!container) return;

    container.innerHTML = seasons.map(s =>
      `<button class="stab${s === current ? " active" : ""}"
        data-season="${s}"
        aria-pressed="${s === current}">${s}</button>`
    ).join("");

    container.querySelectorAll(".stab").forEach(btn => {
      btn.addEventListener("click", () => {
        const season = btn.dataset.season;
        if (season !== current) onSelect(season);
      });
    });
  }

  /* ── Metric cards ────────────────────────────────────────────── */
  function metrics(season) {
    const d   = window.SEASON_DATA[season];
    const pct = (d.w / (d.w + d.l) * 100).toFixed(1);
    const container = document.getElementById("metricsRow");
    if (!container) return;

    const cards = [
      {
        val:  `${d.w}<span>–${d.l}</span>`,
        lab:  "Victorias / Derrotas",
        sub:  "",
      },
      {
        val:  `${pct}<span>%</span>`,
        lab:  "Win percentage",
        sub:  "",
      },
      {
        val:  `${d.conf_rank}<span>°</span>`,
        lab:  "Posición Conf. Este",
        sub:  "",
      },
      {
        val:  `<span style="font-size:1.2rem;color:var(--team-primary)">${d.topW.pts}–${d.topW.opp}</span>`,
        lab:  "Mejor victoria",
        sub:  `vs ${d.topW.against}`,
      },
    ];

    container.innerHTML = cards.map(c => `
      <div class="metric">
        <div class="metric-val">${c.val}</div>
        <div class="metric-lab">${c.lab}</div>
        ${c.sub ? `<div class="metric-sub">${c.sub}</div>` : ""}
      </div>
    `).join("");

    /* Animate in */
    container.querySelectorAll(".metric").forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(8px)";
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.transition = "opacity 0.3s ease, transform 0.3s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, i * 60);
      });
    });
  }

  /* ── Leader cards ────────────────────────────────────────────── */
  function leaders(season) {
    const d   = window.SEASON_DATA[season].leaders;
    const container = document.getElementById("leadersGrid");
    if (!container) return;

    const CATS = [
      { key: "pts", label: "PTS", title: "Puntos por partido" },
      { key: "reb", label: "REB", title: "Rebotes por partido" },
      { key: "ast", label: "AST", title: "Asistencias por partido" },
      { key: "stl", label: "STL", title: "Robos por partido" },
      { key: "blk", label: "BLK", title: "Tapas por partido" },
    ];

    container.innerHTML = CATS.map(c => `
      <div class="leader-card" title="${c.title}">
        <div class="leader-cat">${c.label}</div>
        <div class="leader-val">${d[c.key].val}</div>
        <div class="leader-name" title="${d[c.key].name}">${d[c.key].name}</div>
      </div>
    `).join("");

    /* Staggered fade-in */
    container.querySelectorAll(".leader-card").forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(6px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 50 + 100);
    });
  }

  /* ── Availability bars ───────────────────────────────────────── */
  function availability(season) {
    const avail     = [...window.SEASON_DATA[season].avail].sort((a, b) => b.g - a.g);
    const container = document.getElementById("availBars");
    if (!container) return;

    const maxG    = 82;
    const primary = window.TEAM_CONFIG.primaryColor;

    container.innerHTML = avail.map(p => {
      const pct   = (p.g / maxG * 100).toFixed(0);
      const color = p.g >= 70 ? primary
                  : p.g >= 55 ? "#E67E22"
                  : "#666";
      const label = p.g >= 70 ? "Titular"
                  : p.g >= 55 ? "Regular"
                  : "Lesionado";
      return `
        <div class="abar">
          <div class="abar-name" title="${p.name}">${p.name}</div>
          <div class="abar-track">
            <div class="abar-fill" style="width:0%;background:${color}"
                 data-target="${pct}" data-label="${label}"></div>
          </div>
          <div class="abar-val">${p.g}/82</div>
        </div>`;
    }).join("");

    /* Animate bars */
    requestAnimationFrame(() => {
      container.querySelectorAll(".abar-fill").forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.target + "%";
        }, i * 80);
      });
    });
  }

  /* ── Streak badge en la leyenda ──────────────────────────────── */
  function streakLegend(streaks) {
    const el = document.getElementById("streakLegendInfo");
    if (!el) return;
    const max = streaks.reduce((best, s) => s.len > best.len ? s : best, { len: 0 });
    if (max.len >= 4) {
      el.textContent = `Mejor racha: ${max.len} victorias seguidas (partidos ${max.start}–${max.end})`;
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  }

  /* ── API pública ─────────────────────────────────────────────── */
  return { tabs, metrics, leaders, availability, streakLegend };

})();
