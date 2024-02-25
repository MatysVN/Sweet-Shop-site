const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav');
const scrollBlock = document.querySelector('body');

const showNav = () => {
    burgerBtn.classList.toggle("is-active");
    navMobile.classList.toggle("nav__mobile-active");
    scrollBlock.classList.toggle("scroll-block");
}

burgerBtn.addEventListener("click", showNav);