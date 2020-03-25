$(document).ready(function() {

$('.Portfolio').on('click', function(){
    $('body,html').animate({
      scrollTop: $('#Portfolio').offset().top
    }, 600);
  });
$('.Blog').on('click', function(){
    $('body,html').animate({
      scrollTop: $('#Blog').offset().top
    }, 600);
  });
$('.Pages').on('click', function(){
    $('body,html').animate({
      scrollTop: $('#Pages').offset().top
    }, 600);
  });
$('.Features').on('click', function(){
    $('body,html').animate({
      scrollTop: $('#Features').offset().top
    }, 600);
  });
$('.Contact').on('click', function(){
    $('body,html').animate({
      scrollTop: $('#Contact').offset().top
    }, 600);
  });
$('#button').on('click', function(){
    $('body,html').animate({
      scrollTop:0
    }, 300);
  });
$(window).scroll(function() {
  if ($(this).scrollTop() > 1200) {
    $('.button').fadeIn()
  }
  else{
    $('.button').fadeOut();
  };
});
var win = $(window).innerHeight(),
    media = $('.mediaa').innerHeight(),
    navs = $('.navs').innerHeight();
    $('.slider').height(win - ( media + navs));


    $('.toggle').click(function() {
        $('.menu').toggleClass('active');
    });
    $('.toggle').click(function() {
        $('nav').toggleClass('active');

    });
   
     var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
     AOS.init({
  duration: 1200,
})

})