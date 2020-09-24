$(document).ready(function () {
   $(".small-img").click(function () {
      $(".big-img").attr("src", $(this).attr("src"));
   });
   $('.content-leftside-catalog__icon').click(function (event) {
      $(this).toggleClass('active');
      $('.content-leftside-catalog-block').slideToggle(200, function () {
         $(this).toggleClass('active');
         leftside();
      });
   });
   $('.header__burger').click(function (event) {
      $('.header__burger, .header').toggleClass('active');
      $('body').toggleClass('lock');
      $('.content').toggleClass('active');
   });
   $('.mobile-arrow').click(function (event) {
      $(this).parent().find('.mobile-sub-menu__list').toggleClass('active');
      $(this).parent().find('.mobile-arrow').toggleClass('active');
   });
   $('.search__left').click(function (event) {
      $('.search__text').toggleClass('active');
      $('.search__arrow').toggleClass('active');
      $('.search__list').toggleClass('active');
      $('search__list').slideDown();
   });
   $('.header__burger2').click(function (event) {
      $('.menu').toggleClass('close');
      $('.header__burger2').toggleClass('active');
      $('.main').toggleClass('active');
   });
   $('.slider-content-img').click(function (event) {
      $(this).parents('.slider-conten-item').find('.slider-content__text').addClass('active');
      $(this).parents('.slider-conten-item').find('.slider-content__price').addClass('active');
      $(this).parents('.slider-conten-item').find('.slider-info__hover').addClass('active');
   });
   $(".slider-info__hover").click(function (event) {
      $(".slider-info__hover").parents('.slider-conten-item').find('.slider-content__text').removeClass('active');
      $(".slider-info__hover").parents('.slider-conten-item').find('.slider-content__price').removeClass('active');
      $('.slider-info__hover').removeClass('active');
   })

   $('.compare__body').niceScroll({
      emulatetouch: true,
      horizrailenabled: true,
      cursorwidth: 9,
      cursoropacitymin: 1,
      enablemousewheel: false,
      sensitiverail: true,
      background: '#1AB9CE',
      cursorcolor: '#4da0b9',
      cursorborder: 'none',
      cursorborderradius: 0,
      autohidemode: false,
      railvalign: 'top',
   });


   /* 

   */



});

