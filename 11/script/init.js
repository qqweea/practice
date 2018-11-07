var intro = new Swiper('.intro', {
  loop: true,
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 1500,
},
});

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

  var clientsSwiper = new Swiper('.slider-3', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
    },
  });

  var feedback__slider = new Swiper('.feedback__slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
  });

  function reinit() {
    intro.init();
    swiper.init();
    clientsSwiper.init();
    feedback__slider.init();
  }

  document.addEventListener("resize", reinit, false);
  
  $('.slider-2').on('mouseleave', function(e){
    swiper.autoplay.start();
  })
  $('.slider-3').on('mouseenter', function(e){
    clientsSwiper.autoplay.stop();
  })
  $('.slider-3').on('mouseleave', function(e){
    clientsSwiper.autoplay.start();
  })
  $('.feedback__slider').on('mouseenter', function(e){
    feedback__slider.autoplay.stop();
  })
  $('.feedback__slider').on('mouseleave', function(e){
    feedback__slider.autoplay.start();
  })

  $('.intro').on('mouseenter', function(e){
    intro.autoplay.stop();
  })
  $('.intro').on('mouseleave', function(e){
    intro.autoplay.start();
  })