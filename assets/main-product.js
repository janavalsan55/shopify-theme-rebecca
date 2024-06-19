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
        arrows: true,
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

    $('.zoomImage').css('transform', 'scale(1)');

    sliderFor.on('wheel', function(e) {
        handleScroll(sliderFor, e);
        $('.zoomimage.zoomed').removeClass('zoomed');
    });

    $('.zoomimage').click(function() {
        $(this).toggleClass('zoomed');
    });

    // Inline style removal
    $('.slick-slide').removeAttr('style');
});




  document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-menu li');

    dropdownButton.addEventListener('click', function() {
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    dropdownItems.forEach(item => {
      item.addEventListener('click', function() {
        const selectedVariantId = this.getAttribute('data-variant-id');
        const selectedVariantTitle = this.querySelector('.swatch-name').textContent;
        
        dropdownButton.textContent = selectedVariantTitle;
        dropdownMenu.style.display = 'none';
        
        // Here, you can add code to update the product image or other details based on the selected variant.
        // For example:
        // updateProductDetails(selectedVariantId);
      });
    });

    document.addEventListener('click', function(event) {
      if (!event.target.closest('.custom-dropdown')) {
        dropdownMenu.style.display = 'none';
      }
    });

    function updateProductDetails(variantId) {
      // Fetch and update product details based on the selected variantId
      // This might involve updating the product image, price, etc.
    }
  });


  