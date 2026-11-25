const APPS = [
  {
    id: "nova-linx",
    name: "Nova Linx",
    category: "Assistant",
    blurb: "Your fast, friendly AI assistant for chat, homework, pictures and voice.",
    description:
      "Nova Linx is a free AI chat assistant from Pixal Pulse Studio. Ask anything, get homework and math help, create pictures and videos, build apps, and talk by voice.",
    icon: "icons/apps/nova-linx.png",
    screenshots: [
      { src: "screenshots/nova-linx/phone-home.webp", alt: "Nova Linx home screen on a phone", form: "phone" },
      { src: "screenshots/nova-linx/phone-menu.webp", alt: "Nova Linx side menu and Explore", form: "phone" },
      { src: "screenshots/nova-linx/phone-images.webp", alt: "Nova Linx Images, with picture templates", form: "phone" },
      { src: "screenshots/nova-linx/desktop-home.webp", alt: "Nova Linx on a computer", form: "desktop" },
    ],
    action: { label: "Open", href: "https://lumenaiassistant.com", type: "open" },
    secondary: { label: "Get Android app", href: "https://lumenaiassistant.com/download/nova-linx.apk", type: "download" },
    featured: true,
    isNew: false,
    showApi: true,
  },
  {
    id: "nova-linx-android",
    name: "Nova Linx for Android",
    category: "Android",
    blurb: "The full Nova Linx app for your phone, with a home-screen widget.",
    description:
      "Download the official Nova Linx APK for Android 7.0 and up. Install the app, then add the home-screen widget: tap the N to ask, tap the wave for voice. A desktop app is also listed on the download page.",
    icon: "icons/apps/nova-linx-android.png",
    screenshots: [
      { src: "screenshots/nova-linx-android/phone-top.webp", alt: "Download page for the Android app", form: "phone" },
      { src: "screenshots/nova-linx-android/phone-computers.webp", alt: "Windows, Linux and Mac downloads", form: "phone" },
      { src: "screenshots/nova-linx-android/desktop-top.webp", alt: "Download page on a computer", form: "desktop" },
    ],
    action: { label: "Download", href: "https://lumenaiassistant.com/download/nova-linx.apk", type: "download" },
    secondary: { label: "Download page", href: "https://lumenaiassistant.com/download", type: "open" },
    featured: false,
    isNew: false,
  },
  {
    id: "nova-linx-keypad",
    name: "Nova Linx keypad",
    category: "Tools",
    blurb: "A simple Nova Linx made for feature phones and basic browsers.",
    description:
      "The keypad edition is a lighter version of Nova Linx for feature phones and older browsers. Type a question, press Send, and move through the menu with numbered keys.",
    icon: "icons/apps/nova-linx-keypad.png",
    screenshots: [
      { src: "screenshots/nova-linx-keypad/phone-home.webp", alt: "Nova Linx keypad chat screen", form: "phone" },
      { src: "screenshots/nova-linx-keypad/phone-menu.webp", alt: "Nova Linx keypad numbered menu", form: "phone" },
      { src: "screenshots/nova-linx-keypad/phone-settings.webp", alt: "Nova Linx keypad settings", form: "phone" },
      { src: "screenshots/nova-linx-keypad/desktop-home.webp", alt: "Nova Linx keypad on a computer", form: "desktop" },
    ],
    action: { label: "Open", href: "https://lumenaiassistant.com/lite", type: "open" },
    featured: false,
    isNew: false,
  },
  {
    id: "nova-linx-link",
    name: "Keypad code sign-in",
    category: "Tools",
    blurb: "Enter a keypad code to sign in to Nova Linx Lite on another phone.",
    description:
      "Sign in on this device, then enter the code shown on the keypad. Use the same Nova Linx account you use in the app to link a feature-phone session.",
    icon: "icons/apps/nova-linx-link.png",
    screenshots: [
      { src: "screenshots/nova-linx-link/phone-home.webp", alt: "Keypad code sign-in on a phone", form: "phone" },
      { src: "screenshots/nova-linx-link/desktop-home.webp", alt: "Keypad code sign-in on a computer", form: "desktop" },
    ],
    action: { label: "Open", href: "https://lumenaiassistant.com/link", type: "open" },
    featured: false,
    isNew: false,
  },
  {
    id: "nova-linx-api",
    name: "Nova Linx API keys",
    category: "Developer",
    blurb: "Create API keys and add Nova chat, pictures and video to your own apps.",
    description:
      "Open the developer page to create a personal API key. Keys belong to your Nova Linx account. Calls made with a key use your plan and your daily limits.",
    icon: "icons/apps/nova-linx-api.png",
    screenshots: [
      { src: "screenshots/nova-linx-api/phone-keys.webp", alt: "API keys page on a phone", form: "phone" },
      { src: "screenshots/nova-linx-api/phone-quickstart.webp", alt: "API Quickstart guide on a phone", form: "phone" },
      { src: "screenshots/nova-linx-api/desktop-quickstart.webp", alt: "API Quickstart guide on a computer", form: "desktop" },
      { src: "screenshots/nova-linx-api/desktop-chat.webp", alt: "API Chat documentation on a computer", form: "desktop" },
    ],
    action: { label: "Get API key", href: "https://lumenaiassistant.com/developers", type: "open" },
    featured: false,
    isNew: false,
  },
  {
    id: "nova-code",
    name: "Nova Code",
    category: "Developer",
    blurb: "A browser code editor with live preview for the web and Python.",
    description:
      "Nova Code is a browser IDE from Nova Linx. Edit HTML, CSS, JavaScript and Python, preview live, run your project, and get help as you go. Works on phones, computers and TV browsers.",
    icon: "icons/apps/nova-code.png",
    screenshots: [
      { src: "screenshots/nova-code/phone-code.webp", alt: "Nova Code editor on a phone", form: "phone" },
      { src: "screenshots/nova-code/phone-preview.webp", alt: "Nova Code live preview on a phone", form: "phone" },
      { src: "screenshots/nova-code/phone-files.webp", alt: "Nova Code files and projects on a phone", form: "phone" },
      { src: "screenshots/nova-code/desktop-code.webp", alt: "Nova Code editor and preview on a computer", form: "desktop" },
    ],
    action: { label: "Open", href: "https://lumenaiassistant.com/novacode", type: "open" },
    featured: false,
    isNew: true,
  },
  {
    id: "animesoul",
    name: "AnimeSoul",
    category: "Entertainment",
    blurb: "Create and chat with anime characters, stories and places.",
    description:
      "AnimeSoul is a place to discover and talk with anime characters, step into stories and locations, and create your own character with a personality and speaking style. Public or private — you choose.",
    icon: "icons/apps/animesoul.png",
    screenshots: [
      { src: "screenshots/animesoul/phone-foryou.webp", alt: "AnimeSoul For You discover page", form: "phone" },
      { src: "screenshots/animesoul/phone-ranking.webp", alt: "AnimeSoul trending ranking", form: "phone" },
      { src: "screenshots/animesoul/phone-stories.webp", alt: "AnimeSoul stories", form: "phone" },
      { src: "screenshots/animesoul/phone-places.webp", alt: "AnimeSoul places you can enter", form: "phone" },
    ],
    action: { label: "Open", href: "https://animesoul.onrender.com", type: "open" },
    featured: false,
    isNew: true,
  },
];

const CATEGORIES = ["All", "Assistant", "Android", "Tools", "Developer", "Entertainment"];

const els = {
  search: document.getElementById("search"),
  chips: document.getElementById("chips"),
  grid: document.getElementById("grid"),
  newRow: document.getElementById("new-row"),
  newSection: document.getElementById("new-section"),
  catalog: document.getElementById("catalog"),
  developers: document.getElementById("developers"),
  featured: document.getElementById("featured"),
  hero: document.getElementById("hero"),
  empty: document.getElementById("empty"),
  modal: document.getElementById("modal"),
  sheet: document.getElementById("modal-sheet"),
  lightbox: document.getElementById("lightbox"),
};

let category = "All";
let lastFocus = null;
let lbShots = [];
let lbIndex = 0;
let lbStartX = 0;

function actionAttrs(action) {
  const extra = action.type === "download" ? " download" : "";
  return `class="card-cta${action.type === "download" ? " download" : ""}" href="${action.href}" target="_blank" rel="noopener noreferrer"${extra}`;
}

function btnClass(action, primary) {
  return `btn ${primary ? "btn-primary" : "btn-ghost"}`;
}

function actionButton(action, primary) {
  if (!action) return "";
  const extra = action.type === "download" ? " download" : "";
  return `<a class="${btnClass(action, primary)}" href="${action.href}" target="_blank" rel="noopener noreferrer"${extra}>${escapeHtml(action.label)}</a>`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cardHTML(app, { compact } = {}) {
  const badge = app.isNew ? `<span class="badge">New</span>` : "";
  const api = app.showApi
    ? `<a class="card-cta api" href="https://lumenaiassistant.com/developers" target="_blank" rel="noopener noreferrer">Get API key</a>`
    : "";
  return `
    <article class="card" role="listitem" tabindex="0" data-id="${app.id}" aria-label="${escapeHtml(app.name)}">
      ${badge}
      <img class="icon" src="${app.icon}" alt="" width="68" height="68">
      <h3>${escapeHtml(app.name)}</h3>
      <div class="cat">${escapeHtml(app.category)}</div>
      <p class="blurb">${escapeHtml(app.blurb)}</p>
      <div class="cta">
        <a ${actionAttrs(app.action)}>${escapeHtml(app.action.label)}</a>
        ${api}
      </div>
    </article>`;
}

function matches(app, q, cat) {
  if (cat && cat !== "All" && app.category !== cat) return false;
  if (!q) return true;
  const hay = `${app.name} ${app.category} ${app.blurb} ${app.description}`.toLowerCase();
  return hay.includes(q);
}

function render() {
  const q = (els.search.value || "").trim().toLowerCase();
  const filtering = Boolean(q) || category !== "All";
  const visible = APPS.filter((a) => matches(a, q, category));

  els.hero.hidden = filtering;
  els.newSection.hidden = filtering;
  if (els.developers) els.developers.hidden = filtering;
  els.empty.classList.toggle("visible", visible.length === 0);

  if (!filtering) {
    const fresh = APPS.filter((a) => a.isNew);
    els.newRow.innerHTML = fresh.map((a) => cardHTML(a)).join("");
  }

  els.grid.innerHTML = visible.map((a) => cardHTML(a)).join("");
  document.getElementById("result-count").textContent =
    filtering ? `${visible.length} app${visible.length === 1 ? "" : "s"}` : "All apps";
  observeCards();
}

function shotsOf(app) {
  return app.screenshots || [];
}

function openModal(app) {
  lastFocus = document.activeElement;
  const secondary = actionButton(app.secondary, false);
  const apiBtn = app.showApi
    ? `<a class="btn btn-api" href="https://lumenaiassistant.com/developers" target="_blank" rel="noopener noreferrer">Get API key</a>`
    : "";
  const shots = shotsOf(app);
  const gallery = shots.map((s, i) => {
    const alt = escapeHtml(s.alt || `${app.name} screenshot ${i + 1}`);
    const form = s.form === "desktop" ? "desktop" : "phone";
    return `<figure class="device ${form}" role="listitem" tabindex="0" data-app="${app.id}" data-index="${i}" aria-label="${alt}">
      <img src="${s.src}" alt="${alt}" loading="lazy">
    </figure>`;
  }).join("");
  els.sheet.innerHTML = `
    <button class="modal-close" type="button" id="modal-close" aria-label="Close">×</button>
    <div class="modal-head">
      <img src="${app.icon}" alt="" width="84" height="84">
      <div>
        <h2 id="modal-title">${escapeHtml(app.name)}</h2>
        <div class="cat">${escapeHtml(app.category)}${app.isNew ? " · New" : ""}</div>
      </div>
    </div>
    <div class="actions" style="margin-bottom:16px">
      ${actionButton(app.action, true)}
      ${apiBtn}
      ${secondary}
    </div>
    <p class="modal-desc">${escapeHtml(app.description)}</p>
    ${shots.length ? `<h3 class="shots-title">Screenshots</h3>
    <div class="shots" role="list" aria-label="Screenshots of ${escapeHtml(app.name)}">${gallery}</div>` : ""}
  `;
  els.modal.hidden = false;
  document.body.classList.add("modal-open");
  history.replaceState(null, "", `#app=${app.id}`);
  const closeBtn = document.getElementById("modal-close");
  closeBtn.focus();
}

function closeModal() {
  els.modal.hidden = true;
  document.body.classList.remove("modal-open");
  if (location.hash.startsWith("#app=")) history.replaceState(null, "", location.pathname + location.search);
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

function openFromHash() {
  const id = (location.hash.match(/app=([a-z0-9-]+)/i) || [])[1];
  const app = APPS.find((a) => a.id === id);
  if (app) openModal(app);
  else if (!els.modal.hidden) closeModal();
}

function renderLightbox() {
  const s = lbShots[lbIndex];
  if (!s) return;
  const n = lbShots.length;
  const form = s.form === "desktop" ? "desktop" : "phone";
  const alt = escapeHtml(s.alt || "Screenshot");
  const nav = n > 1;
  els.lightbox.innerHTML = `
    <button type="button" class="lb-close" aria-label="Close">×</button>
    ${nav ? '<button type="button" class="lb-nav lb-prev" aria-label="Previous screenshot">‹</button>' : ""}
    <figure class="lb-frame ${form}">
      <img src="${s.src}" alt="${alt}">
      <figcaption>${lbIndex + 1} of ${n}${s.alt ? " · " + escapeHtml(s.alt) : ""}</figcaption>
    </figure>
    ${nav ? '<button type="button" class="lb-nav lb-next" aria-label="Next screenshot">›</button>' : ""}
  `;
}

function openLightbox(app, index) {
  lbShots = shotsOf(app);
  if (!lbShots.length) return;
  lbIndex = Math.max(0, Math.min(index, lbShots.length - 1));
  renderLightbox();
  els.lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  const closeBtn = els.lightbox.querySelector(".lb-close");
  if (closeBtn) closeBtn.focus();
}

function closeLightbox() {
  els.lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
}

function moveLightbox(dir) {
  if (!lbShots.length) return;
  lbIndex = (lbIndex + dir + lbShots.length) % lbShots.length;
  renderLightbox();
  const btn = els.lightbox.querySelector(dir > 0 ? ".lb-next" : ".lb-prev");
  if (btn) btn.focus();
}

function focusShot(current, dir) {
  const items = [...(current.parentElement?.querySelectorAll(".device") || [])];
  const i = items.indexOf(current);
  if (i < 0) return;
  const next = items[(i + dir + items.length) % items.length];
  next.focus({ preventScroll: false });
  next.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
}


const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let cardObserver = null;

function observeCards() {
  if (cardObserver) cardObserver.disconnect();
  const nodes = document.querySelectorAll(".card, .reveal");
  if (reduceMotion) {
    nodes.forEach((el) => el.classList.add("in-view"));
    return;
  }
  cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        cardObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  nodes.forEach((el, i) => {
    el.style.setProperty("--stagger", `${(i % 8) * 55}ms`);
    cardObserver.observe(el);
  });
}

function spawnRipple(e, target) {
  if (reduceMotion) return;
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  const size = Math.max(rect.width, rect.height) * 1.8;
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
  target.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

function onActivateCard(target) {
  const card = target.closest(".card");
  if (!card) return;
  const app = APPS.find((a) => a.id === card.dataset.id);
  if (app) openModal(app);
}

els.chips.innerHTML = CATEGORIES.map(
  (c, i) =>
    `<button class="chip" type="button" data-cat="${c}" aria-pressed="${c === "All" ? "true" : "false"}">${c}</button>`
).join("");

els.chips.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  category = btn.dataset.cat;
  els.chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === btn)));
  render();
});

els.search.addEventListener("input", render);

document.addEventListener("click", (e) => {
  if (e.target.closest(".lb-prev")) { moveLightbox(-1); return; }
  if (e.target.closest(".lb-next")) { moveLightbox(1); return; }
  if (e.target.closest(".lb-close")) { closeLightbox(); return; }
  if (e.target === els.lightbox) { closeLightbox(); return; }
  const dev = e.target.closest(".shots .device");
  if (dev) {
    const app = APPS.find((a) => a.id === dev.dataset.app);
    if (app) openLightbox(app, Number(dev.dataset.index) || 0);
    return;
  }
  if (e.target.id === "modal-close") closeModal();
  if (e.target.classList.contains("modal-backdrop")) closeModal();
  if (e.target.closest(".card-cta") || e.target.closest(".btn") || e.target.closest(".modal")) return;
  onActivateCard(e.target);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "/" && !e.metaKey && !e.ctrlKey && document.activeElement !== els.search) {
    e.preventDefault();
    els.search.focus();
    els.search.select();
  }
  if (e.key === "Escape") {
    if (!els.lightbox.hidden) { closeLightbox(); return; }
    if (!els.modal.hidden) closeModal();
  }
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card")) {
    e.preventDefault();
    onActivateCard(e.target);
  }
  if (!els.lightbox.hidden) {
    if (e.key === "ArrowLeft") { e.preventDefault(); moveLightbox(-1); return; }
    if (e.key === "ArrowRight") { e.preventDefault(); moveLightbox(1); return; }
  }
  if (e.target.classList.contains("device") && e.target.closest(".shots")) {
    if (e.key === "ArrowLeft") { e.preventDefault(); focusShot(e.target, -1); return; }
    if (e.key === "ArrowRight") { e.preventDefault(); focusShot(e.target, 1); return; }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const app = APPS.find((a) => a.id === e.target.dataset.app);
      if (app) openLightbox(app, Number(e.target.dataset.index) || 0);
    }
  }
});

document.addEventListener("pointerdown", (e) => {
  const btn = e.target.closest(".btn, .card-cta");
  if (btn) spawnRipple(e, btn);
});

els.lightbox.addEventListener("pointerdown", (e) => { lbStartX = e.clientX; });
els.lightbox.addEventListener("pointerup", (e) => {
  if (e.target.closest(".lb-nav") || e.target.closest(".lb-close")) return;
  const dx = e.clientX - lbStartX;
  if (Math.abs(dx) > 50) moveLightbox(dx < 0 ? 1 : -1);
});
window.addEventListener("hashchange", openFromHash);

render();
openFromHash();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

document.getElementById("feat-details")?.addEventListener("click", () => {
  const app = APPS.find((a) => a.id === "nova-linx");
  if (app) openModal(app);
});
