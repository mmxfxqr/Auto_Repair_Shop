$(function () {
 
    $(".rateYo").rateYo({
      
    });
   
  });

  $('.testinonials__slider').slick({
    arrows:false,
    dots: true,
    appendDots: ('.testinonials__dots'),
    slidesToShow:2,
    infinite: true,
    waitForAnimate: false,
    responsive:
    [
      {
        breakpoint:800,
        settings:{
          slidesToShow:1,
        },
      },
    ]
  })
  $('.testinonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testinonials__slider').slick('slickPrev')
  })
  $('.testinonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testinonials__slider').slick('slickNext')
  })

  // $('.faq__acc-link').on('click', function(e) {
  //   e.preventDefault()
  //   $(this).toggleClass('faq__acc-link--active')
  //   $(this).children('.faq__acc-text').slideToggle()
  // })

    $('.faq__acc-link').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('faq__acc-link--active');
      $(this).closest('.faq__acc-item').find('.faq__acc-text').slideToggle();
    });
    setInterval(() => {
      if($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open')===false){
        $('.burger').addClass('burger--follow')
      }
      else{
        $('.burger').removeClass('burger--follow')
      }
    },0)
    $('.burger, .overlay').on('click', function(e){
      e.preventDefault()
      $('.header__top').toggleClass('header__top--open')
      $('.overlay').toggleClass('overlay--show')
    });
