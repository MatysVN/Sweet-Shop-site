const burgerBtn = document.querySelector('.hamburger');

const showNav = () => {
    burgerBtn.classList.toggle("is-active")
}

burgerBtn.addEventListener("click", showNav);