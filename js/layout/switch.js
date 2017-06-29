$(function () {
  
  if (location.hash) {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);
  }
  
  $('body').removeClass('no-js');
  
  $('[data-method="method1"]').on('click', function () {
    $('.meta-method').text('Pressing continue will take you to an online payment gateway.');
    if ($('.contribute-cards').hasClass("hidden")) {
      $('.contribute-cards').removeClass('hidden');
    }
  });
  
  $('[data-method="method2"]').on('click', function () {
    $('.meta-method').text('Payable to "AustLII Foundation Limited" (ABN 41 134 717 972).');
    if (!$('.contribute-cards').hasClass("hidden")) {
      $('.contribute-cards').addClass('hidden');
    }
  });
  
  $('[data-method="method3"]').on('click', function () {
    $('.meta-method').text('An invoice will be sent to the above adress.');
    if (!$('.contribute-cards').hasClass("hidden")) {
      $('.contribute-cards').addClass('hidden');
    }
  });

});
