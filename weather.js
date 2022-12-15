const weather_menu = document.querySelector(".weather-menu");
const container = document.querySelector(".container");

weather_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});

$(document).ready(function () {
    "use strict"
    $("header").ripples({
        resolution: 200,
        perturbance: 0.001,
    });
});
