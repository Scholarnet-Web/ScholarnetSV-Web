/*
 * ScholarNet — vistas.
 * Cada función devuelve { title, html, bg, nav }:
 *   title → texto para <title>
 *   html  → contenido de <main>
 *   bg    → variante de fondo decorativo ("light" | "solid")
 *   nav   → elemento del menú que debe marcarse como actual
 */
(function (S) {
  "use strict";

  /* ---------- utilidades ---------- */
  const esc = (v) =>
    String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const lines = (v) => esc(v).replace(/\n/g, "<br>");

  const icon = {
    arrowRight: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    arrowLeft: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 12H5M11 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    external: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    check: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    info: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 11v6M12 7.5v.01" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>'
  };

  const sectionName = { national: "National", international: "International" };

  const hasPassed = (dateText) => {
    const d = new Date(dateText + " 23:59:59");
    return !isNaN(d) && d < new Date();
  };

  const breadcrumb = (items) =>
    '<nav class="breadcrumb" aria-label="Breadcrumb"><ol>' +
    items
      .map((it, i) =>
        i === items.length - 1
          ? `<li><span aria-current="page">${esc(it.label)}</span></li>`
          : `<li><a href="${it.href}">${esc(it.label)}</a></li>`
      )
      .join("") +
    "</ol></nav>";

  const externalLink = (href, label, cls) =>
    `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${label}${icon.external}<span class="visually-hidden"> (opens in a new tab)</span></a>`;

  /* ---------- bloque "Our Team" (se repite al final de las listas de becas) ---------- */
  function teamBand() {
    const t = S.team;
    const c = S.contact;
    const social = [
      `<li>${externalLink(c.instagram.url, '<img src="assets/icons/instagram.png" alt="" width="24" height="24"><span class="visually-hidden">Instagram:</span> ' + esc(c.instagram.label), "social-link")}</li>`
    ];
    if (c.facebook.url) {
      social.push(
        `<li>${externalLink(c.facebook.url, '<img src="assets/icons/facebook.png" alt="" width="24" height="24"><span class="visually-hidden">Facebook:</span> ' + esc(c.facebook.label), "social-link")}</li>`
      );
    }
    return `
      <section class="team" aria-labelledby="team-title">
        <div class="team__media">
          <img src="${t.image}" alt="${esc(t.alt)}" width="2304" height="1728" loading="lazy">
        </div>
        <div class="team__body">
          <h2 id="team-title">${esc(t.title)}</h2>
          <p>${esc(t.text)}</p>
          <ul class="social-list">${social.join("")}</ul>
        </div>
      </section>`;
  }

  /* ---------- Home (reúne splash + bienvenida + elegir tipo de beca) ---------- */
  function home() {
    const nat = S.listings.national;
    const intl = S.listings.international;
    return {
      title: "ScholarNet — Your dreams will be reality!",
      bg: "light",
      nav: "home",
      html: `
        <section class="hero" aria-labelledby="page-title">
          <div class="hero__text">
            <p class="kicker">${esc(S.site.kicker)}</p>
            <h1 id="page-title" tabindex="-1" data-autofocus>Welcome to ScholarNet</h1>
            <p class="hero__tagline">${esc(S.site.tagline)}</p>

            <h2 class="hero__question">${esc(S.site.question)}</h2>
            <ul class="choice-list">
              <li>
                <a class="choice" href="#/national">
                  <img src="${nat.image}" alt="" width="272" height="186">
                  <span class="choice__label">NATIONAL</span>
                  ${icon.arrowRight}
                </a>
              </li>
              <li>
                <a class="choice choice--alt" href="#/international">
                  <img src="${intl.image}" alt="" width="264" height="191">
                  <span class="choice__label">INTERNATIONAL</span>
                  ${icon.arrowRight}
                </a>
              </li>
            </ul>
          </div>
          <div class="hero__art">
            <img src="assets/images/backgrounds/fondosye.png" width="640" height="1135"
                 alt="A ribbon in the blue and white of the Salvadoran flag above a string of flags from other countries">
          </div>
        </section>`
    };
  }

  /* ---------- Listas de becas ---------- */
  function listing(type) {
    const info = S.listings[type];
    const items = S.scholarships.filter((s) => s.type === type);
    return {
      title: `${info.title.charAt(0) + info.title.slice(1).toLowerCase()} — ScholarNet`,
      bg: "light",
      nav: type,
      html: `
        <div class="page-head page-head--split">
          <div>
            <p class="kicker">Scholarships</p>
            <h1 id="page-title" tabindex="-1" data-autofocus>${esc(info.title)}</h1>
            <p class="lead">${esc(info.intro)}</p>
          </div>
          <img class="page-head__img" src="${info.image}" alt="${esc(info.alt)}" width="272" height="190">
        </div>

        <ul class="scholarship-list" aria-label="${esc(sectionName[type])} scholarships">
          ${items
            .map(
              (s) => `
            <li class="scholarship">
              <div class="scholarship__logo">
                <img src="${s.imagen}" alt="${esc(s.nombre)} logo" loading="lazy">
              </div>
              <div class="scholarship__body">
                <h2>${esc(s.nombre)}</h2>
                <p>${esc(s.descripcion)}</p>
              </div>
              <a class="btn btn--small" href="#/${type}/${s.id}">View<span class="visually-hidden"> ${esc(s.nombre)} details</span></a>
            </li>`
            )
            .join("")}
        </ul>

        ${teamBand()}`
    };
  }

  /* ---------- Detalle de beca ---------- */
  function scholarship(type, id) {
    const s = S.scholarships.find((x) => x.id === id && x.type === type);
    if (!s) return notFound();
    const passed = hasPassed(s.fecha);
    return {
      title: `${s.titulo} — ScholarNet`,
      bg: "light",
      nav: type,
      html: `
        ${breadcrumb([
          { label: "Home", href: "#/" },
          { label: sectionName[type] + " scholarships", href: "#/" + type },
          { label: s.titulo }
        ])}

        <article class="detail">
          <header class="detail__head">
            <div class="detail__logo"><img src="${s.imagen}" alt="${esc(s.nombre)} logo"></div>
            <div>
              <h1 id="page-title" tabindex="-1" data-autofocus>${esc(s.titulo)}</h1>
              <p class="lead">${esc(s.descripcion)}</p>
            </div>
          </header>

          <dl class="facts">
            <div><dt>Deadline</dt><dd>${esc(s.fecha)}</dd></div>
            <div><dt>Application window</dt><dd>${esc(s.periodo)}</dd></div>
            <div><dt>Start date</dt><dd>${esc(s.inicio)}</dd></div>
          </dl>

          ${
            passed
              ? `<p class="note">${icon.info}<span><strong>This deadline has passed.</strong> Check the official website for the current call before you plan your application.</span></p>`
              : ""
          }

          <section class="requirements" aria-labelledby="req-title">
            <h2 id="req-title">Requirements</h2>
            <ul class="req-list">
              ${s.requisitos.map((r) => `<li>${icon.check}<span>${esc(r)}</span></li>`).join("")}
            </ul>
          </section>

          <div class="actions">
            ${externalLink(s.link, "More information", "btn")}
            <a class="btn btn--ghost" href="#/${type}">${icon.arrowLeft}Back</a>
          </div>
        </article>`
    };
  }

  /* ---------- Noticias ---------- */
  function newsList() {
    return {
      title: "News — ScholarNet",
      bg: "solid",
      nav: "news",
      html: `
        <div class="page-head">
          <p class="kicker">Latest</p>
          <h1 id="page-title" tabindex="-1" data-autofocus>NEWS</h1>
        </div>
        <ul class="news-list">
          ${S.news
            .map(
              (n) => `
            <li class="news-item">
              <div class="news-item__img"><img src="${n.img}" alt="${esc(n.alt)}" loading="lazy"></div>
              <div class="news-item__body">
                <h2>${esc(n.titulo)}</h2>
                <p>${esc(n.resumen)}</p>
                <a class="btn btn--small" href="#/news/${n.id}">Read More<span class="visually-hidden"> about ${esc(n.titulo)}</span></a>
              </div>
            </li>`
            )
            .join("")}
        </ul>`
    };
  }

  function newsDetail(id) {
    const n = S.news.find((x) => x.id === id);
    if (!n) return notFound();
    return {
      title: `${n.titulo} — ScholarNet`,
      bg: "light",
      nav: "news",
      html: `
        ${breadcrumb([{ label: "Home", href: "#/" }, { label: "News", href: "#/news" }, { label: n.titulo }])}
        <article class="article">
          <div class="article__img"><img src="${n.img}" alt="${esc(n.alt)}"></div>
          <div class="article__body">
            <h1 id="page-title" tabindex="-1" data-autofocus>${esc(n.titulo)}</h1>
            <p class="lead">${esc(n.contenido)}</p>
            <div class="actions"><a class="btn btn--ghost" href="#/news">${icon.arrowLeft}Back</a></div>
          </div>
        </article>`
    };
  }

  /* ---------- Experiencias ---------- */
  function experiencesList() {
    return {
      title: "Experiences — ScholarNet",
      bg: "light",
      nav: "experiences",
      html: `
        <div class="page-head">
          <p class="kicker">Stories from scholarship students</p>
          <h1 id="page-title" tabindex="-1" data-autofocus>EXPERIENCES</h1>
        </div>
        <ul class="experience-list">
          ${S.experiences
            .map(
              (e) => `
            <li class="experience">
              <div class="experience__photo"><img src="${e.img}" alt="${esc(e.autor)}" style="--focus:${esc(e.foco)}" loading="lazy"></div>
              <div class="experience__body">
                <h2>${esc(e.titulo)}</h2>
                <p class="experience__who">${esc(e.autor)} | ${esc(e.degree)}</p>
                <p class="experience__where">${lines(e.center)}</p>
                <a class="btn btn--small" href="#/experiences/${e.id}">View<span class="visually-hidden"> ${esc(e.autor)}’s experience</span></a>
              </div>
            </li>`
            )
            .join("")}
        </ul>`
    };
  }

  function experienceDetail(id) {
    const e = S.experiences.find((x) => x.id === id);
    if (!e) return notFound();
    return {
      title: `${e.titulo} · ${e.autor} — ScholarNet`,
      bg: "light",
      nav: "experiences",
      html: `
        ${breadcrumb([{ label: "Home", href: "#/" }, { label: "Experiences", href: "#/experiences" }, { label: e.autor }])}
        <article class="story">
          <div class="story__photo"><img src="${e.img}" alt="${esc(e.autor)}" style="--focus:${esc(e.foco)}"></div>
          <div class="story__body">
            <h1 id="page-title" tabindex="-1" data-autofocus>${esc(e.titulo)}</h1>
            <p class="story__author">${esc(e.autor)}</p>
            <p class="story__meta">${esc(e.degree)}<br>${lines(e.center)}</p>
            <p class="story__text">${esc(e.texto)}</p>
            <div class="actions"><a class="btn btn--ghost" href="#/experiences">${icon.arrowLeft}Back</a></div>
          </div>
        </article>`
    };
  }

  /* ---------- About us ---------- */
  function about() {
    const a = S.about;
    return {
      title: "About us — ScholarNet",
      bg: "light",
      nav: "about",
      html: `
        <div class="page-head">
          <p class="kicker">ScholarNet</p>
          <h1 id="page-title" tabindex="-1" data-autofocus>ABOUT US</h1>
        </div>
        <div class="about">
          <section class="about__block" aria-labelledby="mission-title">
            <h2 id="mission-title">Mission</h2>
            <p>${esc(a.mission)}</p>
          </section>
          <section class="about__block" aria-labelledby="vision-title">
            <h2 id="vision-title">Vision</h2>
            <p>${esc(a.vision)}</p>
          </section>
          <section class="about__values" aria-labelledby="values-title">
            <h2 id="values-title">Values</h2>
            <ul>${a.values.map((v) => `<li>${esc(v)}</li>`).join("")}</ul>
          </section>
        </div>`
    };
  }

  /* ---------- Contact us ---------- */
  function contact() {
    const c = S.contact;
    const row = (iconSrc, kind, value, href, external) => {
      const inner = `<img src="${iconSrc}" alt="" width="40" height="40"><span class="contact-row__kind">${kind}</span><span class="contact-row__value">${esc(value)}</span>`;
      if (!href) return `<li><div class="contact-row">${inner}</div></li>`;
      return external
        ? `<li><a class="contact-row contact-row--link" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${inner}<span class="visually-hidden">(opens in a new tab)</span></a></li>`
        : `<li><a class="contact-row contact-row--link" href="${esc(href)}">${inner}</a></li>`;
    };
    return {
      title: "Contact us — ScholarNet",
      bg: "solid",
      nav: "contact",
      html: `
        <div class="page-head">
          <p class="kicker">Get in touch</p>
          <h1 id="page-title" tabindex="-1" data-autofocus>CONTACT US</h1>
        </div>
        <p class="lead contact-lead">${lines(c.intro)}</p>
        <ul class="contact-list">
          ${row("assets/icons/telefono.png", "Phone", c.phone.label, c.phone.href, false)}
          ${row("assets/icons/instagram.png", "Instagram", c.instagram.label, c.instagram.url, true)}
          ${row("assets/icons/facebook.png", "Facebook", c.facebook.label, c.facebook.url, true)}
        </ul>`
    };
  }

  function notFound() {
    return {
      title: "Page not found — ScholarNet",
      bg: "light",
      nav: "",
      html: `
        <div class="page-head">
          <h1 id="page-title" tabindex="-1" data-autofocus>Page not found</h1>
          <p class="lead">We couldn’t find the page you were looking for.</p>
          <div class="actions"><a class="btn" href="#/">${icon.arrowLeft}Back to home</a></div>
        </div>`
    };
  }

  S.views = { home, listing, scholarship, newsList, newsDetail, experiencesList, experienceDetail, about, contact, notFound };
})((window.Scholarnet = window.Scholarnet || {}));
