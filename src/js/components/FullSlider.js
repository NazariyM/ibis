import ScrollAnim from '../modules/dev/animation/scrollAnim';
import {
  TimelineMax
} from 'gsap';
import Swiper from '../modules/dep/swiper.min';

class FullSlider {

  constructor(el) {
    this.el = document.querySelector(el);

    this.init();
  }

  init() {
    this.createSlider();
    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      this.clickToSlide(this.slider);

      // this.toggleMouseWheel(this.el, this.slider, e);
    });
  }

  createSlider() {

    this.slider = new Swiper(this.el, {
      slidesPerView: 7.11,
      simulateTouch: true,
      loop: true,
      centeredSlides: true,
      speed: 500,
      initialSlide: 3,
      loopAdditionalSlides: 10,
      keyboardControl: true,
      breakpoints: {
        1599: {
          slidesPerView: 6.11
        },
        1199: {
          slidesPerView: 3.11
        },
        767: {
          slidesPerView: 1
        }
      }
    });
  }

  clickToSlide(slider) {
    slider.on('click', () => {
      const slideIdx = slider.clickedIndex;
      slider.slideTo(slideIdx, 500);
    });
  }

  // toggleMouseWheel(el, slider, event) {
  //   const target = event.target.closest('.swiper-container');
  //   target === el ? slider.mousewheel.enable() : slider.mousewheel.disable();
  // }

}

const teachersSlider = new FullSlider('.teachers__slider');
