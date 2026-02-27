const threatLevelEl = document.getElementById("threatLevel");
const riskScoreEl = document.getElementById("riskScore");
const aiConfidenceEl = document.getElementById("aiConfidence");
const systemStatusEl = document.getElementById("systemStatus");
const hintPanelEl = document.getElementById("hintPanel");
const hintTextEl = document.getElementById("hintText");
const aiStatusEl = document.getElementById("aiStatus");
const logBodyEl = document.getElementById("logBody");
const controlButtons = document.querySelectorAll(".control-btn");
const langButtons = document.querySelectorAll(".lang-btn");
const chartAlertEl = document.getElementById("chartAlert");
const userCountEl = document.getElementById("userCount");
const bgCanvas = document.getElementById("bgCanvas");
const bgCtx = bgCanvas.getContext("2d");

const i18n = {
  en: {
    app: {
      title: "Zero-Day Attack Prediction Simulator",
      subtitle: "Behavioral Anomaly Monitoring System",
      intro:
        "This simulator demonstrates how behavioral anomaly detection can signal potential zero-day attacks for a monitored site or server.",
    },
    nav: { dashboard: "Dashboard", simulations: "Simulations", logs: "Logs" },
    metrics: {
      threat: "Threat Level",
      risk: "Risk Score",
      confidence: "Detection Confidence",
      status: "System Status",
    },
    sections: { network: "Network Activity", controls: "Simulation Control Panel", timeline: "Timeline Log" },
    controls: {
      normal: "Normal Environment",
      suspicious: "Suspicious Behavior",
      zeroday: "Zero-Day Scenario",
      reset: "Reset",
    },
    hint: {
      title: "Live Hint",
      normal: "Network behavior aligns with baseline patterns.",
      suspicious: "Strange behavior detected.",
      zeroday: "Unknown behavioral anomaly detected. System flags a potential zero-day exploit pattern.",
    },
    monitor: {
      status1: "Monitoring traffic flow...",
      status2: "Updating baseline thresholds...",
      status3: "Revalidating detection confidence...",
    },
    log: { timestamp: "Timestamp", event: "Event", risk: "Risk Level" },
    footer: {
      disclaimer:
        "Educational simulation platform demonstrating AI-based anomaly detection for cybersecurity research purposes.",
    },
    threat: { normal: "Normal", suspicious: "Suspicious", zeroday: "Potential Zero-Day Attack" },
    status: { stable: "Stable", monitoring: "Monitoring", escalated: "Escalated" },
    chart: { label: "Anomaly Score", tooltip: "Anomaly score" },
    alert: { title: "Attention", text: "Unusual traffic spike detected.", bots: "Possible bots detected." },
    users: { label: "Users online" },
    modes: { normal: "normal environment", suspicious: "suspicious behavior", zeroday: "zero-day scenario" },
    events: {
      started: "Monitoring session started",
      reset: "Simulation reset",
      detected: "detected",
      mode: "Mode switched to",
      odd: "Strange behavior observed",
      learned: "Pattern stored in knowledge base",
    },
  },
  ru: {
    app: {
      title: "Симулятор прогнозирования атак нулевого дня",
      subtitle: "Система мониторинга поведенческих аномалий",
      intro:
        "Этот симулятор показывает, как поведенческие аномалии могут сигнализировать о возможных атаках нулевого дня для контролируемого сайта или сервера.",
    },
    nav: { dashboard: "Панель", simulations: "Симуляции", logs: "Журнал" },
    metrics: {
      threat: "Уровень угрозы",
      risk: "Оценка риска",
      confidence: "Уверенность обнаружения",
      status: "Статус системы",
    },
    sections: { network: "Сетевая активность", controls: "Панель управления", timeline: "Лента событий" },
    controls: {
      normal: "Нормальная среда",
      suspicious: "Подозрительное поведение",
      zeroday: "Сценарий нулевого дня",
      reset: "Сброс",
    },
    hint: {
      title: "Подсказка",
      normal: "Поведение сети соответствует базовым шаблонам.",
      suspicious: "Замечено странное поведение.",
      zeroday: "Неизвестная аномалия. Система отмечает возможный эксплойт нулевого дня.",
    },
    monitor: {
      status1: "Мониторинг сетевого трафика...",
      status2: "Обновление базовых порогов...",
      status3: "Пересчёт уверенности обнаружения...",
    },
    log: { timestamp: "Время", event: "Событие", risk: "Уровень риска" },
    footer: {
      disclaimer:
        "Образовательный симулятор, демонстрирующий ИИ‑обнаружение аномалий для исследований в области кибербезопасности.",
    },
    threat: { normal: "Норма", suspicious: "Подозрительно", zeroday: "Потенциальная атака нулевого дня" },
    status: { stable: "Стабильно", monitoring: "Мониторинг", escalated: "Эскалация" },
    chart: { label: "Оценка аномалии", tooltip: "Оценка аномалии" },
    alert: { title: "Внимание", text: "Странный прирост трафика.", bots: "Возможно, это боты." },
    users: { label: "Пользователи онлайн" },
    modes: { normal: "нормальную среду", suspicious: "подозрительное поведение", zeroday: "сценарий нулевого дня" },
    events: {
      started: "Сеанс мониторинга запущен",
      reset: "Симуляция сброшена",
      detected: "обнаружено",
      mode: "Режим переключен на",
      odd: "Замечено странное поведение",
      learned: "Шаблон сохранён в базе знаний",
    },
  },
  tm: {
    app: {
      title: "Nol-gun hüjümini öňçakdan çaklama simulýatory",
      subtitle: "Hereket anomaliýalaryny gözegçilik ulgamy",
      intro:
        "Bu simulýator hereketdäki anomaliýalaryň gözegçilik edilýän saýt ýa-da serwer üçin nol-gun hüjümlerini alamatlandyryp bilýändigini görkezýär.",
    },
    nav: { dashboard: "Panel", simulations: "Simulýasiýalar", logs: "Ýazgylar" },
    metrics: {
      threat: "Howp derejesi",
      risk: "Howp baly",
      confidence: "Anyklama ynamy",
      status: "Ulgam ýagdaýy",
    },
    sections: { network: "Tor işjeňligi", controls: "Simulýasiýa dolandyryşy", timeline: "Ýazgylar lentalary" },
    controls: {
      normal: "Kadaly gurşaw",
      suspicious: "Şübheli hereket",
      zeroday: "Nol-gun ssenariýasy",
      reset: "Täzeden başla",
    },
    hint: {
      title: "Gysga maslahat",
      normal: "Tor hereketi esasy nusgalara gabat gelýär.",
      suspicious: "Geň hereket tapyldy.",
      zeroday: "Näbelli anomaliýa tapyldy. Ulgam nol-gun eksploit barmagy mümkin diýip belleýär.",
    },
    monitor: {
      status1: "Tor traffigi gözegçilikde...",
      status2: "Esasy çäkler täzelenýär...",
      status3: "Anyklama ynamy gaýtadan hasaplanýar...",
    },
    log: { timestamp: "Wagt", event: "Wakga", risk: "Howp derejesi" },
    footer: {
      disclaimer:
        "Kiberhowpsuzlyk barlaglary üçin AI esasly anomaliýa anyklaýyşyny görkezýän bilim simulýatory.",
    },
    threat: { normal: "Kadaly", suspicious: "Şübheli", zeroday: "Mümkin nol-gun hüjümi" },
    status: { stable: "Durnukly", monitoring: "Gözegçilik", escalated: "Hereketlendirildi" },
    chart: { label: "Anomaliýa baly", tooltip: "Anomaliýa baly" },
    alert: { title: "Üns beriň", text: "Trafigiň geň ýokarlanmagy.", bots: "Mümkin botlar." },
    users: { label: "Onlaýn ulanyjylar" },
    modes: { normal: "kadaly gurşaw", suspicious: "şübheli hereket", zeroday: "nol-gun ssenariýasy" },
    events: {
      started: "Gözegçilik sessiýasy başlady",
      reset: "Simulýasiýa täzeden başlandy",
      detected: "anyklandy",
      mode: "Režim çalşyldy",
      odd: "Geň hereket bellendi",
      learned: "Nusga bilim bazasyna ýazgy edildi",
    },
  },
};

const modes = {
  normal: { base: 8, variance: 8 },
  suspicious: { base: 32, variance: 18 },
  zeroday: { base: 60, variance: 22 },
};

let currentMode = "normal";
let lastThreatKey = "normal";
let statusIndex = 0;
let currentLang = "tm";
let currentUsers = 120;

const ctx = document.getElementById("activityChart").getContext("2d");
const chartData = {
  labels: Array.from({ length: 20 }, (_, i) => `${20 - i}s`),
  datasets: [
    {
      label: "Anomaly Score",
      data: Array.from({ length: 20 }, () => 10),
      borderColor: "rgba(59, 130, 246, 0.8)",
      backgroundColor: "rgba(59, 130, 246, 0.15)",
      tension: 0.35,
      fill: true,
      pointRadius: 3,
      pointHoverRadius: 5,
      pointBackgroundColor: "rgba(59, 130, 246, 0.9)",
    },
  ],
};

const activityChart = new Chart(ctx, {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "rgba(226, 232, 240, 0.6)",
        },
        ticks: {
          color: "#94a3b8",
          maxTicksLimit: 6,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: "rgba(226, 232, 240, 0.6)",
        },
        ticks: {
          color: "#94a3b8",
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(15, 23, 42, 0.9)",
        padding: 10,
        cornerRadius: 8,
        callbacks: {
          label: (ctx) => `Anomaly score: ${ctx.parsed.y}`,
        },
      },
    },
  },
});

const bgState = {
  width: 0,
  height: 0,
  nodes: [],
  links: 0,
  lastTime: 0,
};

function resizeBackground() {
  const ratio = window.devicePixelRatio || 1;
  bgState.width = window.innerWidth;
  bgState.height = window.innerHeight;
  bgCanvas.width = bgState.width * ratio;
  bgCanvas.height = bgState.height * ratio;
  bgCanvas.style.width = `${bgState.width}px`;
  bgCanvas.style.height = `${bgState.height}px`;
  bgCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function createNodes() {
  const area = bgState.width * bgState.height;
  const count = Math.max(28, Math.min(70, Math.floor(area / 26000)));
  bgState.nodes = Array.from({ length: count }, () => ({
    x: Math.random() * bgState.width,
    y: Math.random() * bgState.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: 1.2 + Math.random() * 2.2,
    glow: Math.random() * 0.6 + 0.2,
  }));
  bgState.links = Math.min(90, count * 2);
}

function drawBackground(time) {
  const gradient = bgCtx.createRadialGradient(
    bgState.width * 0.25,
    bgState.height * 0.15,
    80,
    bgState.width * 0.6,
    bgState.height * 0.6,
    bgState.width
  );
  gradient.addColorStop(0, "rgba(235, 241, 255, 0.9)");
  gradient.addColorStop(0.4, "rgba(219, 229, 250, 0.7)");
  gradient.addColorStop(1, "rgba(196, 212, 245, 0.6)");

  bgCtx.fillStyle = gradient;
  bgCtx.fillRect(0, 0, bgState.width, bgState.height);

  const timeFactor = time * 0.0002;
  bgState.nodes.forEach((node) => {
    node.x += node.vx;
    node.y += node.vy;
    if (node.x < -20) node.x = bgState.width + 20;
    if (node.x > bgState.width + 20) node.x = -20;
    if (node.y < -20) node.y = bgState.height + 20;
    if (node.y > bgState.height + 20) node.y = -20;

    const pulse = 0.6 + Math.sin(timeFactor + node.x * 0.01) * 0.4;
    bgCtx.beginPath();
    bgCtx.fillStyle = `rgba(120, 160, 255, ${0.5 + node.glow * pulse})`;
    bgCtx.arc(node.x, node.y, node.r * (0.8 + pulse), 0, Math.PI * 2);
    bgCtx.fill();
  });

  bgCtx.lineWidth = 1;
  for (let i = 0; i < bgState.links; i += 1) {
    const a = bgState.nodes[Math.floor(Math.random() * bgState.nodes.length)];
    const b = bgState.nodes[Math.floor(Math.random() * bgState.nodes.length)];
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 180) {
      const alpha = 0.18 * (1 - dist / 180);
      bgCtx.strokeStyle = `rgba(125, 170, 255, ${alpha})`;
      bgCtx.beginPath();
      bgCtx.moveTo(a.x, a.y);
      bgCtx.lineTo(b.x, b.y);
      bgCtx.stroke();
    }
  }

  bgCtx.fillStyle = "rgba(255, 160, 190, 0.12)";
  bgCtx.beginPath();
  bgCtx.arc(bgState.width * 0.85, bgState.height * 0.25, 120, 0, Math.PI * 2);
  bgCtx.fill();

  bgCtx.fillStyle = "rgba(120, 220, 210, 0.12)";
  bgCtx.beginPath();
  bgCtx.arc(bgState.width * 0.15, bgState.height * 0.75, 140, 0, Math.PI * 2);
  bgCtx.fill();
}

function animateBackground(time) {
  drawBackground(time);
  requestAnimationFrame(animateBackground);
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function randomAround(base, variance) {
  const jitter = (Math.random() - 0.5) * variance * 2;
  return clamp(base + jitter, 0, 100);
}

function formatTime(date = new Date()) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function translate(key) {
  const parts = key.split(".");
  let value = i18n[currentLang];
  for (const part of parts) {
    value = value?.[part];
  }
  return value ?? key;
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    el.innerHTML = translate(key);
  });

  const threatLabel = translate(`threat.${lastThreatKey}`);
  threatLevelEl.textContent = threatLabel;
  updateMetrics(parseFloat(riskScoreEl.textContent), lastThreatKey);
  updateHint(lastThreatKey);

  chartData.datasets[0].label = translate("chart.label");
  activityChart.options.plugins.tooltip.callbacks.label = (ctx) =>
    `${translate("chart.tooltip")}: ${ctx.parsed.y}`;
  activityChart.update();

  if (chartAlertEl) {
    const title = chartAlertEl.querySelector(".chart-alert-title");
    const text = chartAlertEl.querySelector(".chart-alert-text");
    if (title) title.innerHTML = translate("alert.title");
    if (text) text.innerHTML = translate("alert.text");
  }

  const userLabel = document.querySelector("[data-i18n=\"users.label\"]");
  if (userLabel) userLabel.innerHTML = translate("users.label");
}

function updateHint(threatKey) {
  hintPanelEl.classList.add("fade");
  setTimeout(() => {
    const hintKey = `hint.${threatKey}`;
    hintTextEl.textContent = translate(hintKey);
    hintPanelEl.classList.remove("fade");
  }, 220);
}

function logEvent(event, threatKey) {
  const row = document.createElement("div");
  row.className = "log-row";
  const badgeClass = threatKey === "normal" ? "normal" : threatKey === "suspicious" ? "suspicious" : "critical";
  const threatLabel = translate(`threat.${threatKey}`);

  row.innerHTML = `
    <span>${formatTime()}</span>
    <span>${event}</span>
    <span><span class="badge ${badgeClass}">${threatLabel}</span></span>
  `;

  logBodyEl.prepend(row);
  const rows = logBodyEl.querySelectorAll(".log-row");
  if (rows.length > 6) {
    rows[rows.length - 1].remove();
  }
}

function evaluateThreat(score) {
  if (score < 40) return "normal";
  if (score < 70) return "suspicious";
  return "zeroday";
}

function updateMetrics(score, threatKey) {
  riskScoreEl.textContent = Math.round(score);
  aiConfidenceEl.textContent = Math.round(clamp(90 - Math.abs(score - 50) * 0.4, 65, 98));
  threatLevelEl.textContent = translate(`threat.${threatKey}`);

  if (threatKey === "normal") {
    systemStatusEl.textContent = translate("status.stable");
    systemStatusEl.style.color = "#16a34a";
  } else if (threatKey === "suspicious") {
    systemStatusEl.textContent = translate("status.monitoring");
    systemStatusEl.style.color = "#d97706";
  } else {
    systemStatusEl.textContent = translate("status.escalated");
    systemStatusEl.style.color = "#dc2626";
  }
}

function updateChart(score) {
  const previous = chartData.datasets[0].data[chartData.datasets[0].data.length - 1] ?? score;
  chartData.datasets[0].data.shift();
  chartData.datasets[0].data.push(score);

  const colors = chartData.datasets[0].data.map((value) =>
    value >= 70
      ? "rgba(220, 38, 38, 0.95)"
      : value >= 40
      ? "rgba(239, 68, 68, 0.9)"
      : "rgba(59, 130, 246, 0.9)"
  );
  chartData.datasets[0].pointBackgroundColor = colors;
  activityChart.update();

  const spike = score - previous;
  if (spike >= 18 && score >= 40) {
    const isBotSpike = score >= 55;
    showChartAlert(isBotSpike);
    showSpikeHint();
  }
}

function showChartAlert(isBotSpike = false) {
  if (!chartAlertEl) return;
  const meta = activityChart.getDatasetMeta(0);
  const point = meta.data[meta.data.length - 1];
  if (!point) return;
  const pos = point.getCenterPoint();
  const parentWidth = chartAlertEl.parentElement?.clientWidth || 600;
  const left = Math.min(Math.max(12, pos.x - 40), parentWidth - 190);
  chartAlertEl.style.right = "auto";
  chartAlertEl.style.left = `${left}px`;
  const text = chartAlertEl.querySelector(".chart-alert-text");
  if (text) {
    text.innerHTML = isBotSpike ? `${translate("alert.text")} <span>${translate("alert.bots")}</span>` : translate("alert.text");
  }
  chartAlertEl.classList.add("show");
  clearTimeout(showChartAlert._t);
  showChartAlert._t = setTimeout(() => {
    chartAlertEl.classList.remove("show");
  }, 5200);
}
showChartAlert._t = null;

function showSpikeHint() {
  hintPanelEl.classList.add("fade");
  setTimeout(() => {
    hintTextEl.textContent = translate("alert.text");
    hintPanelEl.classList.remove("fade");
  }, 160);
  clearTimeout(showSpikeHint._t);
  showSpikeHint._t = setTimeout(() => {
    updateHint(lastThreatKey);
  }, 2000);
}
showSpikeHint._t = null;

function simulateTick() {
  const modeConfig = modes[currentMode];
  const trafficDeviation = randomAround(modeConfig.base, modeConfig.variance);
  const requestFrequency = randomAround(modeConfig.base + 5, modeConfig.variance);
  const privilegeEscalation = randomAround(modeConfig.base - 4, modeConfig.variance);
  const payloadAnomaly = randomAround(modeConfig.base + 2, modeConfig.variance);

  const anomalyScore = clamp(
    (trafficDeviation + requestFrequency + privilegeEscalation + payloadAnomaly) / 4
  );

  const threatKey = evaluateThreat(anomalyScore);
  updateUsers(anomalyScore, threatKey);
  updateMetrics(anomalyScore, threatKey);
  updateChart(anomalyScore);

  if (threatKey !== lastThreatKey) {
    updateHint(threatKey);
    logEvent(`${translate(`threat.${threatKey}`)} ${translate("events.detected")}`, threatKey);
    if (threatKey === "suspicious") {
      hintPanelEl.classList.add("fade");
      setTimeout(() => {
        hintTextEl.textContent = translate("events.odd");
        hintPanelEl.classList.remove("fade");
      }, 160);
      setTimeout(() => {
        hintPanelEl.classList.add("fade");
        setTimeout(() => {
          hintTextEl.textContent = translate("events.learned");
          hintPanelEl.classList.remove("fade");
        }, 160);
      }, 1200);
      logEvent(translate("events.odd"), threatKey);
      setTimeout(() => {
        logEvent(translate("events.learned"), "normal");
      }, 600);
    }
    lastThreatKey = threatKey;
  }
}

function updateUsers(score, threatKey) {
  const drift = Math.round((Math.random() - 0.5) * 6);
  const surge = threatKey === "zeroday" ? 16 : threatKey === "suspicious" ? 9 : 3;
  const spike = score >= 70 ? surge * 2 : score >= 40 ? surge : 0;
  currentUsers = Math.max(24, currentUsers + drift + spike);
  if (userCountEl) userCountEl.textContent = currentUsers.toString();
}

function setMode(mode) {
  if (mode === "reset") {
    currentMode = "normal";
    lastThreatKey = "normal";
    updateHint("normal");
    logEvent(translate("events.reset"), "normal");
  } else {
    currentMode = mode;
    logEvent(`${translate("events.mode")} ${translate(`modes.${mode}`)}`, lastThreatKey);
  }

  controlButtons.forEach((btn) => btn.classList.remove("active"));
  const activeBtn = document.querySelector(`[data-mode='${mode}']`);
  if (activeBtn) activeBtn.classList.add("active");
}

controlButtons.forEach((btn) => {
  btn.addEventListener("click", () => setMode(btn.dataset.mode));
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    langButtons.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    applyLanguage(btn.dataset.lang);
  });
});

setMode("normal");
logEvent(translate("events.started"), "normal");

setInterval(() => {
  statusIndex = (statusIndex + 1) % 3;
  aiStatusEl.textContent = translate(`monitor.status${statusIndex + 1}`);
}, 3500);

setInterval(simulateTick, 1000);

applyLanguage("tm");

resizeBackground();
createNodes();
requestAnimationFrame(animateBackground);
window.addEventListener("resize", () => {
  resizeBackground();
  createNodes();
});
