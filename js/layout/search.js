$(function() {

  //journals search box follows right edge
  if($(window).width() > 959) {
    var right = ($(window).width() - ($('#page-tertiary').offset().left + $('#page-tertiary').outerWidth()));
    $('.checklist .search-box').css('right', right);
    $(window).resize(function(){
      var right = ($(window).width() - ($('#page-tertiary').offset().left + $('#page-tertiary').outerWidth()));
      $('.database.journals .search-box').css('right', right);
    }); 
  }else{
    $('.search-box').css('right', 0);
  }

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
});
