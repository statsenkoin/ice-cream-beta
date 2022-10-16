var swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,

  slidesPerView: 1,

  effect: 'fade',
  fadeEffect: { crossFade: true },

  autoHeight: true,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});

var swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,

  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  keyboard: {
    anabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  speed: 500,

  effect: 'flip',
  flipEffect: {
    sladeShadows: true,
    limitRotation: true,
  },
});
