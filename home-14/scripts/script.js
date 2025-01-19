const btn = document.querySelector('.js-mobile-menu-btn');
const menu = document.querySelector('.js-menu');
const btn_filter = document.querySelector('.js-mobile-filter-btn');
const menu_filter = document.querySelector('.js-mobile-filter');

btn.addEventListener("click", (e) => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});

btn_filter.addEventListener("click", (e) => {
    btn_filter.classList.toggle("active");
    menu_filter.classList.toggle("active");
});

