(function () {
  var page = document.body.getAttribute("data-page") || "home";
  var headerHost = document.getElementById("app-header");
  var footerHost = document.getElementById("app-footer");
  var parts = location.pathname.split("/").filter(function (part) {
    return part && part !== "index.html";
  });
  if (page !== "home" && parts.length) {
    parts.pop();
  }
  var ROOT = parts.length ? "/" + parts.join("/") : "";

  function isActive(name) {
    return page === name ? " is-active" : "";
  }

  var waIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.34-1.66a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42ZM12.06 21.15h-.01a9.2 9.2 0 0 1-4.69-1.29l-.34-.2-3.76.99 1-3.66-.22-.38a9.2 9.2 0 0 1-1.41-4.9c0-5.08 4.14-9.21 9.23-9.21 2.46 0 4.78.96 6.52 2.7a9.15 9.15 0 0 1 2.7 6.52c0 5.08-4.14 9.23-9.22 9.23Zm5.05-6.9c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.13-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.3s.99 2.67 1.12 2.85c.14.18 1.95 2.98 4.72 4.18.66.28 1.18.45 1.58.58.66.21 1.27.18 1.75.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32Z"/></svg>';
  var tgIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.94 4.34a1.5 1.5 0 0 0-1.55-.22L2.9 11.2c-.9.36-.88 1.65.03 1.97l4.33 1.5 1.67 5.14c.27.83 1.33 1.07 1.93.44l2.4-2.5 4.5 3.3c.73.54 1.77.13 2-.77L22.5 5.7a1.5 1.5 0 0 0-.56-1.36ZM9.2 14.1l-.2 2.9-.94-2.9 8.66-5.5-7.52 5.5Z"/></svg>';

  if (headerHost) {
    headerHost.innerHTML =
      '<header class="site-header">' +
      '<div class="wrap header-inner">' +
      '<a href="' + ROOT + '/" class="logo">Sofia<span>лазерная эпиляция</span><span>вакуумный массаж</span></a>' +
      '<nav class="nav" id="nav">' +
      '<a href="' + ROOT + '/" class="nav-link' + isActive("home") + '">Главная</a>' +
      '<a href="' + ROOT + '/laser/" class="nav-link' + isActive("laser") + '">Лазерная эпиляция</a>' +
      '<a href="' + ROOT + '/massage/" class="nav-link' + isActive("massage") + '">Вакуумный массаж</a>' +
      '<a href="tel:+79990000000" class="nav-link nav-phone">+7 (999) 000-00-00</a>' +
      "</nav>" +
      '<div class="header-actions">' +
      '<div class="header-messengers">' +
      '<a class="msg-icon msg-whatsapp" href="https://wa.me/79990000000" target="_blank" rel="noopener" aria-label="WhatsApp">' +
      waIcon +
      "</a>" +
      '<a class="msg-icon msg-telegram" href="https://t.me/" target="_blank" rel="noopener" aria-label="Telegram">' +
      tgIcon +
      "</a>" +
      "</div>" +
      '<a class="header-cta" href="tel:+79990000000">+7 (999) 000-00-00</a>' +
      '<button class="menu-btn" type="button" id="menu-btn" aria-label="Меню" aria-expanded="false" aria-controls="nav">' +
      "<span></span><span></span><span></span>" +
      "</button>" +
      "</div>" +
      "</div>" +
      "</header>";
  }

  if (page !== "home") {
    var back = document.createElement("a");
    back.className = "back-btn";
    back.href = ROOT + "/";
    back.setAttribute("aria-label", "На главную");
    back.textContent = "На главную";
    document.body.appendChild(back);
  }

  if (footerHost) {
    footerHost.innerHTML =
      '<footer class="site-footer">' +
      '<div class="wrap footer-grid">' +
      '<div class="footer-brand">' +
      '<a href="' + ROOT + '/" class="logo">Sofia</a>' +
      "<p>Камерная студия аппаратной косметологии в Москве. Лазерная эпиляция и вакуумный массаж.</p>" +
      "</div>" +
      '<div class="footer-nav">' +
      "<p class=\"footer-title\">Разделы</p>" +
      '<a href="' + ROOT + '/" class="' + (page === "home" ? "is-active" : "") + '">Главная</a>' +
      '<a href="' + ROOT + '/laser/" class="' + (page === "laser" ? "is-active" : "") + '">Лазерная эпиляция</a>' +
      '<a href="' + ROOT + '/massage/" class="' + (page === "massage" ? "is-active" : "") + '">Вакуумный массаж</a>' +
      "</div>" +
      '<div class="footer-contacts">' +
      "<p class=\"footer-title\">Контакты</p>" +
      '<address class="footer-address">' +
      '<a href="https://yandex.ru/maps/org/columbus/1189573038/" target="_blank" rel="noopener">г. Москва, Кировоградская ул., д. 13А, ТРЦ «Columbus» (Колумбус), 3 этаж (м. Пражская)</a>' +
      "</address>" +
      "<p>Ежедневно с 10:00 до 21:00</p>" +
      '<p><a href="tel:+79990000000">+7 (999) 000-00-00</a></p>' +
      '<div class="footer-messengers">' +
      '<a href="https://t.me/" target="_blank" rel="noopener">Telegram</a>' +
      '<a href="https://wa.me/79990000000" target="_blank" rel="noopener">WhatsApp</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="wrap footer-copy">Sofia · лазерная эпиляция и вакуумный массаж в Москве · <a href="' + ROOT + '/privacy/">Политика конфиденциальности</a></div>' +
      "</footer>";
  }

  var hasConsent = false;
  try {
    hasConsent = !!window.localStorage.getItem("sofia-consent-v2");
  } catch (e) {}

  if (!hasConsent) {
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.id = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Согласие на cookie и обработку персональных данных");
    banner.innerHTML =
      '<div class="cookie-banner-inner">' +
      '<p>Мы используем файлы cookie, чтобы сайт работал корректно. Подробнее — в <a href="' + ROOT + '/privacy/">политике конфиденциальности</a>.</p>' +
      '<label class="cookie-consent">' +
      '<input type="checkbox" class="js-cookie-consent">' +
      "<span>Даю согласие на обработку персональных данных</span>" +
      "</label>" +
      '<button class="btn btn-gold js-cookie-accept" type="button" disabled>Согласна</button>' +
      "</div>";
    document.body.appendChild(banner);
  }

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
})();
