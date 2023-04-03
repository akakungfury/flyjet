// // import Swiper from "swiper/bundle";
// // import Swiper, { Navigation, Pagination} from "swiper";
import {Swiper, Navigation, Pagination, EffectCoverflow, Autoplay, Thumbs} from "swiper";

Swiper.use([Navigation, Pagination, EffectCoverflow, Autoplay, Thumbs]);

window.addEventListener("load", () => {
  const servicesSwiper = new Swiper('.services-swiper', {
		effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 400,
    // preventClicks: true,
    // preventClicksPropagation: true,
    // slideToClickedSlide: true,
      // threshold: 25,
      // grabCursor: true,
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

const airplanesThumbsSwiper1 = new Swiper("#airplane-thumbs-swiper1", {
  spaceBetween: 7,
  slidesPerView: 4,
  autoScrollOffset: 1,
  threshold: 45,
  watchSlidesProgress: true,
});

const airplanesThumbsSwiper2 = new Swiper("#airplane-thumbs-swiper2", {
  spaceBetween: 7,
  slidesPerView: 4,
  autoScrollOffset: 1,
  threshold: 45,
  watchSlidesProgress: true,
});

const airplanesThumbsSwiper3 = new Swiper("#airplane-thumbs-swiper3", {
  spaceBetween: 7,
  slidesPerView: 4,
  autoScrollOffset: 1,
  threshold: 45,
  watchSlidesProgress: true,
});

// var airplanesSliderPaginationListItems = document.querySelectorAll('.airplanes-swiper__pagination-list > li');
// var airplanesSliderPaginationNames = [...airplanesSliderPaginationListItems].map(el => el.textContent.trim());

const airplanesSlider1 = new Swiper("#airplane-swiper1", {
  centeredSlides: true,
  slidesPerView: "auto",
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: true,
  thumbs: {
    swiper: airplanesThumbsSwiper1,
  },
});
const airplanesSlider2 = new Swiper("#airplane-swiper2", {
  centeredSlides: true,
  slidesPerView: "auto",
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: true,
  thumbs: {
    swiper: airplanesThumbsSwiper2,
  },
});
const airplanesSlider3 = new Swiper("#airplane-swiper3", {
  centeredSlides: true,
  slidesPerView: "auto",
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: true,
  thumbs: {
    swiper: airplanesThumbsSwiper3,
  },
});

const airplanesSlidesWrapper = document.querySelector('.airplanes-swiper__slides-wrapper');
const airplanesSliderSlides = document.querySelectorAll('.airplanes-swiper__slide');
const airplanesSliderNextBtn = document.querySelector('.airplanes-swiper__next-btn');
const airplanesSliderPrevBtn = document.querySelector('.airplanes-swiper__prev-btn');
const transitionValues = 'all 0.35s ease;';

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

function rollToNextSlide(paginationIndex) {
  paginationIndex ? count = paginationIndex : count++;
  // count++;
  console.log('rollToNextSlid',count);

  if(count >= airplanesSliderSlides.length) {
    airplanesSliderNextBtn.classList.add('circle-btn--disabled');
    count = airplanesSliderSlides.length - 1;
    console.log('rollToNextSlid->if',count, airplanesSliderSlides.length);
    return;
  } else if(count === airplanesSliderSlides.length - 1) {
    airplanesSliderNextBtn.classList.add('circle-btn--disabled');
    console.log('rollToNextSlid->else-if',count, airplanesSliderSlides.length);
  } else {
    console.log('rollToNextSlid->else',count, airplanesSliderSlides.length);
    airplanesSliderNextBtn.classList.remove('circle-btn--disabled');
  }
  airplanesSliderPrevBtn.classList.remove('circle-btn--disabled');
  setActiveAirplanesPaginationItem(count);

  rollSlider();
}

function rollToPrevSlide(paginationIndex) {
  console.log("🚀!!!!!!!BEFORE count:", count)
  console.log("🚀!!!!!!! paginationIndex:", paginationIndex)
  Number(paginationIndex) >= 0 ? count = paginationIndex : count--;
  // count--;
  console.log('rollToPrevSlide',count);

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
  console.log("🚀!!!!!!!AFTER count:", count)

  setActiveAirplanesPaginationItem(count);

  rollSlider();
}


initAirplanesSlider();

window.addEventListener('resize', initAirplanesSlider);

airplanesSliderNextBtn.addEventListener('click', () => {
  // document.querySelector('.airplanes-swiper__slide').style.transition = transitionValues;
  // console.log(getComputedStyle(airplanesSlidesWrapper).transition);
  // count++;

  // if(count >= airplanesSliderSlides.length) {
  //   airplanesSliderNextBtn.classList.add('circle-btn--disabled');
  //   count = airplanesSliderSlides.length - 1;
  //   return;
  // } else if(count === airplanesSliderSlides.length - 1) {
  //   airplanesSliderNextBtn.classList.add('circle-btn--disabled');
  // } else {
  //   airplanesSliderNextBtn.classList.remove('circle-btn--disabled');
  // }
  // airplanesSliderPrevBtn.classList.remove('circle-btn--disabled');
  // setActiveAirplanesPaginationItem(count);

  // rollSlider();
  rollToNextSlide();
})

airplanesSliderPrevBtn.addEventListener('click', () => {
  // count--;

  // if(count < 0) {
  //   airplanesSliderPrevBtn.classList.add('circle-btn--disabled');
  //   count = 0;
  //   return
  // } else if(count === 0) {
  //   airplanesSliderPrevBtn.classList.add('circle-btn--disabled');
  // } else {
  //   airplanesSliderPrevBtn.classList.remove('circle-btn--disabled');
  // }
  // airplanesSliderNextBtn.classList.remove('circle-btn--disabled');
  // setActiveAirplanesPaginationItem(count);

  // rollSlider();
  rollToPrevSlide();
})

const airplanesPaginationItems = document.querySelectorAll('.airplanes-swiper__pagination-item');

function setActiveAirplanesPaginationItem(index) {
  // console.log('setActiveAirplanesPaginationItem',index,airplanesPaginationItems[index],airplanesPaginationItems[index].classList.contains('airplanes-swiper__pagination-item'));
  if (!airplanesPaginationItems[index].classList.contains('airplanes-swiper__pagination-item--active')) {
    airplanesPaginationItems.forEach(el => el.classList.remove('airplanes-swiper__pagination-item--active'));
    airplanesPaginationItems[index].classList.add('airplanes-swiper__pagination-item--active');
  }
}

airplanesPaginationItems.forEach(el => {
  el.addEventListener('click', () => {
    console.log('slideIndex', el.dataset.slideIndex);
    const slideIndex = Number(el.dataset.slideIndex);
    if(slideIndex > count) {
      rollToNextSlide(slideIndex);
    } else {
      rollToPrevSlide(slideIndex);
    }
  })
})

const airplanesPaginationSlider = document.querySelector('.airplanes-swiper__pagination-list');
let isDown = false;
let startX;
let scrollLeft;

airplanesPaginationSlider.addEventListener('mousedown', (e) => {
  isDown = true;
  airplanesPaginationSlider.classList.add('active');
  startX = e.pageX - airplanesPaginationSlider.offsetLeft;
  scrollLeft = airplanesPaginationSlider.scrollLeft;
});
airplanesPaginationSlider.addEventListener('mouseleave', () => {
  isDown = false;
  airplanesPaginationSlider.classList.remove('active');
});
airplanesPaginationSlider.addEventListener('mouseup', () => {
  isDown = false;
  airplanesPaginationSlider.classList.remove('active');
});
airplanesPaginationSlider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - airplanesPaginationSlider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  airplanesPaginationSlider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

// airplanesPaginationSlider.addEventListener('touchstart', (e) => {
//   airplanesPaginationSlider.classList.add('active');
// });
// airplanesPaginationSlider.addEventListener('touchend', () => {
//   airplanesPaginationSlider.classList.remove('active');
// });
// airplanesPaginationSlider.addEventListener('touchmove', () => {
//   airplanesPaginationSlider.classList.add('active');
// });


})
