const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  speed: 500,

  effect: 'flip',

  flipEffect: {
    sladeShadows: true,
    limitRotation: true,
  },
});
