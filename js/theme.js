const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}