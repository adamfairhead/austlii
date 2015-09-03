$(function() {
  // Close sort options when you click on the page
  $(document).on('click', function() {
    $('#page-sort').removeClass('options-visible');
  });

  // Show 'more' sort option
  $('.sort-more').on('click', function(e) {
    $('#page-sort').toggleClass('options-visible');
    e.stopPropagation();
  });

  // Select a sort item
  $('.sort-item').on('click', function() {
    $('.sort-item').removeClass('selected');
    $(this).addClass('selected');
  });

  // Sort item filtering
  $('.sort-item').each(function() {
    var $sortItem = 0;

    $(this).on('click', function() {
      $sortItem = $(this).attr('data-sort');
      $('.all-section').addClass('is-hidden');
      $('#' + $sortItem).removeClass('is-hidden');
    });

  });

  // Sort item "all"
  $('.sort-all').on('click', function() {
    $('.all-section').removeClass('is-hidden');
  });

  // Show 'more' sidebar items
  $('.side-about-more-link').on('click', function() {
    $('.side-about').addClass('has-more');
  });

  // Card checkboxes using JS so Firefox etc. can see the custom styles
  $('input[type="checkbox"]').parent().addClass('checkbox checked');
  $('input[type="checkbox"]').change(function() {
    if(this.checked) {
      $(this).parent().addClass('checked');
    } else {
      $(this).parent().removeClass('checked');
    }
  });

  // Select All / Select None toggle  
  $('.select-all-none input').on('click', function() {
    if (this.checked) {
      $(this).parent().parent().parent().parent().find('.card input').prop('checked', true).parent().addClass('checked');     
    } else {
      $(this).parent().parent().parent().parent().find('.card input').prop('checked', false).parent().removeClass('checked');
    }
  });
});
