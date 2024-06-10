$(document).ready(function(){
  var sliderFor = $('.slider-for').slick({
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  var sliderNav = $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true
  });

  sliderFor.on('wheel', function(e) {
    e.preventDefault();
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  });
});