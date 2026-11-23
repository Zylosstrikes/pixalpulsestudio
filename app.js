const APPS = [
  {
    id: "nova-linx",
    name: "Nova Linx",
    category: "Assistant",
    blurb: "Your fast, friendly AI assistant for chat, homework, pictures and voice.",
    description:
      "Nova Linx is a free AI chat assistant from Pixal Pulse Studio. Ask anything, get homework and math help, create pictures and videos, build apps, and talk by voice.",
    icon: "icons/apps/nova-linx.png",
    screenshot: "screenshots/nova-linx.jpg",
    action: { label: "Open", href: "https://lumenaiassistant.com", type: "open" },
    secondary: { label: "Get Android app", href: "https://lumenaiassistant.com/download/nova-linx.apk", type: "download" },
    featured: true,
    isNew: false,
  },
  {
    id: "nova-linx-android",
    name: "Nova Linx for Android",
    category: "Android",
    blurb: "The full Nova Linx app for your phone, with a home-screen widget.",
    description:
      "Download the official Nova Linx APK for Android 7.0 and up. Install the app, then add the home-screen widget: tap the N to ask, tap the wave for voice. A desktop app is also listed on the download page.",
    icon: "icons/apps/nova-linx-android.png",
    screenshot: "screenshots/nova-linx-android.jpg",
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
    screenshot: "screenshots/nova-linx-keypad.jpg",
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
    screenshot: "screenshots/nova-linx-link.jpg",
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
    screenshot: "screenshots/nova-linx-api.jpg",
    action: { label: "Open", href: "https://lumenaiassistant.com/developers", type: "open" },
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
    screenshot: "screenshots/nova-code.jpg",
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
    screenshot: "screenshots/animesoul.jpg",
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
  featured: document.getElementById("featured"),
  hero: document.getElementById("hero"),
  empty: document.getElementById("empty"),
  modal: document.getElementById("modal"),
  sheet: document.getElementById("modal-sheet"),
  lightbox: document.getElementById("lightbox"),
};

let category = "All";
let lastFocus = null;

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
  return `
    <article class="card" role="listitem" tabindex="0" data-id="${app.id}" aria-label="${escapeHtml(app.name)}">
      ${badge}
      <img class="icon" src="${app.icon}" alt="" width="68" height="68">
      <h3>${escapeHtml(app.name)}</h3>
      <div class="cat">${escapeHtml(app.category)}</div>
      <p class="blurb">${escapeHtml(app.blurb)}</p>
      <div class="cta">
        <a ${actionAttrs(app.action)}>${escapeHtml(app.action.label)}</a>
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
  els.empty.classList.toggle("visible", visible.length === 0);

  if (!filtering) {
    const fresh = APPS.filter((a) => a.isNew);
    els.newRow.innerHTML = fresh.map((a) => cardHTML(a)).join("");
  }

  els.grid.innerHTML = visible.map((a) => cardHTML(a)).join("");
  document.getElementById("result-count").textContent =
    filtering ? `${visible.length} app${visible.length === 1 ? "" : "s"}` : "All apps";
}

function openModal(app) {
  lastFocus = document.activeElement;
  const secondary = actionButton(app.secondary, false);
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
      ${secondary}
    </div>
    <p class="modal-desc">${escapeHtml(app.description)}</p>
    <div class="shots">
      <figure class="device" tabindex="0" data-full="${app.screenshot}" aria-label="Screenshot of ${escapeHtml(app.name)}">
        <img src="${app.screenshot}" alt="Screenshot of ${escapeHtml(app.name)}">
      </figure>
    </div>
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

function openLightbox(src, alt) {
  els.lightbox.innerHTML = `<img src="${src}" alt="${escapeHtml(alt || "")}">`;
  els.lightbox.hidden = false;
  els.lightbox.focus();
}

function closeLightbox() {
  els.lightbox.hidden = true;
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
  if (e.target.closest(".card-cta") || e.target.closest(".btn")) return;
  onActivateCard(e.target);
  const dev = e.target.closest(".shots .device");
  if (dev) openLightbox(dev.dataset.full, dev.getAttribute("aria-label"));
  if (e.target.id === "modal-close") closeModal();
  if (e.target.classList.contains("modal-backdrop")) closeModal();
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
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("device") && e.target.dataset.full) {
    e.preventDefault();
    openLightbox(e.target.dataset.full, e.target.getAttribute("aria-label"));
  }
});

els.lightbox.addEventListener("click", closeLightbox);
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
