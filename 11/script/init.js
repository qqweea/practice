var swiper = new Swiper('.slider-2', {
    loop: true,
    pagination: {
        el: '.swiper-pagination-2',
        type: 'bullets',
        clickable: true,
        progressbarOpposite: true,
    },
    autoplay: {
        delay: 5000,
    },
  });