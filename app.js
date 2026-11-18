(function () {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav");
  if (menuBtn && nav) {
    function setMenuOpen(open) {
      nav.classList.toggle("is-open", open);
      menuBtn.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.addEventListener("click", function () {
      setMenuOpen(!nav.classList.contains("is-open"));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });
  }

  const cookieBanner = document.getElementById("cookie-banner");
  if (cookieBanner) {
    var accept = cookieBanner.querySelector(".js-cookie-accept");
    var consentBox = cookieBanner.querySelector(".js-cookie-consent");
    if (accept && consentBox) {
      consentBox.addEventListener("change", function () {
        accept.disabled = !consentBox.checked;
      });
      accept.addEventListener("click", function () {
        if (!consentBox.checked) return;
        try {
          window.localStorage.setItem("sofia-consent-v2", "1");
        } catch (e) {}
        cookieBanner.remove();
      });
    }
  }

  const form = document.getElementById("lead-form");
  if (!form) {
    return;
  }
  const phone = form.querySelector(".js-phone");

  if (phone) {
    phone.addEventListener("input", function () {
      let digits = phone.value.replace(/\D/g, "");
      if (digits.startsWith("8")) {
        digits = "7" + digits.slice(1);
      }
      if (!digits.startsWith("7")) {
        digits = "7" + digits;
      }
      digits = digits.slice(0, 11);
      const rest = digits.slice(1);
      let value = "+7";
      if (rest.length) {
        value += " (" + rest.slice(0, 3);
      }
      if (rest.length >= 3) {
        value += ") " + rest.slice(3, 6);
      }
      if (rest.length >= 6) {
        value += "-" + rest.slice(6, 8);
      }
      if (rest.length >= 8) {
        value += "-" + rest.slice(8, 10);
      }
      phone.value = value;
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const honeypot = form.querySelector(".js-hp");
    if (honeypot && honeypot.value.trim()) {
      return;
    }
    const digits = phone.value.replace(/\D/g, "");
    if (digits.length !== 11) {
      return;
    }
    form.classList.add("is-sent");
  });
})();
