$(function() {
  // Select a panel item
  $('#panels a').on('click', function() {
    $('#panels li').removeClass('is-selected');
    $(this).parent().addClass('is-selected');
  });

  // Select 'Specific Year' panel dropdown
  $('.year-specific-dropdown').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.year-specific-options').addClass('is-visible');
    $('.year-range-dropdown-1, .year-range-dropdown-2').removeClass('is-selected');
    $(this).addClass('is-selected');
  });

  // Select 'Year Range #1' panel dropdown
  $('.year-range-dropdown-1').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.year-range-1-options').addClass('is-visible');
    $('.year-specific-dropdown, .year-range-dropdown-2').removeClass('is-selected');
    $(this).addClass('is-selected');
  });

  // Select 'Year Range #2' panel dropdown
  $('.year-range-dropdown-2').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.year-range-2-options').addClass('is-visible');
    $('.year-specific-dropdown, .year-range-dropdown-1').removeClass('is-selected');
    $(this).addClass('is-selected');
  });

  // Hide the year options dropdown when a year is selected
  $('.year-options a').on('click', function() {
    $('.year-options.is-visible').removeClass('is-visible');
    $('#panel-year a.is-selected').removeClass('is-selected');
  });
});

$(function() {
  // Make fill in left-space on ribbon if first is highlighted
  $('.ribbon-type').hover(function() {
    $('#ribbon').addClass('first-hovered');
  }, function() {
    $('#ribbon').removeClass('first-hovered');
  });

  // Make fill in left-space on ribbon if first is selected
  $('#ribbon a').on('click', function() {
    $('#ribbon').removeClass('first-selected');
  });
  $('.ribbon-type').on('click', function() {
    $('#ribbon').addClass('first-selected');
  });

  // Select a ribbon item
  $('#ribbon li a').on('click', function() {
    $('#ribbon li').removeClass('is-selected');
    $(this).parent().addClass('is-selected');
  });

  // Select 'Type' ribbon item
  $('.ribbon-type').on('click', function() {
    $('#panels').removeClass().addClass('is-type');
    $('.year-options').removeClass('is-visible');
    $('#panel-year .is-selected').removeClass('is-selected');
  });

  // Select 'Jurisdiction' ribbon item
  $('.ribbon-jurisdiction').on('click', function() {
    $('#panels').removeClass().addClass('is-jurisdiction');
    $('.year-options').removeClass('is-visible');
    $('#panel-year .is-selected').removeClass('is-selected');
  });

  // Select 'Year' ribbon item
  $('.ribbon-year').on('click', function() {
    $('#panels').removeClass().addClass('is-year');
  });

  // Select 'Letter' ribbon item
  $('.ribbon-letter').on('click', function() {
    $('#panels').removeClass().addClass('is-letter');
    $('.year-options').removeClass('is-visible');
    $('#panel-year .is-selected').removeClass('is-selected');
  });
});

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

$(function() {
  // Show 'more' sort option
  $('.sort-more').on('click', function() {
    $('#page-sort').toggleClass('options-visible');
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

  $('.radio input').change(function() {
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
