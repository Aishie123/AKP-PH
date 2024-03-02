/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
  })
}

/*==================== ALUMNI SWIPER ====================*/

const swiper = new Swiper('.swiper', {
    // Optional parameters
    cssMode: true,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
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
