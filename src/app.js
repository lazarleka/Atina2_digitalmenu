import './styles.css';
const COPY = {
  me: {
    drinksMenu: "Karta pića",
    foodMenu: "Jelovnik",
    back: "Nazad",
    opened: "Sekcija je otvorena",
    categories: {
      hot: "Topli napici",
      soft: "Bezalkoholna pića",
      wine: "Vina",
      aperitif: "Aperitivi",
      spirits: "Žestoka pića",
      beer: "Pivo",
      juice: "Cijeđeni sokovi",
      breakfast: "Doručak",
      main: "Glavna jela",
      dessert: "Deserti",
    },
  },
  en: {
    drinksMenu: "Drinks menu",
    foodMenu: "Food menu",
    back: "Back",
    opened: "Section opened",
    categories: {
      hot: "Hot drinks",
      soft: "Soft drinks",
      wine: "Wines",
      aperitif: "Aperitifs",
      spirits: "Spirits",
      beer: "Beer",
      juice: "Fresh juices",
      breakfast: "Breakfast",
      main: "Main dishes",
      dessert: "Desserts",
    },
  },
  ru: {
    drinksMenu: "Карта напитков",
    foodMenu: "Меню",
    back: "Назад",
    opened: "Раздел открыт",
    categories: {
      hot: "Горячие напитки",
      soft: "Безалкогольные напитки",
      wine: "Вина",
      aperitif: "Аперитивы",
      spirits: "Крепкие напитки",
      beer: "Пиво",
      juice: "Свежие соки",
      breakfast: "Завтрак",
      main: "Основные блюда",
      dessert: "Десерты",
    },
  },
};

const DRINKS = [
  { key: "hot", icon: "coffee" },
  { key: "soft", icon: "cup-soda" },
  { key: "wine", icon: "wine" },
  { key: "aperitif", icon: "martini" },
  { key: "spirits", icon: "glass-water" },
  { key: "beer", icon: "beer" },
  { key: "juice", icon: "citrus" },
];

const FOOD = [
  { key: "breakfast", icon: "egg-fried" },
  { key: "main", icon: "utensils-crossed" },
  { key: "dessert", icon: "cake-slice" },
];

const MENU_ITEMS = {
  hot: [
    { label: { me: "Espresso", en: "Espresso", ru: "Эспрессо" }, price: "1,40 €" },
    { label: { me: "Macchiato", en: "Macchiato", ru: "Макиато" }, price: "1,50 €" },
    { label: { me: "Velika kafa sa mlijekom", en: "Large coffee with milk", ru: "Большой кофе с молоком" }, price: "1,70 €" },
    { label: { me: "Cappuccino", en: "Cappuccino", ru: "Капучино" }, price: "1,90 €" },
    { label: { me: "Espresso sa sojinim mlijekom", en: "Espresso with soy milk", ru: "Эспрессо с соевым молоком" }, price: "1,80 €" },
    { label: { me: "Velika kafa sa sojinim mlijekom", en: "Large coffee with soy milk", ru: "Большой кофе с соевым молоком" }, price: "2,20 €" },
    { label: { me: "Nes Caffe", en: "Nes Caffe", ru: "Нес Кафе" }, price: "2,50 €" },
    { label: { me: "Čaj", en: "Tea", ru: "Чай" }, price: "1,50 €" },
    { label: { me: "Americano", en: "Americano", ru: "Американо" }, price: "1,40 €" },
  ],
  soft: [
    { label: { me: "Mala voda 0,33 l", en: "Small water 0.33 l", ru: "Малая вода 0,33 л" }, price: "1,50 €" },
    { label: { me: "Velika voda", en: "Large water", ru: "Большая вода" }, price: "3,50 €" },
    { label: { me: "Gazirani sokovi", en: "Carbonated soft drinks", ru: "Газированные напитки" }, price: "2,50 €" },
    { label: { me: "Voćni sokovi", en: "Fruit juices", ru: "Фруктовые соки" }, price: "2,50 €" },
    { label: { me: "Cedevita", en: "Cedevita", ru: "Цедевита" }, price: "2,20 €" },
    { label: { me: "Red Bull", en: "Red Bull", ru: "Ред Булл" }, price: "3,70 €" },
    { label: { me: "Guarana", en: "Guarana", ru: "Гуарана" }, price: "2,70 €" },
    { label: { me: "Ultra", en: "Ultra", ru: "Ультра" }, price: "2,70 €" },
  ],
  wine: [
    { label: { me: "M. Chardonnay", en: "M. Chardonnay", ru: "M. Шардоне" }, prices: [{ label: { me: "Čaša 0,187 l", en: "Glass 0.187 l", ru: "Бокал 0,187 л" }, value: "3,80 €" }, { label: { me: "Flaša 0,7 l", en: "Bottle 0.7 l", ru: "Бутылка 0,7 л" }, value: "18,00 €" }] },
    { label: { me: "M. Rosé", en: "M. Rosé", ru: "M. Розе" }, prices: [{ label: { me: "Čaša 0,187 l", en: "Glass 0.187 l", ru: "Бокал 0,187 л" }, value: "3,80 €" }, { label: { me: "Flaša 0,7 l", en: "Bottle 0.7 l", ru: "Бутылка 0,7 л" }, value: "18,00 €" }] },
    { label: { me: "M. Vranac", en: "M. Vranac", ru: "M. Вранац" }, prices: [{ label: { me: "Čaša 0,187 l", en: "Glass 0.187 l", ru: "Бокал 0,187 л" }, value: "3,80 €" }, { label: { me: "Flaša 0,7 l", en: "Bottle 0.7 l", ru: "Бутылка 0,7 л" }, value: "18,00 €" }] },
    { label: { me: "M. Ž. Cuvée", en: "M. Ž. Cuvée", ru: "M. Ж. Кюве" }, prices: [{ label: { me: "Čaša 0,187 l", en: "Glass 0.187 l", ru: "Бокал 0,187 л" }, value: "5,00 €" }, { label: { me: "Flaša 0,7 l", en: "Bottle 0.7 l", ru: "Бутылка 0,7 л" }, value: "30,00 €" }] },
    { label: { me: "M. Graševina", en: "M. Graševina", ru: "M. Грашевина" }, prices: [{ label: { me: "Čaša 0,187 l", en: "Glass 0.187 l", ru: "Бокал 0,187 л" }, value: "4,50 €" }, { label: { me: "Flaša 0,7 l", en: "Bottle 0.7 l", ru: "Бутылка 0,7 л" }, value: "26,00 €" }] },
  ],
  aperitif: [
    { label: { me: "Amaro", en: "Amaro", ru: "Амаро" }, price: "2,70 €" },
    { label: { me: "Gorki List", en: "Gorki List", ru: "Горький Лист" }, price: "2,50 €" },
    { label: { me: "Baileys", en: "Baileys", ru: "Бейлис" }, price: "2,70 €" },
    { label: { me: "Gin Tonic", en: "Gin and tonic", ru: "Джин-тоник" }, price: "3,50 €" },
  ],
  spirits: [
    { label: { me: "Loza Institut", en: "Loza Institut", ru: "Лоза Институт" }, price: "3,00 €" },
    { label: { me: "Prvijenac", en: "Prvijenac", ru: "Првийенац" }, price: "3,00 €" },
    { label: { me: "Viljamovka", en: "Pear rakija", ru: "Грушевая ракия" }, price: "2,50 €" },
    { label: { me: "Dunja / Kajsija", en: "Quince / Apricot rakija", ru: "Айва / Абрикосовая ракия" }, price: "2,70 €" },
    { label: { me: "Peach šljiva", en: "Peach plum", ru: "Персик-слива" }, price: "3,30 €" },
    { label: { me: "Smirnoff", en: "Smirnoff", ru: "Смирнофф" }, price: "2,70 €" },
    { label: { me: "Gin", en: "Gin", ru: "Джин" }, price: "2,70 €" },
    { label: { me: "Red Label", en: "Red Label", ru: "Ред Лейбл" }, price: "3,00 €" },
    { label: { me: "Black Label", en: "Black Label", ru: "Блэк Лейбл" }, price: "4,00 €" },
    { label: { me: "Ballantine's", en: "Ballantine's", ru: "Баллантайнс" }, price: "2,50 €" },
    { label: { me: "Jack Daniel's", en: "Jack Daniel's", ru: "Джек Дэниелс" }, price: "3,50 €" },
    { label: { me: "Chivas", en: "Chivas", ru: "Чивас" }, price: "4,00 €" },
    { label: { me: "Jameson", en: "Jameson", ru: "Джемесон" }, price: "3,30 €" },
    { label: { me: "Jägermeister", en: "Jägermeister", ru: "Егермейстер" }, price: "2,70 €" },
    { label: { me: "Travarica", en: "Herbal rakija", ru: "Травяная ракия" }, price: "2,70 €" },
  ],
  beer: [
    { icon: "beer", label: { me: "Točeno pivo", en: "Draft beer", ru: "Разливное пиво" } },
    { icon: "beer", label: { me: "Lager", en: "Lager", ru: "Лагер" } },
    { icon: "beer", label: { me: "Tamno pivo", en: "Dark beer", ru: "Тёмное пиво" } },
    { icon: "beer", label: { me: "Pšenično pivo", en: "Wheat beer", ru: "Пшеничное пиво" } },
    { icon: "beer", label: { me: "Bezalkoholno pivo", en: "Non-alcoholic beer", ru: "Безалкогольное пиво" } },
  ],
  juice: [
    { label: { me: "Limunada", en: "Lemonade", ru: "Лимонад" }, price: "2,20 €" },
    { label: { me: "Cijeđeni sok", en: "Freshly squeezed juice", ru: "Свежевыжатый сок" }, price: "3,00 €" },
  ],
  breakfast: [
    { icon: "egg-fried", label: { me: "Atina doručak", en: "Atina breakfast", ru: "Завтрак Atina" } },
    { icon: "egg", label: { me: "Omlet", en: "Omelette", ru: "Омлет" } },
    { icon: "egg-fried", label: { me: "Jaja na oko", en: "Fried eggs", ru: "Яичница" } },
    { icon: "utensils", label: { me: "Kajgana", en: "Scrambled eggs", ru: "Яичница-болтунья" } },
    { icon: "sandwich", label: { me: "Francuski tost", en: "French toast", ru: "Французский тост" } },
    { icon: "croissant", label: { me: "Kroasan", en: "Croissant", ru: "Круассан" } },
  ],
  main: [
    { icon: "drumstick", label: { me: "Pileći file", en: "Chicken fillet", ru: "Куриное филе" } },
    { icon: "beef", label: { me: "Biftek", en: "Beef steak", ru: "Стейк из говядины" } },
    { icon: "fish", label: { me: "Riblji file", en: "Fish fillet", ru: "Рыбное филе" } },
    { icon: "cooking-pot", label: { me: "Rižoto", en: "Risotto", ru: "Ризотто" } },
    { icon: "utensils-crossed", label: { me: "Pasta", en: "Pasta", ru: "Паста" } },
    { icon: "salad", label: { me: "Grilovano povrće", en: "Grilled vegetables", ru: "Овощи гриль" } },
  ],
  dessert: [
    { icon: "cake-slice", label: { me: "Baklava", en: "Baklava", ru: "Пахлава" } },
    { icon: "cake", label: { me: "Kolač dana", en: "Cake of the day", ru: "Десерт дня" } },
    { icon: "cake-slice", label: { me: "Cheesecake", en: "Cheesecake", ru: "Чизкейк" } },
    { icon: "ice-cream-bowl", label: { me: "Sladoled", en: "Ice cream", ru: "Мороженое" } },
    { icon: "cherry", label: { me: "Voćni tanjir", en: "Fruit plate", ru: "Фруктовая тарелка" } },
  ],
};

const ALL_CATEGORIES = [
  ...DRINKS.map((item) => ({ ...item, menu: "drinks", route: `/karta-pica/${item.key}` })),
  ...FOOD.map((item) => ({ ...item, menu: "food", route: `/jelovnik/${item.key}` })),
];

const ROUTES = Object.fromEntries(ALL_CATEGORIES.map((item) => [item.route, item]));
const app = document.querySelector("#app");

let lang = "me";
let languageOpen = false;
let burgerOpen = false;
let burgerPanel = null;
let splash = "center";
let splashStarted = false;
document.body.classList.add("splash-active");

function iconMarkup(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function flagMarkup(code) {
  if (code === "me") {
    return `<img class="flag-image" src="/flag-me.svg" alt="" aria-hidden="true" />`;
  }

  if (code === "en") {
    return `<svg width="28" height="19" viewBox="0 0 60 41" aria-hidden="true"><rect width="60" height="41" fill="#123274"/><path d="M0 0 60 41M60 0 0 41" stroke="#fff" stroke-width="8"/><path d="M0 0 60 41M60 0 0 41" stroke="#c8102e" stroke-width="3"/><path d="M30 0v41M0 20.5h60" stroke="#fff" stroke-width="12"/><path d="M30 0v41M0 20.5h60" stroke="#c8102e" stroke-width="5"/></svg>`;
  }

  return `<svg width="28" height="19" viewBox="0 0 60 41" aria-hidden="true"><rect width="60" height="13.67" y="0" fill="#fff"/><rect width="60" height="13.67" y="13.67" fill="#0039a6"/><rect width="60" height="13.67" y="27.33" fill="#d52b1e"/></svg>`;
}

function normalizePath() {
  const path = window.location.pathname;
  return path === "/" ? "/" : path.replace(/\/$/, "");
}

function navigate(path) {
  history.pushState({}, "", path);
  languageOpen = false;
  burgerOpen = false;
  burgerPanel = null;
  render();
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function runSplash() {
  if (splash === "done" || splashStarted) {
    return;
  }

  const introLogo = document.querySelector(".intro-logo");
  const brandLogo = document.querySelector(".brand img");
  const splashLayer = document.querySelector(".splash");
  if (!introLogo || !brandLogo || !splashLayer) {
    return;
  }

  splashStarted = true;

  try {
    await Promise.all([introLogo.decode(), brandLogo.decode()]);
  } catch {
    // The browser can still animate an already cached image if decode is unavailable.
  }

  const target = brandLogo.getBoundingClientRect();
  const mobile = window.matchMedia("(max-width: 520px)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motionDuration = reducedMotion ? 420 : mobile ? 2050 : 1900;
  const startWidth = Math.min(mobile ? window.innerWidth * 0.78 : window.innerWidth * 0.42, mobile ? 310 : 460);
  const logoRatio = introLogo.naturalHeight / introLogo.naturalWidth || 2 / 3;
  const startHeight = startWidth * logoRatio;
  const startLeft = (window.innerWidth - startWidth) / 2;
  const startTop = (window.innerHeight - startHeight) / 2;
  const scale = startWidth / target.width;
  const startTranslate = `${startLeft}px ${startTop}px`;
  const endTranslate = `${target.left}px ${target.top}px`;

  introLogo.style.width = `${target.width}px`;
  introLogo.style.translate = startTranslate;
  introLogo.style.scale = `${scale}`;
  introLogo.style.visibility = "visible";

  const revealTargets = [
    { element: document.querySelector(".topbar"), delay: 0, duration: motionDuration * 0.72 },
    ...[...document.querySelectorAll(".column-rail")].map((element) => ({
      element,
      delay: reducedMotion ? 0 : 120,
      duration: motionDuration * 0.76,
    })),
    { element: document.querySelector(".page-shell"), delay: reducedMotion ? 0 : 260, duration: motionDuration * 0.82 },
  ].filter((item) => item.element);

  revealTargets.forEach(({ element }) => {
    element.style.opacity = "0";
  });

  await wait(reducedMotion ? 120 : 560);
  document.body.classList.add("splash-moving");

  const movement = introLogo.animate(
    [
      { translate: startTranslate, scale: `${scale}` },
      { translate: endTranslate, scale: "1" },
    ],
    {
      duration: motionDuration,
      easing: "cubic-bezier(0.45, 0, 0.55, 1)",
      fill: "forwards",
    },
  );

  const backdropReveal = splashLayer.animate(
    [
      { backgroundColor: "rgba(246, 240, 226, 1)", offset: 0 },
      { backgroundColor: "rgba(246, 240, 226, 0.98)", offset: 0.1 },
      { backgroundColor: "rgba(246, 240, 226, 0)", offset: 1 },
    ],
    {
      duration: motionDuration,
      easing: "linear",
      fill: "forwards",
    },
  );

  const contentReveal = revealTargets.map(({ element, delay, duration }) =>
    element.animate([{ opacity: 0 }, { opacity: 1 }], {
      delay,
      duration,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "forwards",
    }),
  );

  try {
    await Promise.all([movement.finished, backdropReveal.finished, ...contentReveal.map((animation) => animation.finished)]);
  } catch {
    // A resize or navigation may cancel the animation; finish in the target state.
  }

  introLogo.style.translate = endTranslate;
  introLogo.style.scale = "1";
  document.body.classList.add("splash-arrived", "splash-finished");
  await wait(reducedMotion ? 80 : 300);

  splash = "done";
  document.body.classList.remove("splash-active", "splash-moving", "splash-arrived", "splash-finished");
  render();
}

function header(text) {
  const languages = ["me", "en", "ru"]
    .map(
      (code) => `
        <button class="${code === lang ? "active" : ""}" type="button" data-lang="${code}" aria-label="Jezik ${code}">
          ${flagMarkup(code)}
        </button>
      `,
    )
    .join("");

  return `
    <header class="topbar">
      <button class="brand" type="button" data-route="/" aria-label="Atina 2">
        <img src="/atina-logo.png" alt="Atina 2 restoran" />
      </button>

      <div class="toolbar">
        <div class="language">
          <button class="flag-button" type="button" data-language-toggle aria-label="Izbor jezika" aria-expanded="${languageOpen}">
            ${flagMarkup(lang)}
            <span class="chevron">⌄</span>
          </button>
          ${languageOpen ? `<div class="language-menu">${languages}</div>` : ""}
        </div>
        <button class="menu-button" type="button" data-burger-toggle aria-label="Meni">${burgerOpen ? "×" : "☰"}</button>
      </div>

      ${burgerOpen ? burgerMenu(text) : ""}
    </header>
  `;
}

function burgerMenu(text) {
  if (burgerPanel === "drinks") {
    return submenu(text.drinksMenu, DRINKS, text, "drinks");
  }

  if (burgerPanel === "food") {
    return submenu(text.foodMenu, FOOD, text, "food");
  }

  return `
    <nav class="burger-panel" aria-label="Meni">
      <button type="button" data-burger-panel="drinks">
        <span>${text.drinksMenu}</span>
        <strong>›</strong>
      </button>
      <button type="button" data-burger-panel="food">
        <span>${text.foodMenu}</span>
        <strong>›</strong>
      </button>
    </nav>
  `;
}

function submenu(title, items, text, menu) {
  const rows = items
    .map((item) => {
      const route = menu === "drinks" ? `/karta-pica/${item.key}` : `/jelovnik/${item.key}`;
      return `
        <button type="button" data-route="${route}">
          <span class="mini-icon">${iconMarkup(item.icon)}</span>
          <span>${text.categories[item.key]}</span>
        </button>
      `;
    })
    .join("");

  return `
    <nav class="burger-panel" aria-label="${title}">
      <button class="back-row" type="button" data-burger-back>
        <strong>‹</strong>
        <span>${title}</span>
      </button>
      ${rows}
    </nav>
  `;
}

function home(text) {
  return `
    <main class="page-shell home-shell">
      <section class="cards-only">
        ${menuSection(text.drinksMenu, DRINKS.map((item) => ({ ...item, menu: "drinks", route: `/karta-pica/${item.key}` })), text)}
        ${menuSection(text.foodMenu, FOOD.map((item) => ({ ...item, menu: "food", route: `/jelovnik/${item.key}` })), text)}
      </section>
    </main>
  `;
}

function menuSection(title, items, text) {
  return `
    <section class="menu-section">
      <div class="section-title">
        <span></span>
        <h2>${title}</h2>
        <span></span>
      </div>
      <div class="card-grid">
        ${items.map((item) => card(item, text)).join("")}
      </div>
    </section>
  `;
}

function card(item, text) {
  return `
    <button class="category-card" type="button" data-route="${item.route}">
      <span class="card-cap"></span>
      <span class="card-icon">${iconMarkup(item.icon)}</span>
      <strong>${text.categories[item.key]}</strong>
    </button>
  `;
}

function emptySection(route, text) {
  const items = MENU_ITEMS[route.key] || [];

  return `
    <main class="page-shell category-shell">
      <section class="category-section">
        <div class="category-back-row">
          <button class="back-link" type="button" data-route="/" aria-label="${text.back}">←</button>
        </div>
        <div class="section-title category-section-title">
          <span></span>
          <h1>${text.categories[route.key]}</h1>
          <span></span>
        </div>
        <div class="item-grid">
          ${items
            .map(
              (item) => `
                <article class="menu-item-card">
                  <span class="card-cap" aria-hidden="true"></span>
                  <strong>${item.label[lang]}</strong>
                  ${item.price ? `<span class="item-price">${item.price}</span>` : ""}
                  ${
                    item.prices
                      ? `<div class="item-price-list">
                          ${item.prices
                            .map(
                              (price) => `
                                <span class="item-price-row">
                                  <small>${price.label[lang]}</small>
                                  <b>${price.value}</b>
                                </span>
                              `,
                            )
                            .join("")}
                        </div>`
                      : ""
                  }
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </main>
  `;
}

function render() {
  const text = COPY[lang];
  const route = ROUTES[normalizePath()];

  app.innerHTML = `
    <div class="app-frame">
      <div class="column-rail column-left" aria-hidden="true">
        <img class="column" src="/atina-column-engraved.png" alt="" />
      </div>
      <div class="column-rail column-right" aria-hidden="true">
        <img class="column" src="/atina-column-engraved.png" alt="" />
      </div>
      ${header(text)}
      ${route ? emptySection(route, text) : home(text)}
      ${
        splash !== "done"
          ? `<div class="splash"><img class="intro-logo" src="/atina-logo.png" alt="Atina 2 restoran" /></div>`
          : ""
      }
    </div>
  `;

  window.lucide?.createIcons({ attrs: { "stroke-width": 1.65 } });

  requestAnimationFrame(runSplash);
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    navigate(routeButton.dataset.route);
    return;
  }

  if (event.target.closest("[data-language-toggle]")) {
    languageOpen = !languageOpen;
    burgerOpen = false;
    burgerPanel = null;
    render();
    return;
  }

  const langButton = event.target.closest("[data-lang]");
  if (langButton) {
    lang = langButton.dataset.lang;
    languageOpen = false;
    render();
    return;
  }

  if (event.target.closest("[data-burger-toggle]")) {
    burgerOpen = !burgerOpen;
    languageOpen = false;
    burgerPanel = null;
    render();
    return;
  }

  const panelButton = event.target.closest("[data-burger-panel]");
  if (panelButton) {
    burgerPanel = panelButton.dataset.burgerPanel;
    render();
    return;
  }

  if (event.target.closest("[data-burger-back]")) {
    burgerPanel = null;
    render();
  }
});

window.addEventListener("popstate", render);
render();
