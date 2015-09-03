$(function() {
  // Show search on mobile
  $('.go-search, .go-primary').on('click', function() {
    $('#page-header').toggleClass('search-is-visible');
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
});
