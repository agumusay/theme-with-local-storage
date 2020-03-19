import "../styles/main.scss";
import "regenerator-runtime/runtime";

let themeColor = localStorage.getItem("theme");

document.querySelector(".switch").addEventListener("click", () => {
  if (event.target.checked) {
    document.body.dataset.theme = themeColor;
  } else {
    document.body.dataset.theme = themeColor;
  }

  localStorage.setItem("theme", document.body.dataset.theme);
});
