// $(document).ready(function() {
//     // Initialize the slick sliders
//     var sliderFor = $('.slider-for').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         fade: false,
//         asNavFor: '.slider-nav',
//         infinite: false,
//         centerMode: true,
//         centerPadding: '0',
//         vertical: true,
//         verticalSwiping: true,
//         swipeToSlide: true,
//         focusOnSelect: true
//     });

//     var sliderNav = $('.slider-nav').slick({
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         asNavFor: '.slider-for',
//         focusOnSelect: true,
//         arrows: true,
//         prevArrow: '.slick-prev',
//         nextArrow: '.slick-next',
//         infinite: false
//     });

//     // Handle zoom effect on images
//     $('.zoomimage').css('transform', 'scale(1)');

//     sliderFor.on('wheel', function(e) {
//         handleScroll(sliderFor, e);
//         $('.zoomimage.zoomed').removeClass('zoomed');
//     });

//     $('.zoomimage').click(function() {
//         $(this).toggleClass('zoomed');
//     });

//     // Function to handle scroll events on the slider
//     function handleScroll(slider, e) {
//         e.preventDefault();
//         var currentSlide = slider.slick('slickCurrentSlide');
//         var slideCount = slider.slick('getSlick').slideCount;

//         if (e.originalEvent.deltaY < 0) {
//             // Scroll up
//             if (currentSlide > 0) {
//                 slider.slick('slickPrev');
//             }
//         } else {
//             // Scroll down
//             if (currentSlide < slideCount - 1) {
//                 slider.slick('slickNext');
//             }
//         }
//     }

//     // Function to filter images based on the selected variant
//     function filterImgVariant(currentVariantAlt) {
//         const thumbnails = document.querySelectorAll('[thumbnail-alt]');
//         const mainImages = document.querySelectorAll('[mainimage-alt]');

//         thumbnails.forEach(img => {
//             img.style.display = img.getAttribute('thumbnail-alt') === currentVariantAlt ? 'block' : 'none';
//         });

//         mainImages.forEach(img => {
//             img.style.display = img.getAttribute('mainimage-alt') === currentVariantAlt ? 'block' : 'none';
//         });

//         // Refresh sliders to adjust to the updated images
//         sliderNav.slick('refresh');
//         sliderFor.slick('refresh');
//     }

//     // Ensure the event listeners are set up after DOM is fully loaded
//     const dropdownButton = document.querySelector('.dropdown-button');
//     const dropdownMenu = document.querySelector('.dropdown-menu');
//     const dropdownItems = document.querySelectorAll('.dropdown-item');

//     dropdownButton.addEventListener('click', function() {
//         dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
//     });

//     dropdownItems.forEach(item => {
//         item.addEventListener('click', function() {
//             const selectedVariantTitle = this.querySelector('.swatch-name').textContent;
//             dropdownButton.textContent = selectedVariantTitle;
//             dropdownMenu.style.display = 'none';

//             // Update the current variant and filter images
//             filterImgVariant(selectedVariantTitle);
//         });
//     });

//     document.addEventListener('click', function(event) {
//         if (!event.target.closest('.custom-dropdown')) {
//             dropdownMenu.style.display = 'none';
//         }
//     });
// });

$(document).ready(function() {
    // Initialize the slick sliders
    var sliderFor = $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 3,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav',
        infinite: false,
        centerMode: true,
        centerPadding: '0',
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

    // Handle zoom effect on images
    $('.zoomimage').css('transform', 'scale(1)');

    sliderFor.on('wheel', function(e) {
        handleScroll(sliderFor, e);
        $('.zoomimage.zoomed').removeClass('zoomed');
    });

    $('.zoomimage').click(function() {
        $(this).toggleClass('zoomed');
    });

    // Function to handle scroll events on the slider
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

    // Function to filter images based on the selected variant
    function filterImgVariant(currentVariantAlt) {
        const thumbnails = document.querySelectorAll('[thumbnail-alt]');
        const mainImages = document.querySelectorAll('[mainimage-alt]');

        thumbnails.forEach(img => {
            img.style.display = img.getAttribute('thumbnail-alt') === currentVariantAlt ? 'block' : 'none';
        });

        mainImages.forEach(img => {
            img.style.display = img.getAttribute('mainimage-alt') === currentVariantAlt ? 'block' : 'none';
        });

        // Refresh sliders to adjust to the updated images
        sliderNav.slick('refresh');
        sliderFor.slick('refresh');
    }

    // Dropdown menu functionality
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownButton.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const selectedVariantId = this.getAttribute('data-variant-id');
            const selectedVariantTitle = this.querySelector('.swatch-name').textContent;
            dropdownButton.textContent = selectedVariantTitle;
            dropdownMenu.style.display = 'none';

            // Update the current variant and filter images
            filterImgVariant(selectedVariantTitle);

            // Optional: Update other product details
            updateProductDetails(selectedVariantId);
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.custom-dropdown')) {
            dropdownMenu.style.display = 'none';
        }
    });

    function updateProductDetails(variantId) {
        // Fetch variant details and update the product details
        // Example: Update price, SKU, etc.
        // This is just a placeholder and should be implemented according to your specific requirements.
        console.log('Variant ID:', variantId);
        // Example:
        // fetch(`/products/${productHandle}/variants/${variantId}.json`)
        //     .then(response => response.json())
        //     .then(data => {
        //         // Update product details with the data
        //     });
    }
});

