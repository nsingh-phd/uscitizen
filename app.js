/*
 * US Citizen: practice for the U.S. naturalization test (civics, reading, writing).
 * Plain JS, no dependencies. Everything is stored in localStorage on the
 * viewer's device; nothing is sent anywhere.
 */
(function () {
  "use strict";

  const DATA = window.CIVICS_DATA;
  const META = window.CIVICS_META;
  if (!DATA) return;

  /* ================= Icons (24x24 stroke icons) ================= */

  const ICONS = {
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
    cards: '<rect x="3" y="7" width="13" height="14" rx="2.5"/><path d="M8 3.5h10.5A2.5 2.5 0 0 1 21 6v11.5"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5V21"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5V5.5"/><path d="M8.5 7.5h7"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8"/><path d="M18 14.2a6.5 6.5 0 0 1 3.5 5.8"/>',
    doc: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><path d="M9 12h7"/><path d="M9 16h7"/><path d="M9 8h3"/>',
    capitol: '<path d="M3 21h18"/><path d="M4.5 18h15"/><path d="M6.5 18v-5.5M10 18v-5.5M14 18v-5.5M17.5 18v-5.5"/><path d="M4.5 12.5h15"/><path d="M6.5 12.5a5.5 5.5 0 0 1 11 0"/><path d="M12 7V3.5"/>',
    scales: '<path d="M12 4v16"/><path d="M7.5 20h9"/><path d="M5 7h14"/><path d="M5 7l-2.6 6a2.6 2.6 0 0 0 5.2 0z"/><path d="M19 7l-2.6 6a2.6 2.6 0 0 0 5.2 0z"/>',
    quill: '<path d="M20 4C11 4 6.5 9 5.5 18.5"/><path d="M20 4c0 8.5-5 13.5-13.5 13.5"/><path d="M4 20l2.5-2.5"/><path d="M10 14l4-4"/>',
    flag: '<path d="M5 21V4"/><path d="M5 4.5h13l-2.5 4 2.5 4H5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    star: '<path d="M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.2l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18"/><path d="M8 3v4M16 3v4"/>',
    pin: '<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    speaker: '<path d="M4 9.5v5h3.5L13 19V5L7.5 9.5z"/><path d="M16.5 9a4.2 4.2 0 0 1 0 6"/><path d="M19.2 6.3a8 8 0 0 1 0 11.4"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    x: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
    flip: '<path d="M20 11a8 8 0 0 0-14.3-4.9"/><path d="M5 3v3.5h3.5"/><path d="M4 13a8 8 0 0 0 14.3 4.9"/><path d="M19 21v-3.5h-3.5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    arrow: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
    eye: '<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"/><circle cx="12" cy="12" r="3"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    gavel: '<path d="M13.5 3.5l7 7"/><path d="M10.5 6.5l7 7"/><path d="M12 5l-5 5"/><path d="M15 8l-5 5"/><path d="M8.5 11.5L3 17"/><path d="M12 21h9"/>',
    link: '<path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    chat: '<path d="M4 5.5h16v11H9.5L4 20.5z"/><path d="M8 10h8M8 13h5"/>',
    pen: '<path d="M4 20l4.2-1L19.5 7.7a2 2 0 0 0-3-3L5.2 15.8z"/><path d="M14.5 6.5l3 3"/>',
    trophy: '<path d="M8 4h8v5.5a4 4 0 0 1-8 0z"/><path d="M8 6H4.5v1a4 4 0 0 0 3.8 4M16 6h3.5v1a4 4 0 0 1-3.8 4"/><path d="M12 13.5V17"/><path d="M8.5 21h7"/><path d="M9.5 17h5v4h-5z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="M12 8.5l1.2 2.3 2.3 1.2-2.3 1.2L12 15.5l-1.2-2.3L8.5 12l2.3-1.2z"/>',
    reset: '<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4.5h4.5"/>',
    torch: '<path d="M9 10h6l-1 4h-4z"/><path d="M11 14v7h2v-7"/><path d="M12 3c2 2 2.5 3.5 1.5 5.5h-3C9.5 6.5 10 5 12 3z"/>',
  };
  const ic = (name, cls) => `<svg class="ic${cls ? " " + cls : ""}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  /* ================= Topic styling ================= */

  const TOPICS = {
    "Principles of American Government": { short: "Principles of Government", icon: "doc", color: "#2f5bd3" },
    "Principles of American Democracy": { short: "Principles of Democracy", icon: "doc", color: "#2f5bd3" },
    "System of Government": { short: "System of Government", icon: "capitol", color: "#5b4fd6" },
    "Rights and Responsibilities": { short: "Rights & Responsibilities", icon: "scales", color: "#0e9384" },
    "Colonial Period and Independence": { short: "Colonial Era & Independence", icon: "quill", color: "#d97a1e" },
    "1800s": { short: "The 1800s", icon: "flag", color: "#c8323b" },
    "Recent American History and Other Important Historical Information": { short: "Recent History", icon: "clock", color: "#8b5cf6" },
    "Geography": { short: "Geography", icon: "pin", color: "#1f9d6b" },
    "Symbols": { short: "Symbols", icon: "star", color: "#2a7de1" },
    "Holidays": { short: "Holidays", icon: "calendar", color: "#e0517a" },
  };
  const topicOf = (section) => TOPICS[section] || { short: section, icon: "doc", color: "#2f5bd3" };

  const RULES = {
    "2025": { pool: 128, max: 20, pass: 12, fail: 9 },
    "2008": { pool: 100, max: 10, pass: 6, fail: 5 },
    "65/20": { pool: 20, max: 10, pass: 6, fail: 5 },
  };
  const DECK_SIZE = 20;
  const MASTERY_STREAK = 2;
  const AVATAR_COLORS = ["#2f5bd3", "#c8323b", "#0e9384", "#d97a1e", "#8b5cf6", "#e0517a"];

  const PLACES = [
    ["Alabama", "Montgomery"], ["Alaska", "Juneau"], ["Arizona", "Phoenix"], ["Arkansas", "Little Rock"],
    ["California", "Sacramento"], ["Colorado", "Denver"], ["Connecticut", "Hartford"], ["Delaware", "Dover"],
    ["Florida", "Tallahassee"], ["Georgia", "Atlanta"], ["Hawaii", "Honolulu"], ["Idaho", "Boise"],
    ["Illinois", "Springfield"], ["Indiana", "Indianapolis"], ["Iowa", "Des Moines"], ["Kansas", "Topeka"],
    ["Kentucky", "Frankfort"], ["Louisiana", "Baton Rouge"], ["Maine", "Augusta"], ["Maryland", "Annapolis"],
    ["Massachusetts", "Boston"], ["Michigan", "Lansing"], ["Minnesota", "Saint Paul"], ["Mississippi", "Jackson"],
    ["Missouri", "Jefferson City"], ["Montana", "Helena"], ["Nebraska", "Lincoln"], ["Nevada", "Carson City"],
    ["New Hampshire", "Concord"], ["New Jersey", "Trenton"], ["New Mexico", "Santa Fe"], ["New York", "Albany"],
    ["North Carolina", "Raleigh"], ["North Dakota", "Bismarck"], ["Ohio", "Columbus"], ["Oklahoma", "Oklahoma City"],
    ["Oregon", "Salem"], ["Pennsylvania", "Harrisburg"], ["Rhode Island", "Providence"], ["South Carolina", "Columbia"],
    ["South Dakota", "Pierre"], ["Tennessee", "Nashville"], ["Texas", "Austin"], ["Utah", "Salt Lake City"],
    ["Vermont", "Montpelier"], ["Virginia", "Richmond"], ["Washington", "Olympia"], ["West Virginia", "Charleston"],
    ["Wisconsin", "Madison"], ["Wyoming", "Cheyenne"],
  ];
  const TERRITORIES = [
    ["American Samoa", "Pago Pago"], ["Guam", "Hagåtña"], ["Northern Mariana Islands", "Saipan"],
    ["Puerto Rico", "San Juan"], ["U.S. Virgin Islands", "Charlotte Amalie"],
  ];
  const DC = "District of Columbia";
  const DC_ANSWERS = {
    capital: "D.C. is not a state and does not have a capital",
    senator: "D.C. has no U.S. senators",
    governor: "D.C. does not have a governor",
  };

  const LOCAL_FIELDS = [
    { key: "senator", label: "One of your U.S. senators", icon: "users", link: "https://www.senate.gov/senators/senators-contact.htm", site: "senate.gov" },
    { key: "representative", label: "Your U.S. representative", icon: "home", link: "https://www.house.gov/representatives/find-your-representative", site: "house.gov" },
    { key: "governor", label: "Your governor", icon: "shield", link: "https://www.usa.gov/states-and-territories", site: "usa.gov" },
    { key: "capital", label: "Your state capital", icon: "capitol" },
  ];

  /* ================= Storage ================= */

  const store = {
    get(key, fallback) {
      try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch (e) { return fallback; }
    },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage blocked */ } },
    remove(key) { try { localStorage.removeItem(key); } catch (e) { /* storage blocked */ } },
  };

  const settings = Object.assign({ version: "2025", only65: false, profile: "Me", listen: false }, store.get("usc:settings", {}));
  if (!DATA[settings.version]) settings.version = "2025";
  let profiles = store.get("usc:profiles", ["Me"]);
  if (!Array.isArray(profiles) || !profiles.length) profiles = ["Me"];
  if (!profiles.includes(settings.profile)) settings.profile = profiles[0];

  const saveSettings = () => store.set("usc:settings", settings);
  const progressKey = () => `usc:progress:${settings.profile}:${settings.version}`;
  const historyKey = () => `usc:tests:${settings.profile}:${settings.version}`;
  const localKey = () => `usc:local:${settings.profile}`;

  let progress = store.get(progressKey(), {});
  let mine = store.get(localKey(), {});
  const reload = () => { progress = store.get(progressKey(), {}); mine = store.get(localKey(), {}); };

  /* ================= Helpers ================= */

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => [...(root || document).querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const announce = (msg) => { const n = $("#live"); n.textContent = ""; setTimeout(() => { n.textContent = msg; }, 30); };

  const allQs = () => DATA[settings.version];
  const activeQs = () => allQs().filter((q) => !settings.only65 || q.star);
  const rules = () => (settings.only65 ? RULES["65/20"] : RULES[settings.version]);
  const sectionsOf = (qs) => [...new Set(qs.map((q) => q.section))];

  const stat = (q) => progress[q.n] || { r: 0, w: 0, s: 0 };
  const isMastered = (q) => stat(q).s >= MASTERY_STREAK;
  const isMissed = (q) => { const s = stat(q); return s.w > 0 && s.s === 0; };
  const isSeen = (q) => { const s = stat(q); return s.r + s.w > 0; };

  function record(q, correct) {
    const s = Object.assign({ r: 0, w: 0, s: 0 }, progress[q.n]);
    if (correct) { s.r++; s.s++; } else { s.w++; s.s = 0; }
    s.t = Date.now();
    progress[q.n] = s;
    store.set(progressKey(), progress);
  }

  const avatarColor = (name) => AVATAR_COLORS[Math.max(0, profiles.indexOf(name)) % AVATAR_COLORS.length];
  const initial = (name) => esc((name.trim()[0] || "?").toUpperCase());
  const displayName = (name) => (name === "Me" ? "" : name);

  function ring(pct, cls) {
    const c = 2 * Math.PI * 52;
    return `<svg class="ring ${cls || ""}" viewBox="0 0 120 120" aria-hidden="true">
      <circle class="ring-bg" cx="60" cy="60" r="52"/>
      <circle class="ring-fg" cx="60" cy="60" r="52" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${c.toFixed(1)}" data-offset="${(c * (1 - clamp01(pct))).toFixed(1)}"/>
    </svg>`;
  }
  function animateRings(root) {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      $$(".ring-fg[data-offset]", root).forEach((n) => { n.style.strokeDashoffset = n.dataset.offset; });
      $$("[data-width]", root).forEach((n) => { n.style.width = n.dataset.width; });
    }));
  }

  /* ================= Answers ================= */

  function answersHTML(q, opts) {
    const o = opts || {};
    let items = q.a;
    let html = "";
    if (q.local) {
      const v = (mine[q.local] || "").trim();
      items = v ? [v] : [];
      if (!v) html += `<a class="ans ans-missing" href="#me">${ic("plus")}Add yours in My info</a>`;
    }
    html = items.map((a) => `<span class="ans">${esc(a)}</span>`).join("") + html;
    let extra = "";
    if (q.note && !o.compact) extra += `<p class="ans-note">${esc(q.note)}</p>`;
    if (q.updates) {
      extra += `<p class="ans-update">${ic("clock")}Changes after elections · <a href="${esc(META.testUpdatesUrl)}" target="_blank" rel="noopener">verify on uscis.gov</a></p>`;
    }
    return `<div class="answers">${html}</div>${extra}`;
  }

  const topicChip = (q) => {
    const t = topicOf(q.section);
    return `<span class="topic-chip" style="--topic:${t.color}">${ic(t.icon)}${esc(t.short)}</span>`;
  };
  const starChip = (q) => (q.star ? `<span class="mini-chip mini-star">${ic("star")}65/20</span>` : "");

  /* ================= Speech ================= */

  const canSpeak = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  let voice = null;
  function pickVoice() {
    if (!canSpeak) return;
    const vs = window.speechSynthesis.getVoices();
    voice = vs.find((v) => v.lang === "en-US" && /natural|google|samantha|aria|jenny/i.test(v.name))
      || vs.find((v) => v.lang === "en-US") || vs.find((v) => /^en/i.test(v.lang)) || null;
  }
  if (canSpeak) {
    pickVoice();
    if (window.speechSynthesis.addEventListener) window.speechSynthesis.addEventListener("voiceschanged", pickVoice);
  }
  function speak(text, onEnd, rate) {
    if (!canSpeak) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = "en-US";
    u.rate = rate || 0.92;
    if (onEnd) u.onend = onEnd;
    window.speechSynthesis.speak(u);
  }
  const stopSpeaking = () => { if (canSpeak) window.speechSynthesis.cancel(); };

  /* ================= Confetti ================= */

  function confetti() {
    if (reduceMotion()) return;
    const canvas = $("#confetti");
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    ctx.scale(dpr, dpr);
    const colors = ["#c8323b", "#13285c", "#ffffff", "#e8a33d", "#2a7de1"];
    const parts = Array.from({ length: 160 }, () => ({
      x: innerWidth / 2 + (Math.random() - 0.5) * 120,
      y: innerHeight * 0.35,
      vx: (Math.random() - 0.5) * 16,
      vy: -Math.random() * 14 - 4,
      w: 6 + Math.random() * 6,
      h: 8 + Math.random() * 8,
      r: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      c: colors[Math.floor(Math.random() * colors.length)],
    }));
    const start = performance.now();
    canvas.classList.add("is-on");
    (function frame(now) {
      const t = now - start;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      parts.forEach((p) => {
        p.vy += 0.35; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        ctx.save();
        ctx.globalAlpha = Math.max(0, 1 - t / 3200);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.fillStyle = p.c;
        ctx.strokeStyle = "rgba(19,40,92,.25)";
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.strokeRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (t < 3200) requestAnimationFrame(frame);
      else { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.classList.remove("is-on"); }
    })(start);
  }

  /* ================= Hero art ================= */

  function stripePath(y, h, amp, period, width) {
    const top = [];
    const bottom = [];
    for (let x = 0; x <= width; x += 10) {
      const off = amp * Math.sin((2 * Math.PI * x) / period);
      top.push(`${x},${(y + off).toFixed(1)}`);
      bottom.unshift(`${x},${(y + h + off).toFixed(1)}`);
    }
    return `M${top.join(" L")} L${bottom.join(" L")} Z`;
  }
  const HERO_ART = (() => {
    let stripes = "";
    for (let i = 0; i < 7; i++) {
      stripes += `<path class="${i % 2 ? "st-w" : "st-r"}" d="${stripePath(40 + i * 34, 34, 14, 400, 1600)}"/>`;
    }
    const stars = [[48, 10, 1], [56, 82, 0.7], [44, 46, 0.6], [4, 92, 0.6], [64, 6, 0.6], [70, 92, 0.8], [96, 8, 0.7], [97, 92, 0.9]]
      .map(([x, y, s], i) => `<span class="twinkle" style="left:${x}%;top:${y}%;--s:${s};--d:${i * 0.45}s">${ic("star")}</span>`).join("");
    return `<div class="hero-stars" aria-hidden="true">${stars}</div>
      <svg class="hero-waves" viewBox="0 0 800 330" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g class="wave-move">${stripes}</g></svg>`;
  })();

  /* ================= Shell: nav ================= */

  const VIEWS = [
    { id: "home", label: "Home", icon: "home" },
    { id: "cards", label: "Flashcards", short: "Cards", icon: "cards" },
    { id: "test", label: "Mock interview", short: "Interview", icon: "mic" },
    { id: "english", label: "Reading & writing", short: "English", icon: "pen" },
    { id: "study", label: "Study guide", short: "Study", icon: "book" },
    { id: "me", label: "My info", icon: "user" },
  ];
  let current = null;

  function renderNav() {
    const link = (v, short) => `<a href="#${v.id}" data-view="${v.id}">${ic(v.icon)}<span>${esc(short && v.short ? v.short : v.label)}</span></a>`;
    $("#tabs").innerHTML = VIEWS.filter((v) => v.id !== "me").map((v) => link(v)).join("");
    $("#bottom-nav").innerHTML = VIEWS.map((v) => link(v, true)).join("");
    renderAvatar();
  }
  function renderAvatar() {
    const btn = $("#avatar-btn");
    btn.innerHTML = `<span class="avatar" style="--av:${avatarColor(settings.profile)}">${initial(settings.profile)}</span>`;
    btn.title = `Practicing as ${settings.profile}`;
  }
  function markNav(id) {
    $$("[data-view]").forEach((a) => {
      if (a.dataset.view === id) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }

  const RENDER = {};
  function show(id, opts) {
    stopSpeaking();
    stopListening();
    current = id;
    markNav(id);
    const view = $("#view");
    view.className = `view view-${id}`;
    RENDER[id](view, opts || {});
    animateRings(view);
    if (opts && opts.focus) view.focus({ preventScroll: true });
  }
  function go(id, opts) {
    const o = Object.assign({ focus: true }, opts);
    if (location.hash.slice(1) === id) { show(id, o); } else { pendingOpts = o; location.hash = id; }
    window.scrollTo({ top: 0, behavior: reduceMotion() ? "auto" : "smooth" });
  }
  let pendingOpts = null;
  function route() {
    const id = location.hash.slice(1);
    const target = VIEWS.some((v) => v.id === id) ? id : "home";
    const opts = pendingOpts || { focus: current !== null };
    pendingOpts = null;
    show(target, opts);
    if (opts.focus) window.scrollTo(0, 0);
  }

  /* ================= Home ================= */

  RENDER.home = (view) => {
    const qs = activeQs();
    const mastered = qs.filter(isMastered).length;
    const seen = qs.filter(isSeen).length;
    const missed = qs.filter(isMissed).length;
    const passes = store.get(historyKey(), []).filter((h) => h.passed).length;
    const r = rules();
    const name = displayName(settings.profile);
    const pct = qs.length ? mastered / qs.length : 0;

    const topics = sectionsOf(qs).map((section, i) => {
      const t = topicOf(section);
      const tq = qs.filter((q) => q.section === section);
      const m = tq.filter(isMastered).length;
      return `<button type="button" class="topic-card" data-action="topic" data-section="${esc(section)}" style="--topic:${t.color};--i:${i}">
        <span class="blob">${ic(t.icon)}</span>
        <span class="topic-name">${esc(t.short)}</span>
        <span class="topic-meta">${tq.length} question${tq.length === 1 ? "" : "s"}</span>
        <span class="bar"><span data-width="${Math.round((m / tq.length) * 100)}%"></span></span>
        <span class="topic-count">${m}/${tq.length}</span>
      </button>`;
    }).join("");

    view.innerHTML = `
      <section class="hero">
        ${HERO_ART}
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="kicker">${ic("torch")}U.S. naturalization civics test</p>
            <h1>${name ? `Hi ${esc(name)}, let's get you` : "Let's get you"} <span>citizen ready.</span></h1>
            <div class="hero-controls">
              <div class="seg seg-dark" role="radiogroup" aria-label="Test version">
                ${["2025", "2008"].map((v) => `<button type="button" role="radio" aria-checked="${settings.version === v}" data-action="version" data-v="${v}">${v} test</button>`).join("")}
              </div>
              <button type="button" class="switch switch-dark" role="switch" aria-checked="${settings.only65}" data-action="only65"><span class="knob"></span>65/20 only</button>
            </div>
            <p class="hero-hint">${settings.version === "2025" ? "N-400 filed on or after Oct 20, 2025" : "N-400 filed before Oct 20, 2025"}</p>
          </div>
          <div class="score-card">
            <div class="ring-wrap">
              ${ring(pct, "ring-lg")}
              <div class="ring-label"><strong>${mastered}</strong><span>of ${qs.length} mastered</span></div>
            </div>
            <div class="mini-stats">
              <div><strong>${seen}</strong><span>practiced</span></div>
              <div><strong>${missed}</strong><span>to review</span></div>
              <div><strong>${passes}</strong><span>tests passed</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="actions">
        <a class="action action-cards" href="#cards">
          <span class="action-art" aria-hidden="true"><span class="mini-card c1"></span><span class="mini-card c2"></span><span class="mini-card c3">${ic("flip")}</span></span>
          <span class="action-title">Flashcards</span>
          <span class="action-sub">Flip, then swipe</span>
          ${ic("arrow", "action-go")}
        </a>
        <a class="action action-test" href="#test">
          <span class="action-art" aria-hidden="true"><span class="pulse"></span><span class="pulse p2"></span><span class="action-icon">${ic("mic")}</span></span>
          <span class="action-title">Mock interview</span>
          <span class="action-sub">${r.max} questions · ${r.pass} to pass</span>
          ${ic("arrow", "action-go")}
        </a>
        <a class="action action-study" href="#study">
          <span class="action-art" aria-hidden="true"><span class="action-icon">${ic("book")}</span><span class="float-star s1">${ic("star")}</span><span class="float-star s2">${ic("star")}</span></span>
          <span class="action-title">Study guide</span>
          <span class="action-sub">All ${qs.length} questions</span>
          ${ic("arrow", "action-go")}
        </a>
        <a class="action action-english" href="#english">
          <span class="action-art" aria-hidden="true"><span class="abc">Aa</span><span class="pencil">${ic("pen")}</span></span>
          <span class="action-title">Reading &amp; writing</span>
          <span class="action-sub">English test practice</span>
          ${ic("arrow", "action-go")}
        </a>
      </section>

      <section class="block">
        <div class="block-head"><h2>Practice by topic</h2><span class="block-sub">Tap a topic to start flashcards</span></div>
        <div class="topic-grid">${topics}</div>
      </section>

      <section class="block how">
        <div class="block-head"><h2>How the civics test works</h2></div>
        <div class="funnel">
          <div class="funnel-step"><span class="big">${r.pool}</span><span>questions to study</span></div>
          <span class="funnel-arrow" aria-hidden="true">${ic("arrow")}</span>
          <div class="funnel-step"><span class="big">${r.max}</span><span>asked out loud</span></div>
          <span class="funnel-arrow" aria-hidden="true">${ic("arrow")}</span>
          <div class="funnel-step funnel-goal"><span class="big">${r.pass}</span><span>correct to pass</span></div>
        </div>
        <div class="parts">
          <div class="part">${ic("chat")}<strong>Speaking</strong><span>During the interview</span></div>
          <a class="part part-link" href="#english" data-action="eng-open" data-mode="reading">${ic("book")}<strong>Reading</strong><span>1 of 3 sentences</span></a>
          <a class="part part-link" href="#english" data-action="eng-open" data-mode="writing">${ic("pen")}<strong>Writing</strong><span>1 of 3 sentences</span></a>
          <div class="part part-hl">${ic("capitol")}<strong>Civics</strong><span>${r.pass} of ${r.max} correct</span></div>
        </div>
        <div class="facts">
          <span class="fact">${ic("reset")}Failed a part? Retest in 60–90 days</span>
          <span class="fact">${ic("users")}65+ with 20 years as a resident: 20 starred questions</span>
          <a class="fact fact-link" href="https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test" target="_blank" rel="noopener">${ic("link")}Official USCIS materials</a>
        </div>
      </section>`;
  };

  /* ================= Flashcards ================= */

  const deck = { cards: [], i: 0, got: 0, missed: [], flipped: false, mode: "smart", section: "all", done: false };

  function buildDeck(only) {
    if (only) return shuffle(only);
    const qs = activeQs().filter((q) => deck.section === "all" || q.section === deck.section);
    if (deck.mode === "missed") return shuffle(qs.filter(isMissed));
    if (deck.mode === "all") return shuffle(qs);
    const rank = (q) => (isMissed(q) ? 0 : !isSeen(q) ? 1 : !isMastered(q) ? 2 : 3);
    return shuffle(qs).sort((a, b) => rank(a) - rank(b)).slice(0, DECK_SIZE);
  }
  function newDeck(only) {
    deck.cards = buildDeck(only);
    deck.i = 0; deck.got = 0; deck.missed = []; deck.flipped = false; deck.done = false;
  }

  RENDER.cards = (view, opts) => {
    if (opts.section !== undefined) { deck.section = opts.section; deck.mode = "smart"; newDeck(); }
    else if (opts.only) { newDeck(opts.only); }
    else if (!deck.cards.length || opts.fresh) newDeck();
    if (deck.section !== "all" && !activeQs().some((q) => q.section === deck.section)) { deck.section = "all"; newDeck(); }

    const sections = sectionsOf(activeQs());
    const topicOptions = `<option value="all">All topics</option>` + sections.map((s) => `<option value="${esc(s)}"${s === deck.section ? " selected" : ""}>${esc(topicOf(s).short)}</option>`).join("");
    const modes = [["smart", "Smart mix"], ["all", "Everything"], ["missed", "Missed"]];

    view.innerHTML = `
      <div class="page-head">
        <h1 class="page-title">${ic("cards")}Flashcards</h1>
        <div class="deck-controls">
          <div class="seg" role="radiogroup" aria-label="Deck">
            ${modes.map(([m, l]) => `<button type="button" role="radio" aria-checked="${deck.mode === m}" data-action="deck-mode" data-mode="${m}">${l}</button>`).join("")}
          </div>
          <label class="select-wrap">${ic("target")}<select id="deck-topic" aria-label="Topic">${topicOptions}</select></label>
        </div>
      </div>
      <div id="deck-body"></div>`;
    $("#deck-topic", view).addEventListener("change", (e) => { deck.section = e.target.value; newDeck(); renderDeckBody(); });
    renderDeckBody();
  };

  function renderDeckBody() {
    const body = $("#deck-body");
    if (!body) return;
    if (!deck.cards.length) {
      body.innerHTML = `<div class="empty">
        <span class="empty-art">${ic(deck.mode === "missed" ? "trophy" : "search")}</span>
        <h2>${deck.mode === "missed" ? "Nothing missed yet" : "No questions here"}</h2>
        <p>${deck.mode === "missed" ? "Questions you miss will show up here for review." : "Try another topic."}</p>
        <button type="button" class="btn btn-primary" data-action="deck-mode" data-mode="smart">Start a smart deck</button>
      </div>`;
      return;
    }
    if (deck.done) {
      const total = deck.cards.length;
      const pct = deck.got / total;
      body.innerHTML = `<div class="summary">
        <div class="ring-wrap">${ring(pct, "ring-lg ring-result")}<div class="ring-label"><strong>${Math.round(pct * 100)}%</strong><span>${deck.got} of ${total}</span></div></div>
        <h2>${pct >= 0.8 ? "Excellent work!" : pct >= 0.5 ? "Good progress!" : "Keep going!"}</h2>
        <p>${deck.missed.length ? `${deck.missed.length} to review while it's fresh.` : "You knew every card in this deck."}</p>
        <div class="row-center">
          ${deck.missed.length ? `<button type="button" class="btn btn-primary" data-action="deck-missed">${ic("reset")}Review missed</button>` : ""}
          <button type="button" class="btn ${deck.missed.length ? "btn-quiet" : "btn-primary"}" data-action="deck-new">${ic("cards")}New deck</button>
        </div>
      </div>`;
      animateRings(body);
      if (pct >= 0.8) confetti();
      return;
    }
    const q = deck.cards[deck.i];
    const t = topicOf(q.section);
    const left = deck.cards.length - deck.i;
    body.innerHTML = `
      <div class="deck-meta">
        <span class="deck-pos">Card <b>${deck.i + 1}</b> of ${deck.cards.length}</span>
        <span class="deck-score"><span class="pill pill-good">${ic("check")}${deck.got}</span><span class="pill pill-bad">${ic("x")}${deck.missed.length}</span></span>
      </div>
      <div class="deck-bar"><span style="width:${(deck.i / deck.cards.length) * 100}%"></span></div>
      <div class="fc-stage">
        ${left > 2 ? '<div class="fc-ghost g2"></div>' : ""}${left > 1 ? '<div class="fc-ghost g1"></div>' : ""}
        <div class="fc${deck.flipped ? " is-flipped" : ""}" id="fc" tabindex="0" role="button" aria-label="Flashcard. Press to flip." style="--topic:${t.color}">
          <div class="fc-inner">
            <div class="fc-face fc-front">
              <div class="fc-top">${topicChip(q)}${starChip(q)}</div>
              <p class="fc-q">${esc(q.q)}</p>
              <span class="fc-hint">${ic("flip")}Tap to flip</span>
              <span class="fc-watermark" aria-hidden="true">${ic(t.icon)}</span>
            </div>
            <div class="fc-face fc-back">
              <p class="fc-q-small">${esc(q.q)}</p>
              ${answersHTML(q)}
            </div>
          </div>
          <span class="stamp stamp-good">${ic("check")}Knew it</span>
          <span class="stamp stamp-bad">${ic("x")}Missed</span>
        </div>
      </div>
      <div class="fc-controls">
        <button type="button" class="round round-bad" data-action="grade" data-ok="0" aria-label="I missed it" ${deck.flipped ? "" : "disabled"}>${ic("x")}</button>
        <button type="button" class="round round-quiet" data-action="speak-card" aria-label="Read the question aloud" ${canSpeak ? "" : "hidden"}>${ic("speaker")}</button>
        <button type="button" class="round round-quiet" data-action="flip" aria-label="Flip card">${ic("flip")}</button>
        <button type="button" class="round round-good" data-action="grade" data-ok="1" aria-label="I knew it" ${deck.flipped ? "" : "disabled"}>${ic("check")}</button>
      </div>
      <p class="swipe-hint">${deck.flipped ? "Swipe right if you knew it, left if you didn't" : "Say your answer out loud, then flip"}</p>`;
    bindSwipe($("#fc"));
  }

  function flipCard() {
    const card = $("#fc");
    if (!card) return;
    deck.flipped = !deck.flipped;
    card.classList.toggle("is-flipped", deck.flipped);
    $$("[data-action=grade]").forEach((b) => { b.disabled = !deck.flipped; });
    const hint = $(".swipe-hint");
    if (hint) hint.textContent = deck.flipped ? "Swipe right if you knew it, left if you didn't" : "Say your answer out loud, then flip";
  }

  function gradeCard(correct, animated) {
    if (!deck.flipped || deck.done) return;
    const q = deck.cards[deck.i];
    const card = $("#fc");
    const advance = () => {
      record(q, correct);
      if (correct) deck.got++; else deck.missed.push(q);
      deck.i++;
      deck.flipped = false;
      if (deck.i >= deck.cards.length) deck.done = true;
      stopSpeaking();
      renderDeckBody();
      const next = $("#fc");
      if (next) next.focus({ preventScroll: true });
    };
    if (card && !animated && !reduceMotion()) {
      card.classList.add(correct ? "show-good" : "show-bad");
      card.style.transition = "transform .32s ease, opacity .32s ease";
      card.style.transform = `translateX(${correct ? 120 : -120}%) rotate(${correct ? 14 : -14}deg)`;
      card.style.opacity = "0";
      setTimeout(advance, 260);
    } else {
      advance();
    }
  }

  function bindSwipe(card) {
    let x0 = null; let y0 = 0; let dx = 0; let dragging = false;
    card.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 || e.target.closest("a")) return;
      x0 = e.clientX; y0 = e.clientY; dx = 0; dragging = false;
    });
    card.addEventListener("pointermove", (e) => {
      if (x0 === null) return;
      dx = e.clientX - x0;
      const dy = e.clientY - y0;
      if (!dragging && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
        dragging = true;
        try { card.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      }
      if (!dragging) return;
      card.style.transition = "none";
      card.style.transform = `translateX(${dx}px) rotate(${dx / 20}deg)`;
      card.style.setProperty("--sg", deck.flipped ? clamp01(dx / 120) : 0);
      card.style.setProperty("--sb", deck.flipped ? clamp01(-dx / 120) : 0);
    });
    const end = () => {
      if (x0 === null) return;
      const wasDrag = dragging;
      x0 = null; dragging = false;
      if (!wasDrag) { flipCard(); return; }
      if (deck.flipped && Math.abs(dx) > 110) {
        card.style.transition = "transform .25s ease, opacity .25s ease";
        card.style.transform = `translateX(${Math.sign(dx) * 130}%) rotate(${dx / 8}deg)`;
        card.style.opacity = "0";
        setTimeout(() => gradeCard(dx > 0, true), 200);
      } else {
        card.style.transition = "";
        card.style.transform = "";
        card.style.setProperty("--sg", 0);
        card.style.setProperty("--sb", 0);
      }
    };
    card.addEventListener("pointerup", end);
    card.addEventListener("pointercancel", () => {
      x0 = null; dragging = false;
      card.style.transition = ""; card.style.transform = "";
      card.style.setProperty("--sg", 0); card.style.setProperty("--sb", 0);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); flipCard(); }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (current !== "cards" || deck.done || !deck.cards.length) return;
    if (e.target.closest("input, select, textarea, dialog") || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key === "ArrowRight") { e.preventDefault(); gradeCard(true); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); gradeCard(false); }
    else if ((e.key === " " || e.key === "Enter") && !e.target.closest("button, a, #fc")) { e.preventDefault(); flipCard(); }
  });

  /* ================= Mock interview ================= */

  const test = { stage: "start", qs: [], i: 0, right: 0, wrong: 0, log: [], revealed: false, rules: null };

  RENDER.test = (view, opts) => {
    if (opts.reset || (test.stage === "run" && test.version !== `${settings.version}|${settings.only65}`)) test.stage = "start";
    view.innerHTML = `<div id="test-body"></div>`;
    renderTest();
  };

  function renderTest() {
    const body = $("#test-body");
    if (!body) return;
    if (test.stage === "start") return renderTestStart(body);
    if (test.stage === "run") return renderTestRun(body);
    return renderTestDone(body);
  }

  function renderTestStart(body) {
    const r = rules();
    const hist = store.get(historyKey(), []).slice(-8);
    body.innerHTML = `
      <section class="interview-hero">
        <div class="interview-art" aria-hidden="true">
          <span class="pulse"></span><span class="pulse p2"></span><span class="pulse p3"></span>
          <span class="interview-icon">${ic("mic")}</span>
        </div>
        <h1>Mock interview</h1>
        <p class="lead">The officer asks out loud. You answer out loud.</p>
        <div class="rule-tiles">
          <div class="rule-tile"><span class="big">${r.max}</span><span>questions max</span></div>
          <div class="rule-tile rule-good"><span class="big">${r.pass}</span><span>correct to pass</span></div>
          <div class="rule-tile rule-bad"><span class="big">${r.fail}</span><span>misses end it</span></div>
        </div>
        ${canSpeak ? `<button type="button" class="switch" role="switch" aria-checked="${!!settings.listen}" data-action="listen"><span class="knob"></span>Listening mode: hear each question, text hidden</button>` : ""}
        <button type="button" class="btn btn-primary btn-xl" data-action="test-start">${ic("mic")}Start interview</button>
        ${hist.length ? `<div class="history">
          <span class="history-label">Recent</span>
          ${hist.map((h) => `<span class="history-dot ${h.passed ? "is-pass" : "is-fail"}" title="${h.right} correct, ${h.wrong} incorrect · ${esc(new Date(h.t).toLocaleDateString())}">${ic(h.passed ? "check" : "x")}</span>`).join("")}
        </div>` : ""}
      </section>`;
  }

  function startTest() {
    test.rules = rules();
    test.version = `${settings.version}|${settings.only65}`;
    test.qs = shuffle(activeQs()).slice(0, test.rules.max);
    test.i = 0; test.right = 0; test.wrong = 0; test.log = []; test.revealed = false;
    test.stage = "run";
    renderTest();
  }

  function slots(n, filled, kind) {
    let s = "";
    for (let i = 0; i < n; i++) s += `<span class="slot slot-${kind}${i < filled ? " is-filled" : ""}${i === filled - 1 ? " is-new" : ""}">${ic(kind === "good" ? "star" : "x")}</span>`;
    return s;
  }

  function renderTestRun(body) {
    const q = test.qs[test.i];
    const t = topicOf(q.section);
    const listen = settings.listen && canSpeak && !test.revealed;
    body.innerHTML = `
      <div class="tracker">
        <div class="track"><span class="track-label">To pass</span><div class="slots">${slots(test.rules.pass, test.right, "good")}</div></div>
        <div class="track"><span class="track-label">Misses</span><div class="slots">${slots(test.rules.fail, test.wrong, "bad")}</div></div>
      </div>
      <article class="officer-card${test.revealed ? " is-revealed" : ""}" style="--topic:${t.color}">
        <div class="officer-top">
          <span class="q-count">Question ${test.i + 1}</span>
          ${listen ? "" : topicChip(q)}
        </div>
        ${listen ? `<div class="listening">
            <div class="eq" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
            <p>Listen, then answer out loud</p>
          </div>` : `<p class="officer-q">${esc(q.q)}</p>`}
        ${test.revealed ? `<div class="officer-answers">${answersHTML(q)}</div>` : ""}
        <span class="fc-watermark" aria-hidden="true">${ic(t.icon)}</span>
      </article>
      <div class="test-controls">
        ${test.revealed
          ? `<button type="button" class="btn btn-bad btn-lg" data-action="test-mark" data-ok="0">${ic("x")}I missed it</button>
             <button type="button" class="btn btn-good btn-lg" data-action="test-mark" data-ok="1">${ic("check")}I got it</button>`
          : `${canSpeak ? `<button type="button" class="round round-quiet" data-action="speak-test" aria-label="Read the question aloud">${ic("speaker")}</button>` : ""}
             <button type="button" class="btn btn-primary btn-lg" data-action="test-reveal">${ic("eye")}Show answer</button>`}
      </div>
      <p class="end-early"><button type="button" class="link-btn" data-action="test-end">End interview</button></p>`;
    if (listen) speak(q.q);
    const focusEl = $(test.revealed ? "[data-action=test-mark][data-ok='1']" : "[data-action=test-reveal]", body);
    if (focusEl) focusEl.focus({ preventScroll: true });
  }

  function markTest(correct) {
    const q = test.qs[test.i];
    record(q, correct);
    test.log.push({ q, correct });
    if (correct) test.right++; else test.wrong++;
    test.i++;
    test.revealed = false;
    announce(correct ? `Correct. ${test.right} of ${test.rules.pass}.` : `Missed. ${test.wrong} of ${test.rules.fail}.`);
    if (test.right >= test.rules.pass || test.wrong >= test.rules.fail || test.i >= test.qs.length) finishTest();
    else renderTest();
  }

  function finishTest() {
    stopSpeaking();
    test.stage = "done";
    test.passed = test.right >= test.rules.pass;
    if (test.log.length) {
      const hist = store.get(historyKey(), []);
      hist.push({ t: Date.now(), right: test.right, wrong: test.wrong, passed: test.passed, only65: settings.only65 });
      store.set(historyKey(), hist.slice(-20));
    }
    renderTest();
    if (test.passed) confetti();
  }

  function renderTestDone(body) {
    const missed = test.log.filter((l) => !l.correct).map((l) => l.q);
    const asked = test.log.length;
    body.innerHTML = `
      <section class="result ${test.passed ? "is-pass" : "is-fail"}">
        <div class="seal" aria-hidden="true">${ic(test.passed ? "trophy" : "target")}</div>
        <h1>${test.passed ? "You passed!" : asked ? "Not quite yet" : "Interview ended"}</h1>
        <div class="result-stats">
          <div><strong>${test.right}</strong><span>correct</span></div>
          <div><strong>${test.wrong}</strong><span>missed</span></div>
          <div><strong>${asked}</strong><span>asked</span></div>
        </div>
        <div class="row-center">
          <button type="button" class="btn btn-primary" data-action="test-again">${ic("reset")}Try again</button>
          ${missed.length ? `<button type="button" class="btn btn-quiet" data-action="test-drill">${ic("cards")}Drill missed</button>` : ""}
        </div>
      </section>
      ${missed.length ? `<section class="block">
        <div class="block-head"><h2>Review what you missed</h2></div>
        <div class="q-grid">${missed.map((q) => qCard(q, true)).join("")}</div>
      </section>` : ""}`;
  }

  /* ================= Study guide ================= */

  const study = { term: "", section: "all", hide: false };

  RENDER.study = (view) => {
    const sections = sectionsOf(activeQs());
    if (study.section !== "all" && !sections.includes(study.section)) study.section = "all";
    const chip = (value, label, iconName, color) => `<button type="button" class="filter-chip" data-action="study-topic" data-section="${esc(value)}" aria-pressed="${study.section === value}" style="--topic:${color}">${ic(iconName)}${esc(label)}</button>`;
    view.innerHTML = `
      <div class="page-head">
        <h1 class="page-title">${ic("book")}Study guide</h1>
        <div class="study-tools">
          <label class="search">${ic("search")}<input type="search" id="study-search" placeholder="Search questions or answers" value="${esc(study.term)}" aria-label="Search"></label>
          <button type="button" class="switch" role="switch" aria-checked="${study.hide}" data-action="study-hide"><span class="knob"></span>Quiz me (hide answers)</button>
        </div>
      </div>
      <div class="chip-row">
        ${chip("all", "All topics", "sparkle", "#13285c")}
        ${sections.map((s) => { const t = topicOf(s); return chip(s, t.short, t.icon, t.color); }).join("")}
      </div>
      <p class="count" id="study-count"></p>
      <div class="q-grid" id="study-grid"></div>`;
    $("#study-search", view).addEventListener("input", (e) => { study.term = e.target.value; renderStudyGrid(); });
    renderStudyGrid();
  };

  function qCard(q, review) {
    const t = topicOf(q.section);
    const status = isMastered(q) ? `<span class="mini-chip mini-good">${ic("check")}Mastered</span>`
      : isMissed(q) ? `<span class="mini-chip mini-bad">${ic("reset")}Review</span>` : "";
    const hidden = study.hide && !review;
    return `<article class="q-card" style="--topic:${t.color}">
      <header class="q-card-top">
        <span class="q-icon">${ic(t.icon)}</span>
        <span class="q-num">Q${q.n}</span>
        ${starChip(q)}${review ? "" : status}
        ${canSpeak ? `<button type="button" class="icon-btn" data-action="speak-q" data-n="${q.n}" aria-label="Read aloud">${ic("speaker")}</button>` : ""}
      </header>
      <h3>${esc(q.q)}</h3>
      <div class="q-answers${hidden ? " is-hidden" : ""}"${hidden ? ' data-action="reveal" role="button" tabindex="0" aria-label="Reveal answer"' : ""}>
        ${answersHTML(q)}
        ${hidden ? `<span class="reveal-cta">${ic("eye")}Tap to reveal</span>` : ""}
      </div>
    </article>`;
  }

  function renderStudyGrid() {
    const grid = $("#study-grid");
    if (!grid) return;
    const term = study.term.trim().toLowerCase();
    const qs = activeQs().filter((q) => {
      if (study.section !== "all" && q.section !== study.section) return false;
      if (!term) return true;
      const local = q.local ? mine[q.local] || "" : "";
      return [q.q, ...q.a, local, q.note || ""].join(" ").toLowerCase().includes(term);
    });
    $("#study-count").textContent = `${qs.length} question${qs.length === 1 ? "" : "s"}`;
    grid.innerHTML = qs.length ? qs.map((q) => qCard(q)).join("")
      : `<div class="empty"><span class="empty-art">${ic("search")}</span><h2>No matches</h2><p>Try a different word.</p></div>`;
  }

  /* ================= English: reading & writing ================= */

  const EN = window.ENGLISH_DATA;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  const engKey = () => `usc:english:${settings.profile}`;
  const eng = { mode: "reading", queues: {}, round: {}, rec: null, listening: false, heard: "", micMsg: "" };

  // Normalize a sentence into comparable word tokens ("D.C." -> "dc", "50" -> "fifty").
  function engTokens(s) {
    const out = [];
    s.toLowerCase().replace(/[’'.]/g, "").replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean).forEach((t) => {
      if (t === "50") out.push("fifty");
      else if (t === "100") out.push("one", "hundred");
      else out.push(t);
    });
    return out;
  }

  // Longest-common-subsequence alignment: which tokens of a and b match.
  function lcsMatch(a, b) {
    const n = a.length; const m = b.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
    const ma = new Array(n).fill(false); const mb = new Array(m).fill(false);
    let i = 0; let j = 0;
    while (i < n && j < m) {
      if (a[i] === b[j]) { ma[i] = true; mb[j] = true; i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
    }
    return [ma, mb];
  }

  // Render display words, marking each one by whether all its tokens matched.
  function markedWords(text, matched, okCls, badCls) {
    let k = 0;
    return text.split(/\s+/).filter(Boolean).map((w) => {
      const n = engTokens(w).length;
      const ok = matched ? matched.slice(k, k + n).every(Boolean) : null;
      k += n;
      const cls = ok === null ? "" : ok ? okCls : badCls;
      return `<span class="w ${cls}">${esc(w)}</span>`;
    }).join(" ");
  }

  function engStats() { return Object.assign({ r: { done: 0, passed: 0 }, w: { done: 0, passed: 0 } }, store.get(engKey(), {})); }

  function nextSentence(mode) {
    const list = mode === "reading" ? EN.reading : EN.writing;
    if (!eng.queues[mode] || !eng.queues[mode].length) eng.queues[mode] = shuffle(list);
    return eng.queues[mode].pop();
  }
  const freshWrite = () => ({ typed: "", checked: false, correct: null, first: null, peek: !canSpeak, played: false });
  function newRound(mode) {
    eng.round[mode] = { items: [nextSentence(mode)], results: [], status: "run", w: freshWrite() };
    eng.heard = ""; eng.micMsg = "";
  }
  const curRound = () => { if (!eng.round[eng.mode]) newRound(eng.mode); return eng.round[eng.mode]; };
  const curSentence = () => { const r = curRound(); return r.items[r.items.length - 1]; };

  function engResult(correct) {
    const r = curRound();
    r.results.push(correct);
    stopListening();
    stopSpeaking();
    if (correct) r.status = "pass";
    else if (r.results.length >= 3) r.status = "fail";
    else { r.items.push(nextSentence(eng.mode)); r.w = freshWrite(); eng.heard = ""; eng.micMsg = ""; }
    if (r.status !== "run") {
      const s = engStats();
      const k = eng.mode === "reading" ? "r" : "w";
      s[k].done++;
      if (r.status === "pass") s[k].passed++;
      store.set(engKey(), s);
      if (r.status === "pass") confetti();
    }
    renderEngBody();
  }

  function stopListening() {
    if (eng.rec) { try { eng.rec.abort(); } catch (e) { /* ignore */ } }
    eng.rec = null;
    eng.listening = false;
  }

  function toggleListening() {
    if (!SR) return;
    if (eng.listening) { if (eng.rec) eng.rec.stop(); return; }
    stopSpeaking();
    const rec = new SR();
    rec.lang = "en-US";
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    eng.rec = rec; eng.listening = true; eng.heard = ""; eng.micMsg = "";
    rec.onresult = (e) => {
      let t = "";
      for (let i = 0; i < e.results.length; i++) t += e.results[i][0].transcript;
      eng.heard = t;
      renderEngBody();
    };
    rec.onerror = (e) => {
      eng.micMsg = e.error === "not-allowed" || e.error === "service-not-allowed"
        ? "Microphone access is blocked. Allow it in your browser, or grade yourself below."
        : e.error === "no-speech" ? "We didn't hear anything. Try again." : "Speech check isn't available right now. Grade yourself below.";
    };
    rec.onend = () => { eng.listening = false; eng.rec = null; renderEngBody(); };
    try { rec.start(); } catch (err) { eng.listening = false; eng.rec = null; }
    renderEngBody();
  }

  RENDER.english = (view) => {
    const tabs = [["reading", "Reading", "book"], ["writing", "Writing", "pen"], ["words", "Word lists", "sparkle"]];
    view.innerHTML = `
      <div class="page-head">
        <h1 class="page-title">${ic("pen")}Reading &amp; writing</h1>
        <div class="eng-stats" id="eng-stats"></div>
      </div>
      <div class="seg seg-wide" role="tablist" aria-label="English test practice">
        ${tabs.map(([id, label, icon]) => `<button type="button" role="tab" aria-selected="${eng.mode === id}" aria-checked="${eng.mode === id}" data-action="eng-mode" data-mode="${id}">${ic(icon)}${label}</button>`).join("")}
      </div>
      <div id="eng-body"></div>`;
    renderEngBody();
  };

  function roundHead(r, verb) {
    const dots = [0, 1, 2].map((i) => {
      const res = r.results[i];
      const cls = res === true ? "is-good" : res === false ? "is-bad" : i === r.results.length && r.status === "run" ? "is-current" : "";
      return `<span class="rdot ${cls}">${res === true ? ic("check") : res === false ? ic("x") : i + 1}</span>`;
    }).join("");
    return `<div class="round-head"><div class="rdots">${dots}</div><span>${verb} <b>1 of 3</b> sentences correctly to pass</span></div>`;
  }

  function renderEngBody() {
    const body = $("#eng-body");
    if (!body) return;
    const st = engStats();
    $("#eng-stats").innerHTML = `<span class="eng-stat">${ic("book")}<b>${st.r.passed}</b> reading rounds passed</span>
      <span class="eng-stat">${ic("pen")}<b>${st.w.passed}</b> writing rounds passed</span>`;
    $$("[data-action=eng-mode]").forEach((b) => {
      const on = b.dataset.mode === eng.mode;
      b.setAttribute("aria-selected", String(on)); b.setAttribute("aria-checked", String(on));
    });
    if (eng.mode === "words") return renderWords(body);
    const r = curRound();
    if (r.status !== "run") return renderRoundDone(body, r);
    if (eng.mode === "reading") renderReading(body, r); else renderWriting(body, r);
  }

  function renderReading(body, r) {
    const sentence = curSentence();
    let matched = null;
    if (eng.heard) matched = lcsMatch(engTokens(sentence), engTokens(eng.heard))[0];
    const allHeard = matched && matched.every(Boolean);
    body.innerHTML = `
      ${roundHead(r, "Read")}
      <article class="paper paper-read">
        <span class="paper-tag">${ic("book")}Read this sentence out loud</span>
        <p class="read-line">${markedWords(sentence, matched, "w-ok", "w-miss")}</p>
        ${eng.listening ? `<div class="listening-inline"><div class="eq" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>Listening…</div>` : ""}
        ${eng.heard ? `<p class="heard">${ic(allHeard ? "check" : "eye")}<span>We heard: “${esc(eng.heard)}”${allHeard ? " · every word matched!" : ""}</span></p>` : ""}
        ${eng.micMsg ? `<p class="heard heard-warn">${esc(eng.micMsg)}</p>` : ""}
      </article>
      <div class="eng-controls">
        ${canSpeak ? `<button type="button" class="btn btn-quiet" data-action="eng-hear">${ic("speaker")}Hear it</button>` : ""}
        ${SR ? `<button type="button" class="btn btn-mic${eng.listening ? " is-on" : ""}" data-action="eng-mic">${ic("mic")}${eng.listening ? "Stop" : "Check my reading"}</button>` : ""}
      </div>
      <div class="eng-grade">
        <button type="button" class="btn btn-bad btn-lg" data-action="eng-grade" data-ok="0">${ic("x")}Not yet</button>
        <button type="button" class="btn btn-good btn-lg${allHeard ? " is-glow" : ""}" data-action="eng-grade" data-ok="1">${ic("check")}I read it correctly</button>
      </div>
      ${SR ? `<p class="fine">“Check my reading” uses your browser's speech recognition, which may send your audio to the browser maker to turn it into text.</p>` : ""}`;
  }

  function writingFeedback(sentence, w) {
    const exp = engTokens(sentence);
    const got = engTokens(w.typed);
    const [me, mg] = lcsMatch(exp, got);
    let tip = "";
    if (w.correct) {
      const typedWords = new Set(w.typed.replace(/[.,!?]/g, " ").split(/\s+/));
      const caps = sentence.replace(/[.,!?]/g, " ").split(/\s+/).filter((x) => /^[A-Z]/.test(x) && !typedWords.has(x));
      if (caps.length) tip = `<p class="fb-tip">${ic("sparkle")}Tip: start ${caps.map((c) => `<b>${esc(c)}</b>`).join(", ")} with a capital letter.</p>`;
    }
    return `<div class="feedback ${w.correct ? "is-ok" : "is-bad"}">
      <strong class="fb-title">${ic(w.correct ? "check" : "x")}${w.correct ? "Perfect!" : "Not quite"}</strong>
      <p class="fb-line"><span class="fb-label">Sentence</span><span>${markedWords(sentence, me, "", "w-miss")}</span></p>
      ${w.correct ? "" : `<p class="fb-line"><span class="fb-label">You wrote</span><span>${w.typed.trim() ? markedWords(w.typed, mg, "", "w-extra") : "<em>nothing yet</em>"}</span></p>`}
      ${tip}
    </div>`;
  }

  function renderWriting(body, r) {
    const sentence = curSentence();
    const w = r.w;
    body.innerHTML = `
      ${roundHead(r, "Write")}
      <article class="paper paper-write">
        <span class="paper-tag">${ic("pen")}Listen, then write the sentence</span>
        ${canSpeak ? `<div class="dictate">
          <button type="button" class="play-btn" data-action="eng-play" aria-label="Play the sentence">${ic("speaker")}</button>
          <div class="dictate-text"><strong>Play sentence</strong><span>Tap to hear it again</span></div>
          <button type="button" class="chip-btn" data-action="eng-slow">Slower</button>
          <button type="button" class="chip-btn" data-action="eng-peek" aria-pressed="${w.peek}">${ic("eye")}${w.peek ? "Hide" : "Peek"}</button>
        </div>` : `<p class="fine">Your browser can't read aloud. Ask a partner to read the sentence to you, or use Peek.</p>
          <button type="button" class="chip-btn" data-action="eng-peek" aria-pressed="${w.peek}">${ic("eye")}${w.peek ? "Hide" : "Peek"}</button>`}
        ${w.peek ? `<p class="peek-line">${esc(sentence)}</p>` : ""}
        <textarea id="eng-input" class="lined" rows="2" maxlength="160" placeholder="Type what you hear" autocomplete="off" autocapitalize="sentences" autocorrect="off" spellcheck="false" aria-label="Your sentence" ${w.checked ? "readonly" : ""}>${esc(w.typed)}</textarea>
        ${w.checked ? writingFeedback(sentence, w) : ""}
      </article>
      <div class="eng-grade">
        ${w.checked
          ? `${w.correct ? "" : `<button type="button" class="btn btn-quiet btn-lg" data-action="eng-retry">${ic("reset")}Try again</button>`}
             <button type="button" class="btn btn-primary btn-lg" data-action="eng-next">${w.first ? "Finish round" : "Next sentence"}${ic("arrow")}</button>`
          : `<button type="button" class="btn btn-primary btn-lg" data-action="eng-check">${ic("check")}Check</button>`}
      </div>`;
    const input = $("#eng-input", body);
    input.addEventListener("input", (e) => { w.typed = e.target.value; });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); if (!w.checked) ACTIONS["eng-check"](); }
    });
    if (!w.checked && window.matchMedia("(hover: hover)").matches) input.focus({ preventScroll: true });
    if (canSpeak && !w.played) { w.played = true; setTimeout(() => { if (current === "english" && eng.mode === "writing") speak(sentence); }, 350); }
  }

  function renderRoundDone(body, r) {
    const pass = r.status === "pass";
    const reading = eng.mode === "reading";
    const s = engStats();
    const k = reading ? "r" : "w";
    body.innerHTML = `
      ${roundHead(r, reading ? "Read" : "Write")}
      <section class="result ${pass ? "is-pass" : "is-fail"} result-compact">
        <div class="seal" aria-hidden="true">${ic(pass ? (reading ? "book" : "pen") : "target")}</div>
        <h2>${pass ? `${reading ? "Reading" : "Writing"} round passed!` : "Not this round"}</h2>
        <p class="lead">${pass ? `You got it on sentence ${r.results.length} of 3.` : "Practice makes perfect. Try a new set of sentences."}</p>
        <p class="fine">${s[k].passed} of ${s[k].done} ${reading ? "reading" : "writing"} rounds passed so far</p>
        <button type="button" class="btn btn-primary btn-lg" data-action="eng-round">${ic("reset")}Next round</button>
      </section>`;
  }

  function renderWords(body) {
    const list = (title, iconName, vocab, url) => `
      <section class="word-list">
        <div class="word-list-head"><span class="blob">${ic(iconName)}</span><h2>${title}</h2>
          <a class="lookup" href="${esc(url)}" target="_blank" rel="noopener">${ic("link")}USCIS list</a></div>
        <div class="cat-grid">
          ${vocab.map(([cat, words]) => `<div class="cat"><h3>${esc(cat)}</h3><div class="word-chips">
            ${words.map((wd) => `<button type="button" class="word" data-action="eng-word" data-word="${esc(wd.replace(/\//g, ", "))}">${esc(wd)}</button>`).join("")}
          </div></div>`).join("")}
        </div>
      </section>`;
    body.innerHTML = `
      <p class="words-intro">${ic("speaker")}Every sentence on the real test uses only these official words.${canSpeak ? " Tap a word to hear it." : ""}</p>
      <div class="word-lists">
        ${list("Reading words", "book", EN.readingVocab, EN.sources.reading)}
        ${list("Writing words", "pen", EN.writingVocab, EN.sources.writing)}
      </div>
      <p class="fine center">Practice sentences in this app are written from these lists. USCIS doesn't publish the actual test sentences.</p>`;
  }

  /* ================= My info ================= */

  function officialRole(q) {
    if (/Vice President/.test(q.q)) return { role: "Vice President", icon: "star" };
    if (/political party/.test(q.q)) return { role: "President's party", icon: "flag" };
    if (/President/.test(q.q)) return { role: "President", icon: "flag" };
    if (/Speaker/.test(q.q)) return { role: "Speaker of the House", icon: "capitol" };
    if (/Chief Justice/.test(q.q)) return { role: "Chief Justice", icon: "gavel" };
    if (/justices/.test(q.q)) return { role: "Supreme Court justices", icon: "scales" };
    return { role: q.q, icon: "doc" };
  }

  RENDER.me = (view) => {
    const officials = allQs().filter((q) => q.updates).map((q) => {
      const o = officialRole(q);
      return `<div class="official">
        <span class="official-icon">${ic(o.icon)}</span>
        <span class="official-role">${esc(o.role)}</span>
        <strong class="official-name">${esc(q.a[0])}</strong>
        ${q.a.length > 1 ? `<span class="official-alt">Also: ${esc(q.a.slice(1).join(", "))}</span>` : ""}
      </div>`;
    }).join("");
    const placeOptions = (list) => list.map(([n]) => `<option${mine.state === n ? " selected" : ""}>${esc(n)}</option>`).join("");

    view.innerHTML = `
      <div class="page-head"><h1 class="page-title">${ic("user")}My info</h1></div>

      <section class="block">
        <div class="block-head"><h2>Who's practicing?</h2><span class="block-sub">Each person keeps their own progress</span></div>
        <div class="people">
          ${profiles.map((p) => `<button type="button" class="person" data-action="profile" data-name="${esc(p)}" aria-pressed="${p === settings.profile}">
            <span class="avatar avatar-lg" style="--av:${avatarColor(p)}">${initial(p)}</span><span class="person-name">${esc(p)}</span>
          </button>`).join("")}
          <button type="button" class="person person-add" data-action="profile-add"><span class="avatar avatar-lg avatar-add">${ic("plus")}</span><span class="person-name">Add</span></button>
        </div>
      </section>

      <section class="block">
        <div class="block-head"><h2>Where you live</h2><span class="block-sub">Answers that depend on you · saved only on this device</span></div>
        <label class="select-wrap select-lg">${ic("pin")}<select id="mine-state" aria-label="Your state or territory">
          <option value="">Choose your state or territory</option>
          <optgroup label="States">${placeOptions(PLACES)}</optgroup>
          <optgroup label="Washington, D.C.">${placeOptions([[DC]])}</optgroup>
          <optgroup label="Territories">${placeOptions(TERRITORIES)}</optgroup>
        </select></label>
        <div class="local-grid">
          ${LOCAL_FIELDS.map((f) => `<label class="local-card">
            <span class="local-head"><span class="blob">${ic(f.icon)}</span><span>${esc(f.label)}</span></span>
            <input type="text" id="mine-${f.key}" value="${esc(mine[f.key] || "")}" autocomplete="off" maxlength="120" placeholder="${f.key === "capital" ? "Pick your state above" : "Type the name"}">
            ${f.link ? `<a class="lookup" href="${f.link}" target="_blank" rel="noopener">${ic("search")}Look up on ${f.site}</a>` : `<span class="lookup lookup-auto">${ic("sparkle")}Filled in from your state</span>`}
          </label>`).join("")}
        </div>
        <p class="saved" id="mine-saved" aria-live="polite"></p>
      </section>

      <section class="block">
        <div class="block-head"><h2>Current officials</h2>
          <span class="block-sub">From USCIS, updated ${esc(META.testUpdatesLastUpdated)} · <a href="${esc(META.testUpdatesUrl)}" target="_blank" rel="noopener">check before your interview</a></span>
        </div>
        <div class="official-grid">${officials}</div>
      </section>

      <section class="block danger">
        <button type="button" class="btn btn-quiet" data-action="reset">${ic("reset")}Reset ${esc(settings.version)} progress for ${esc(settings.profile)}</button>
      </section>`;

    $("#mine-state", view).addEventListener("change", (e) => {
      const name = e.target.value;
      mine.state = name;
      const place = [...PLACES, ...TERRITORIES].find((p) => p[0] === name);
      if (name === DC) Object.assign(mine, DC_ANSWERS);
      else {
        Object.entries(DC_ANSWERS).forEach(([k, v]) => { if (mine[k] === v) mine[k] = ""; });
        if (place) mine.capital = place[1];
        if (TERRITORIES.some((p) => p[0] === name) && !mine.senator) mine.senator = `${name} has no U.S. senators`;
      }
      LOCAL_FIELDS.forEach((f) => { $(`#mine-${f.key}`).value = mine[f.key] || ""; });
      saveMine();
    });
    LOCAL_FIELDS.forEach((f) => {
      $(`#mine-${f.key}`, view).addEventListener("input", (e) => { mine[f.key] = e.target.value.slice(0, 120); saveMine(); });
    });
  };

  let saveTimer = null;
  function saveMine() {
    store.set(localKey(), mine);
    const n = $("#mine-saved");
    if (!n) return;
    n.innerHTML = `${ic("check")}Saved on this device`;
    n.classList.add("is-on");
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => n.classList.remove("is-on"), 1800);
  }

  /* ================= Actions (event delegation) ================= */

  function switchProfile(name) {
    settings.profile = name;
    saveSettings();
    reload();
    deck.cards = [];
    test.stage = "start";
    eng.round = {};
    renderAvatar();
    show(current);
  }

  const ACTIONS = {
    version(btn) {
      settings.version = btn.dataset.v; saveSettings(); reload();
      deck.cards = []; deck.section = "all"; study.section = "all"; test.stage = "start";
      show(current);
    },
    only65() {
      settings.only65 = !settings.only65; saveSettings();
      deck.cards = []; deck.section = "all"; test.stage = "start";
      show(current);
    },
    topic(btn) { go("cards", { section: btn.dataset.section }); },
    "deck-mode"(btn) { deck.mode = btn.dataset.mode; deck.section = deck.mode === "missed" ? deck.section : deck.section; show("cards", { fresh: true }); },
    "deck-new"() { show("cards", { fresh: true }); },
    "deck-missed"() { show("cards", { only: deck.missed.slice() }); },
    flip() { flipCard(); },
    grade(btn) { gradeCard(btn.dataset.ok === "1"); },
    "speak-card"() { if (deck.cards[deck.i]) speak(deck.cards[deck.i].q); },
    listen(btn) {
      settings.listen = !settings.listen; saveSettings();
      btn.setAttribute("aria-checked", String(settings.listen));
    },
    "test-start"() { startTest(); },
    "test-reveal"() { test.revealed = true; stopSpeaking(); renderTest(); },
    "test-mark"(btn) { markTest(btn.dataset.ok === "1"); },
    "speak-test"() { if (test.qs[test.i]) speak(test.qs[test.i].q); },
    "test-end"() { finishTest(); },
    "test-again"() { test.stage = "start"; renderTest(); },
    "test-drill"() { go("cards", { only: test.log.filter((l) => !l.correct).map((l) => l.q) }); },
    "study-topic"(btn) { study.section = btn.dataset.section; $$(".filter-chip").forEach((c) => c.setAttribute("aria-pressed", String(c === btn))); renderStudyGrid(); },
    "study-hide"(btn) { study.hide = !study.hide; btn.setAttribute("aria-checked", String(study.hide)); renderStudyGrid(); },
    reveal(el) { el.classList.remove("is-hidden"); el.removeAttribute("role"); el.removeAttribute("tabindex"); el.removeAttribute("data-action"); const cta = $(".reveal-cta", el); if (cta) cta.remove(); },
    "speak-q"(btn) { const q = allQs().find((x) => x.n === Number(btn.dataset.n)); if (q) speak(q.q); },
    profile(btn) { switchProfile(btn.dataset.name); },
    "profile-add"() {
      const dlg = $("#profile-dialog");
      $("#profile-form").reset();
      if (dlg.showModal) dlg.showModal(); else {
        const name = (window.prompt("Name") || "").trim().slice(0, 24);
        if (name) addProfile(name);
      }
    },
    "eng-open"(el) { eng.mode = el.dataset.mode; },
    "eng-mode"(btn) { stopListening(); stopSpeaking(); eng.mode = btn.dataset.mode; eng.heard = ""; eng.micMsg = ""; renderEngBody(); },
    "eng-hear"() { stopListening(); speak(curSentence(), null, 0.85); },
    "eng-mic"() { toggleListening(); },
    "eng-grade"(btn) { engResult(btn.dataset.ok === "1"); },
    "eng-play"() { speak(curSentence()); },
    "eng-slow"() { speak(curSentence(), null, 0.6); },
    "eng-peek"() { const w = curRound().w; w.peek = !w.peek; renderEngBody(); },
    "eng-check"() {
      const w = curRound().w;
      const input = $("#eng-input");
      if (input) w.typed = input.value;
      if (!w.typed.trim()) { if (input) input.focus(); return; }
      const a = engTokens(curSentence()); const b = engTokens(w.typed);
      w.correct = a.length === b.length && a.every((t, i) => t === b[i]);
      if (w.first === null) w.first = w.correct;
      w.checked = true;
      announce(w.correct ? "Correct" : "Not quite");
      renderEngBody();
    },
    "eng-retry"() { const w = curRound().w; w.checked = false; w.correct = null; w.typed = ""; renderEngBody(); },
    "eng-next"() { engResult(curRound().w.first === true); },
    "eng-round"() { newRound(eng.mode); renderEngBody(); },
    "eng-word"(btn) { speak(btn.dataset.word, null, 0.8); },
    reset() {
      if (!window.confirm(`Reset ${settings.version} test progress, interview history, and reading/writing results for ${settings.profile}?`)) return;
      store.remove(progressKey()); store.remove(historyKey()); store.remove(engKey()); eng.round = {}; reload();
      deck.cards = []; test.stage = "start";
      show(current);
    },
  };

  document.addEventListener("click", (e) => {
    const goBtn = e.target.closest("[data-go]");
    if (goBtn) { go(goBtn.dataset.go); return; }
    const el = e.target.closest("[data-action]");
    if (!el || el.disabled) return;
    const fn = ACTIONS[el.dataset.action];
    if (fn) fn(el, e);
  });
  document.addEventListener("keydown", (e) => {
    const el = e.target.closest && e.target.closest("[data-action=reveal]");
    if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); ACTIONS.reveal(el); }
  });

  function addProfile(name) {
    if (!profiles.includes(name)) profiles.push(name);
    store.set("usc:profiles", profiles);
    switchProfile(name);
  }
  $("#profile-form").addEventListener("submit", (e) => {
    const name = (new FormData(e.target).get("name") || "").toString().trim().slice(0, 24);
    if (name) addProfile(name);
  });
  $("#profile-cancel").addEventListener("click", () => $("#profile-dialog").close());

  /* ================= Boot ================= */

  renderNav();
  window.addEventListener("hashchange", route);
  route();
})();
