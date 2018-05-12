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

    const mapPlace = new ymaps.Placemark([55.65647806907896, 37.599039999999995], {
      balloonContent: 'Азовская улица, 15'
    }, { iconColor: 'red' });

    map.behaviors.disable('scrollZoom');
    map.geoObjects.add(mapPlace);
  }

}

export default new ContactMap();
