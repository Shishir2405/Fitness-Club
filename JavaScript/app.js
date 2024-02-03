document.addEventListener("DOMContentLoaded", function () {
    var loader = document.querySelector(".loader");
    if (loader) {
      setTimeout(function () {
        loader.style.display = "none";
        window.location.href = "main.html";
      }, 3000);
    }
  });
  