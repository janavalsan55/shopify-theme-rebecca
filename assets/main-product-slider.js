$(document).ready(function(){
        var sliderFor = $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav',
        infinite: false,
        centerMode: true, 
        centerPadding: 0, 
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        focusOnSelect: true
    });
    
    var sliderNav = $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows:true,
        prevArrow: '.slick-prev', 
        nextArrow: '.slick-next',
        infinite: false 
    });
    $('.slick-nav, .slick-current').css('width', "60px");
    function handleScroll(slider, e) {
        e.preventDefault();
        var currentSlide = slider.slick('slickCurrentSlide');
        var slideCount = slider.slick('getSlick').slideCount;

        if (e.originalEvent.deltaY < 0) {
            // Scroll up
            if (currentSlide > 0) {
                slider.slick('slickPrev');
            }
        } else {
            // Scroll down
            if (currentSlide < slideCount - 1) {
                slider.slick('slickNext');
            }
        }
    }

    sliderFor.on('wheel', function(e) {
        handleScroll(sliderFor, e);
    });


    $('.zoomimage').click(function() {
        $(this).toggleClass('zoomed');
    });

    
});
