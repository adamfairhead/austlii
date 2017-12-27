/*global $, console */

$(function () {
  'use strict';
  
  var newDate = new Date(),
    newMonth = newDate.getMonth(),
    $form = $("form"),
    humanField = $('#human'),
    cap1 = $('.cap1'),
    cap2 = $('.cap2'),
    cap1Val = Math.floor(Math.random() * 9) + 1,
    cap2Val = Math.floor(Math.random() * 9) + 1,
    valNumber = cap1Val + cap2Val;
  
  cap1.text(cap1Val);
  cap2.text(cap2Val);
  humanField.attr('data-validation-captcha', valNumber);
  
  $.validate({
    errorMessageClass: 'error',
    modules : 'security'
  });

  $('[name="recurring-month"] option:eq(' + newMonth + ')').prop('selected', true);
  
  $('.no-js').removeClass('no-js');

});
