import { TweenMax } from 'gsap';
import {
  $header,
  css,
  Resp
} from '../modules/dev/_helpers';

class Header {
  constructor() {
    this.$nav = $('.header__nav');
    this.$navBtn = $('.header__nav-toggle');

    this.init();
  }

  init() {
    // this.bindEvents();

    if (!Resp.isDesk) {
      this.toggleNav();
    }
  }

  bindEvents() {
    this.show();
  }

  show() {
    TweenMax.to($header, .7, { y: 0, delay: .5 });
  }

  toggleNav() {
    const _this = this;
    this.$navBtn.on('click tap', function () {
      $(this).toggleClass(css.active);
      _this.$nav.slideToggle();
    });
  }

}

export const HeaderAPI = new Header();
