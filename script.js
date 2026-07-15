// =============================================================================
// Roz Gleave — High-Ticket Closer site
// Vanilla JS: scroll-reveal, mobile nav toggle, sticky nav shadow, footer year.
// No build step, no dependencies.
// =============================================================================

(function () {
  "use strict";

  // ---------------------------------------------------------------------
  // Scroll-reveal — fades/slides in any .reveal element once it enters
  // the viewport. Mirrors the previous React useReveal() hook.
  // ---------------------------------------------------------------------
  function initScrollReveal() {
    var revealEls = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---------------------------------------------------------------------
  // Mobile nav toggle
  // ---------------------------------------------------------------------
  function initNavToggle() {
    var toggle = document.getElementById("nav-toggle");
    var links = document.getElementById("nav-links");
    if (!toggle || !links) return;

    function closeMenu() {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      links.classList.remove("nav__links--open");
    }

    function openMenu() {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      links.classList.add("nav__links--open");
    }

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close the menu whenever a nav link is clicked (anchor navigation)
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  // ---------------------------------------------------------------------
  // Sticky nav shadow once the page has scrolled
  // ---------------------------------------------------------------------
  function initNavScrollState() {
    var nav = document.getElementById("site-nav");
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 12) {
        nav.classList.add("nav--scrolled");
      } else {
        nav.classList.remove("nav--scrolled");
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---------------------------------------------------------------------
  // Footer year
  // ---------------------------------------------------------------------
  function initFooterYear() {
    var el = document.getElementById("footer-year");
    if (!el) return;
    el.textContent = "© " + new Date().getFullYear() + " Roz Gleave";
  }

  // ---------------------------------------------------------------------
  // Hero stat count-up — animates each [data-count-to] number from 0 to
  // its final value. The stats band is pinned to the bottom of the hero
  // (min-height: 100vh), so it's always in the initial viewport by design —
  // this fires directly on load rather than waiting on a scroll trigger.
  // ---------------------------------------------------------------------
  function initStatCountUp() {
    var numbers = document.querySelectorAll(".hero-stat__number[data-count-to]");
    if (!numbers.length) return;

    function animate(el) {
      var target = parseFloat(el.getAttribute("data-count-to"));
      var prefix = el.getAttribute("data-prefix") || "";
      var suffix = el.getAttribute("data-suffix") || "";
      var duration = 2200;
      var start = null;

      el.textContent = prefix + "0" + suffix;

      function step(timestamp) {
        if (start === null) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.round(target * eased);
        el.textContent = prefix + current + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = prefix + target + suffix;
        }
      }

      window.requestAnimationFrame(step);
    }

    numbers.forEach(animate);
  }

  function initPitchVideo() {
    var wrap = document.querySelector(".loom--live");
    if (!wrap) return;
    var video = wrap.querySelector(".loom__video");
    var overlay = wrap.querySelector(".loom__play-overlay");
    if (!video || !overlay) return;

    overlay.addEventListener("click", function () {
      video.setAttribute("controls", "");
      overlay.classList.add("is-hidden");
      video.play();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initScrollReveal();
    initNavToggle();
    initNavScrollState();
    initFooterYear();
    initStatCountUp();
    initPitchVideo();
  });
})();
