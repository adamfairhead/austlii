$(function () {
  
  if (location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 0);
  }
  
   setTimeout(function() {
      //$('body').removeClass('is-hidden');
    }, 30);
  
  $('body').removeClass('no-js');

  $('.contribute header').on('click', function () {
    $(this).toggleClass('image-on');
  });

});
