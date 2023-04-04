// // import Swiper from "swiper/bundle";
// // import Swiper, { Navigation, Pagination} from "swiper";
import Swiperv9 from "../js/swiper-v9";

// Swiper.use([Navigation, Pagination, EffectCoverflow, Autoplay, Thumbs]);

window.addEventListener("load", () => {

const tickerSwiperTop = new Swiperv9('.ticker-swiper', {
  loop: true,
  loopedSlides: 2,
  // spaceBetween: 8,
  speed: 55000,
  allowTouchMove: false,
  // loopedSlides: 130,
  // slidesPerView: 3,
  slidesPerView: 'auto',
  // initialSlide: 4,
  autoplay: {
    disableOnInteraction: false,
    delay: 1000,
  },
  // breakpoints: {
  //   1015: {
  //     spaceBetween: 20,
  //   },
  // },
});

// tickerSwiperTop.autoplay.pause()

// setTimeout(() => tickerSwiperTop.autoplay.start(), 1000)


// tickerSwiperTop.on('resize', function () {
//   console.log('tickerSwiperTop.on(resize)')
//   tickerSwiperTop.autoplay.stop()
//   tickerSwiperTop.autoplay.start()
// });
})
