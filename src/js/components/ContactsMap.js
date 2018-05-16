import { Resp } from '../modules/dev/_helpers';

class ContactsMap {
  constructor() {
    this.block = document.querySelector('.contacts-map');

    if (!this.block) return;

    this.init();
  }

  init() {
    const ready = new Promise(resolve => {
      resolve(ymaps.ready());
    });

    ready.then(() => {
      ymaps.ready(this.createMap());
    });
  }

  createMap() {
    const map = new ymaps.Map('contacts-map', {
      center: [55.65642954351157, 37.594330040969844],
      zoom: 17,
      controls: []
    });

    const balloonLayout = ymaps.templateLayoutFactory.createClass(
      `<div class="contact-map__content">
        <p>Азовская улица, 15</p>
      </div>`);

    const officePlace = new ymaps.Placemark([55.65647806907896, 37.599039999999995], {name:'suka'}, {
      iconColor: 'red',
      balloonContentLayout: balloonLayout,
      balloonShadow: false,
      balloonPanelMaxMapArea: 0,
      hideIconOnBalloonOpen: false,
      balloonCloseButton: false,
      balloonOffset: [70, 7]
    });

    map.behaviors.disable('scrollZoom');
    map.geoObjects.add(officePlace);
    officePlace.balloon.open();

    if (!Resp.isDesk) {
      map.setCenter([55.65647806907896, 37.599039999999995]);
    }
  }

}

export default new ContactsMap();
