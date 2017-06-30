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
  
  //advanced search textfield 
  $('[data-type-name]').on('click', function () {
    var nameValue = $(this).data('type-name');
    
    $('[name="method"]').attr('value', nameValue);
  });
  
  //tick anything as true by populating any hidden field
  $('[data-type-hidden]').on('click', function () {
    var nameValue = $(this).data('type-hidden');
    
    $('#' + nameValue + '').attr('name', nameValue).val(true);
  });
  
  //reset tabbed form
  $('#search-reset').on('click', function () {
    $('#search-tabbed')[0].reset();
    
    $('.checkbox').each(function () {
      if(!$(this).hasClass('checked')) {
        console.log('pig');
        $(this).addClass('checked');
      }      
    });
  });
});
