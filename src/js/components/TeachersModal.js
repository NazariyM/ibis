import fancybox from '@fancyapps/fancybox';

$('[data-fancybox]').fancybox({
  btnTpl: {
    arrowLeft:
    `<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="48"
           viewBox="0 0 24 48">
          <defs>
              <path id="qlcya" d="M412.89 1495L389 1471l23.89-24"/>
              <clipPath id="qlcyb">
                  <use fill="#fff" xlink:href="#qlcya"/>
              </clipPath>
          </defs>
          <g>
              <g transform="translate(-389 -1447)">
                  <use fill="#fff" fill-opacity="0" stroke="#fff" stroke-miterlimit="50" stroke-width="6"
                       clip-path="url(&quot;#qlcyb&quot;)" xlink:href="#qlcya"/>
              </g>
          </g>
      </svg>
    </a>`,

    arrowRight:
    `<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="48"
     viewBox="0 0 24 48">
    <defs>
        <path id="s2n3a" d="M1506 1447l24 24-24 24"/>
        <clipPath id="s2n3b">
            <use fill="#fff" xlink:href="#s2n3a"/>
        </clipPath>
    </defs>
    <g>
        <g transform="translate(-1506 -1447)">
            <use fill="#fff" fill-opacity="0" stroke="#fff" stroke-miterlimit="50" stroke-width="6"
                 clip-path="url(&quot;#s2n3b&quot;)" xlink:href="#s2n3a"/>
        </g>
    </g>
</svg>
    </a>`
  }
});
