let svg = document.querySelector(".toggler");
let toggleNav = document.querySelector(".toggle-nav");
let nav = document.querySelector(".nav");

svg.addEventListener("click", () => {
  nav.classList.toggle("toggle-nav");
});

let homeShort = document.querySelector(".name");
homeShort.addEventListener("click", () => {
  window.location.href = "main.html";
});
