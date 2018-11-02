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
  
  $('.slider-2').on('mouseleave', function(e){
    console.log('start autoplay');
    swiper.autoplay.start();
  })
  $('.slider-3').on('mouseenter', function(e){
    console.log('stop autoplay');
    clientsSwiper.autoplay.stop();
  })
  $('.slider-3').on('mouseleave', function(e){
    console.log('start autoplay');
    clientsSwiper.autoplay.start();
  })
  $('.feedback__slider').on('mouseenter', function(e){
    console.log('stop autoplay');
    feedback__slider.autoplay.stop();
  })
  $('.feedback__slider').on('mouseleave', function(e){
    console.log('start autoplay');
    feedback__slider.autoplay.start();
  })