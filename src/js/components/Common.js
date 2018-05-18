import objectFitImages from 'object-fit-images';
import './NoTouch';
import { $body, detectIE } from '../modules/dev/_helpers';

// import './Anims';
import './Header';
import './FullSlider';
import './Dot';
import './CTabs';
import './TeachersModal';
// import './ContactsMap';
import '../sections/Benefits';

export class Common {
  /**
   * Cache data, make preparations and initialize common scripts.
   */
  constructor() {
    this.init();

  }
  /**
   * Initialize common scripts.
   */
  init() {
    objectFitImages();
    this.detectIE();
  }

  detectIE() {
    if (detectIE()) {
      $body.addClass('ie');
    }
  }
}

/** Export initialized common scripts by default */
export default new Common();
