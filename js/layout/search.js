$(function() {
  // Show search on mobile
  $('.go-search, .go-primary').on('click', function() {
    $('#page-header').toggleClass('search-is-visible');
  });

  // Show search options
  $('.search-dropdown').on('click', function() {
    $('.search-box').toggleClass('options-visible');
  });
});
