class ContactMap {
  constructor() {
    this.block = document.querySelector('.contact');

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
    const map = new ymaps.Map('contact-map', {
      center: [55.65642954351157, 37.594330040969844],
      zoom: 17,
      controls: []
    });

    const balloonLayout = ymaps.templateLayoutFactory.createClass(
      `<div class="contact__map-content">
         <div>
         <img src="">
        </div>
        <p>Азовская улица, 15</p>
      </div>`);

    const officePlace = new ymaps.Placemark([55.65647806907896, 37.599039999999995], {name:'suka'}, {
      iconColor: 'red',
      balloonContentLayout: balloonLayout,
      balloonShadow: false,
      balloonPanelMaxMapArea: 0,
      hideIconOnBalloonOpen: false,
      balloonCloseButton: false,
      balloonOffset: [3, -40]
    });

    map.behaviors.disable('scrollZoom');
    map.geoObjects.add(officePlace);
    officePlace.balloon.open();
  }

}

export default new ContactMap();
