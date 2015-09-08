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
    return false;
  });

  // Select 'Year Range #1' panel dropdown
  $('.year-range-dropdown-1').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.year-range-1-options').addClass('is-visible');
    $('#panel-year .panel-type-all .is-selected').removeClass('is-selected');
    $(this).addClass('is-selected');
    return false;
  });

  // Select 'Year Range #2' panel dropdown
  $('.year-range-dropdown-2').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.year-range-2-options').addClass('is-visible');
    $('#panel-year .panel-type-all .is-selected').removeClass('is-selected');
    $(this).addClass('is-selected');
    return false;
  });

  // Select 'Date Range #1' panel dropdown
  $('.date-range-dropdown-1').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.date-range-1-options').addClass('is-visible');
    $('#panel-year .panel-type-all .is-selected').removeClass('is-selected');
    $(this).addClass('is-selected').parent().removeClass('is-selected');
    return false;
  });

  // Select 'Date Range #2' panel dropdown
  $('.date-range-dropdown-2').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.date-range-2-options').addClass('is-visible');
    $('#panel-year .panel-type-all .is-selected').removeClass('is-selected');
    $(this).addClass('is-selected').parent().removeClass('is-selected');
    return false;
  });

  // Select 'Date Range #3' panel dropdown
  $('.date-range-dropdown-3').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.year-range-2-options').addClass('is-visible');
    $(this).parent().parent().find('.is-selected').removeClass('is-selected');
    $(this).addClass('is-selected').parent().removeClass('is-selected');
    return false;
  });

  // Hide the year options dropdown when a year is selected
  $('.year-options a').on('click', function() {
    $('.year-options.is-visible').removeClass('is-visible');
    $('#panel-year a.is-selected').removeClass('is-selected');
    return false;
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
  $(document).on('click', '.sort-item', function() {
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

  // Sort alphabetically if Letter search
  $('#panel-letter a').on('click', function() {
    if (!$('#page-sort').hasClass('has-special')) {
      $('#page-sort').addClass('has-special').find('.selected').removeClass('selected');
      $('<li class="sort-item sort-special selected"><a href="#">Alphabetically</a></li>').insertBefore('#page-sort .sort-recent');
    };

    if ($(this).parent().hasClass('panel-letter-any')) {
      $('.sort-special').remove();
      $('#page-sort').removeClass('has-special').find('.sort-recent').addClass('selected');
    }
  });


});
