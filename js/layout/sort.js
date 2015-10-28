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




  $('.card-options--detail').on('click', function() {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked').text('List View');
    } else {
      $(this).addClass('checked').text('Detail View');
    };
  });

  // Card Options: Toggle (for 'select all' / 'select none')
  $('.card-options--toggle').on('click', function() {
    if ($('body').hasClass('search')) {
      // Adv. Search functionality
      if ($(this).hasClass('checked')) {
        $(this).removeClass('checked');
        $('.card-checkboxes').addClass('is-collapsed');
      } else {
        $(this).addClass('checked');
        $('.card-checkboxes.is-collapsed').removeClass('is-collapsed');
      }
    } else {
      // Non-Adv.Search functionality
      if ($(this).hasClass('checked')) {
        $(this).removeClass('checked');
        $('.checkbox input').prop('checked', false).parent().removeClass('checked');
      } else {
        $(this).addClass('checked');
        $('.checkbox input').prop('checked', true).parent().addClass('checked');
      }
    };
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
