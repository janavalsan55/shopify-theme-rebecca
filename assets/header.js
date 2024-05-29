$(document).ready(function() {
  $('.mega-menu-content').hide();
  $('.mega-menu').hover(
      function() {
          $(this).find('.mega-menu-content').stop(true, true).fadeIn();
      },
      function() {
          $(this).find('.mega-menu-content').stop(true, true).fadeOut();
      }
  );
});
