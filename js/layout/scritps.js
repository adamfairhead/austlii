$(function () {
  'use strict';
  
  var newDate = new Date(),
    newMonth = newDate.getMonth();

  $('[name="recurring-month"] option:eq(' + newMonth + ')').prop('selected', true);

});
