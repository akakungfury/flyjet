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


    // setTimeout(() => document.querySelectorAll(".prevent-download").forEach((el) => el.classList.remove("prevent-download")), 1000)
    // setTimeout(() => document.querySelectorAll(".prevent-download-long").forEach((el) => el.classList.remove("prevent-download-long")), 2500)

    const lockBodyScroll = () => {
        // document.documentElement.classList.add("lock-scroll");
        document.body.classList.add("lock-scroll");
        // console.log('FIRED')
    };
    const unlockBodyScroll = () => {
        // document.documentElement.classList.remove('is-locked');
        document.body.classList.remove("lock-scroll");
    }
    // const lockBodyScroll = () => document.body.classList.add("lock-scroll");
    // const lockBodyScroll = () => document.documentElement.classList.add('is-locked');
    // const unlockBodyScroll = () => document.body.classList.remove("lock-scroll");
    // const unlockBodyScroll = () => document.documentElement.classList.remove('is-locked');
    const displayBodyOverlay = () => bodyOverlay.classList.add("body-overlay--shown");
    const hideBodyOverlay = () => bodyOverlay.classList.remove("body-overlay--shown");

    // //popups
    // const closePopupBtns = document.querySelectorAll(".popup__close-btn");
    // const contactPopupOpenBtns = document.querySelectorAll('[data-popup="contact"]');
    // const allPopups = document.querySelectorAll(".popup");
    // const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

    // function resetForm() {
    //     this.reset()
    // }

    // function openPopup() {
    //     let popup;
    //     if (this.dataset.popup.includes('step')) {
    //         popup = document.querySelector(`#${this.dataset.popup}`);
    //     } else {
    //         popup = document.querySelector(`#${this.dataset.popup}-popup`);
    //         this.dataset.extraField ? popup.classList.add('popup--extra-fields') : popup.classList.remove('popup--extra-fields');
    //     }
    //     popup.classList.add("popup--shown");
    //     displayBodyOverlay();
    //     //TODO:
    //     // closeHamburgerNavigationMenu();
    //     lockBodyScroll();
    //     popup.addEventListener('pointermove', preventDefault);
    // }

    // function closePopup() {
    //     const popup = this.closest(".popup");

    //     popup.classList.remove("popup--shown");
    //     if (popup.querySelector('form')) {
    //         resetForm.apply(popup.querySelector('form'));
    //     }
    //     hideBodyOverlay();
    //     //TODO:
    //     unlockBodyScroll();

    //     const formFields = document.querySelectorAll('.form-field');

    //     formFields.forEach(field => {
    //         field.classList.remove("field-error");
    //     })
    //     modal.removeEventListener('pointermove', preventDefault);
    // }

    // const closeAllPopups = () => {
    //     allPopups.forEach(popup => {
    //         popup.classList.remove("popup--shown");
    //         if (popup.querySelector('form')) {
    //             resetForm.apply(popup.querySelector('form'));
    //         }
    //     })
    //     hideBodyOverlay();
    //     //TODO:
    //     unlockBodyScroll();
    //     //TODO: FOR ALL POPUPS
    //     modal.removeEventListener('pointermove', preventDefault);

    //     const formFields = document.querySelectorAll('.form-field');

    //     formFields.forEach(field => {
    //         field.classList.remove("field-error");
    //     })
    // }

    // document.addEventListener("keydown", (e) => {
    //     if (bodyOverlay.classList.contains('body-overlay--shown') && e.code === "Escape") {
    //         closeAllPopups();
    //     }
    // });

    // bodyOverlay.addEventListener("click", (e) => {
    //     closeAllPopups();
    // });


    // const stepsCards = document.querySelectorAll('.step-card');
    // stepsCards.forEach(card => card.addEventListener('click', openPopup));
    // contactPopupOpenBtns.forEach((btn) => btn.addEventListener("click", openPopup));
    // closePopupBtns.forEach((btn) => btn.addEventListener("click", closePopup));

    //hamburger
    const header = document.querySelector(".header");
    const hamburgerBtn = document.getElementById('menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburgerBtn.addEventListener('click', function (e) {
        // // document.getElementById('sliding__menu').classList.toggle('active');
        // const logo = document.querySelector(".header .logo");
        // logo.style.opacity = '0';
        // setTimeout(() => {
        //     logo.style.opacity = '1';
        // }, 400)

        const vh = window.innerHeight;
        if (hamburgerMenu.offsetHeight < vh) hamburgerMenu.style.height = vh + 'px';
        hamburgerBtn.classList.toggle('burger');
        header.classList.toggle('header--burger');
        document.body.classList.toggle("lock-scroll");
        // // document.documentElement.classList.toggle("is-locked");

        if(hamburgerBtn.classList.contains('hamburger-menu--opened')){
          setTimeout(() => closeAllHamburgerSubmenus(), 500);
        }
        // closeAllHamburgerSubmenus()
        hamburgerBtn.classList.toggle('hamburger-menu--opened');
        document.querySelector('.menu__span:first-child').classList.toggle('minus_rotate');
        document.querySelector('.menu__span:nth-child(2)').classList.toggle('none');
        document.querySelector('.menu__span:last-child').classList.toggle('plus_rotate');
        // document.querySelector('.menu__span:nth-child(2)').classList.toggle('plus_rotate');
        // document.querySelector('.menu__span:last-child').classList.toggle('none');
        // hamburgerServicesMenu.classList.remove('opened');
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

    // allAnchorLinks.forEach(link => {
    //     link.addEventListener('click', () => {
    //         header.classList.remove('header--burger');
    //         document.body.classList.remove("lock-scroll");
    //         // document.documentElement.classList.toggle("is-locked");
    //         hamburgerBtn.classList.toggle('burger');
    //         document.querySelector('.menu__span:first-child').classList.toggle('minus_rotate');
    //         document.querySelector('.menu__span:nth-child(2)').classList.toggle('plus_rotate');
    //         document.querySelector('.menu__span:last-child').classList.toggle('none');
    //     })
    // })


    // // start: main text animation
    // const typedTextSpan = document.querySelector(".typed-text");
    // const cursorSpan = document.querySelector(".cursor");

    // const textArray = ["digital products", "platforms", "sales funnels", "ADs/PR"];
    // const typingDelay = 40;
    // const erasingDelay = 40;
    // const newTextDelay = 400; // Delay between current and next text
    // let textArrayIndex = 0;
    // let charIndex = 0;

    // function type() {
    //     if (charIndex < textArray[textArrayIndex].length) {
    //         if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    //         typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    //         charIndex++;
    //         setTimeout(type, typingDelay);
    //     } else {
    //         cursorSpan.classList.remove("typing");
    //         setTimeout(erase, newTextDelay);
    //     }
    // }

    // function erase() {
    //     if (charIndex > 0) {
    //         if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    //         typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    //         charIndex--;
    //         setTimeout(erase, erasingDelay);
    //     } else {
    //         cursorSpan.classList.remove("typing");
    //         textArrayIndex++;
    //         if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    //         setTimeout(type, typingDelay + 500);
    //     }
    // }

    // // document.addEventListener("DOMContentLoaded", function () {// On DOM Load initiate the effect
    // if (textArray.length) setTimeout(type, newTextDelay + 250);
    // // });
    // // end: main text animation

    // // start: calculator
    // const price = 12.99;
    // const rates = {
    //     instagram: {
    //         5_000_000: 1.2,
    //         1_000_000: 1.5,
    //         500_000: 2,
    //         200_000: 2.5,
    //         100_000: 2.8,
    //         50_000: 3,
    //         10_000: 3,
    //         5_000: 5,
    //         1_000: 6,
    //         0: 0
    //     },

    //     tiktok: {
    //         5000_000: 1,
    //         1000_000: 1,
    //         500_000: 1.5,
    //         200_000: 1.5,
    //         100_000: 1.5,
    //         50_000: 1.5,
    //         10_000: 1.5,
    //         5_000: 1,
    //         1_000: 1,
    //         0: 0
    //     },

    //     youtube: {
    //         5_000_000: 3,
    //         1_000_000: 3,
    //         500_000: 4.5,
    //         200_000: 4.5,
    //         100_000: 5,
    //         50_000: 5.5,
    //         10_000: 6,
    //         5_000: 6.5,
    //         1_000: 6.5,
    //         0: 0
    //     },

    //     twitter: {
    //         5_000_000: 1.5,
    //         1_000_000: 2,
    //         500_000: 2.5,
    //         200_000: 2.5,
    //         100_000: 2.5,
    //         50_000: 3,
    //         10_000: 3,
    //         5_000: 3,
    //         1_000: 3,
    //         0: 0
    //     }
    // };

    // var social = "instagram";
    // // var followers = Math.floor(Math.random() * (100000 - 1000) + 1000);
    // var followers = 5000;
    // var marketing = false;

    // const setActiveSocial = () => {
    //     document.querySelectorAll(".cl-el__social").forEach(el => {
    //         el.classList.remove("active");
    //         if (el.dataset.social == social) {
    //             el.classList.add("active");
    //         }
    //     });
    // };

    // const getRate = (social, followers) => {
    //     const rate = rates[social];
    //     const value = Object.entries(rate).sort((a, b) => b[0] - a[0]).find(([value, key]) => {
    //         return followers >= value;
    //     })[1];
    //     return value / 100;
    // };
    // const getEstimate = (social, followers) => {
    //     const rate = getRate(social, followers);
    //     return Math.round(followers * price * rate * (marketing ? 3 : 1));
    // };
    // const setEstimate = () => {
    //     document.getElementById("cl-el__estimate").innerHTML = number_format(getEstimate(
    //             social,
    //             followers),
    //         0, ',', ' ') + ' $';
    // };
    // document.querySelectorAll(".cl-el__social").forEach(el => {
    //     el.addEventListener("click", e => {
    //         social = e.target.dataset.social;
    //         setActiveSocial();
    //         setEstimate();
    //     });
    // });

    // document.getElementById("cl-el__followers").addEventListener("keyup", e => {
    //     e.preventDefault();
    //     followers = parseInt(e.target.value.toString().replaceAll(' ', '')) || 0;
    //     const modValue = followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    //     if (followers > 9999999) {
    //         followers = 9999999;
    //         e.target.value = '9 999 999';
    //     } else if (followers < 0) {
    //         followers = 0;
    //         e.target.value = 0;
    //     } else {
    //         e.target.value = modValue;
    //     }
    //     setEstimate();
    // });


    // document.getElementById("cl-el__line").addEventListener("click", e => {
    //     if (document.getElementById("cl-el__bullet").classList.contains('off')) {
    //         document.getElementById("cl-el__bullet").classList.remove('off');
    //         document.getElementById("cl-el__bullet").classList.add('on');
    //         document.getElementById("cl-el__bullet").innerHTML = 'On';
    //         marketing = true;
    //         document.getElementById("cl-el__comment").classList.add('cl-el__comment--with-marketing');
    //         // document.getElementById("cl-el__comment").innerHTML = "Your possible <b>monthly income</b><br>with marketing:";
    //     } else {
    //         document.getElementById("cl-el__bullet").classList.remove('on');
    //         document.getElementById("cl-el__bullet").classList.add('off');
    //         document.getElementById("cl-el__bullet").innerHTML = 'Off';
    //         marketing = false;
    //         document.getElementById("cl-el__comment").classList.remove('cl-el__comment--with-marketing');
    //         // document.getElementById("cl-el__comment").innerHTML = "Your possible <b>monthly income</b><br>with no marketing:";
    //     }


    //     setEstimate();
    // });


    // document.getElementById("cl-el__followers").value = followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // setEstimate();
    // setActiveSocial();


    // function number_format(number, decimals, dec_point, thousands_sep) {
    //     number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    //     var n = !isFinite(+number) ? 0 : +number,
    //         prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    //         sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
    //         dec = typeof dec_point === 'undefined' ? '.' : dec_point,
    //         s = '',
    //         toFixedFix = function (n, prec) {
    //             var k = Math.pow(10, prec);
    //             return '' + (Math.round(n * k) / k).toFixed(prec);
    //         };
    //     // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    //     s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    //     if (s[0].length > 3) {
    //         s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    //     }
    //     if ((s[1] || '').length < prec) {
    //         s[1] = s[1] || '';
    //         s[1] += new Array(prec - s[1].length + 1).join('0');
    //     }
    //     return s.join(dec);
    // }

    // //end: calculator

    // if(window.innerWidth > 1100) {
    //     //parallax
    //     document.querySelectorAll('.scene').forEach((item) => {
    //         const parallaxInstance = new Parallax(item);
    //     });
    // }


    // //calculator links
    // const anchorCalculatorLinks = document.querySelectorAll('a[href="#calculator"]');
    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    // anchorCalculatorLinks.forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();

    //         const destination = document.querySelector(this.getAttribute('href'));

    //         if (window.innerWidth > 760) {
    //             window.scrollTo({
    //                 top: destination.offsetTop - 125,
    //                 behavior: 'smooth'
    //             });
    //         } else {
    //             window.scrollTo({
    //                 top: destination.offsetTop,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });

    // //request, forms and validation
    // const contactForms = document.querySelectorAll('form.contact-form');

    // function validateField(fieldValue, regex) {
    //     if(regex) {
    //       return regex.test(String(fieldValue).toLowerCase());
    //     }

    //     return (fieldValue && fieldValue.trim()) ? true : false;
    // };

    // function validateContactForm(e) {
    //     e.preventDefault();

    //     let parentElement = e.target.closest(".form");
    //     let validation = true;

    //     const formFields = parentElement.querySelectorAll('.form-field');

    //     formFields.forEach(field => {
    //         let isFieldValid;

    //         switch (field.name) {
    //             // case "phone":
    //             // isFieldValid = validateField(field.value, /^\+?[ ()-\d]{5,}$/);
    //             // break;
    //             case "email":
    //                 isFieldValid = validateField(field.value, /^\S+@\S+$/);
    //             break;
    //             default:
    //             isFieldValid = validateField(field.value);
    //         }

    //         if( field.name === 'social') {
    //             return;
    //         } else if(isFieldValid) {
    //             field.classList.remove("field-error");
    //         } else {
    //             field.classList.add("field-error");
    //         }
    //     })


    //     if(parentElement.querySelector('.field-error')) {
    //         validation = false;
    //     }

    //     const privacyPolicyCheckbox = parentElement.querySelector(".privacy-checkbox");
    //     if (privacyPolicyCheckbox) {
    //       if (!privacyPolicyCheckbox.checked) {
    //         validation = false;
    //         parentElement.querySelector(".pretty.p-pulse").classList.add("p-pulse-error");
    //         setTimeout(() => {
    //           parentElement.querySelector(".pretty.p-pulse").classList.remove("p-pulse-error");
    //         }, 1000);
    //       }
    //     }

    //     return validation;
    // };

    // contactForms.forEach(function (contactForm) {
    //     const button = contactForm.querySelector('button.btn');

    //     if (button) {
    //       button.onclick = function (e) {
    //         e.preventDefault();

    //         let validation = validateContactForm(e);

    //         if (!validation) {
    //           return false;
    //         } else {
    //           const formData = new FormData(contactForm);

    //           const isSocialInputDisplayed = getComputedStyle(contactForm.querySelector('input.social')).display === 'block' ? true : false;
    //           if(!isSocialInputDisplayed){
    //             formData.delete('social');
    //           } else {
    //             if(contactForm.querySelector('input.social').value.trim() === '') {
    //                 formData.set('social', '-');
    //             }
    //           }

    //           if (!button.getAttribute('disabled')) {
    //             button.disabled = true;
    //             button.style.opacity = '0.5';
    //             /*
    //              * Если использовать 'Content-Type': 'application/json', то в body надо передавать параметры так:
    //              * JSON.stringify(Object.fromEntries(formData)).
    //              *
    //              * Я его не использую, так как не передаются тогда файлы в метод (задел на будущее, если будет выбор файла).
    //              */
    //             fetch(contactForm.getAttribute('action'), {
    //               method: contactForm.getAttribute('method'),
    //               headers: {
    //                 'X-Requested-With': 'XMLHttpRequest',
    //                 //'Content-Type': 'application/json',
    //                 "Accept": "application/json",
    //                 'X-CSRF-Token': csrfToken
    //               },
    //               body: formData
    //             }).then(function (res) {
    //               return res.json();
    //             }).then(function (response) {
    //               button.disabled = false;
    //               button.style.opacity = '1';

    //               if (response.success !== undefined) {
    //                 new Noty({
    //                     layout: 'centerRight',
    //                     theme: 'relax',
    //                     timeout: '2000',
    //                     closeWith: ['click'],
    //                     progressBar: false,
    //                     text: response.success,
    //                     type: 'success',
    //                 }).show();
    //                 const formFields = contactForm.querySelectorAll('input');

    //                 contactForm.reset();
    //                 if (formFields) {
    //                   formFields.forEach(function (field) {
    //                     field.value = '';
    //                   });
    //                 }

    //                 if (contactForm.classList.contains('popup-form')) {
    //                     closePopup.apply(contactForm);
    //                 }
    //               } else if (response.error !== undefined) {
    //                 new Noty({
    //                     layout: 'centerRight',
    //                     theme: 'relax',
    //                     timeout: '2000',
    //                     closeWith: ['click'],
    //                     progressBar: false,
    //                     text: response.error,
    //                     type: 'error',
    //                 }).show();
    //               }
    //             }).catch(function (response) {
    //               button.disabled = false;
    //             });
    //           }
    //         }
    //       };
    //     }
    // });

    // const privacyPrettyCheckboxes = document.querySelectorAll(".contact-form .pretty");

    // const handlePrivacyCheckboxLinks = () => {
    //   privacyPrettyCheckboxes.forEach((checkbox, index) => {
    //     checkbox.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         if (e.target.classList.contains("privacy-checkbox__link")) {
    //         //   window.location.href = e.target.href;
    //           window.open(e.target.href, '_blank').focus();
    //         } else {
    //           if (!checkbox.querySelector("input.privacy-checkbox").checked) {
    //             checkbox.querySelector("input.privacy-checkbox").checked = true;
    //           } else {
    //             checkbox.querySelector("input.privacy-checkbox").checked = false;
    //           }
    //         }
    //       }, true);
    //   });
    // };

    // handlePrivacyCheckboxLinks();
});
