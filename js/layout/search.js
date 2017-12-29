var tabnumindex = 0;
var formReload = {
  searchTabbed: function () {
    
    var thisInput = $('.check-inblock').find('input'),
      inblockCheckbox = $('.check-inblock').find('.checkbox');
    
    inblockCheckbox.each(function () {
      var thisInput = $('.check-inblock').find('input:checked');
      
      if (!$(this).hasClass('checked')) {
        $(this).addClass('checked');
      }
    });
    
    thisInput.attr('checked', true);
    
    if ($("#search-tabbed").length > 0){
      $('#search-tabbed')[0].reset();
    }
    
    $('.checkbox').each(function () {
      if(!$(this).hasClass('checked')) {
        $(this).addClass('checked');
      }      
    });
  }
}

$(function() {

  // Show search on mobile
  $('.go-search, .go-primary').on('click', function() {
    $('body').toggleClass('search-is-visible');
  });

  // Hovering on the search box
  $(document).on('mouseover', '.search-box', function() {
    $('.search-box').addClass('hover');
  });
  $(document).on('mouseout', '.search-box', function() {
    $('.search-box').removeClass('hover');
  });
  $(document).on('focus', '#search-box', function() {
    $('.search-box').addClass('focus');
  });
  $(document).on('focusout', '#search-box', function() {
    $('.search-box').removeClass('focus');
  });

  // Clear search box
  if($('#search-box').length > 0) {
    if( $('#search-box').val().length === 0 ) {}else{
      $('.search-box-clear').removeClass('hide');
    };
  };
  $('#search-box').keyup(function() {
    if( $(this).val().length === 0 ) {
      $('.search-box-clear').addClass('hide');
    } else {
      $('.search-box-clear').removeClass('hide');
    };
  });
  $(document).on('click', '.search-box-clear', function() {
    $('#search-box').val('');
    $(this).addClass('hide');
  });

  // Close search options when you click on the page
  $(document).on('click', function() {
    $('.search-box').removeClass('options-visible');
  });

  // Show search options (without closing itself)
  $('.search-dropdown').on('click', function(e) {
    $('.search-box').toggleClass('options-visible');
    e.stopPropagation();
  });

  // Keep search options open when you click on it
  $('.search-options').on('click', function(e) {
    e.stopPropagation();
  });

  // Document page index expand/collapse
  $(document).on('click', '.index-expand', function() {
    $('#page-index').toggleClass('is-expanded');

    if ($(this).parent().parent().hasClass('is-expanded')) {
      $(this).text('Hide');
    } else {
      $(this).text('Show');
    };
  });
   
  //prepare the advanced search js / no js verions method selection 
  $('#search-tabbed #page-sort').prepend('<input type="hidden" name="method" value="autoSearch">');
  $('.no-js-search-method input[checked]').attr('checked', false);
  
  //prepare the advanced search textfield 
  $('[data-type-name]').on('click', function () {
    var nameValue = $(this).data('type-name');
    
    $('[name="method"]').attr('value', nameValue);
  });

  //navigate search-tabbet with tab key
  $(document).bind('keydown', function(event) {
    if(event.keyCode == 9){   
      event.preventDefault();
      if ( tabnumindex <= 6 ) {
        tabnumindex++;
      } else {
        tabnumindex = 0;
        tabnumindex++;
      }
      $('[data-type-name]:nth-of-type(' + tabnumindex + '').last().attr("tabindex",-1).focus();
      $('[data-type-name]:nth-of-type(' + tabnumindex + '').last().click();
    } 
  });

  //tick anything as true by populating any hidden field
  $('[data-type-hidden]').on('click', function () {
    var nameValue = $(this).data('type-hidden');
    
    $('#' + nameValue + '').attr('name', nameValue).val(true);
  });
  
  //tick the check-inblock field
  $('.check-inblock').on('click', function () {
    var thisInput = $(this).find('input:checked');
    
    $(this).find('.checkbox').toggleClass('checked');
    
    if (thisInput.length > 0) {
      thisInput.attr('checked', false);
    } else {
      thisInput.attr('checked', true);
    }
  });
  
  //uncheck off all the inputs that were unchecked by the user
  var unchecked = $('input[type="checkbox"]:not(:checked)').parents('label').removeClass('checked');
  
  //reset tabbed form on reset button click - the reset tabbed form on load was commented out because it clashes with browsers' native functionality where hitting the back button will preserve data
  //formReload.searchTabbed();
  
  $('#search-reset').on('click', function () {
    formReload.searchTabbed();
  });
});
