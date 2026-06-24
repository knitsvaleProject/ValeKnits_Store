/* =========================================================
   VALE KNITS — script.js
   Estático, sin dependencias. Compatible con GitHub Pages.
   ---------------------------------------------------------
   👉 EDITA AQUÍ tus datos de contacto reales:
   ========================================================= */
const CONFIG = {
  whatsapp:  "56912345678",        // ← REEMPLAZAR: número en formato internacional, sin "+" ni espacios
  instagram: "valeknits",          // ← REEMPLAZAR: usuario de Instagram, sin "@"
  email:     "hola@valeknits.cl",  // ← REEMPLAZAR: correo de contacto
};

/* ---------------------------------------------------------
   DATOS DE PRODUCTOS (extraídos del catálogo Vale Knits)
   line:     "exclusiva" | "reventa"
   category: "aros" | "conjuntos" | "bufandas" | "scrunchies" | "pines" | "accesorios"
   price:    número en CLP o null si "por estrenar" / sin precio
   img:      assets/products/<slug>.jpg  (agrega tus fotos con ese nombre)
   --------------------------------------------------------- */
const PRODUCTS = [
  // ---------- PIEZAS ELEGIDAS · REVENTA ----------
  { slug:"aros-antiamatista", name:"Aros Antiamatista", category:"aros", line:"reventa", price:9990,
    desc:"Bellas gotas bañadas en plata de ley, con imitación de piedra central. Largo de 2,5 cm, pequeño y elegante. Incluye caja.",
    tags:["Plata de ley","Incluye caja","Solo un par"], badge:"unica" },
  { slug:"aros-filigranita", name:"Aros Filigranita", category:"aros", line:"reventa", price:9990,
    desc:"Imitación de filigrana bañada en plata de ley 925, ahuecada en su interior. Diseño fresco e interesante, de unos 3 cm de largo. Incluye caja.",
    tags:["Plata 925","Incluye caja","Solo un par"], badge:"unica" },
  { slug:"conjunto-di-mare", name:"Conjunto Di Mare", category:"conjuntos", line:"reventa", price:19990,
    desc:"Fresco y elegante. Bañado en plata 925 con imitación de piedra y diamante. Solo un conjunto. Incluye caja.",
    tags:["Plata 925","Conjunto","Incluye caja"], badge:"unica" },
  { slug:"conjunto-furioso", name:"Conjunto Furioso", category:"conjuntos", line:"reventa", price:19990,
    desc:"Pequeño pero osado y versátil. Bañado en plata 925 con imitación de piedra. Solo un conjunto. Incluye caja.",
    tags:["Plata 925","Conjunto","Incluye caja"], badge:"unica" },
  { slug:"conjunto-pinkylady", name:"Conjunto Pinkylady", category:"conjuntos", line:"reventa", price:19990,
    desc:"Suaves y femeninas. Bañado en plata 925 con imitación de piedra. Solo un conjunto. Incluye caja.",
    tags:["Plata 925","Conjunto","Incluye caja"], badge:"unica" },
  { slug:"conjunto-della-ostra", name:"Conjunto Della Ostra", category:"conjuntos", line:"reventa", price:12990,
    desc:"El infaltable de un joyero clásico. Fantasía dorada. Solo un conjunto. Incluye caja.",
    tags:["Fantasía dorada","Conjunto","Incluye caja"], badge:"unica" },
  { slug:"conjunto-primtemps", name:"Conjunto Primtemps", category:"conjuntos", line:"reventa", price:7990,
    desc:"Domina la primavera con este conjunto colorido y juvenil. Fantasía e hilo de pescar grueso para mantener la forma amplia del collar.",
    tags:["Fantasía","Colorido","Conjunto"], badge:null },
  { slug:"aros-salamanca", name:"Aros Salamanca", category:"aros", line:"reventa", price:8990,
    desc:"Deja que tu bruja interior fluya con estos bellos aretes de fantasía, dijes esmaltados y cuentas de vidrio perladas.",
    tags:["Fantasía","Dije esmaltado"], badge:null },
  { slug:"aros-jardin-secreto", name:"Aros Jardín Secreto", category:"aros", line:"reventa", price:5990,
    desc:"Variante de la argolla con mostacillas clásica; proporciona misterio y misticismo a cualquier tenida. Fantasía con mostacillas plásticas y de cerámica.",
    tags:["Fantasía","Mostacillas"], badge:null },
  { slug:"aros-gatoalsol", name:"Aros Gatoalsol", category:"aros", line:"reventa", price:7990,
    desc:"Para los amantes de los gatos, tenemos estas piezas hechas finamente a mano. Fantasía con dije esmaltado.",
    tags:["Fantasía","Dije esmaltado"], badge:null },
  { slug:"aros-aum", name:"Aros Aum", category:"aros", line:"reventa", price:8990,
    desc:"Mandalas dorados de 4 cm en acero inoxidable. Solo un par. Incluye bolsa para regalo.",
    tags:["Acero inoxidable","4 cm","Bolsa de regalo"], badge:"unica" },
  { slug:"aros-nectar", name:"Aros Nectar", category:"aros", line:"reventa", price:8790,
    desc:"Picaflor con lirio de 4 cm en acero inoxidable plateado. Solo un par. Incluye caja.",
    tags:["Acero inoxidable","4 cm","Incluye caja"], badge:"unica" },
  { slug:"aros-tropic-vibe", name:"Aros Tropic Vibe", category:"aros", line:"reventa", price:6790,
    desc:"Hojitas de Monstera de 2,5 cm en acero inoxidable dorado. Solo un par. Incluye caja.",
    tags:["Acero inoxidable","2,5 cm","Incluye caja"], badge:"unica" },
  { slug:"aros-asimetricalia", name:"Aros Asimetricalia", category:"aros", line:"reventa", price:7990,
    desc:"Macizos asimétricos de 2 y 4 cm, en acero inoxidable dorado. Solo un par. Incluye caja.",
    tags:["Acero inoxidable","Asimétricos","Incluye caja"], badge:"unica" },
  { slug:"pines", name:"Pines", category:"pines", line:"reventa", price:3490, priceNote:"2 unidades en $5.990",
    desc:"Pines especialmente elegidos y con una presentación única, perfectos para regalar o para darte un pequeño regaloneo. Hay solo uno de cada uno. Incluye bolsa de regalo.",
    tags:["Pieza única","Bolsa de regalo"], badge:"unica" },

  // ---------- PIEZAS ELABORADAS Y EXCLUSIVAS · DISEÑOS VALE KNITS ----------
  { slug:"aros-riseup", name:"Aros Riseup", category:"aros", line:"exclusiva", price:14990,
    desc:"Algodón 100%, peinado. Vibrante y llamativo, puede ser combinado con el cinturón Wear Me Nicely en el mismo color. Ganchos de acero inoxidable.",
    tags:["Algodón 100%","Hecho a mano","Combinable"], badge:"unica" },
  { slug:"aros-solari", name:"Aros Solari", category:"aros", line:"exclusiva", price:14990,
    desc:"Algodón con lurex y mostacillas. Puede ser combinado con el cinturón Wear Me Nicely en el mismo color. Ganchos de acero inoxidable.",
    tags:["Algodón con lurex","Hecho a mano","Combinable"], badge:"unica" },
  { slug:"aros-amatisk", name:"Aros Amatisk", category:"aros", line:"exclusiva", price:9990,
    desc:"Algodón al 100% y mostacillas. Pequeños, sobrios y elegantes, hechos con gancho de acero inoxidable.",
    tags:["Algodón 100%","Hecho a mano"], badge:"unica" },
  { slug:"cinturon-wear-me-nicely", name:"Cinturón Wear Me Nicely", category:"accesorios", line:"exclusiva", price:15990, priceNote:"Promo cinturón + aros en $28.990",
    desc:"Pieza única de cada color, en algodón peinado 100% y hebilla metálica dorada. Patrón para su elaboración a crochet por estrenar.",
    tags:["Algodón 100%","Producto + patrón","Pieza única"], badge:"patron" },
  { slug:"scrunchie-minimalii", name:"Scrunchie Minimalii", category:"scrunchies", line:"exclusiva", price:11990,
    desc:"Pieza única en algodón 100% y punto elástico doble. Patrón a dos agujas por estrenar.",
    tags:["Algodón 100%","Producto + patrón","Pieza única"], badge:"patron" },
  { slug:"scrunchie-maximaniac", name:"Scrunchie Maximaniac", category:"scrunchies", line:"exclusiva", price:23990,
    desc:"Pieza única en algodón 100% en punto correteado. Patrón a dos agujas por estrenar.",
    tags:["Algodón 100%","Producto + patrón","Pieza única"], badge:"patron" },
  { slug:"bufanda-albusomno", name:"Bufanda Albusomno", category:"bufandas", line:"exclusiva", price:null,
    desc:"Por estrenar. Ofreceremos algunas piezas hechas a mano de materialidad exclusiva, y el patrón para su elaboración a crochet.",
    tags:["Hecho a mano","Producto + patrón"], badge:"estrenar" },
  { slug:"cuello-dual-colore", name:"Cuello Dual Colore", category:"bufandas", line:"exclusiva", price:null,
    desc:"Por estrenar. Ofreceremos algunas piezas hechas a mano de colores exclusivos, y el patrón para su elaboración a dos agujas.",
    tags:["Hecho a mano","Producto + patrón","Dos agujas"], badge:"estrenar" },
  { slug:"bufanda-mare-nostrum", name:"Bufanda Mare Nostrum", category:"bufandas", line:"exclusiva", price:null,
    desc:"Por estrenar. Ofreceremos una pieza hecha a mano de materialidad y colores exclusivos, y el patrón para su elaboración a dos agujas en punto inglés.",
    tags:["Hecho a mano","Producto + patrón","Punto inglés"], badge:"estrenar" },
];

/* ---------- PATRONES DE AUTOR ---------- */
const PATTERNS = [
  { slug:"bufanda-aurinegra", name:"Bufanda Aurinegra", category:"patron", line:"patron", price:5990,
    desc:"Patrón de tejido para que elabores con tus manos y palillos una pieza versátil y abrigada para este invierno. Fácil de tejer, apta para principiantes. Se puede tejer viendo tu serie favorita.",
    tags:["Patrón","Dos agujas","Principiantes"], badge:"patron" },
  { slug:"cardigan-ankalli", name:"Cardigan Ankalli", category:"patron", line:"patron", price:null,
    desc:"Por estrenar. Estamos trabajando en este patrón para que puedas elaborar una hermosa pieza para niñas y niños.",
    tags:["Patrón","Por estrenar","Infantil"], badge:"estrenar" },
  { slug:"ponchardigan-bebeciwi", name:"Ponchardigan Bebeciwi", category:"patron", line:"patron", price:null,
    desc:"Por estrenar. Estamos trabajando en un patrón para que puedas elaborar esta hermosa pieza para niñas y niños a dos agujas.",
    tags:["Patrón","Por estrenar","Dos agujas"], badge:"estrenar" },
  { slug:"canasto-ayunpa", name:"Canasto Ayunpa", category:"patron", line:"patron", price:null,
    desc:"Por estrenar. Estamos trabajando en un patrón para que puedas elaborar una hermosa pieza a crochet para tu hogar.",
    tags:["Patrón","Por estrenar","Crochet","Hogar"], badge:"estrenar" },
];

/* ---------- FILTROS ---------- */
const FILTERS = [
  { label:"Todos",      type:"all" },
  { label:"Exclusivas", type:"line",     value:"exclusiva" },
  { label:"Elegidas",   type:"line",     value:"reventa" },
  { label:"Aros",       type:"category", value:"aros" },
  { label:"Conjuntos",  type:"category", value:"conjuntos" },
  { label:"Bufandas",   type:"category", value:"bufandas" },
  { label:"Scrunchies", type:"category", value:"scrunchies" },
  { label:"Pines",      type:"category", value:"pines" },
];

/* ---------- GALERÍA / LOOKBOOK ----------
   Mezcla de productos destacados + slots editoriales.
   Agrega imágenes con estos nombres en assets/ para poblarla. */
const LOOKBOOK = [
  { img:"assets/editorial/look-1.jpg", cap:"Diseñados a elegidos" },
  { img:"assets/products/conjunto-di-mare.jpg", cap:"Conjunto Di Mare" },
  { img:"assets/editorial/look-2.jpg", cap:"Hilo y oro" },
  { img:"assets/products/aros-aum.jpg", cap:"Aros Aum" },
  { img:"assets/editorial/look-3.jpg", cap:"Texturas de invierno" },
  { img:"assets/products/cinturon-wear-me-nicely.jpg", cap:"Wear Me Nicely" },
  { img:"assets/products/scrunchie-maximaniac.jpg", cap:"Scrunchie Maximaniac" },
  { img:"assets/editorial/look-4.jpg", cap:"Hecho a mano" },
  { img:"assets/products/aros-nectar.jpg", cap:"Aros Nectar" },
];

/* =========================================================
   UTILIDADES
   ========================================================= */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const formatPrice = (n) => "$" + n.toLocaleString("es-CL");

function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}
const igLink = () => `https://www.instagram.com/tiendita.vale.knits?igsh=ZTIwbHlwZnoybjB2`;
function mailLink(subject) {
  return `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}`;
}

/* Carga diferida de imágenes con fallback elegante (placeholder si no existe) */
function loadImg(el) {
  const src = el.dataset.img;
  if (!src) return;
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url("${src}")`;
    el.classList.add("has-img");
  };
  img.src = src;
}
function applyImages(scope = document) {
  $$("[data-img]", scope).forEach(loadImg);
}

/* =========================================================
   RENDER DE TARJETAS
   ========================================================= */
function cardHTML(p) {
  const badgeMap = {
    unica:   `<span class="card-badge card-badge--unica">Pieza única</span>`,
    patron:  `<span class="card-badge card-badge--patron">Producto + patrón</span>`,
    estrenar:`<span class="card-badge card-badge--estrenar">Por estrenar</span>`,
  };
  const badge = p.badge ? badgeMap[p.badge] : "";
  const priceHTML = p.price
    ? `<p class="card-price">${formatPrice(p.price)}${p.priceNote ? ` <small>· ${p.priceNote}</small>` : ""}</p>`
    : `<p class="card-price"><small>Próximamente</small></p>`;
  return `
    <button class="card reveal" data-slug="${p.slug}" data-line="${p.line}" data-category="${p.category}"
            aria-label="Ver ${p.name}">
      <span class="card-media ph-img" data-img="${p.img || `assets/products/${p.slug}.jpg`}" data-label="${p.name}">
        ${badge}
      </span>
      <span class="card-body">
        <span class="card-cat">${p.category === "patron" ? "Patrón" : p.category}</span>
        <span class="card-name">${p.name}</span>
        ${priceHTML}
        <span class="card-cta">Ver detalle →</span>
      </span>
    </button>`;
}

function renderGrid(target, items) {
  target.innerHTML = items.map(cardHTML).join("");
  applyImages(target);
  observeReveals(target);
}

/* =========================================================
   FILTROS
   ========================================================= */
let activeFilter = { type: "all" };

function renderFilters() {
  const wrap = $("#filters");
  wrap.innerHTML = FILTERS.map((f, i) => `
    <button class="filter-btn" role="tab"
            data-type="${f.type}" data-value="${f.value || ""}"
            aria-selected="${i === 0 ? "true" : "false"}">${f.label}</button>`).join("");

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn", wrap).forEach(b => b.setAttribute("aria-selected", "false"));
    btn.setAttribute("aria-selected", "true");
    activeFilter = { type: btn.dataset.type, value: btn.dataset.value };
    applyFilter();
  });
}

function matchFilter(p) {
  if (activeFilter.type === "all") return true;
  if (activeFilter.type === "line") return p.line === activeFilter.value;
  if (activeFilter.type === "category") return p.category === activeFilter.value;
  return true;
}

function applyFilter() {
  const items = PRODUCTS.filter(matchFilter);
  renderGrid($("#product-grid"), items);
  $("#empty-state").hidden = items.length > 0;
}

function setFilterByLine(value) {
  const btn = $(`.filter-btn[data-type="line"][data-value="${value}"]`);
  if (btn) btn.click();
}

/* =========================================================
   MODAL DE PRODUCTO
   ========================================================= */
const modal = $("#product-modal");
let lastFocused = null;

function openModal(slug) {
  const p = [...PRODUCTS, ...PATTERNS].find(x => x.slug === slug);
  if (!p) return;
  lastFocused = document.activeElement;

  const media = $("#modal-media");
  media.className = "modal-media ph-img";
  media.dataset.img = p.img || `assets/products/${p.slug}.jpg`;
  media.dataset.label = p.name;
  media.style.backgroundImage = "";
  loadImg(media);

  const lineLabel = p.line === "exclusiva" ? "Diseño exclusivo · hecho a mano"
                  : p.line === "patron" ? "Patrón de autor"
                  : "Pieza elegida";
  $("#modal-line").textContent = lineLabel;
  $("#modal-title").textContent = p.name;
  $("#modal-price").innerHTML = p.price
    ? formatPrice(p.price) + (p.priceNote ? ` <small style="color:var(--muted);font-size:.9rem">· ${p.priceNote}</small>` : "")
    : "Próximamente";
  $("#modal-desc").textContent = p.desc;
  $("#modal-tags").innerHTML = (p.tags || []).map(t => `<li>${t}</li>`).join("");

  const consultMsg = `Hola Vale Knits 👋 Me interesa "${p.name}"${p.price ? ` (${formatPrice(p.price)})` : ""}. ¿Está disponible?`;
  $("#modal-actions").innerHTML = `
    <a class="btn btn--wa" href="${waLink(consultMsg)}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
    <a class="btn btn--outline" href="${igLink()}" target="_blank" rel="noopener">Ver en Instagram</a>`;

  modal.hidden = false;
  document.body.classList.add("no-scroll");
  $(".modal-close", modal).focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("no-scroll");
  if (lastFocused) lastFocused.focus();
}

/* =========================================================
   LIGHTBOX (lookbook)
   ========================================================= */
const lightbox = $("#lightbox");
let lbIndex = 0;

function renderLookbook() {
  const grid = $("#lookbook-grid");
  grid.innerHTML = LOOKBOOK.map((it, i) => `
    <figure class="masonry-item" data-lb="${i}" tabindex="0" role="button" aria-label="Ampliar ${it.cap}">
      <span class="ph-img ratio-1x1" data-img="${it.img}" data-label="${it.cap}"></span>
      <figcaption>${it.cap}</figcaption>
    </figure>`).join("");
  applyImages(grid);
  observeReveals(grid);
}

function openLightbox(i) {
  lbIndex = (i + LOOKBOOK.length) % LOOKBOOK.length;
  const it = LOOKBOOK[lbIndex];
  const box = $("#lightbox-img");
  box.className = "ph-img";
  box.dataset.img = it.img;
  box.dataset.label = it.cap;
  box.style.cssText = "min-width:60vw;min-height:50vh;background-size:contain;background-repeat:no-repeat";
  box.style.backgroundImage = "";
  loadImg(box);
  $("#lightbox-cap").textContent = it.cap;
  lightbox.hidden = false;
  document.body.classList.add("no-scroll");
  $(".lightbox-close").focus();
}
function closeLightbox() { lightbox.hidden = true; document.body.classList.remove("no-scroll"); }

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
let io;
function observeReveals(scope = document) {
  if (!("IntersectionObserver" in window)) {
    $$(".reveal", scope).forEach(el => el.classList.add("in"));
    return;
  }
  if (!io) {
    io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  $$(".reveal:not(.in)", scope).forEach(el => io.observe(el));
}

/* =========================================================
   CONTACTO / SOCIAL
   ========================================================= */
function renderContact() {
  const generalMsg = "Hola Vale Knits 👋 Quiero hacer una consulta sobre la colección.";
  $("#cta-actions").innerHTML = `
    <a class="btn btn--wa" href="${waLink(generalMsg)}" target="_blank" rel="noopener">WhatsApp</a>
    <a class="btn btn--ig" href="${igLink()}" target="_blank" rel="noopener">Instagram</a>
    <a class="btn btn--mail" href="${mailLink("Consulta · Vale Knits")}">Correo</a>`;

  $("#footer-social-list").innerHTML = `
    <li><a href="${igLink()}" target="_blank" rel="noopener">Instagram @${CONFIG.instagram}</a></li>
    <li><a href="${waLink("Hola Vale Knits 👋")}" target="_blank" rel="noopener">WhatsApp</a></li>
    <li><a href="${mailLink("Consulta · Vale Knits")}">${CONFIG.email}</a></li>`;
}

/* =========================================================
   NAVEGACIÓN
   ========================================================= */
function initNav() {
  const toggle = $(".nav-toggle");
  const menu = $("#nav-menu");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  $$("#nav-menu a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));

  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* =========================================================
   EVENTOS GLOBALES
   ========================================================= */
function initEvents() {
  // Tarjetas → modal
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) { openModal(card.dataset.slug); return; }

    if (e.target.closest("[data-close]")) closeModal();
    if (e.target.closest("[data-lb-close]")) closeLightbox();
    if (e.target.closest("[data-lb-prev]")) openLightbox(lbIndex - 1);
    if (e.target.closest("[data-lb-next]")) openLightbox(lbIndex + 1);

    // Lookbook → lightbox
    const fig = e.target.closest("[data-lb]");
    if (fig) openLightbox(parseInt(fig.dataset.lb, 10));

    // Tarjetas de colección → fijar filtro de línea
    const col = e.target.closest(".collection-card[data-filter]");
    if (col && col.dataset.filter !== "patron") {
      setFilterByLine(col.dataset.filter);
    }
  });

  // Lookbook accesible por teclado
  document.addEventListener("keydown", (e) => {
    const fig = document.activeElement?.closest?.("[data-lb]");
    if (fig && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault(); openLightbox(parseInt(fig.dataset.lb, 10));
    }
    if (e.key === "Escape") { if (!modal.hidden) closeModal(); if (!lightbox.hidden) closeLightbox(); }
    if (!lightbox.hidden) {
      if (e.key === "ArrowLeft") openLightbox(lbIndex - 1);
      if (e.key === "ArrowRight") openLightbox(lbIndex + 1);
    }
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  renderFilters();
  applyFilter();                       // grid de productos
  renderGrid($("#pattern-grid"), PATTERNS);
  renderLookbook();
  renderContact();
  initNav();
  initEvents();
  applyImages();                       // hero, marca, colecciones, cita
  observeReveals();
});
