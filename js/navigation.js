/*
 * ScholarNet — navegación.
 *  - Enrutador por hash (#/national, #/international/chevening, …):
 *    funciona abriendo index.html directamente, sin servidor.
 *  - Menú lateral en pantallas pequeñas (equivale al menú lateral de la app).
 */
(function (S) {
  "use strict";

  const main = document.getElementById("main");
  const status = document.getElementById("route-status");
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const backdrop = document.getElementById("nav-backdrop");
  const mqDrawer = window.matchMedia("(max-width: 899px)");

  /* ---------- Menú lateral ---------- */
  function openMenu() {
    nav.dataset.open = "true";
    toggle.setAttribute("aria-expanded", "true");
    backdrop.hidden = false;
    document.body.classList.add("menu-open");
    nav.querySelector("a").focus();
  }

  function closeMenu(returnFocus) {
    if (nav.dataset.open !== "true") return;
    nav.dataset.open = "false";
    toggle.setAttribute("aria-expanded", "false");
    backdrop.hidden = true;
    document.body.classList.remove("menu-open");
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener("click", () => (nav.dataset.open === "true" ? closeMenu(true) : openMenu()));
  closeBtn.addEventListener("click", () => closeMenu(true));
  backdrop.addEventListener("click", () => closeMenu(true));

  document.addEventListener("keydown", (e) => {
    if (nav.dataset.open !== "true" || !mqDrawer.matches) return;
    if (e.key === "Escape") {
      closeMenu(true);
      return;
    }
    if (e.key === "Tab") {
      // mantiene el foco dentro del menú mientras está abierto
      const items = nav.querySelectorAll("a, button");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  mqDrawer.addEventListener("change", (e) => {
    if (!e.matches) closeMenu(false);
  });

  /* ---------- Rutas ---------- */
  function resolve(path) {
    const parts = path.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
    const [a, b] = parts;
    const V = S.views;

    if (!a) return V.home();
    if ((a === "national" || a === "international") && !b) return V.listing(a);
    if ((a === "national" || a === "international") && b) return V.scholarship(a, b);
    if (a === "experiences") return b ? V.experienceDetail(b) : V.experiencesList();
    if (a === "news") return b ? V.newsDetail(b) : V.newsList();
    if (a === "about") return V.about();
    if (a === "contact") return V.contact();
    return V.notFound();
  }

  let firstRender = true;

  function render() {
    const path = decodeURIComponent(location.hash.replace(/^#/, ""));
    const view = resolve(path);

    main.innerHTML = view.html;
    document.title = view.title;
    document.body.dataset.bg = view.bg || "light";

    nav.querySelectorAll("a[data-route]").forEach((a) => {
      if (a.dataset.route === view.nav) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });

    closeMenu(false);
    window.scrollTo(0, 0);

    // En cambios de pantalla, el foco pasa al título y se anuncia la nueva página.
    if (!firstRender) {
      const h1 = main.querySelector("[data-autofocus]");
      if (h1) h1.focus({ preventScroll: true });
      status.textContent = view.title.replace(" — ScholarNet", "");
    }
    firstRender = false;
  }

  S.navigation = { render };
  window.addEventListener("hashchange", render);
})((window.Scholarnet = window.Scholarnet || {}));
