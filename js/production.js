$(function() {
  // Select a panel item
  $('#panels a').on('click', function() {
    $('#panels li').removeClass('is-selected');
    $(this).parent().addClass('is-selected');
  });

  // Select 'Specific Year' panel dropdown
  $('.year-specific-dropdown').on('click', function() {
    if ($(this).hasClass('is-selected')) {
      $(this).removeClass('is-selected');
      $('.year-options').removeClass('is-visible');
    } else {
      $('.year-options').removeClass('is-visible');
      $('.year-specific-options').addClass('is-visible');
      $('.year-range-dropdown-1, .year-range-dropdown-2').removeClass('is-selected');
      $(this).addClass('is-selected');
    }
    return false;
  });

  // Select 'Year Range #1' panel dropdown
  $('.year-range-dropdown-1').on('click', function() {
    if ($(this).hasClass('is-selected')) {
      $(this).removeClass('is-selected');
      $('.year-options').removeClass('is-visible');
    } else {
      $('.year-options').removeClass('is-visible');
      $('.year-range-1-options').addClass('is-visible');
      $('#panel-year .is-selected').removeClass('is-selected');
      $(this).addClass('is-selected');
    }
    return false;
  });

  // Select 'Year Range #2' panel dropdown
  $('.year-range-dropdown-2').on('click', function() {
    if ($(this).hasClass('is-selected')) {
      $(this).removeClass('is-selected');
      $('.year-options').removeClass('is-visible');
    } else {
      $('.year-options').removeClass('is-visible');
      $('.year-range-2-options').addClass('is-visible');
      $('#panel-year .is-selected').removeClass('is-selected');
      $(this).addClass('is-selected');
    }
    return false;
  });

  // Hide the year options dropdown when a year is selected
  $('.year-options a').on('click', function() {
    $('.year-options.is-visible').removeClass('is-visible');
    $('#panel-year a.is-selected').removeClass('is-selected');
  });

  // Move year option selection over to the panel selector
  $('.year-options a').on('click', function() {
    if( $(this).parent().parent().parent().parent().hasClass('year-specific-options') ) {
      $('.year-specific-dropdown').text($(this).text());
    } else if( $(this).parent().parent().parent().parent().hasClass('year-range-1-options') ) {
      $('.year-range-dropdown-1').text($(this).text());
    } else if( $(this).parent().parent().parent().parent().hasClass('year-range-2-options') ) {
      $('.year-range-dropdown-2').text($(this).text());
    };
  });

  // Open option if closed and tab focus
  $(document).keyup(function() {
    if ($('.search-options input').is(":focus")) {
      $('.search-box').addClass('options-visible');
      console.log('true');
    }
  });

  // Set print layout
  $(document).on('click', '.print-special', function() {
    $('body').addClass('special');
    window.print();
    return false;
  });
  $(document).on('click', '.print-minimal', function() {
    $('body').removeClass('special');
    window.print();
    return false;
  });

  // Annual reports dropdown
  $('.annual-reports.is-open').removeClass('is-open');
  $(document).on('click', '.annual-reports-button', function() {
    $('.annual-reports').toggleClass('is-open');
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
  $('#ribbon li a').on('click', function(e) {
    if ($(this).parent().hasClass('is-selected')) {
      $('#panels').removeClass().addClass('is-closed');
      $('#ribbon li').removeClass('is-selected');
      $('.year-options').removeClass('is-visible');
      e.stopPropagation();
    } else {
      $('#ribbon li').removeClass('is-selected');
      $(this).parent().addClass('is-selected');
    };
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

$(function() {
  // Close sort options when you click on the page
  $(document).on('click', function() {
    $('#page-sort').removeClass('options-visible');
  });

  // Show 'more' sort option
  $(document).on('click', '.sort-more', function(e) {
    $('#page-sort').toggleClass('options-visible');
    e.stopPropagation();
  });

  // Select a sort item
  $(document).on('click', '.sort-item', function() {
    $('.sort-item').removeClass('selected');
    $(this).addClass('selected');

    if ($(this).parent('.sort-options').length > 0) {
      $('.sort-more').addClass('selected');
    } else {
      $('.sort-more').removeClass('selected');
    };
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

  $(document).on('click', '.card-title input', function() {
    if ($(this).parent().hasClass('checked')) {
      $(this).parent().parent().parent().find('.card-checkboxes .checkbox').addClass('checked');
    } else {
      $(this).parent().parent().parent().find('.card-checkboxes .checkbox').removeClass('checked');
    };
  });

  $('.card-options--show').on('click', function() {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      $('.card-checkboxes').removeClass('is-collapsed');
    } else {
      $(this).addClass('checked');
      $('.card-checkboxes').addClass('is-collapsed');
    };
    return false;
  });

  $('.card-options--detail').on('click', function() {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked').text('List View');
    } else {
      $(this).addClass('checked').text('Detail View');
    };
  });

  // Card Options: Solo (for non-visual changes)
  $('.card-options--solo').on('click', function() {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
    } else {
      $(this).addClass('checked');
    }
    return false;
  });

  // Narrow Results option for Adv. Search
  $('.search #show-databases').on('click', function(e) {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      $('.card-checkboxes').addClass('is-collapsed');
    } else {
      $(this).addClass('checked');
      $('.card-checkboxes.is-collapsed').removeClass('is-collapsed');
    }
    e.stopPropagation();
    return false;
  });

  // Card Options: Toggle (for 'select all' / 'select none')
  $('.card-options--toggle').on('click', function() {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      $('.checkbox input').prop('checked', false).parent().removeClass('checked');
    } else {
      $(this).addClass('checked');
      $('.checkbox input').prop('checked', true).parent().addClass('checked');
    }
    return false;
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
