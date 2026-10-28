// Rotating role text in the hero section.
const roleElement = document.querySelector("#typed-role");
const roles = ["Software Developer", "Java Programmer", "Data Analytics Learner"];
let roleIndex = 0;

if (roleElement) {
  window.setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.textContent = roles[roleIndex];
  }, 2400);
}

// Reveal sections as they enter the viewport.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Mobile navigation menu.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Set the current year automatically.
const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Highlight placeholder links so you remember to replace them.
document.querySelectorAll(".replace-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert("Replace this placeholder with your real LinkedIn profile URL first.");
    }
  });
});
