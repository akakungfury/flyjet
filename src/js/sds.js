const airplanesSlidesWrapper = document.querySelector('.airplanes-swiper__slides-wrapper');
const airplanesSliderSlides = document.querySelectorAll('.airplanes-swiper__slide');
const airplanesSliderNextBtn = document.querySelector('.airplanes-swiper__next-btn');
const airplanesSliderPrevBtn = document.querySelector('.airplanes-swiper__prev-btn');
const transitionValues = 'all 0.5s ease;';

let count = 0;
let width;

function initAirplanesSlider() {
  width = document.querySelector('.airplanes-swiper').offsetWidth;
  airplanesSlidesWrapper.style.width = width * airplanesSliderSlides.length; + 'px';
  airplanesSliderSlides.forEach(slide => {
    slide.style.width = width + 'px';
    slide.style.height = 'auto';
  });
  rollSlider();
}

function rollSlider() {
  airplanesSlidesWrapper.style.transform = 'translate( -' + count * width + 'px)';
}


initAirplanesSlider();

window.addEventListener('resize', initAirplanesSlider);

airplanesSliderNextBtn.addEventListener('click', () => {
  // document.querySelector('.airplanes-swiper__slide').style.transition = transitionValues;
  // console.log(getComputedStyle(airplanesSlidesWrapper).transition);
  count++;

  if(count >= airplanesSliderSlides.length) {
    airplanesSliderNextBtn.classList.add('circle-btn--disabled');
    count = airplanesSliderSlides.length - 1;
    return;
  } else if(count === airplanesSliderSlides.length - 1) {
    airplanesSliderNextBtn.classList.add('circle-btn--disabled');
  } else {
    airplanesSliderNextBtn.classList.remove('circle-btn--disabled');
  }
  airplanesSliderPrevBtn.classList.remove('circle-btn--disabled');
  setActiveAirplanesPaginationItem(count);

  rollSlider();
})

airplanesSliderPrevBtn.addEventListener('click', () => {
  count--;

  if(count < 0) {
    airplanesSliderPrevBtn.classList.add('circle-btn--disabled');
    count = 0;
    return
  } else if(count === 0) {
    airplanesSliderPrevBtn.classList.add('circle-btn--disabled');
  } else {
    airplanesSliderPrevBtn.classList.remove('circle-btn--disabled');
  }
  airplanesSliderNextBtn.classList.remove('circle-btn--disabled');
  setActiveAirplanesPaginationItem(count);

  rollSlider();
})

const airplanesPaginationItems = document.querySelectorAll('.airplanes-swiper__pagination-item');

function setActiveAirplanesPaginationItem(index) {
  if (!airplanesPaginationItems[index].classList.contains('airplanes-swiper__pagination-item')) {
    airplanesPaginationItems.forEach(el => el.remove.class('airplanes-swiper__pagination-item--active'));
    airplanesPaginationItems[index].classList.add('airplanes-swiper__pagination-item');
  }
}




// const swiper = new Swiper('.sample-slider', {
//   loop: true,
//   autoplay: {
//       delay: 0,
//       disableOnInteraction: false,
//   },
//   speed: 5000,
//   slidesPerView: 3,
  // spaceBetween: 40,
  // grabCursor: true,
  // a11y: false,
  // freeMode: true,
  // speed: 1000,
  // loop: true,
  // slidesPerView: 3,
  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: false,
  //    },
  //  breakpoints: {
  //   0: { /* when window >=0px - webflow mobile landscape/portriat */
  //     spaceBetween: 30,
  //   },
  //       480: { /* when window >=0px - webflow mobile landscape/portriat */
  //     spaceBetween: 30,
  //   },
  //   767: { /* when window >= 767px - webflow tablet */
  //     spaceBetween: 40,
  //   },
  //   992: { /* when window >= 988px - webflow desktop */
  //     spaceBetween: 40,
  //   }
  // },
// })
