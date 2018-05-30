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
    modules : 'security',
    validateOnBlur : false,
  });

  $('[name="recurring-month"] option:eq(' + newMonth + ')').prop('selected', true);
  
  $('.no-js').removeClass('no-js');

});

var $document = $(document);

$document.ready(function () {
  'use strict';
  
  var annContWidth = $('.announcement-content').width() / 2,
    annHeight = $('.announcement-top').outerHeight(),
    ifWasSet = localStorage.announcement;
  
  //get random number out of range, show element if one number from the range is picked out
  $('[data-random]').each(function () {
    var range = $(this).data('random'),
      rangeVal = Math.floor((Math.random() * range) + 1);
    
    if (rangeVal !== 1) {
      $(this).remove();
    }
  });

  $document.on('keydown', 'select', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (document.createEvent) {
        var e = document.createEvent('MouseEvents');
        e.initMouseEvent('mousedown', true, true, window);
        this.dispatchEvent(e);
      } else if (element.fireEvent) { // ie
        this.fireEvent('onmousedown');
      }
    }
  });

  if ($('.announcement-container').length) {
    
    $('body').addClass('has-announcement');
    $('#page-tertiary').css('top', annHeight);
    
    if (ifWasSet === 'hide') {
      $('.announcement-container').remove();
      $('#page-tertiary').removeAttr('style');
      $('body').removeClass('has-announcement');
    }
  }
  
  $('.announcement-close').css('transform', 'translateX(' + annContWidth + 'px)');
  
  $('.announcement-close').on('click', function (e) {
    e.stopImmediatePropagation();
    $('.announcement-container').remove();
    $('body').removeClass('has-announcement');
    $('#page-tertiary').css('top', '-2px');
    localStorage.setItem('announcement', 'hide');
  });

  $('.form-remove-query-duplicates').on('submit', function (e) {
    var $this = $(this);
    if ($this.attr('method') != null && $this.attr('method').toLowerCase !== 'get') {
      return;
    }
    e.preventDefault();

    var queryString = $this.serialize();
    queryString = $.unique(queryString.split('&')).join('&');

    window.location.href = $this.prop('action') + '?' + queryString;
  });
});
