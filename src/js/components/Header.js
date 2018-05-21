import { TweenMax } from 'gsap';
import {
  $header,
  $window,
  css,
  Resp
} from '../modules/dev/_helpers';

class Header {
  constructor() {
    this.$header = $header;
    this.$nav = this.$header.find('.header__nav');
    this.$navBtn = this.$header.find('.header__nav-line');
    this.dropdown = this.$header.find('.header__nav-drop');
    this.dropdownList = this.$header.find('.header__nav-drop').find('ul');
    this.dropdownContent = this.$header.find('.header__nav-drop-content');

    this.init();
  }

  init() {
    this.bindEvents();

    if (!Resp.isDesk) {
      this.toggleNav();
      this.mobileDropToggling();
    }
  }

  bindEvents() {
    this.initDropdown();
    this.onResize();
  }

  toggleNav() {
    const _this = this;
    this.$navBtn.on('click tap', function () {
      $(this).find('button').toggleClass(css.active);
      _this.$nav.slideToggle();
    });
  }

  initDropdown() {
    const _this = this;

    this.dropdownList.each((i, el) => {
      const $el = $(el);

      $el.find('li').each(function (i) {
        $(this).hover(function () {
          $(this).closest(_this.dropdown).find(_this.dropdownContent).removeClass(css.active).eq(i).addClass(css.active);
        });
      });
    });
  }

  mobileDropToggling() {
    const $mobBtn = this.$nav.find('ul > li');

    $mobBtn.on('click', (e) => {
      const $target = $(e.target);
      const $siblingItems = $target.closest('li').siblings();

      $target
        .addClass(css.active)
        .find(this.dropdown)
        .slideToggle();

      $siblingItems
        .find(this.dropdown)
        .slideUp();

      $siblingItems.removeClass(css.active);
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
