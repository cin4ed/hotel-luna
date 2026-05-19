function initNavScroll() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  reveals.forEach((el) => io.observe(el));
}

function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const button = item.querySelector(".faq-q");
    if (!button) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById("nav-menu-btn");
  const drawer = document.getElementById("nav-drawer");
  const overlay = document.getElementById("nav-drawer-overlay");
  const closeBtn = document.getElementById("nav-drawer-close");

  if (!menuBtn || !drawer || !overlay) return;

  const openClass = "nav__drawer--open";
  const overlayOpenClass = "nav__drawer-overlay--open";

  const getFocusable = () =>
    drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

  const openMenu = () => {
    drawer.classList.add(openClass);
    overlay.classList.add(overlayOpenClass);
    document.body.classList.add("nav-open");
    menuBtn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    const focusable = getFocusable();
    if (focusable.length > 0) focusable[0].focus();
  };

  const closeMenu = () => {
    drawer.classList.remove(openClass);
    overlay.classList.remove(overlayOpenClass);
    document.body.classList.remove("nav-open");
    menuBtn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    menuBtn.focus();
  };

  menuBtn.addEventListener("click", () => {
    if (drawer.classList.contains(openClass)) closeMenu();
    else openMenu();
  });

  overlay.addEventListener("click", closeMenu);
  closeBtn?.addEventListener("click", closeMenu);

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains(openClass)) {
      closeMenu();
    }
  });
}

function init() {
  initNavScroll();
  initReveal();
  initFaq();
  initMobileMenu();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
