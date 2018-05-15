import ScrollAnim from '../modules/dev/animation/scrollAnim';
import {
  TimelineMax
} from 'gsap';
import { Resp } from '../modules/dev/_helpers';
import Swiper from '../modules/dep/swiper.min';

class Benefits {
  constructor() {
    this.block = document.querySelector('.benefits');
    if (!this.block) return;

    this.inner = this.block.querySelector('.benefits__inner');
    this.items = this.block.querySelectorAll('.benefits__item');

    this.init();

  }

  init() {
    if (!Resp.isDesk) {
      this.prepareSlider();
      this.createSlider();
    }
  }

  prepareSlider() {
    return new Promise(resolve => {
      const container = document.createElement('div');

      container.classList.add('swiper-container');
      this.inner.before(container);
      container.append(this.inner);
      this.inner.classList.add('swiper-wrapper');

      for (const item of this.items) {
        item.classList.add('swiper-slide');
      }

      resolve();
    });
  }

  createSlider() {
    this.slider = new Swiper(this.inner.parentElement, {
      slidesPerView: 3,
      loop: true,
      speed: 500,
      breakpoints: {
        767: {
          slidesPerView: 1
        }
      }
    });
  }

}

export default new Benefits();
