import ScrollAnim from '../modules/dev/animation/scrollAnim';
import {
  TimelineMax
} from 'gsap';
import Swiper from 'swiper';

class FullSlider {

  constructor(el, settings = { slidesCount: 7 }) {
    this.el = document.querySelector(el);
    this.settings = settings;

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
      slidesPerView: this.settings.slidesCount,
      simulateTouch: true,
      loop: true,
      centeredSlides: true,
      speed: 500,
      initialSlide: 3,
      loopAdditionalSlides: 8,
      keyboardControl: true
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

const teachersSlider = new FullSlider('.teachers__slider', { slidesCount: 7.11 });
