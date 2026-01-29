// script.js

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a[href^='#']");
  const yearEl = document.getElementById("year");

  // 1. Dinaminiai metai footeryje
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile navigacija (hamburgeris)
  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Uždaryti meniu, kai paspaudžiamas bet kuris linkas
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. Smooth scroll visiems in-page anchor'iams
  const allAnchors = document.querySelectorAll('a[href^="#"]');
  allAnchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // 4. Lengvas header efektas scrollinant 
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});

const demoGif = document.getElementById("demoGif");
const gifModal = document.getElementById("gifModal");
const gifModalImage = document.getElementById("gifModalImage");
const gifClose = document.querySelector(".gif-close");

if (demoGif && gifModal) {
  demoGif.style.cursor = "pointer";

  demoGif.addEventListener("click", () => {
    gifModal.style.display = "block";
    gifModalImage.src = demoGif.src;
  });

  gifClose.addEventListener("click", () => {
    gifModal.style.display = "none";
  });

  gifModal.addEventListener("click", (e) => {
    if (e.target === gifModal) {
      gifModal.style.display = "none";
    }
  });
}



  // Reveal on scroll (no dependencies)
  (function () {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      });
    }, { threshold: 0.12 });

    els.forEach(el => io.observe(el));
  })();