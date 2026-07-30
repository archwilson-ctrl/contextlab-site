(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector("[data-nav-toggle]");
  const drawer = document.querySelector("[data-nav-drawer]");
  const overlay = document.querySelector("[data-nav-overlay]");
  const closeButtons = document.querySelectorAll("[data-nav-close]");
  const drawerLinks = drawer ? drawer.querySelectorAll("a") : [];
  const exploreLinks = document.querySelectorAll("[data-scroll-explore]");
  const mobileQuery = window.matchMedia("(max-width: 767px)");

  function setDrawerOpen(isOpen) {
    if (!drawer || !toggle) {
      return;
    }

    drawer.classList.toggle("is-open", isOpen);
    drawer.setAttribute("aria-hidden", isOpen ? "false" : "true");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("nav-open", isOpen);

    if (isOpen) {
      drawer.querySelector("a")?.focus();
    } else {
      toggle.focus();
    }
  }

  function closeDrawer() {
    setDrawerOpen(false);
  }

  function onScroll() {
    if (!header) {
      return;
    }

    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  function smoothScrollToExplore(event) {
    const target = document.getElementById("explore");
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function onKeydown(event) {
    if (event.key === "Escape" && drawer?.classList.contains("is-open")) {
      closeDrawer();
    }
  }

  function onMediaChange() {
    if (!mobileQuery.matches) {
      closeDrawer();
    }
  }

  toggle?.addEventListener("click", function () {
    if (!drawer) {
      return;
    }

    const isOpen = drawer.classList.contains("is-open");
    setDrawerOpen(!isOpen);
  });

  overlay?.addEventListener("click", closeDrawer);
  closeButtons.forEach(function (button) {
    button.addEventListener("click", closeDrawer);
  });

  drawerLinks.forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });

  exploreLinks.forEach(function (link) {
    link.addEventListener("click", smoothScrollToExplore);
  });

  document.addEventListener("keydown", onKeydown);
  window.addEventListener("scroll", onScroll, { passive: true });
  mobileQuery.addEventListener("change", onMediaChange);
  onScroll();

  if ("IntersectionObserver" in window) {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }
})();
