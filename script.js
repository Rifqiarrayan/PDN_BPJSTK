document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".link-card");
  const header = document.querySelector(".main-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".section-link");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      const url = card.getAttribute("data-link");

      if (!url) {
        return;
      }

      const newWindow = window.open(url, "_blank", "noopener");
      if (newWindow) {
        newWindow.opener = null;
      }
    });
  });

  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      const isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (!header || !navToggle) {
        return;
      }

      header.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
});
