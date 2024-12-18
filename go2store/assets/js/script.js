document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const closeMenu = document.getElementById("close-menu");

  menuToggle.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
  });

  closeMenu.addEventListener("click", function () {
    hamburgerMenu.classList.remove("active");
  });
});
