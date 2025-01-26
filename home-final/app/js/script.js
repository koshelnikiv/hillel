const btn = document.querySelector('.js-mobile-menu-btn');
const menu = document.querySelector('.js-menu');

btn.addEventListener("click", (e) => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});
