/* ================================================================
   events.js — Todos los eventos interactivos. Reutilizable.
   Depende de: window.TEAM_CONFIG, window.Charts
   ================================================================ */

"use strict";

window.Events = (() => {

  const primary = () => window.TEAM_CONFIG.primaryColor;

  /* ══════════════════════════════════════════════════════════════
     1. TOOLTIP CUSTOM PARA EL SCATTER
     ══════════════════════════════════════════════════════════════ */
  function initTooltip() {
    const tooltip = document.getElementById("tooltip");
    if (!tooltip) return;

    /* Posicionar y mostrar tooltip desde Chart.js external handler */
    window.__showTooltip = function(x, y, game) {
      const sign = game.m >= 0 ? "+" : "";
      const loc  = game.home_away === "A" ? "@ " : "vs ";
      tooltip.innerHTML =
        `<strong>Partido ${game.n} &mdash; ${loc}${game.opp}</strong><br>` +
        `${game.r === "W" ? "✓ Victoria" : "✗ Derrota"}&nbsp;&nbsp;` +
        `${game.pf}–${game.pa}&nbsp;&nbsp;<em>(${sign}${game.m} pts)</em><br>` +
        `Récord: ${game.w}–${game.l}`;
      tooltip.style.opacity = "1";
      tooltip.style.left = (x + 16) + "px";
      tooltip.style.top  = (y - 10) + "px";

      /* Keep inside viewport */
      const rect = tooltip.getBoundingClientRect();
      if (rect.right > window.innerWidth - 12) {
        tooltip.style.left = (x - rect.width - 12) + "px";
      }
    };

    window.__hideTooltip = function() {
      tooltip.style.opacity = "0";
    };
  }

  /* Injector para el Chart.js external tooltip */
  function getExternalTooltipHandler() {
    return function(ctx) {
      const el = ctx.tooltip;
      if (el.opacity === 0) { window.__hideTooltip && window.__hideTooltip(); return; }
      const dp = el.dataPoints && el.dataPoints[0];
      if (!dp || !dp.raw || !dp.raw.raw) return;
      const rect = ctx.chart.canvas.getBoundingClientRect();
      window.__showTooltip && window.__showTooltip(
        rect.left + el.caretX,
        rect.top  + el.caretY,
        dp.raw.raw
      );
    };
  }

  /* ══════════════════════════════════════════════════════════════
     2. PANEL LATERAL — detalle del partido al hacer click
     ══════════════════════════════════════════════════════════════ */
  function initDetailPanel() {
    const panel   = document.getElementById("detailPanel");
    const overlay = document.getElementById("panelOverlay");
    const closeBtn = document.getElementById("panelClose");
    if (!panel || !overlay) return;

    function openPanel(game) {
      const isWin     = game.r === "W";
      const sign      = game.m >= 0 ? "+" : "";
      const loc       = game.home_away === "A" ? "@ " : "vs ";
      const color     = isWin ? primary() : "#666";

      /* Calculate current streak at this game */
      const chart = Charts.getGamesInstance();
      let streakTxt = "";
      if (chart) {
        const allGames = [
          ...chart.data.datasets[0].data.map(d => d.raw),
          ...chart.data.datasets[1].data.map(d => d.raw),
        ].sort((a, b) => a.n - b.n);

        let streak = 1;
        for (let i = game.n - 2; i >= 0; i--) {
          if (allGames[i] && allGames[i].r === game.r) streak++;
          else break;
        }
        streakTxt = streak >= 2
          ? `${streak}ª ${isWin ? "victoria" : "derrota"} consecutiva`
          : "";
      }

      panel.querySelector(".panel-header").innerHTML = `
        <div>
          <div class="panel-result-badge ${isWin ? "win" : "loss"}">
            ${isWin ? "✓ Victoria" : "✗ Derrota"}
          </div>
          <div class="panel-score" style="color:${color}">
            ${game.pf} <span style="color:var(--text-muted);font-size:1.4rem">–</span> ${game.pa}
          </div>
          <div style="font-size:11px;color:var(--text-muted);margin-top:4px">
            Partido ${game.n} &mdash; ${loc}${game.opp}
          </div>
        </div>
        <button class="panel-close" id="panelClose" aria-label="Cerrar">✕</button>
      `;

      panel.querySelector(".panel-body").innerHTML = `
        <div class="panel-row">
          <span class="panel-row-label">Resultado</span>
          <span class="panel-row-val" style="color:${color}">${sign}${game.m} pts</span>
        </div>
        <div class="panel-row">
          <span class="panel-row-label">Récord tras partido</span>
          <span class="panel-row-val">${game.w}–${game.l}</span>
        </div>
        <div class="panel-row">
          <span class="panel-row-label">Win % actual</span>
          <span class="panel-row-val">${(game.w/(game.w+game.l)*100).toFixed(1)}%</span>
        </div>
        <div class="panel-row">
          <span class="panel-row-label">Puntos anotados</span>
          <span class="panel-row-val">${game.pf}</span>
        </div>
        <div class="panel-row">
          <span class="panel-row-label">Puntos recibidos</span>
          <span class="panel-row-val">${game.pa}</span>
        </div>
        ${streakTxt ? `
        <div class="panel-streak-info">
          ${streakTxt}
        </div>` : ""}
      `;

      /* Re-attach close button */
      panel.querySelector("#panelClose").addEventListener("click", closePanel);

      panel.classList.add("open");
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closePanel() {
      panel.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    overlay.addEventListener("click", closePanel);

    /* Panel de ranking de jugadores por categoría */
    const CAT_LABELS = {
      pts: "Puntos por partido",
      reb: "Rebotes por partido",
      ast: "Asistencias por partido",
      stl: "Robos por partido",
      blk: "Tapas por partido",
    };

    function openLeadersPanel(season, cat) {
      const catData = window.SEASON_DATA[season].leaders[cat];

      panel.querySelector(".panel-header").innerHTML = `
        <div>
          <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;
               color:var(--text-muted);margin-bottom:6px">Temporada ${season}</div>
          <div style="font-size:1.1rem;font-weight:700;color:var(--text)">${CAT_LABELS[cat]}</div>
        </div>
        <button class="panel-close" id="panelClose" aria-label="Cerrar">✕</button>
      `;

      panel.querySelector(".panel-body").innerHTML = catData.all.map((p, i) => `
        <div class="panel-row">
          <span class="panel-row-label">
            <span style="display:inline-block;width:18px;font-size:10px;
                  color:var(--text-muted);text-align:right;margin-right:8px">${i + 1}</span>
            ${p.name}
          </span>
          <span class="panel-row-val"
                style="color:${i === 0 ? "var(--team-primary)" : "var(--text)"};
                       font-weight:${i === 0 ? "700" : "500"}">${p.val}</span>
        </div>
      `).join("");

      panel.querySelector("#panelClose").addEventListener("click", closePanel);
      panel.classList.add("open");
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    /* Expose openPanel so main.js puede pasársela a Charts */
    window.__openPanel = openPanel;
    window.__openLeadersPanel = openLeadersPanel;
  }

  /* ══════════════════════════════════════════════════════════════
     3. POPUP MODAL — disponibilidad de jugadores
     ══════════════════════════════════════════════════════════════ */
  function initAvailPopup() {
    const modal   = document.getElementById("availModal");
    const overlay = document.getElementById("availOverlay");
    const closeBtn = document.getElementById("availModalClose");
    if (!modal || !overlay) return;

    function openAvailPopup(season) {
      const avail   = [...window.SEASON_DATA[season].avail].sort((a, b) => b.g - a.g);
      const primary = window.TEAM_CONFIG.primaryColor;
      const body    = document.getElementById("availModalBody");
      const seasonEl = document.getElementById("availModalSeason");
      if (seasonEl) seasonEl.textContent = "Temporada " + season;

      body.innerHTML = avail.map(p => {
        const pct   = (p.g / 82 * 100).toFixed(0);
        const color = p.g >= 70 ? primary : p.g >= 55 ? "#E67E22" : "#666";
        const label = p.g >= 70 ? "Titular" : p.g >= 55 ? "Regular" : "Lesionado";
        return `
          <div class="avail-modal-row">
            <div class="avail-modal-name" title="${p.name}">${p.name}</div>
            <div class="avail-modal-track">
              <div class="avail-modal-fill" style="width:0%;background:${color}"
                   data-target="${pct}"></div>
            </div>
            <div class="avail-modal-games">${p.g}<span>/82</span></div>
          </div>
        `;
      }).join("");

      modal.classList.add("open");
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";

      requestAnimationFrame(() => {
        body.querySelectorAll(".avail-modal-fill").forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.target + "%"; }, i * 50);
        });
      });
    }

    function closeAvailPopup() {
      modal.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    overlay.addEventListener("click", closeAvailPopup);
    closeBtn && closeBtn.addEventListener("click", closeAvailPopup);

    window.__openAvailPopup = openAvailPopup;
  }

  /* ══════════════════════════════════════════════════════════════
     4. PARTÍCULAS — animación al cambiar temporada
     ══════════════════════════════════════════════════════════════ */
  function initParticles() {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;
    const ctx    = canvas.getContext("2d");

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    window.__triggerParticles = function() {
      const color = primary();
      const particles = Array.from({ length: 36 }, () => ({
        x:    Math.random() * canvas.width,
        y:    Math.random() * canvas.height * 0.6 + canvas.height * 0.1,
        vx:   (Math.random() - 0.5) * 4,
        vy:   (Math.random() - 1.2) * 5,
        r:    Math.random() * 4 + 2,
        alpha: 1,
        decay: Math.random() * 0.02 + 0.018,
      }));

      canvas.style.opacity = "1";
      let frame;

      function step() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        particles.forEach(p => {
          if (p.alpha <= 0) return;
          alive = true;
          p.x     += p.vx;
          p.y     += p.vy;
          p.vy    += 0.12; /* gravity */
          p.alpha -= p.decay;

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle   = color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        if (alive) {
          frame = requestAnimationFrame(step);
        } else {
          canvas.style.opacity = "0";
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }

      frame = requestAnimationFrame(step);
    };
  }

  /* ══════════════════════════════════════════════════════════════
     5. THEME TOGGLE — light / dark mode
     ══════════════════════════════════════════════════════════════ */
  function initThemeToggle(onThemeChange) {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    function applyTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("dashboard-theme", theme);

      const label = btn.querySelector(".toggle-label");
      if (label) label.textContent = theme === "dark" ? "Modo oscuro" : "Modo claro";

      onThemeChange && onThemeChange(theme);
    }

    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });

    /* Leer preferencia guardada */
    const saved = localStorage.getItem("dashboard-theme");
    if (saved) applyTheme(saved);
  }

  /* ══════════════════════════════════════════════════════════════
     API PÚBLICA
     ══════════════════════════════════════════════════════════════ */
  return {
    initTooltip,
    initDetailPanel,
    initAvailPopup,
    initParticles,
    initThemeToggle,
    getExternalTooltipHandler,
  };

})();
