var trainers = new Swiper('.trainers__slider', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


  function reinit() {
    trainers.init();
  }

  document.addEventListener("resize", reinit, false);

  $('.trainers__slider').on('mouseenter', function(e){
    trainers.autoplay.stop();
  })
  $('.trainers__slider').on('mouseleave', function(e){
    trainers.autoplay.start();
  })
