// // import Swiper from "swiper/bundle";
// // import Swiper, { Navigation, Pagination} from "swiper";
import {Swiper, Navigation, Pagination, EffectCoverflow} from "swiper";

Swiper.use([Navigation, Pagination, EffectCoverflow]);

window.addEventListener("load", () => {
  const servicesSwiper = new Swiper('.services-swiper', {
		effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: "auto",
    // preventClicks: true,
    // preventClicksPropagation: true,
    // slideToClickedSlide: true,
      threshold: 25,
      grabCursor: true,
    loop: true,
		coverflowEffect: {
      rotate: 0,
      depth: 105,
      modifier: 2,
      stretch: -65,
			slideShadows : false,
		},
    breakpoints: {
      1440: {
        coverflowEffect: {
          rotate: 0,
          depth: 105,
          modifier: 2,
          stretch: -65,
        },
      },
      1280: {
        coverflowEffect: {
          depth: 170,
        },
      },
      850: {
        coverflowEffect: {
          depth: 200,
        },
      },
      300: {
        centeredSlides: false,
        slidesPerView: 1.2,
        spaceBetween: 20,
        slidesOffsetBefore: 20,
        coverflowEffect: {
          rotate: 0,
          depth: 0,
          modifier: 0,
          stretch: 0,
        },
      },
    },
    navigation: {
        prevEl: '.services-swiper__prev-btn',
        nextEl: '.services-swiper__next-btn',
    },
});

})
//   console.log("load SLIDERS")
//   if (document.querySelector(".about-club-slider")) {
//     const aboutClubSlider = new Swiper(".about-club-slider", {
//       initialSlide: 0,
//       // slidesPerView: "auto",
//       // loop: true,
//       threshold: 25,
//       navigation: {
//         nextEl: ".about-club-slider__next-btn",
//         prevEl: ".about-club-slider__prev-btn",
//       },
//       pagination: {
//         el: ".about-club-slider__pagination",
//         clickable: true,
//       },
//     });
//   }

//   if (document.querySelector(".arena-intro-slider")) {
//     const cyberArenaSlider = new Swiper(".arena-intro-slider", {
//       initialSlide: 0,
//       // slidesPerView: "auto",
//       // loop: true,
//       threshold: 25,
//       navigation: {
//         nextEl: ".arena-intro-slider__next-btn",
//         prevEl: ".arena-intro-slider__prev-btn",
//       },
//       pagination: {
//         el: ".arena-intro-slider__pagination",
//         clickable: true,
//       },
//       // pagination: {
//       //   el: ".arena-intro-slider__pagination",
//       //   clickable: true,
//       // },
//     });
//   }
// });
