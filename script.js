// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

// Automatically update the footer year
const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Reveal animation when sections enter the screen
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const targets = document.querySelectorAll(
    ".hero-copy, .hero-art, .section-kicker, .section-heading-row, .about-layout, .skill-card, .project-card, .journey-card, .contact-layout"
  );

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((target) => {
    target.classList.add("reveal");
    observer.observe(target);
  });
}
