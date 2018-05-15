import objectFitImages from 'object-fit-images';
import './NoTouch';

// import './Anims';
import './Header';
import './FullSlider';
import './Dot';
import './ContactMap';
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
  }
}

/** Export initialized common scripts by default */
export default new Common();
