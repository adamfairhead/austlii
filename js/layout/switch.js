$(function () {
  
  if (location.hash) {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);
  }
  
  setTimeout(function () {
      //$('body').removeClass('is-hidden');
  }, 30);
  
  $('body').removeClass('no-js');
  
  $('[data-method="method1"]').on('click', function () {
    $('.meta-method').text('Pressing continue will take you to an online payment gateway.');
  });
  
  $('[data-method="method2"]').on('click', function () {
    $('.meta-method').text('Payable to "AustLII Foundation Limited" (ABN 41 134 717 972).');
  });
  
  $('[data-method="method3"]').on('click', function () {
    $('.meta-method').text('An invoice will be sent to the above adress.');
  });

});
