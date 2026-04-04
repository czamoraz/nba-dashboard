/* ================================================================
   charts.js — Lógica de Chart.js. Reutilizable entre equipos.
   Depende de: window.TEAM_CONFIG, window.SEASON_DATA
   Expone: window.Charts
   ================================================================ */

"use strict";

window.Charts = (() => {

  /* ── Instancias activas ──────────────────────────────────────── */
  let gamesInst   = null;
  let winPctInst  = null;

  /* ── Color helpers ───────────────────────────────────────────── */
  function isDark() {
    return document.documentElement.getAttribute("data-theme") !== "light";
  }

  function themeColor(dark, light) {
    return isDark() ? dark : light;
  }

  const GRID_COLOR_DARK  = "rgba(255,255,255,0.05)";
  const GRID_COLOR_LIGHT = "rgba(0,0,0,0.06)";
  const TICK_COLOR_DARK  = "#666";
  const TICK_COLOR_LIGHT = "#999";

  function gridColor()  { return isDark() ? GRID_COLOR_DARK  : GRID_COLOR_LIGHT; }
  function tickColor()  { return isDark() ? TICK_COLOR_DARK  : TICK_COLOR_LIGHT; }
  function bgColor()    { return isDark() ? "#1a1a1a" : "#ffffff"; }

  /* ── Detectar rachas (≥ N del mismo resultado) ───────────────── */
  function detectStreaks(games, minLen = 4) {
    const streaks = [];
    let i = 0;
    while (i < games.length) {
      let j = i;
      while (j < games.length && games[j].r === games[i].r) j++;
      const len = j - i;
      if (len >= minLen) {
        streaks.push({ start: games[i].n, end: games[j - 1].n, result: games[i].r, len });
      }
      i = j;
    }
    return streaks;
  }

  /* ── Plugin: highlight de rachas como bandas de fondo ───────── */
  const streakPlugin = {
    id: "streakHighlight",
    beforeDraw(chart) {
      const { ctx, chartArea, scales } = chart;
      const streaks = chart.config._streaks || [];
      if (!chartArea) return;

      const primary  = window.TEAM_CONFIG.primaryColor;
      const winFill  = isDark()
        ? "rgba(200,16,46,0.10)"
        : "rgba(200,16,46,0.07)";
      const loseFill = isDark()
        ? "rgba(120,120,120,0.10)"
        : "rgba(80,80,80,0.06)";

      streaks.forEach(s => {
        const x0 = scales.x.getPixelForValue(s.start - 0.5);
        const x1 = scales.x.getPixelForValue(s.end   + 0.5);
        const fill = s.result === "W" ? winFill : loseFill;

        ctx.save();
        ctx.fillStyle = fill;
        ctx.fillRect(x0, chartArea.top, x1 - x0, chartArea.bottom - chartArea.top);

        /* Racha label */
        ctx.fillStyle = s.result === "W"
          ? primary
          : (isDark() ? "#666" : "#aaa");
        ctx.font = "500 9px 'DM Sans', sans-serif";
        ctx.textAlign = "center";
        const midX = (x0 + x1) / 2;
        ctx.fillText(`${s.len}${s.result}`, midX, chartArea.top + 12);
        ctx.restore();
      });
    }
  };

  /* ── Gráfico scatter de partidos ─────────────────────────────── */
  function buildGamesChart(canvasId, games, onGameClick) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return null;
    if (gamesInst) { gamesInst.destroy(); gamesInst = null; }

    const primary = window.TEAM_CONFIG.primaryColor;
    const streaks = detectStreaks(games);

    const winData  = games.filter(g => g.r === "W").map(g => ({ x: g.n, y: g.m, raw: g }));
    const lossData = games.filter(g => g.r === "L").map(g => ({ x: g.n, y: g.m, raw: g }));

    gamesInst = new Chart(ctx, {
      type: "scatter",
      plugins: [streakPlugin],
      data: {
        datasets: [
          {
            label: "Victoria",
            data: winData,
            backgroundColor: primary,
            pointRadius: 5,
            pointHoverRadius: 9,
            pointHoverBackgroundColor: primary,
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
          },
          {
            label: "Derrota",
            data: lossData,
            backgroundColor: isDark() ? "#555" : "#bbb",
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: isDark() ? "#777" : "#999",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { top: 20, bottom: 4 } },
        animation: {
          duration: 600,
          easing: "easeOutQuart",
        },
        scales: {
          x: {
            title: { display: true, text: "N° de partido", color: tickColor(), font: { size: 10 } },
            ticks: { color: tickColor(), font: { size: 10 }, maxTicksLimit: 15 },
            grid:  { color: gridColor() },
          },
          y: {
            min: -58, max: 58,
            title: { display: true, text: "Diferencia de puntos", color: tickColor(), font: { size: 10 } },
            ticks: { color: tickColor(), font: { size: 10 }, callback: v => v > 0 ? "+" + v : v },
            grid:  { color: gridColor() },
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }, /* Tooltip custom via events.js */
        },
        onClick(event, elements) {
          if (elements.length > 0) {
            const el  = elements[0];
            const raw = gamesInst.data.datasets[el.datasetIndex].data[el.index].raw;
            if (raw && onGameClick) onGameClick(raw);
          }
        },
      },
    });

    /* Attach streak data for plugin */
    gamesInst.config._streaks = streaks;

    return gamesInst;
  }

  /* ── Gráfico de línea: Win % histórico ───────────────────────── */
  function buildWinPctChart(canvasId, seasons, currentSeason) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return null;
    if (winPctInst) { winPctInst.destroy(); winPctInst = null; }

    const primary = window.TEAM_CONFIG.primaryColor;
    const labels  = seasons;
    const vals    = seasons.map(s => {
      const d = window.SEASON_DATA[s];
      return +(d.w / (d.w + d.l) * 100).toFixed(1);
    });

    const pointColors  = labels.map(l => l === currentSeason ? primary : (isDark() ? "#555" : "#ccc"));
    const pointBorders = labels.map(l => l === currentSeason ? "#fff" : "transparent");
    const pointSizes   = labels.map(l => l === currentSeason ? 8 : 4);

    winPctInst = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: "Win %",
          data: vals,
          borderColor: primary,
          backgroundColor: isDark()
            ? "rgba(200,16,46,0.07)"
            : "rgba(200,16,46,0.05)",
          fill: true,
          tension: 0.4,
          pointBackgroundColor: pointColors,
          pointBorderColor: pointBorders,
          pointBorderWidth: 2,
          pointRadius: pointSizes,
          pointHoverRadius: 9,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500, easing: "easeOutQuart" },
        scales: {
          x: {
            ticks: { color: tickColor(), font: { size: 10 } },
            grid:  { display: false },
          },
          y: {
            min: 35, max: 65,
            ticks: { color: tickColor(), font: { size: 10 }, callback: v => v + "%" },
            grid:  { color: gridColor() },
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: bgColor(),
            titleColor: isDark() ? "#f0f0f0" : "#111",
            bodyColor:  isDark() ? "#888" : "#666",
            borderColor: isDark() ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
            borderWidth: 1,
            callbacks: {
              label: c => " " + c.parsed.y.toFixed(1) + "% win rate",
            }
          }
        },
      }
    });

    return winPctInst;
  }

  /* ── Actualizar colores de charts al cambiar tema ────────────── */
  function updateTheme() {
    [gamesInst, winPctInst].forEach(chart => {
      if (!chart) return;
      const opts = chart.options;
      /* Update scales */
      ["x", "y"].forEach(axis => {
        if (opts.scales[axis]) {
          if (opts.scales[axis].ticks) opts.scales[axis].ticks.color = tickColor();
          if (opts.scales[axis].grid)  opts.scales[axis].grid.color  = gridColor();
          if (opts.scales[axis].title) opts.scales[axis].title.color = tickColor();
        }
      });
      /* Update tooltip */
      if (opts.plugins && opts.plugins.tooltip) {
        const tt = opts.plugins.tooltip;
        tt.backgroundColor = bgColor();
        tt.titleColor = isDark() ? "#f0f0f0" : "#111";
        tt.bodyColor  = isDark() ? "#888" : "#666";
      }
      chart.update("none");
    });
  }

  /* ── Animación de transición entre temporadas ────────────────── */
  function animateTransition(onMidpoint) {
    return new Promise(resolve => {
      const canvas = document.getElementById("gamesChart");
      if (!canvas) { onMidpoint && onMidpoint(); resolve(); return; }

      canvas.style.transition = "opacity 0.2s ease";
      canvas.style.opacity = "0";

      setTimeout(() => {
        onMidpoint && onMidpoint();
        canvas.style.opacity = "1";
        setTimeout(resolve, 250);
      }, 200);
    });
  }

  /* ── API pública ─────────────────────────────────────────────── */
  return {
    buildGamesChart,
    buildWinPctChart,
    updateTheme,
    animateTransition,
    detectStreaks,
    getGamesInstance:  () => gamesInst,
    getWinPctInstance: () => winPctInst,
  };

})();
