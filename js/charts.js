/* ================================================================
   charts.js — Lógica de Chart.js. Reutilizable entre equipos.
   Depende de: window.TEAM_CONFIG, window.SEASON_DATA
   Expone: window.Charts
   ================================================================ */

"use strict";

window.Charts = (() => {

  /* ── Instancias activas ──────────────────────────────────────── */
  let gamesInst        = null;
  let winPctInst       = null;
  let winPctSeasonRef  = null; // temporada activa al construir winPctInst

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

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  /* Lee el primary adaptado al tema (CSS var seteada por main.js) */
  function teamPrimary() {
    return document.documentElement.style.getPropertyValue("--team-primary").trim()
      || window.TEAM_CONFIG.primaryColor;
  }

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

      const primary  = teamPrimary();
      const winFill  = isDark()
        ? hexToRgba(primary, 0.10)
        : hexToRgba(primary, 0.07);
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

    const primary = teamPrimary();
    const streaks = detectStreaks(games);

    // Excluir partidos no jugados (margin === 0 es imposible en la NBA real)
    const playedGames = games.filter(g => g.m !== 0);

    const winData  = playedGames.filter(g => g.r === "W").map(g => ({ x: g.n, y: g.m, raw: g }));
    const lossData = playedGames.filter(g => g.r === "L").map(g => ({ x: g.n, y: g.m, raw: g }));

    const maxGame = playedGames.length > 0 ? Math.max(...playedGames.map(g => g.n)) : 1;

    const PX_PER_GAME = 16;
    ctx.parentElement.style.minWidth = (maxGame * PX_PER_GAME) + "px";

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
            min: -0.5,
            max: maxGame + 1.5,
            title: { display: true, text: "N° de partido", color: tickColor(), font: { size: 10 } },
            ticks: {
              color: tickColor(), font: { size: 10 }, maxTicksLimit: 15,
              callback: v => Number.isInteger(v) && v >= 1 ? v : null,
            },
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

    winPctSeasonRef = currentSeason;
    const primary = teamPrimary();
    const labels  = seasons;
    const vals    = seasons.map(s => {
      const d = window.SEASON_DATA[s];
      return +(d.w / (d.w + d.l) * 100).toFixed(1);
    });

    const pointColors  = labels.map(l => l === currentSeason ? primary : (isDark() ? "#555" : "#ccc"));
    const pointBorders = labels.map(l => l === currentSeason ? "#fff" : "transparent");
    const pointSizes   = labels.map(l => l === currentSeason ? 8 : 4);

    const minVal = Math.min(...vals);
    const maxVal = Math.max(...vals);
    const yMin = Math.max(0,   Math.floor((minVal - 8) / 5) * 5);
    const yMax = Math.min(100, Math.ceil( (maxVal + 8) / 5) * 5);

    winPctInst = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: "Win %",
          data: vals,
          borderColor: primary,
          backgroundColor: isDark()
            ? hexToRgba(primary, 0.07)
            : hexToRgba(primary, 0.05),
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
            min: yMin, max: yMax,
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
    const primary = teamPrimary();

    /* Gráfico de partidos: color de victorias y derrotas */
    if (gamesInst) {
      gamesInst.data.datasets[0].backgroundColor            = primary;
      gamesInst.data.datasets[0].pointHoverBackgroundColor  = primary;
      gamesInst.data.datasets[1].backgroundColor            = isDark() ? "#555" : "#bbb";
      gamesInst.data.datasets[1].pointHoverBackgroundColor  = isDark() ? "#777" : "#999";
    }

    /* Gráfico de win%: línea, relleno y puntos */
    if (winPctInst) {
      const ds = winPctInst.data.datasets[0];
      ds.borderColor      = primary;
      ds.backgroundColor  = isDark() ? hexToRgba(primary, 0.07) : hexToRgba(primary, 0.05);
      ds.pointBackgroundColor = winPctInst.data.labels.map(
        l => l === winPctSeasonRef ? primary : (isDark() ? "#555" : "#ccc")
      );
    }

    [gamesInst, winPctInst].forEach(chart => {
      if (!chart) return;
      const opts = chart.options;
      /* Scales */
      ["x", "y"].forEach(axis => {
        if (opts.scales[axis]) {
          if (opts.scales[axis].ticks) opts.scales[axis].ticks.color = tickColor();
          if (opts.scales[axis].grid)  opts.scales[axis].grid.color  = gridColor();
          if (opts.scales[axis].title) opts.scales[axis].title.color = tickColor();
        }
      });
      /* Tooltip */
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
