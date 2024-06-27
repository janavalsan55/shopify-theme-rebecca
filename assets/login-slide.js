$(document).ready(function(){
    $('.userformlogin').addClass('visible');
  $('.create').click(function () {
      $('.userformlogin').removeClass('visible');
      $('.userformsignup').addClass('visible');
  });

  $('.loginbt').click(function () {
      $('.userformsignup').removeClass('visible');
      $('.userformlogin').addClass('visible');
  });
});



  