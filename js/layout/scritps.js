/*global $, console */

$(function () {
  'use strict';
  
  var newDate = new Date(),
    newMonth = newDate.getMonth(),
    $form = $("form");
  
  $.validate({
    errorMessageClass: 'error'
  });

  $('[name="recurring-month"] option:eq(' + newMonth + ')').prop('selected', true);

});
