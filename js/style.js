const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav');
const scrollBlock = document.querySelector('body');
const footerYear = document.querySelector('.footer-year')

const showNav = () => {
    burgerBtn.classList.toggle("is-active");
    navMobile.classList.toggle("nav__mobile-active");
    scrollBlock.classList.toggle("scroll-block");
}

const currentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
}

currentYear();

burgerBtn.addEventListener("click", showNav);