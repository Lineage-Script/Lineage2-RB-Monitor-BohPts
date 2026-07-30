const translations = {
  uk: {
    navFeatures:"Можливості", navSetup:"Налаштування", navMap:"Карта РБ", navFaq:"FAQ",
    previewBadge:"Тестовий дизайн • не основний сайт",
    heroTitle:"Контроль рейд-босів<br><span>без ручних таймерів</span>",
    heroLead:"OCR зчитує системний чат Lineage 2, запускає таймери, показує їх поверх гри та синхронізує активних РБ на онлайн-карті.",
    heroPrimary:"Подивитися, як працює", download:"Завантажити",
    metricBosses:"рейд-босів", metricLanguages:"мови інтерфейсу", metricMap:"синхронізація карти",
    liveInterface:"Живий інтерфейс лаунчера", ocrStatus:"чат розпізнано", mapStatus:"таймери синхронізовано", overlayStatus:"поверх гри",
    whyKicker:"Єдина система", whyTitle:"Усе потрібне для фарму РБ<br><span>в одному інтерфейсі</span>",
    whyLead:"Замість ручних секундомірів, скрінів у чаті та постійного перемикання між вікнами.",
    featureOcrTitle:"OCR системного чату", featureOcrText:"Скрипт знаходить повідомлення про появу або смерть РБ та запускає потрібний таймер.",
    featureOverlayTitle:"Ігровий overlay", featureOverlayText:"Таймери завжди видно поверх клієнта. Колір, масштаб, позиція та розмір налаштовуються.",
    featureMapTitle:"Онлайн-карта РБ", featureMapText:"Активні таймери з’являються на карті з назвами, координатами та станом респу.",
    featureEpicTitle:"Епік та спеціальні події", featureEpicText:"Окремі повідомлення й сценарії для епік-босів, Lilith/Anakim та інших серверних подій.",
    workflowKicker:"Швидке налаштування", workflowTitle:"Покажи скрипту чат —<br><span>решту він зробить сам</span>",
    workflowLead:"Зона захвату налаштовується один раз. Після цього OCR читає лише потрібну частину вікна та не заважає грі.",
    step1Title:"Запусти гру та OBS", step1Text:"WebSocket працює на стандартному порту 4455.",
    step2Title:"Виділи системний чат", step2Text:"Вкажи X, Y, ширину та висоту області OCR.",
    step3Title:"Натисни «Запустити»", step3Text:"Таймери й карта оновлюються автоматично.",
    visualGuide:"Візуальна інструкція", chatAreaTitle:"Правильна зона чату", chatAreaText:"У кадрі мають бути системні повідомлення про РБ.",
    settingsKicker:"Гнучкий overlay", settingsTitle:"Виглядає так, як зручно<br><span>саме на твоєму екрані</span>",
    detail1Title:"Точне позиціонування", detail1Text:"Координати та розмір задаються чисельно, тому overlay легко поставити в потрібний кут.",
    detail2Title:"Попередній перегляд", detail2Text:"Перевір результат до запуску монітора та не витрачай час у грі.",
    detail3Title:"Підтримка різних роздільностей", detail3Text:"Окремо задається розмір кадру OBS і зона системного чату.",
    mapKicker:"Жива карта", mapTitle:"Побач РБ на карті<br><span>раніше, ніж шукатимеш вручну</span>",
    mapLead:"Перемикай мову назв, шукай потрібного боса й стеж за активними таймерами з будь-якого пристрою.",
    hotspotSearch:"Пошук РБ", hotspotTimer:"Активний таймер", hotspotPoint:"Точка на карті",
    mapBenefit1Title:"Пошук за назвою", mapBenefit1Text:"RU та ENG назви босів.",
    mapBenefit2Title:"Стани кольорами", mapBenefit2Text:"Живий, респ та тимчасова точка.",
    mapBenefit3Title:"Спільна синхронізація", mapBenefit3Text:"Дані оновлюються для всіх користувачів.",
    languageKicker:"Три мови", languageTitle:"Один інструмент —<br><span>зрозумілий усім</span>",
    languageLead:"Лаунчер, налаштування та основні підказки доступні українською, російською й англійською.",
    faqTitle:"Питання перед<br><span>першим запуском</span>", faqLead:"Коротко про те, що потрібно для стабільної роботи.",
    faq1Q:"Чи потрібно тримати OBS відкритим?", faq1A:"Так. OBS передає зображення системного чату через WebSocket, а скрипт розпізнає повідомлення OCR.",
    faq2Q:"Чи можна змінити положення overlay?", faq2A:"Так. У налаштуваннях доступні координати X/Y, ширина, висота, масштаб і колір тексту.",
    faq3Q:"Карта працює на телефоні?", faq3A:"Так. Інтерфейс карти адаптивний і відкривається у звичайному мобільному браузері.",
    faq4Q:"Чи підтримуються різні сервери?", faq4A:"База фраз і босів налаштовується під сервер. Поточна версія орієнтована на High Five.",
    ctaKicker:"Менше рутини. Більше гри.", ctaTitle:"Нехай таймери працюють замість тебе",
    ctaText:"Встанови компоненти, вибери зону чату та запускай монітор однією кнопкою.",
    downloadNow:"Завантажити Yura RB Monitor", footerNote:"Тестовий варіант дизайну. Основний сайт не змінено."
  },
  ru: {
    navFeatures:"Возможности", navSetup:"Настройка", navMap:"Карта РБ", navFaq:"FAQ",
    previewBadge:"Тестовый дизайн • не основной сайт",
    heroTitle:"Контроль рейд-боссов<br><span>без ручных таймеров</span>",
    heroLead:"OCR читает системный чат Lineage 2, запускает таймеры, показывает их поверх игры и синхронизирует активных РБ на онлайн-карте.",
    heroPrimary:"Посмотреть, как работает", download:"Скачать",
    metricBosses:"рейд-боссов", metricLanguages:"языка интерфейса", metricMap:"синхронизация карты",
    liveInterface:"Живой интерфейс лаунчера", ocrStatus:"чат распознан", mapStatus:"таймеры синхронизированы", overlayStatus:"поверх игры",
    whyKicker:"Единая система", whyTitle:"Всё для фарма РБ<br><span>в одном интерфейсе</span>",
    whyLead:"Вместо ручных секундомеров, скринов в чате и постоянного переключения между окнами.",
    featureOcrTitle:"OCR системного чата", featureOcrText:"Скрипт находит сообщения о появлении или смерти РБ и запускает нужный таймер.",
    featureOverlayTitle:"Игровой overlay", featureOverlayText:"Таймеры всегда видны поверх клиента. Цвет, масштаб, позиция и размер настраиваются.",
    featureMapTitle:"Онлайн-карта РБ", featureMapText:"Активные таймеры появляются на карте с названиями, координатами и состоянием респа.",
    featureEpicTitle:"Эпик и особые события", featureEpicText:"Отдельные сообщения и сценарии для эпик-боссов, Lilith/Anakim и других серверных событий.",
    workflowKicker:"Быстрая настройка", workflowTitle:"Покажи скрипту чат —<br><span>остальное он сделает сам</span>",
    workflowLead:"Зона захвата настраивается один раз. Затем OCR читает только нужную часть окна и не мешает игре.",
    step1Title:"Запусти игру и OBS", step1Text:"WebSocket работает на стандартном порту 4455.",
    step2Title:"Выдели системный чат", step2Text:"Укажи X, Y, ширину и высоту области OCR.",
    step3Title:"Нажми «Запустить»", step3Text:"Таймеры и карта обновляются автоматически.",
    visualGuide:"Визуальная инструкция", chatAreaTitle:"Правильная зона чата", chatAreaText:"В кадре должны быть системные сообщения о РБ.",
    settingsKicker:"Гибкий overlay", settingsTitle:"Выглядит так, как удобно<br><span>именно на твоём экране</span>",
    detail1Title:"Точное позиционирование", detail1Text:"Координаты и размер задаются численно, поэтому overlay легко поставить в нужный угол.",
    detail2Title:"Предварительный просмотр", detail2Text:"Проверь результат до запуска монитора и не трать время в игре.",
    detail3Title:"Поддержка разных разрешений", detail3Text:"Отдельно задаётся размер кадра OBS и зона системного чата.",
    mapKicker:"Живая карта", mapTitle:"Увидь РБ на карте<br><span>раньше, чем начнёшь искать вручную</span>",
    mapLead:"Переключай язык названий, ищи нужного босса и следи за активными таймерами с любого устройства.",
    hotspotSearch:"Поиск РБ", hotspotTimer:"Активный таймер", hotspotPoint:"Точка на карте",
    mapBenefit1Title:"Поиск по названию", mapBenefit1Text:"RU и ENG названия боссов.",
    mapBenefit2Title:"Состояния цветом", mapBenefit2Text:"Живой, респ и временная точка.",
    mapBenefit3Title:"Общая синхронизация", mapBenefit3Text:"Данные обновляются для всех пользователей.",
    languageKicker:"Три языка", languageTitle:"Один инструмент —<br><span>понятный всем</span>",
    languageLead:"Лаунчер, настройки и основные подсказки доступны на украинском, русском и английском.",
    faqTitle:"Вопросы перед<br><span>первым запуском</span>", faqLead:"Коротко о том, что нужно для стабильной работы.",
    faq1Q:"Нужно ли держать OBS открытым?", faq1A:"Да. OBS передаёт изображение системного чата через WebSocket, а скрипт распознаёт сообщения OCR.",
    faq2Q:"Можно изменить положение overlay?", faq2A:"Да. В настройках доступны координаты X/Y, ширина, высота, масштаб и цвет текста.",
    faq3Q:"Карта работает на телефоне?", faq3A:"Да. Интерфейс карты адаптивный и открывается в обычном мобильном браузере.",
    faq4Q:"Поддерживаются разные серверы?", faq4A:"База фраз и боссов настраивается под сервер. Текущая версия ориентирована на High Five.",
    ctaKicker:"Меньше рутины. Больше игры.", ctaTitle:"Пусть таймеры работают вместо тебя",
    ctaText:"Установи компоненты, выбери зону чата и запускай монитор одной кнопкой.",
    downloadNow:"Скачать Yura RB Monitor", footerNote:"Тестовый вариант дизайна. Основной сайт не изменён."
  },
  en: {
    navFeatures:"Features", navSetup:"Setup", navMap:"RB Map", navFaq:"FAQ",
    previewBadge:"Test redesign • main site unchanged",
    heroTitle:"Raid boss control<br><span>without manual timers</span>",
    heroLead:"OCR reads the Lineage 2 system chat, starts timers, displays them over the game and syncs active raid bosses to the online map.",
    heroPrimary:"See how it works", download:"Download",
    metricBosses:"raid bosses", metricLanguages:"interface languages", metricMap:"live map sync",
    liveInterface:"Live launcher interface", ocrStatus:"chat detected", mapStatus:"timers synchronized", overlayStatus:"over the game",
    whyKicker:"One complete system", whyTitle:"Everything for RB farming<br><span>in one interface</span>",
    whyLead:"No manual stopwatches, chat screenshots or constant window switching.",
    featureOcrTitle:"System chat OCR", featureOcrText:"The script detects raid boss spawn or death messages and starts the correct timer.",
    featureOverlayTitle:"In-game overlay", featureOverlayText:"Timers stay visible above the game client. Color, scale, position and size are configurable.",
    featureMapTitle:"Online RB map", featureMapText:"Active timers appear on the map with boss names, coordinates and respawn status.",
    featureEpicTitle:"Epic and special events", featureEpicText:"Dedicated alerts and flows for epic bosses, Lilith/Anakim and other server events.",
    workflowKicker:"Fast setup", workflowTitle:"Show the script your chat —<br><span>it handles the rest</span>",
    workflowLead:"Configure the capture region once. OCR then reads only the required area without interfering with the game.",
    step1Title:"Launch the game and OBS", step1Text:"WebSocket uses the standard port 4455.",
    step2Title:"Select the system chat", step2Text:"Set the OCR region X, Y, width and height.",
    step3Title:"Press “Launch”", step3Text:"Timers and the map update automatically.",
    visualGuide:"Visual setup guide", chatAreaTitle:"Correct chat region", chatAreaText:"The frame must include raid boss system messages.",
    settingsKicker:"Flexible overlay", settingsTitle:"Looks right<br><span>on your exact screen</span>",
    detail1Title:"Precise positioning", detail1Text:"Coordinates and size are numeric, so the overlay is easy to place in any corner.",
    detail2Title:"Instant preview", detail2Text:"Check the result before launching the monitor and save time in game.",
    detail3Title:"Multiple resolutions", detail3Text:"OBS frame size and the system chat region are configured independently.",
    mapKicker:"Live map", mapTitle:"See the raid boss on the map<br><span>before searching manually</span>",
    mapLead:"Switch name language, search for a boss and follow active timers from any device.",
    hotspotSearch:"Boss search", hotspotTimer:"Active timer", hotspotPoint:"Map location",
    mapBenefit1Title:"Name search", mapBenefit1Text:"RU and ENG boss names.",
    mapBenefit2Title:"Color-coded states", mapBenefit2Text:"Alive, respawn and temporary point.",
    mapBenefit3Title:"Shared synchronization", mapBenefit3Text:"Data updates for every user.",
    languageKicker:"Three languages", languageTitle:"One tool —<br><span>clear to everyone</span>",
    languageLead:"The launcher, settings and essential guidance are available in Ukrainian, Russian and English.",
    faqTitle:"Questions before<br><span>your first launch</span>", faqLead:"The essentials required for stable operation.",
    faq1Q:"Does OBS need to stay open?", faq1A:"Yes. OBS provides the system chat image through WebSocket and the script recognizes messages with OCR.",
    faq2Q:"Can I move the overlay?", faq2A:"Yes. Settings include X/Y coordinates, width, height, scale and text color.",
    faq3Q:"Does the map work on mobile?", faq3A:"Yes. The map interface is responsive and opens in a regular mobile browser.",
    faq4Q:"Are different servers supported?", faq4A:"Boss phrases and data can be adapted to a server. The current version focuses on High Five.",
    ctaKicker:"Less routine. More game.", ctaTitle:"Let the timers work for you",
    ctaText:"Install the components, select the chat region and launch the monitor with one button.",
    downloadNow:"Download Yura RB Monitor", footerNote:"Test redesign. The main website has not been changed."
  }
};

const imageSets = {
  launcher: {
    uk: "./assets/launcher-uk.webp",
    ru: "./assets/launcher-ru.webp",
    en: "./assets/launcher-en.webp"
  },
  settings: {
    uk: "./assets/settings-uk.webp",
    ru: "./assets/settings-ru.webp",
    en: "./assets/settings-en.webp"
  },
  map: {
    uk: "./assets/map-ru.webp",
    ru: "./assets/map-ru.webp",
    en: "./assets/map-en.webp"
  }
};

const langButtons = document.querySelectorAll("[data-lang]");
const html = document.documentElement;

function setLanguage(lang) {
  const dict = translations[lang] || translations.uk;
  html.lang = lang;
  localStorage.setItem("yura-site-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-lang-image]").forEach(button => {
    const type = button.dataset.langImage;
    const img = button.querySelector("img");
    if (img && imageSets[type]) img.src = imageSets[type][lang];
  });

  langButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  document.title = lang === "en"
    ? "Yura RB Monitor — test redesign"
    : lang === "ru"
      ? "Yura RB Monitor — тестовый дизайн"
      : "Yura RB Monitor — тестовий дизайн";
}

langButtons.forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem("yura-site-lang") || "uk");

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 18), {passive:true});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mainNav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.14});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
document.querySelectorAll("[data-lightbox]").forEach(btn => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    lightboxImage.src = img.currentSrc || img.src;
    lightboxImage.alt = img.alt || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

const finePointer = matchMedia("(pointer:fine)").matches;
if (finePointer && !matchMedia("(prefers-reduced-motion:reduce)").matches) {
  document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      const base = card.classList.contains("frame-hero") ? "rotateY(-5deg) rotateX(2deg) " : "";
      card.style.transform = `${base}rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-2px)`;
    });
    card.addEventListener("pointerleave", () => card.style.transform = "");
  });
}

const sparks = document.getElementById("sparks");
for (let i = 0; i < 26; i++) {
  const s = document.createElement("span");
  s.className = "spark";
  s.style.left = `${Math.random() * 100}%`;
  s.style.setProperty("--duration", `${8 + Math.random() * 12}s`);
  s.style.setProperty("--delay", `${-Math.random() * 18}s`);
  s.style.setProperty("--drift", `${-40 + Math.random() * 80}px`);
  s.style.width = s.style.height = `${1 + Math.random() * 2.4}px`;
  sparks.appendChild(s);
}
