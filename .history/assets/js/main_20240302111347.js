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
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/*==================== ALUMNI SWIPER ====================*/

const swiper = new Swiper('.swiper', {
    // Optional parameters
    cssMode: true,
    direction: 'horizontal',
    loop: true,
    observer: true, 
    observeParents: true,
  
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
