/*==================== MENU SHOW AND HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const navItemToRemove = 'btn-apply';
let lastActiveLinkId = null;
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const activeLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            activeLink.classList.add('active-link');
            
            // Check if the active link has changed
            if (sectionId !== lastActiveLinkId) {
                handleActiveLinkChange(sectionId);
            }

            lastActiveLinkId = sectionId;
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

function handleActiveLinkChange(currentLinkId) {
    if (currentLinkId === 'home') {
        // Hide or remove the navigation item with ID 'apply'
        const applyNavItem = document.getElementById(navItemToRemove);
        if (applyNavItem) {
            applyNavItem.style.display = 'none'; // or use 'remove' to completely remove it from the DOM
        }
    } else if (lastActiveLinkId === 'home') {
        // Show the navigation item with ID 'apply' if the current link is 'home'
        const applyNavItem = document.getElementById(navItemToRemove);
        if (applyNavItem) {
            applyNavItem.style.display = 'block'; // or use 'initial' to revert to the default display style
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const initialActiveLink = document.querySelector('.nav__menu a[href*="home"]');
    const initialLinkId = initialActiveLink ? initialActiveLink.getAttribute('href').replace('#', '') : null;
    handleActiveLinkChange(initialLinkId);
});

window.addEventListener('scroll', scrollActive)



/*==================== ALUMNI SWIPER ====================*/

const swiper = new Swiper('.swiper', {
    cssMode: true,
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
  
/*==================== NAV BAR ON SCROLL ====================*/
var navbar = document.getElementById("nav-bar");

function changeBg() {
    var scrollValue = window.scrollY;

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

navbar.classList.remove("nav__color");
window.addEventListener("scroll", changeBg);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-up class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
