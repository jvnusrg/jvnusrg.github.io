const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.querySelector("nav ul");

hamburgerBtn.addEventListener("click",function () {
    navMenu.classList.toggle("open");
});