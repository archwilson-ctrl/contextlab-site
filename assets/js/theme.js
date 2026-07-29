(function () {
  const storageKey = "contextlab-theme";

  function getPreferredTheme() {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(storageKey, theme);

    const toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) {
      return;
    }

    const isDark = theme === "dark";
    toggle.setAttribute("aria-label", isDark ? "切換至淺色模式" : "切換至深色模式");
    toggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    toggle.setAttribute("title", isDark ? "淺色模式" : "深色模式");
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(getPreferredTheme());

    const toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  });
})();
