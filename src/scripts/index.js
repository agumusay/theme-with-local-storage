import "../styles/main.scss";
import "regenerator-runtime/runtime";
let body = document.body;
let themeColorInitial = localStorage.getItem("theme");
console.log(themeColorInitial);
if (themeColorInitial) {
  body.dataset.theme = themeColorInitial;
}
if (themeColorInitial === "light") {
  document.querySelector(".switch").checked = false;
} else {
  document.querySelector(".switch").checked = true;
}
document.querySelector(".switch").addEventListener("click", () => {
  if (event.target.checked) {
    document.body.dataset.theme = "light";
  } else {
    document.body.dataset.theme = "dark";
  }
  let themeValue = document.body.dataset.theme;
  localStorage.setItem("theme", themeValue);
});
