import { TweenMax } from 'gsap';
import {
  $window,
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
    this.bindEvents();

    if (!Resp.isDesk) {
      this.toggleNav();
    }
  }

  bindEvents() {
    this.onResize();
  }

  toggleNav() {
    const _this = this;
    this.$navBtn.on('click tap', function () {
      $(this).toggleClass(css.active);
      _this.$nav.slideToggle();
    });
  }

  onResize() {
    $window.on('resize', () => {
      if (!Resp.isDesk) {
        this.$navBtn.removeClass(css.active);
        this.$nav.slideUp(function () {
          $(this).removeAttr('style');
        });
      }
    });
  }

}

export const HeaderAPI = new Header();
