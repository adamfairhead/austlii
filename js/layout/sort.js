$(function() {
  // Sort item filtering
  $('.sort-item').each(function() {
    var $sortItem = 0;

    $(this).on('click', function() {
      var allSection = $('.all-section')
          tagged = $('.all-section.tag'),
          taggedInput = $('.all-section.tag .card-title input');
      $('#page-sort .selected').removeClass('selected').removeClass('disabled');
      $(this).addClass('selected');
      $sortItem = $(this).attr('data-sort');
      allSection.addClass('is-hidden').find('.checkbox').removeClass('checked');
      $('.sort-item').find('.range-options option').removeClass('active');
      $('#' + $sortItem).removeClass('is-hidden');
      $('#' + $sortItem).find(".checkbox").addClass('checked');
      $('.card-title input').removeClass('range-selected');
      taggedInput.addClass('range-selected');
      //$('.range-options option').removeClass('active');
      //if ($('#' + $sortItem).hasClass('tag')) {  }
    });

  });

  $('.range-options option').on('click', function(e){
    e.stopPropagation();
    var siblings = $('.range-options option').removeClass('active'),
        range = $(this).attr('data-range'),
        parentId = $(this).closest('.sort-item').attr('data-sort'),
        parent = $('#' + parentId);
    $(this).addClass('active');
    parent.addClass('tag');
    parent.find('li').hide();
    parent.find('.checkbox').removeClass('checked');
    parent.find('.checkbox input').prop('checked', false);
    parent.find('.card-title input').addClass('range-selected').prop('checked', true);
    parent.find('.card-title label').addClass('checked');
    parent.find('.' + range).show();
    parent.find('.' + range + ' .checkbox').addClass('checked');
    parent.find('.' + range + ' .checkbox input').prop('checked', true);
    if(range == 'all'){
      parent.find('li').show();
      parent.find('.checkbox').addClass('checked');
      parent.find('.checkbox input').prop('checked', true);
      parent.find('.card-title input').removeClass('range-selected');
    }
  });

  // Sort item "all"
  $('.sort-all').on('click', function() {
    $('.all-section').removeClass('is-hidden');
    if($('.card-options--toggle').hasClass('checked')) {
    $('.all-section').find(".checkbox").addClass('checked');   
    }
  });

  // Show 'more' sidebar items
  $('.side-about-more-link').on('click', function() {
    if ($('.side-about').hasClass('has-more')) {
      $('.side-about').removeClass('has-more');
      $(this).text('More...');
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

  $(document).on('click', '.card-title input', function(e) {
    var traverse = $(this).parent().parent().parent().parent(),
        parentId = $(this).closest('.all-section').attr('id'),
        parent = $('#' + parentId),
        range = $('[data-sort="' + parentId + '"] option.active').attr('data-range');
    if ($(this).parent().hasClass('checked')) {
      traverse.find('.card-checkboxes .checkbox').removeClass('checked');
      traverse.find('.card-checkboxes .checkbox input').prop('checked', false);
    } else if ($(this).hasClass('range-selected')){
      parent.find('.checkbox').removeClass('checked');
      parent.find('.checkbox input').prop('checked', false);
      parent.find('.' + range + ' .checkbox').addClass('checked');
      parent.find('.' + range + ' .checkbox input').prop('checked', true);
      parent.find('.card-title input').prop('checked', true);
      parent.find('.card-title label').addClass('checked');
    }else {
      traverse.find('.card-checkboxes .checkbox').addClass('checked');
      traverse.find('.card-checkboxes .checkbox input').prop('checked', true);
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
