const weather_menu = document.querySelector(".weather-menu");
const container = document.querySelector(".container");
const navbar = document.querySelector(".navbar");


weather_menu.addEventListener("click", () => {
    container.classList.toggle("active");
    navbar.classList.toggle("active");
});