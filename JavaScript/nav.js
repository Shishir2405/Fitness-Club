
let svg = document.querySelector(".toggler");
let toggleNav = document.querySelector(".toggle-nav");
let nav = document.querySelector(".nav");


svg.addEventListener("click", () => {
  nav.classList.toggle("toggle-nav"); 
  
});
function checkFullscreen() {
  if (window.innerWidth < 400) {
    document.documentElement.requestFullscreen();
  }
}

document.addEventListener('DOMContentLoaded', checkFullscreen);
window.addEventListener('resize', checkFullscreen);