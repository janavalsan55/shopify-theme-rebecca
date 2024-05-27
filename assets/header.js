
    $(document).ready(function() {
        $('.mega-menu-content').hide();
        $('.mega-menu').hover( function() {
            $(this).find('.mega-menu-content').stop(true, true).slideDown();
          },
          function() {
            $(this).find('.mega-menu-content').stop(true, true).slideUp();
          }
        );
      });
