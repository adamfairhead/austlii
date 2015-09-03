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
    if ($('.side-about').hasClass('has-more')) {
      $('.side-about').removeClass('has-more');
      $(this).text('More');
    } else {
      $('.side-about').addClass('has-more');
      $(this).text('Less');
    };
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

  // Overall Select All / Select None toggle  
  $('.select-all-none-overall').on('click', function() {
    var selector = $('.select-all-none-overall');
    var input = $(selector).find('input');
    if ($(selector).hasClass('checked') && $(input.checked)) {
      $(selector).removeClass('checked').find('label').removeClass('checked').find('input').prop('checked', false);
      $('.checkbox input').prop('checked', false).parent().removeClass('checked');
    } else {
      $(selector).addClass('checked').find('label').addClass('checked').find('input').prop('checked', true);
      $('.checkbox input').prop('checked', true).parent().addClass('checked');
    }
  });
});
