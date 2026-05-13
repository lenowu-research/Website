const yearEl = document.querySelector("#year");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
    nav?.classList.remove("open");
    document.body.classList.remove("nav-open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-25% 0px -55% 0px",
    threshold: [0.2, 0.45, 0.7],
  }
);

sections.forEach((section) => observer.observe(section));
