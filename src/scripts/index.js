import "../styles/main.scss";
import "regenerator-runtime/runtime";
let body = document.body;
let themeColorInitial = localStorage.getItem("theme");
let fontSizeInitial = localStorage.getItem("font-size");
let main = document.querySelector("main");
console.log(fontSizeInitial);

if (fontSizeInitial) {
  main.dataset.size = fontSizeInitial;
  document.querySelector(`#${fontSizeInitial}`).checked = true;
}

if (themeColorInitial) {
  body.dataset.theme = themeColorInitial;
}
if (themeColorInitial === "light") {
  document.querySelector("input[type=checkbox]").checked = true;
} else {
  document.querySelector("input[type=checkbox]").checked = false;
}
document.querySelector(".switch").addEventListener("click", () => {
  if (event.target.checked) {
    body.dataset.theme = "light";
  } else {
    body.dataset.theme = "dark";
  }
  let themeValue = body.dataset.theme;
  localStorage.setItem("theme", themeValue);
});

document.querySelector("form").addEventListener("change", event => {
  main.dataset.size = event.currentTarget.elements.font.value;

  let fontSize = main.dataset.size;
  localStorage.setItem("font-size", fontSize);
});
