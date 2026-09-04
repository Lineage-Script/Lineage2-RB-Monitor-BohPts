const DOWNLOAD_LATEST = "https://github.com/Lineage-Script/Lineage2-RB-Monitor-BohPts/releases/latest/download/YuraRBMonitor_Client_latest.zip";

const translations = {
  uk: {
    navFeatures:"Можливості", navSetup:"Налаштування", navMap:"Карта РБ", navFaq:"FAQ",
    previewBadge:"Yura RB Monitor • Lineage 2 High Five • BohPts x500",
    heroTitle:"Карта РБ Л2<br>та таймер рейд-босів<br><span>без ручних секундомірів</span>",
    heroLead:"Yura RB Monitor — карта РБ Л2 і raid boss timer для Lineage 2 High Five та BohPts x500. OBS/OCR зчитує системний чат, запускає таймери респу, показує overlay поверх гри та синхронізує активних рейд-босів на онлайн-карті.",
    heroPrimary:"Подивитися, як працює", download:"Завантажити",
    metricBosses:"рейд-босів", metricLanguages:"мови інтерфейсу", metricMap:"синхронізація карти",
    liveInterface:"Живий інтерфейс лаунчера", ocrStatus:"чат розпізнано", mapStatus:"таймери синхронізовано", overlayStatus:"поверх гри",
    whyKicker:"Lineage 2 High Five", whyTitle:"Карта РБ, таймер респу та overlay<br><span>в одному інтерфейсі</span>",
    whyLead:"Замість ручних секундомірів і скрінів у чаті — автоматичне OCR-розпізнавання, raid boss timer та жива карта РБ для фарму на High Five, з конфігурацією під BohPts x500.",
    featureOcrTitle:"OCR системного чату", featureOcrText:"Скрипт знаходить у чаті Lineage 2 повідомлення про появу або смерть РБ та запускає відповідний таймер респу.",
    featureOverlayTitle:"Ігровий overlay", featureOverlayText:"Таймери рейд-босів завжди видно поверх клієнта. Колір, масштаб, позиція та розмір налаштовуються.",
    featureMapTitle:"Онлайн-карта РБ Л2", featureMapText:"Lineage 2 High Five map показує активні таймери, назви босів, координати, живий статус і вікно респу.",
    featureEpicTitle:"Епік та спеціальні події", featureEpicText:"Окремі повідомлення й сценарії для епік-босів, Lilith/Anakim та інших подій сервера.",
    workflowKicker:"Швидке налаштування", workflowTitle:"Покажи скрипту чат —<br><span>решту він зробить сам</span>",
    workflowLead:"Зона захвату налаштовується один раз. Після цього OBS/OCR читає потрібну частину вікна Lineage 2 та автоматично оновлює RB timer і карту.",
    step1Title:"Запусти гру та OBS", step1Text:"WebSocket працює на стандартному порту 4455.",
    step2Title:"Виділи системний чат", step2Text:"Вкажи X, Y, ширину та висоту області OCR.",
    step3Title:"Натисни «Запустити»", step3Text:"Таймери РБ і онлайн-карта оновлюються автоматично.",
    visualGuide:"Візуальна інструкція", chatAreaTitle:"Правильна зона чату", chatAreaText:"У кадрі мають бути системні повідомлення про РБ.",
    settingsKicker:"Гнучкий overlay", settingsTitle:"Таймер РБ поверх гри<br><span>саме там, де зручно</span>",
    detail1Title:"Точне позиціонування", detail1Text:"Координати та розмір задаються чисельно, тому overlay легко поставити в потрібний кут.",
    detail2Title:"Попередній перегляд", detail2Text:"Перевір результат до запуску монітора та не витрачай час у грі.",
    detail3Title:"Підтримка різних роздільностей", detail3Text:"Окремо задається розмір кадру OBS і зона системного чату.",
    mapKicker:"Карта РБ Л2", mapTitle:"Lineage 2 High Five карта РБ<br><span>з живими таймерами респу</span>",
    mapLead:"Шукай потрібного рейд-боса за назвою, дивись його координати та стеж за активними таймерами з ПК або телефона. Карта орієнтована на High Five і поточну конфігурацію BohPts x500.",
    hotspotSearch:"Пошук РБ", hotspotTimer:"Активний таймер", hotspotPoint:"Точка на карті",
    mapBenefit1Title:"Пошук за назвою", mapBenefit1Text:"RU та ENG назви рейд-босів.",
    mapBenefit2Title:"Стани кольорами", mapBenefit2Text:"Живий, респ та тимчасова точка.",
    mapBenefit3Title:"Спільна синхронізація", mapBenefit3Text:"Дані карти РБ оновлюються для всіх користувачів.",
    seoKicker:"BohPts x500 • High Five", seoTitle:"Raid Boss Timer та карта РБ для Lineage 2",
    seoLead:"Якщо ти шукаєш «карта рб л2», «таймер рб л2», «BohPts x500», «raid boss timer» або «Lineage 2 High Five map», Yura RB Monitor об’єднує ці функції в одному Windows-лаунчері.",
    seoCard1Title:"Карта РБ Л2", seoCard1Text:"Онлайн-карта рейд-босів Lineage 2 High Five з координатами, пошуком і поточними таймерами респу.",
    seoCard2Title:"BohPts x500", seoCard2Text:"Поточна база повідомлень, босів і сценаріїв монітора налаштована під High Five та використання на BohPts x500.",
    seoCard3Title:"Raid Boss Timer", seoCard3Text:"Автоматичний raid boss respawn timer запускається після OCR-розпізнавання повідомлень у системному чаті.",
    languageKicker:"Три мови", languageTitle:"Один інструмент —<br><span>зрозумілий усім</span>",
    languageLead:"Лаунчер, карта РБ, налаштування та основні підказки доступні українською, російською й англійською.",
    faqTitle:"Питання перед<br><span>першим запуском</span>", faqLead:"Коротко про те, що потрібно для стабільної роботи.",
    faq1Q:"Чи потрібно тримати OBS відкритим?", faq1A:"Так. OBS передає зображення системного чату через WebSocket, а монітор розпізнає повідомлення OCR.",
    faq2Q:"Чи можна змінити положення overlay?", faq2A:"Так. У налаштуваннях доступні координати X/Y, ширина, висота, масштаб і колір тексту.",
    faq3Q:"Карта РБ працює на телефоні?", faq3A:"Так. Відкрийте карту на ліцензованому ПК, натисніть «Телефон / QR» і відскануйте одноразовий QR-код. До однієї ліцензії прив’язується один ПК і один мобільний браузер.",
    faq4Q:"Для якого сервера зроблений монітор?", faq4A:"Архітектура розрахована на Lineage 2 High Five. Поточна конфігурація фраз, босів і таймерів орієнтована на BohPts x500; база може адаптуватися під інший сервер.",
    ctaKicker:"Менше рутини. Більше гри.", ctaTitle:"Запусти Yura RB Monitor",
    ctaText:"Встанови компоненти, вибери зону чату та запускай Yura RB Monitor однією кнопкою.",
    downloadNow:"Завантажити Yura RB Monitor", footerNote:"Lineage 2 High Five • BohPts x500 • Карта РБ • Raid Boss Timer • OBS/OCR"
  },
  ru: {
    navFeatures:"Возможности", navSetup:"Настройка", navMap:"Карта РБ", navFaq:"FAQ",
    previewBadge:"Yura RB Monitor • Lineage 2 High Five • BohPts x500",
    heroTitle:"Карта РБ Л2<br>и таймер рейд-боссов<br><span>без ручных секундомеров</span>",
    heroLead:"Yura RB Monitor — карта РБ Л2 и raid boss timer для Lineage 2 High Five и BohPts x500. OBS/OCR читает системный чат, запускает таймеры респа, показывает overlay поверх игры и синхронизирует активных рейд-боссов на онлайн-карте.",
    heroPrimary:"Посмотреть, как работает", download:"Скачать",
    metricBosses:"рейд-боссов", metricLanguages:"языка интерфейса", metricMap:"синхронизация карты",
    liveInterface:"Живой интерфейс лаунчера", ocrStatus:"чат распознан", mapStatus:"таймеры синхронизированы", overlayStatus:"поверх игры",
    whyKicker:"Lineage 2 High Five", whyTitle:"Карта РБ, таймер респа и overlay<br><span>в одном интерфейсе</span>",
    whyLead:"Вместо ручных секундомеров и скринов — автоматическое OCR-распознавание, raid boss timer и живая карта РБ для High Five, с конфигурацией под BohPts x500.",
    featureOcrTitle:"OCR системного чата", featureOcrText:"Монитор находит в чате Lineage 2 сообщения о появлении или смерти РБ и запускает соответствующий таймер респа.",
    featureOverlayTitle:"Игровой overlay", featureOverlayText:"Таймеры рейд-боссов всегда видны поверх клиента. Цвет, масштаб, позиция и размер настраиваются.",
    featureMapTitle:"Онлайн-карта РБ Л2", featureMapText:"Lineage 2 High Five map показывает активные таймеры, названия боссов, координаты, живой статус и окно респа.",
    featureEpicTitle:"Эпик и особые события", featureEpicText:"Отдельные сообщения и сценарии для эпик-боссов, Lilith/Anakim и других серверных событий.",
    workflowKicker:"Быстрая настройка", workflowTitle:"Покажи скрипту чат —<br><span>остальное он сделает сам</span>",
    workflowLead:"Зона захвата настраивается один раз. Затем OBS/OCR читает нужную часть окна Lineage 2 и автоматически обновляет RB timer и карту.",
    step1Title:"Запусти игру и OBS", step1Text:"WebSocket работает на стандартном порту 4455.",
    step2Title:"Выдели системный чат", step2Text:"Укажи X, Y, ширину и высоту области OCR.",
    step3Title:"Нажми «Запустить»", step3Text:"Таймеры РБ и онлайн-карта обновляются автоматически.",
    visualGuide:"Визуальная инструкция", chatAreaTitle:"Правильная зона чата", chatAreaText:"В кадре должны быть системные сообщения о РБ.",
    settingsKicker:"Гибкий overlay", settingsTitle:"Таймер РБ поверх игры<br><span>там, где удобно</span>",
    detail1Title:"Точное позиционирование", detail1Text:"Координаты и размер задаются численно, поэтому overlay легко поставить в нужный угол.",
    detail2Title:"Предварительный просмотр", detail2Text:"Проверь результат до запуска монитора и не трать время в игре.",
    detail3Title:"Поддержка разных разрешений", detail3Text:"Отдельно задаётся размер кадра OBS и зона системного чата.",
    mapKicker:"Карта РБ Л2", mapTitle:"Lineage 2 High Five карта РБ<br><span>с живыми таймерами респа</span>",
    mapLead:"Ищи нужного рейд-босса по названию, смотри координаты и следи за активными таймерами с ПК или телефона. Карта ориентирована на High Five и текущую конфигурацию BohPts x500.",
    hotspotSearch:"Поиск РБ", hotspotTimer:"Активный таймер", hotspotPoint:"Точка на карте",
    mapBenefit1Title:"Поиск по названию", mapBenefit1Text:"RU и ENG названия рейд-боссов.",
    mapBenefit2Title:"Состояния цветом", mapBenefit2Text:"Живой, респ и временная точка.",
    mapBenefit3Title:"Общая синхронизация", mapBenefit3Text:"Данные карты РБ обновляются для всех пользователей.",
    seoKicker:"BohPts x500 • High Five", seoTitle:"Raid Boss Timer и карта РБ для Lineage 2",
    seoLead:"Если вы ищете «карта рб л2», «таймер рб л2», «BohPts x500», «raid boss timer» или «Lineage 2 High Five map», Yura RB Monitor объединяет эти функции в одном Windows-лаунчере.",
    seoCard1Title:"Карта РБ Л2", seoCard1Text:"Онлайн-карта рейд-боссов Lineage 2 High Five с координатами, поиском и текущими таймерами респа.",
    seoCard2Title:"BohPts x500", seoCard2Text:"Текущая база сообщений, боссов и сценариев монитора настроена под High Five и использование на BohPts x500.",
    seoCard3Title:"Raid Boss Timer", seoCard3Text:"Автоматический raid boss respawn timer запускается после OCR-распознавания сообщения в системном чате.",
    languageKicker:"Три языка", languageTitle:"Один инструмент —<br><span>понятный всем</span>",
    languageLead:"Лаунчер, карта РБ, настройки и основные подсказки доступны на украинском, русском и английском.",
    faqTitle:"Вопросы перед<br><span>первым запуском</span>", faqLead:"Коротко о том, что нужно для стабильной работы.",
    faq1Q:"Нужно ли держать OBS открытым?", faq1A:"Да. OBS передаёт изображение системного чата через WebSocket, а монитор распознаёт сообщения OCR.",
    faq2Q:"Можно изменить положение overlay?", faq2A:"Да. В настройках доступны координаты X/Y, ширина, высота, масштаб и цвет текста.",
    faq3Q:"Карта РБ работает на телефоне?", faq3A:"Да. Откройте карту на лицензированном ПК, нажмите «Телефон / QR» и отсканируйте одноразовый QR-код. К одной лицензии привязывается один ПК и один мобильный браузер.",
    faq4Q:"Для какого сервера сделан монитор?", faq4A:"Архитектура рассчитана на Lineage 2 High Five. Текущая конфигурация фраз, боссов и таймеров ориентирована на BohPts x500; база может быть адаптирована под другой сервер.",
    ctaKicker:"Меньше рутины. Больше игры.", ctaTitle:"Запусти Yura RB Monitor",
    ctaText:"Установи компоненты, выбери зону чата и запускай Yura RB Monitor одной кнопкой.",
    downloadNow:"Скачать Yura RB Monitor", footerNote:"Lineage 2 High Five • BohPts x500 • Карта РБ • Raid Boss Timer • OBS/OCR"
  },
  en: {
    navFeatures:"Features", navSetup:"Setup", navMap:"RB Map", navFaq:"FAQ",
    previewBadge:"Yura RB Monitor • Lineage 2 High Five • BohPts x500",
    heroTitle:"Lineage 2 RB map<br>& raid boss timer<br><span>without manual tracking</span>",
    heroLead:"Yura RB Monitor is a Lineage 2 High Five raid boss timer and live RB map for BohPts x500. OBS/OCR reads system-chat events, starts respawn timers, displays an in-game overlay and synchronizes active raid bosses to the online map.",
    heroPrimary:"See how it works", download:"Download",
    metricBosses:"raid bosses", metricLanguages:"interface languages", metricMap:"live map sync",
    liveInterface:"Live launcher interface", ocrStatus:"chat detected", mapStatus:"timers synchronized", overlayStatus:"over the game",
    whyKicker:"Lineage 2 High Five", whyTitle:"Raid boss map, respawn timer and overlay<br><span>in one interface</span>",
    whyLead:"Replace manual stopwatches and chat screenshots with OCR detection, a raid boss timer and a synchronized Lineage 2 High Five map, configured for BohPts x500.",
    featureOcrTitle:"System chat OCR", featureOcrText:"The monitor detects Lineage 2 raid boss spawn or death messages and starts the matching respawn timer.",
    featureOverlayTitle:"In-game overlay", featureOverlayText:"Raid boss timers stay visible above the game client. Color, scale, position and size are configurable.",
    featureMapTitle:"Lineage 2 raid boss map", featureMapText:"The High Five map shows active timers, raid boss names, coordinates, live status and respawn windows.",
    featureEpicTitle:"Epic and special events", featureEpicText:"Dedicated alerts and flows for epic bosses, Lilith/Anakim and other server events.",
    workflowKicker:"Fast setup", workflowTitle:"Show the script your chat —<br><span>it handles the rest</span>",
    workflowLead:"Configure the capture region once. OBS/OCR then reads the required Lineage 2 chat area and automatically updates the RB timer and map.",
    step1Title:"Launch the game and OBS", step1Text:"WebSocket uses the standard port 4455.",
    step2Title:"Select the system chat", step2Text:"Set the OCR region X, Y, width and height.",
    step3Title:"Press “Launch”", step3Text:"Raid boss timers and the online map update automatically.",
    visualGuide:"Visual setup guide", chatAreaTitle:"Correct chat region", chatAreaText:"The frame must include raid boss system messages.",
    settingsKicker:"Flexible overlay", settingsTitle:"Raid boss timers over the game<br><span>exactly where you want them</span>",
    detail1Title:"Precise positioning", detail1Text:"Coordinates and size are numeric, so the overlay is easy to place in any corner.",
    detail2Title:"Instant preview", detail2Text:"Check the result before launching the monitor and save time in game.",
    detail3Title:"Multiple resolutions", detail3Text:"OBS frame size and the system chat region are configured independently.",
    mapKicker:"Lineage 2 High Five map", mapTitle:"Live raid boss map<br><span>with respawn timers</span>",
    mapLead:"Search raid bosses by name, see coordinates and follow active timers from PC or mobile. The current map configuration targets High Five and BohPts x500.",
    hotspotSearch:"Boss search", hotspotTimer:"Active timer", hotspotPoint:"Map location",
    mapBenefit1Title:"Name search", mapBenefit1Text:"RU and ENG raid boss names.",
    mapBenefit2Title:"Color-coded states", mapBenefit2Text:"Alive, respawn and temporary point.",
    mapBenefit3Title:"Shared synchronization", mapBenefit3Text:"RB map data updates for every user.",
    seoKicker:"BohPts x500 • High Five", seoTitle:"Lineage 2 High Five raid boss timer & map",
    seoLead:"Yura RB Monitor targets searches such as Lineage 2 raid boss timer, Lineage 2 High Five map, RB map, raid boss respawn timer and BohPts x500 with one practical Windows companion tool.",
    seoCard1Title:"Lineage 2 RB map", seoCard1Text:"Online Lineage 2 High Five raid boss map with coordinates, search and current respawn timers.",
    seoCard2Title:"BohPts x500", seoCard2Text:"The current boss-message database and monitoring scenarios are configured for High Five usage on BohPts x500.",
    seoCard3Title:"Raid Boss Timer", seoCard3Text:"The raid boss respawn timer starts automatically after OCR recognizes a supported system-chat event.",
    languageKicker:"Three languages", languageTitle:"One tool —<br><span>clear to everyone</span>",
    languageLead:"The launcher, RB map, settings and essential guidance are available in Ukrainian, Russian and English.",
    faqTitle:"Questions before<br><span>your first launch</span>", faqLead:"The essentials required for stable operation.",
    faq1Q:"Does OBS need to stay open?", faq1A:"Yes. OBS provides the system chat image through WebSocket and the monitor recognizes messages with OCR.",
    faq2Q:"Can I move the overlay?", faq2A:"Yes. Settings include X/Y coordinates, width, height, scale and text color.",
    faq3Q:"Does the RB map work on mobile?", faq3A:"Yes. Open the map on the licensed PC, select “Phone / QR” and scan the one-time QR code. Each license can link one PC and one mobile browser.",
    faq4Q:"Which server is the monitor configured for?", faq4A:"The architecture targets Lineage 2 High Five. The current phrases, raid bosses and timer configuration are oriented to BohPts x500 and can be adapted to another server.",
    ctaKicker:"Less routine. More game.", ctaTitle:"Launch Yura RB Monitor",
    ctaText:"Install the components, select the chat region and launch Yura RB Monitor with one button.",
    downloadNow:"Download Yura RB Monitor", footerNote:"Lineage 2 High Five • BohPts x500 • RB Map • Raid Boss Timer • OBS/OCR"
  }
};

const seoMeta = {
  uk: {
    title:"Карта РБ Л2 BohPts x500 — Lineage 2 High Five Raid Boss Timer | Yura RB Monitor",
    description:"Карта РБ Л2 та таймер рейд-босів для Lineage 2 High Five / BohPts x500. OBS OCR, таймер респу, overlay, координати босів і жива онлайн-карта РБ.",
    canonical:"https://lineage-script.com/",
    image:"https://lineage-script.com/assets/launcher-uk.webp"
  },
  ru: {
    title:"Карта РБ Л2 BohPts x500 — таймер рейд-боссов Lineage 2 High Five | Yura RB Monitor",
    description:"Карта РБ Л2 и таймер рейд-боссов Lineage 2 High Five для BohPts x500: OBS OCR, таймер респа, overlay, координаты боссов и онлайн-карта РБ.",
    canonical:"https://lineage-script.com/ru.html",
    image:"https://lineage-script.com/assets/launcher-ru.webp"
  },
  en: {
    title:"Lineage 2 High Five Raid Boss Timer & RB Map — BohPts x500 | Yura RB Monitor",
    description:"Lineage 2 High Five raid boss timer and live RB map for BohPts x500 with OBS OCR, respawn timers, in-game overlay, boss coordinates and synchronized map status.",
    canonical:"https://lineage-script.com/en.html",
    image:"https://lineage-script.com/assets/launcher-en.webp"
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

function ensureMeta(selector, attrs = {}) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  return el;
}

function setSeoMeta(lang) {
  const meta = seoMeta[lang] || seoMeta.uk;
  document.title = meta.title;

  const description = ensureMeta('meta[name="description"]', {name:"description"});
  description.setAttribute("content", meta.description);

  const robots = ensureMeta('meta[name="robots"]', {name:"robots"});
  robots.setAttribute("content", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = meta.canonical;

  const alternates = {
    uk:"https://lineage-script.com/",
    ru:"https://lineage-script.com/ru.html",
    en:"https://lineage-script.com/en.html",
    "x-default":"https://lineage-script.com/"
  };
  Object.entries(alternates).forEach(([hreflang, href]) => {
    let link = document.head.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
    if (!link) {
      link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflang;
      document.head.appendChild(link);
    }
    link.href = href;
  });

  const social = {
    'meta[property="og:type"]': ["property", "og:type", "website"],
    'meta[property="og:site_name"]': ["property", "og:site_name", "Yura RB Monitor"],
    'meta[property="og:title"]': ["property", "og:title", meta.title],
    'meta[property="og:description"]': ["property", "og:description", meta.description],
    'meta[property="og:url"]': ["property", "og:url", meta.canonical],
    'meta[property="og:image"]': ["property", "og:image", meta.image],
    'meta[name="twitter:card"]': ["name", "twitter:card", "summary_large_image"],
    'meta[name="twitter:title"]': ["name", "twitter:title", meta.title],
    'meta[name="twitter:description"]': ["name", "twitter:description", meta.description],
    'meta[name="twitter:image"]': ["name", "twitter:image", meta.image]
  };
  Object.entries(social).forEach(([selector, values]) => {
    const [attr, key, value] = values;
    const node = ensureMeta(selector, {[attr]:key});
    node.setAttribute("content", value);
  });

  let jsonLd = document.getElementById("yura-software-jsonld");
  if (!jsonLd) {
    jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.id = "yura-software-jsonld";
    document.head.appendChild(jsonLd);
  }
  jsonLd.textContent = JSON.stringify({
    "@context":"https://schema.org",
    "@type":"SoftwareApplication",
    "name":"Yura RB Monitor",
    "applicationCategory":"UtilitiesApplication",
    "operatingSystem":"Windows 10, Windows 11",
    "url":meta.canonical,
    "downloadUrl":DOWNLOAD_LATEST,
    "image":meta.image,
    "description":meta.description,
    "keywords":[
      "карта РБ Л2",
      "таймер РБ Л2",
      "Lineage 2 High Five map",
      "Lineage 2 raid boss timer",
      "raid boss respawn timer",
      "BohPts x500",
      "Lineage 2 RB map",
      "OBS OCR"
    ]
  });
}

function installSeoSection() {
  if (document.getElementById("seo-lineage2")) return;
  const faq = document.getElementById("faq");
  if (!faq) return;

  const section = document.createElement("section");
  section.className = "section compact";
  section.id = "seo-lineage2";
  section.innerHTML = `
    <div class="shell">
      <div class="section-heading reveal">
        <p class="kicker" data-i18n="seoKicker">BohPts x500 • High Five</p>
        <h2 data-i18n="seoTitle">Raid Boss Timer та карта РБ для Lineage 2</h2>
        <p data-i18n="seoLead">Карта РБ Л2, raid boss timer, Lineage 2 High Five map та BohPts x500 в одному Windows-інструменті.</p>
      </div>
      <div class="feature-grid">
        <article class="feature-card reveal tilt">
          <div class="icon-shell">⌖</div>
          <h3 data-i18n="seoCard1Title">Карта РБ Л2</h3>
          <p data-i18n="seoCard1Text">Онлайн-карта рейд-босів Lineage 2 High Five.</p>
          <span class="feature-index">RB</span>
        </article>
        <article class="feature-card reveal delay-1 tilt">
          <div class="icon-shell">×500</div>
          <h3 data-i18n="seoCard2Title">BohPts x500</h3>
          <p data-i18n="seoCard2Text">Конфігурація під High Five та BohPts x500.</p>
          <span class="feature-index">L2</span>
        </article>
        <article class="feature-card reveal delay-2 tilt">
          <div class="icon-shell">⏱</div>
          <h3 data-i18n="seoCard3Title">Raid Boss Timer</h3>
          <p data-i18n="seoCard3Text">Автоматичний таймер респу після OCR-події.</p>
          <span class="feature-index">T</span>
        </article>
      </div>
    </div>`;
  faq.parentNode.insertBefore(section, faq);
}

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
  setSeoMeta(lang);
}

// Permanent version-independent download URL.
document.querySelectorAll('a[href*="/releases/latest/download/YuraRBMonitor_Client_"]').forEach(a => {
  a.href = DOWNLOAD_LATEST;
});

installSeoSection();

(function installLandingLinks() {
  const section = document.getElementById("seo-lineage2");
  if (!section || document.getElementById("seoLandingLinks")) return;

  const grid = section.querySelector(".feature-grid");
  if (!grid) return;

  const cards = grid.querySelectorAll(".feature-card");

  const links = [
    {
      href: "/lineage2-rb-map.html",
      label: "Карта РБ Л2 →"
    },
    {
      href: "/bohpts-x500-rb-timer.html",
      label: "BohPts x500 →"
    },
    {
      href: "/lineage2-rb-map.html",
      label: "Raid Boss Map →"
    }
  ];

  cards.forEach((card, index) => {
    const info = links[index];
    if (!info) return;

    card.classList.add("seo-link-card");

    const a = document.createElement("a");
    a.href = info.href;
    a.className = "seo-more";
    a.textContent = info.label;

    card.appendChild(a);
  });

  const row = document.createElement("div");
  row.id = "seoLandingLinks";
  row.className = "seo-landing-links";

  row.innerHTML = `
    <a href="/lineage2-rb-map.html">
      Lineage 2 High Five RB Map
    </a>

    <a href="/bohpts-x500-rb-timer.html">
      BohPts x500 Raid Boss Timer
    </a>
  `;

  grid.after(row);
})();

langButtons.forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
const queryLang = new URLSearchParams(window.location.search).get("lang");
const path = window.location.pathname.toLowerCase();
const pathLang = path.endsWith("/ru.html")
  ? "ru"
  : path.endsWith("/en.html")
    ? "en"
    : null;
const initialLang = ["uk","ru","en"].includes(queryLang)
  ? queryLang
  : (pathLang || localStorage.getItem("yura-site-lang") || "uk");
setLanguage(initialLang);

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
