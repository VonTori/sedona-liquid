var html = document.documentElement;
html.className = html.className.replace("no-js","js");

var button = document.querySelector(".page-button");
var popup = document.querySelector(".search-form");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var leaving = popup.querySelector("[name=leaving]");
var adults = popup.querySelector("[name=adults]");
var childs = popup.querySelector("[name=childs]");

popup.classList.add("search-form-closed");

button.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("search-form-closed");
  popup.classList.add("search-form-animation");
  popup.classList.remove("search-form-error")
  arrival.focus();
});

form.addEventListener("submit", function (event) {
  if (!arrival.value || !leaving.value || !adults.value || !childs.value) {
    event.preventDefault();
    popup.classList.remove("search-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-form-error");
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("search-form")) {
      popup.classList.remove("search-form-error");
    }
  }
});