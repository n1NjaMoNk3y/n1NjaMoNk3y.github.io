"use strict";
(() => {
  // <stdin>
  function getPreferredTheme() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function showActiveTheme(theme) {
    const activeThemeIcon = document.querySelector(".theme-switch svg use");
    if (theme === "dark") {
      activeThemeIcon.setAttribute("href", "#moon-stars-fill");
    } else {
      activeThemeIcon.setAttribute("href", "#sun-fill");
    }
  }
  var currentTheme = getPreferredTheme();
  document.documentElement.setAttribute("data-bs-theme", currentTheme);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    currentTheme = getPreferredTheme();
    document.documentElement.setAttribute("data-bs-theme", currentTheme);
    showActiveTheme(currentTheme);
  });
  window.addEventListener("load", () => {
    showActiveTheme(currentTheme);
    document.querySelectorAll(".theme-switch").forEach((e) => {
      e.addEventListener("click", (ev) => {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-bs-theme", currentTheme);
        localStorage.setItem("theme", currentTheme);
        showActiveTheme(currentTheme);
        ev.preventDefault();
      });
    });
  });
})();
