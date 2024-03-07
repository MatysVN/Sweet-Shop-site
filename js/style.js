const burgerBtn = document.querySelector(".hamburger");
const burgerBox = document.querySelector(".hamburger-box");
const navMobile = document.querySelector(".nav");
const navMobileItem = document.querySelectorAll(".nav__item");
const scrollBlock = document.querySelector("body");
const footerYear = document.querySelector(".footer-year");
const headerSection = document.querySelector(".header");
const headerArrow = document.querySelector(".header__arrow");


const showNav = () => {
	burgerBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav__mobile-active");
	scrollBlock.classList.toggle("scroll-block");
};
const closeNav = () => {
	burgerBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav__mobile-active");
	scrollBlock.classList.toggle("scroll-block");
};

window.onload = function () {
    // Sprawdź, czy aktualny URL zawiera nazwę pliku index.html
    if (window.location.pathname === '/index.html') {
        // Wykonaj skrypt tylko jeśli jesteśmy na stronie index.html
        window.onscroll = function () {
            const sectionBottom = headerSection.offsetTop + headerSection.offsetHeight;

            if (window.pageYOffset > sectionBottom) {
                navMobile.classList.remove("hiddenElement");
                burgerBox.classList.remove("hiddenElement");
            } else {
                navMobile.classList.add("hiddenElement");
                burgerBox.classList.add("hiddenElement");
            }
        };
    }
};

headerArrow.addEventListener("click", function (event) {
	event.preventDefault();
	const targetId = headerArrow.getAttribute("href");
	const targetSection = document.querySelector(targetId);
	const scrollTo = targetSection.offsetTop - 40;
	window.scrollTo({
		top: scrollTo,
		behavior: "smooth", // Dodaje płynne przewijanie
	});
});

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

currentYear();

burgerBtn.addEventListener("click", showNav);
navMobileItem.forEach(function (item) {
	item.addEventListener("click", closeNav);
});

window.addEventListener('load', function() {
    window.dispatchEvent(new Event('scroll'));
});