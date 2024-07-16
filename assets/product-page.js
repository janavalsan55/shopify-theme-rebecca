$(document).ready(function(){
  $('.product-pg-slider').slick({
    infinite: false,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.pslick-prev',
    nextArrow: '.pslick-next',
    mobileFirst:true,//add this one
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
        }
      }
    ]
  });
  

  // dropdown slide animation
  $('.selected-swatch').click(function() {
    $('.swatcher').slideToggle(300);
    $(this).toggleClass("active");
  });

});



