import AOS from "aos";
import "../sass/app.scss";
import lax from 'lax.js'

window.lax = { presets: lax.presets };
AOS.init({
    offset: 50,
    delay: 0,
    duration: 600,
    easing: "ease",
    once: true,
    disableMutationObserver: true,
    startEvent: "DOMContentLoaded",
});

window.addEventListener("load", () => {
    document.querySelectorAll(".preload").forEach((el) => el.classList.remove("preload"));

    //parallax-animation
    const comfortImagesContainer = document.querySelector('.comfort_img-container')

    setTimeout(() => {
      comfortImagesContainer.classList.add('comfort_img-container--loaded')
      lax.init()
      // // Add a driver that we use to control our animations
      lax.addDriver('scrollY', function () {
        return window.scrollY
      })
      // // Add animation bindings to elements
      lax.addElements('.main-news__bg-title', {
        scrollY: {
          translateY: [
            ["elInY", "elCenterY", "elOutY"], {
              1000: [200, 0, 0],
              9999: [250, 0, 0],
            }
          ]
        }
      })
      lax.addElements('.about-us__bg-title', {
        scrollY: {
          translateY: [
            ["elInY", "elCenterY", "elOutY"], {
              1000: [200, 0, 0],
              1200: [0, -60, 20],
              9999: [250, 0, 0],
            }
          ]
        }
      })
    }, 2000);
    // setTimeout(() => comfortImagesContainer.style.overflow = 'hidden', 1500);

    function syncHeight() {
        document.documentElement.style.setProperty(
            '--window-inner-height',
            `${window.innerHeight}px`
        );
    }
    function preventDefault(e) {
        e.preventDefault();
    }

    window.addEventListener('resize', syncHeight);

    const bodyOverlay = document.querySelector("#body-overlay");

    const lockBodyScroll = () => document.body.classList.add("lock-scroll");
    const unlockBodyScroll = () => document.body.classList.remove("lock-scroll");
    const displayBodyOverlay = () => bodyOverlay.classList.add("body-overlay--shown");
    const hideBodyOverlay = () => bodyOverlay.classList.remove("body-overlay--shown");

    //hamburger
    const header = document.querySelector(".header");
    const hamburgerBtn = document.getElementById('menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburgerBtn.addEventListener('click', function (e) {
        const vh = window.innerHeight;
        if (hamburgerMenu.offsetHeight < vh) hamburgerMenu.style.height = vh + 'px';
        hamburgerBtn.classList.toggle('burger');
        header.classList.toggle('header--burger');
        document.body.classList.toggle("lock-scroll");
        if(hamburgerBtn.classList.contains('hamburger-menu--opened')){
          setTimeout(() => closeAllHamburgerSubmenus(), 500);
        }
        hamburgerBtn.classList.toggle('hamburger-menu--opened');
        document.querySelector('.menu__span:first-child').classList.toggle('minus_rotate');
        document.querySelector('.menu__span:nth-child(2)').classList.toggle('none');
        document.querySelector('.menu__span:last-child').classList.toggle('plus_rotate');
    })

    window.addEventListener('scroll', () => {
      if(window.scrollY > 10){
        if(!header.classList.contains('header--shadowed')){
            header.classList.add('header--shadowed');
        }
      } else {
        if(header.classList.contains('header--shadowed')){
          header.classList.remove('header--shadowed');
        }
      }
    })


    const hamburgerSubmenuBtns = document.querySelectorAll('.hamburger-menu__submenu');
    const hamburgerSubmenus = document.querySelectorAll('.hamburger-menu__submenu-container');
    const hamburgerSubmenuBackBtn = document.querySelectorAll('.hamburger-menu__back-btn');
    function closeAllHamburgerSubmenus() {
      hamburgerSubmenus.forEach(submenu => {
        hamburgerMenu.classList.remove('hamburger-menu--submenu');
        submenu.classList.remove('hamburger-menu__submenu-container--showed')
      })
    }

    hamburgerSubmenuBtns.forEach((submenuBtn, index) => {
      submenuBtn.addEventListener('click', () => {
        console.log(index);
        hamburgerMenu.classList.add('hamburger-menu--submenu');
        hamburgerSubmenus[index].classList.add('hamburger-menu__submenu-container--showed')
      })
    })

    hamburgerSubmenuBackBtn.forEach((submenuBtn) => {
      submenuBtn.addEventListener('click', () => {
        closeAllHamburgerSubmenus();
      })
    })
});
