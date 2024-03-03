/*==================== GOOGLE MAPS ====================*/
// Initialize and add the map
function initMap() {
    const myLatLng = { lat: 14.561393895081313, lng: 121.10272999899031 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: myLatLng,
    });

    // Create a marker with animation
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello World!",
        animation: google.maps.Animation.DROP, // You can use BOUNCE for a bouncing effect
    });

    // Set up a scroll event listener
    window.addEventListener("scroll", function () {
        // Check if the map is in the viewport
        if (isInViewport(map.getDiv())) {
            // Trigger the marker animation
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    });
}

// Helper function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

/*==================== LOADER ====================*/
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-wrapper");
    loader.classList.add("loader-hidden");
});

/*==================== MENU SHOW AND HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*==================== ACCORDION FAQS ====================*/
const faqContent = document.getElementsByClassName("faq__content"),
    faqHeader = document.querySelectorAll(".faq__header"),
    infoContent = document.getElementsByClassName("info__content"),
    infoHeader = document.querySelectorAll(".info__header");

function toggleFaq() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < faqContent.length; i++) {
        faqContent[i].className = "faq__content faq__close";
    }

    for (i = 0; i < infoContent.length; i++) {
        infoContent[i].className = "info__content info__close";
    }

    if (itemClass === "faq__content faq__close") {
        this.parentNode.className = "faq__content faq__open";
    }

    if (itemClass === "info__content info__close") {
        this.parentNode.className = "info__content info__open";
    }
}

faqHeader.forEach((el) => {
    el.addEventListener("click", toggleFaq);
});

infoHeader.forEach((el) => {
    el.addEventListener("click", toggleFaq);
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const navItemToRemove = "btn-apply";
let lastActiveLinkId = null;
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const activeLink = document.querySelector(
                ".nav__menu a[href*=" + sectionId + "]"
            );
            activeLink.classList.add("active-link");

            // Check if the active link has changed
            if (sectionId !== lastActiveLinkId) {
                handleActiveLinkChange(sectionId);
            }

            lastActiveLinkId = sectionId;
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

function handleActiveLinkChange(currentLinkId) {
    const applyNavItem = document.getElementById(navItemToRemove);

    if (currentLinkId === "home") {
        // Hide or remove the navigation item with ID 'apply'
        if (applyNavItem) {
            applyNavItem.style.display = "none"; // or use 'remove' to completely remove it from the DOM
        }
    } else {
        // Show the navigation item with ID 'apply' if the current link is not 'home'
        if (applyNavItem) {
            applyNavItem.style.display = "block"; // or use 'initial' to revert to the default display style
        }
    }
}

// Check if the current page is index.html before executing the code
if (window.location.pathname.includes("index.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        const initialActiveLink = document.querySelector(
            '.nav__menu a[href*="home"]'
        );
        const initialLinkId = initialActiveLink
            ? initialActiveLink.getAttribute("href").replace("#", "")
            : null;
        handleActiveLinkChange(initialLinkId);
    });

    window.addEventListener("scroll", scrollActive);
}

/*==================== ALUMNI SWIPER ====================*/

const swiper = new Swiper(".swiper", {
    cssMode: true,
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*==================== NAV BAR ON SCROLL ====================*/
var navbar = document.getElementById("nav-bar");

function changeBg() {
    var scrollValue = window.scrollY;

    // Check if the current page is index.html
    if (window.location.pathname.includes("index.html")) {
        if (window.innerWidth < 768) {
            // Change behavior for small screens
            if (scrollValue < 1) {
                navbar.classList.remove("nav__color");
            } else {
                navbar.classList.add("nav__color");
            }
        } else {
            // Change behavior for larger screens
            if (scrollValue < 150) {
                navbar.classList.remove("nav__color");
            } else {
                navbar.classList.add("nav__color");
            }
        }
    }
}

// Apply initial state only if the current page is index.html
if (window.location.pathname.includes("index.html")) {
    navbar.classList.remove("nav__color");
}

window.addEventListener("scroll", changeBg);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-up class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
