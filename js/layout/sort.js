//globals
var switchAll = $('.card-options--toggle'),
  $sortItem,
  sortItemElement = $('.sort-item'),
  type = window.location.hash.substr(1),
  allSection = $('.all-section'),
  tagged = $('.all-section.tag'),
  taggedInput = $('.all-section.tag .card-title input'),
  sortSelect = {
    activate: function (getEl) {
      'use strict';
      $('#page-sort .selected').removeClass('selected').removeClass('disabled');
      getEl.addClass('selected');
      switchAll.addClass('checked');
      $sortItem = getEl.attr('data-sort');
      allSection.addClass('is-hidden').find('.checkbox').removeClass('checked');
      allSection.find('.checkbox input').prop('checked', false);
      $('#' + $sortItem).removeClass('is-hidden');
      $('#' + $sortItem).find('.checkbox').addClass('checked');
      $('#' + $sortItem).find('.checkbox input').prop('checked', true);
      $('.card-title input').removeClass('range-selected');
      taggedInput.addClass('range-selected');
      //setTimeout(function () {   }, 3);
      $(window).scrollTop(0);
    }
  };

$(function () {
  
  if (sortItemElement.length) {
    $(window).scrollTop(0);
  }
  
  // Sort item filtering
  sortItemElement.each(function () {
    
    if ($(this).attr('data-sort') === type) {
      sortSelect.activate($(this));
    }
    
    $(this).on('click', function (e) {
      e.preventDefault();
      sortSelect.activate($(this));
      if ($('#' + $sortItem).hasClass('tag')) {
        var range = $('[data-sort="' + $sortItem + '"] .range-options').val(),
          tag = $('#' + $sortItem + '.tag');
        tag.find('.checkbox').removeClass('checked');
        tag.find('.checkbox input').prop('checked', false);
        tag.find('.' + range + ' .checkbox').addClass('checked');
        tag.find('.' + range + ' .checkbox input').prop('checked', true);
        tag.find('.card-title input').addClass('range-selected').prop('checked', true);
        tag.find('.card-title label').addClass('checked');
      }
      document.location.hash = $sortItem;
      if ($sortItem === undefined) {
        document.location.hash = "";
      }
      $(window).scrollTop(0);
    });

  });
  
  $('.range-options').change(function (e) {
    e.stopPropagation();
    //siblings = $('.range-options option').removeClass('active'),
    var range = $(this).val(),
      parentId = $(this).closest('.sort-item').attr('data-sort'),
      parent = $('#' + parentId);
    parent.addClass('tag');
    parent.find('li').hide();
    parent.find('.checkbox').removeClass('checked');
    parent.find('.checkbox input').prop('checked', false);
    parent.find('.card-title input').addClass('range-selected').prop('checked', true);
    parent.find('.card-title label').addClass('checked');
    parent.find('.' + range).show();
    parent.find('.' + range + ' .checkbox').addClass('checked');
    parent.find('.' + range + ' .checkbox input').prop('checked', true);
    if (range == 'All') {
      parent.find('li').show();
      parent.find('.checkbox').addClass('checked');
      parent.find('.checkbox input').prop('checked', true);
      parent.find('.card-title input').removeClass('range-selected');
    }
  });

  // Sort item "all"
  $('.sort-all').on('click', function () {
    $('.all-section').removeClass('is-hidden');
    $('.all-section.tag').removeClass('tag').find('li').show();
    $('.range-options').val('All');
    if (switchAll.hasClass('checked')) {
      $('.all-section').find(".checkbox").addClass('checked');
      $('.all-section').find(".checkbox input").prop('checked', true);
    }
  });

  //reset select range value on reload
  $('.range-options').val('All');

  // Show 'more' sidebar items
  $('.side-about-more-link').on('click', function () {
    if ($('.side-about').hasClass('has-more')) {
      $('.side-about').removeClass('has-more');
      $(this).text('More...');
    } else {
      $('.side-about').addClass('has-more');
      $(this).text('Less');
    }
  });

  // Card checkboxes using JS so Firefox etc. can see the custom styles
  $('input[type="checkbox"]').parent().addClass('checkbox checked');
  $('input[type="checkbox"]').change(function () {
    if (this.checked) {
      $(this).parent().addClass('checked');
    } else {
      $(this).parent().removeClass('checked');
    }
  });

  $(document).on('click', '.card-title input', function (e) {
    var traverse = $(this).parent().parent().parent().parent(),
      parentId = $(this).closest('.all-section').attr('id'),
      parent = $('#' + parentId),
      range = $('[data-sort="' + parentId + '"] .range-options').val();
    switchAll.removeClass('checked');
    if ($(this).parent().hasClass('checked')) {
      traverse.find('.card-checkboxes .checkbox').removeClass('checked');
      traverse.find('.card-checkboxes .checkbox input').prop('checked', false);
      switchAll.removeClass('checked');
    } else if ($(this).hasClass('range-selected')) {
      parent.find('.checkbox').removeClass('checked');
      parent.find('.checkbox input').prop('checked', false);
      parent.find('.' + range + ' .checkbox').addClass('checked');
      parent.find('.' + range + ' .checkbox input').prop('checked', true);
      parent.find('.card-title input').prop('checked', true);
      parent.find('.card-title label').addClass('checked');
      switchAll.addClass('checked');
    } else {
      traverse.find('.card-checkboxes .checkbox').addClass('checked');
      traverse.find('.card-checkboxes .checkbox input').prop('checked', true);
      switchAll.addClass('checked');
    }
  });

  $('.card-options--show').on('click', function () {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      $('.card-checkboxes').removeClass('is-collapsed');
    } else {
      $(this).addClass('checked');
      $('.card-checkboxes').addClass('is-collapsed');
    }
    return false;
  });

  $('.card-options--detail').on('click', function () {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked').text('List View');
    } else {
      $(this).addClass('checked').text('Detail View');
    }
  });

  // Card Options: Solo (for non-visual changes)
  $('.card-options--solo').on('click', function () {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
    } else {
      $(this).addClass('checked');
    }
    return false;
  });

  // Narrow Results option for Adv. Search
  $('.search #show-databases').on('click', function (e) {
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
  switchAll.on('click', function () {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      $('.checkbox input').prop('checked', false).parent().removeClass('checked');
    } else if ($('.all-section:not(.is-hidden)').hasClass('tag')) {
      var sortItem = $('.all-section:not(.is-hidden)').attr('id'),
        range = $('[data-sort="' + sortItem + '"] .range-options').val();
      $(this).addClass('checked');
      $('.all-section:not(.is-hidden)' + ' .' + range + ' .checkbox input').prop('checked', true).parent().addClass('checked');
    } else {
      $(this).addClass('checked');
      $('.all-section:not(.is-hidden) .checkbox input').prop('checked', true).parent().addClass('checked');
    }
    return false;
  });


  // Sort alphabetically if Letter search
  $('#panel-letter a').on('click', function () {
    if (!$('#page-sort').hasClass('has-special')) {
      $('#page-sort').addClass('has-special').find('.selected').removeClass('selected');
      $('<li class="sort-item sort-special selected"><a href="#">Alphabetically</a></li>').insertBefore('#page-sort .sort-recent');
    }

    if ($(this).parent().hasClass('panel-letter-any')) {
      $('.sort-special').remove();
      $('#page-sort').removeClass('has-special').find('.sort-recent').addClass('selected');
    }
  });

  //show/hide switchers
  $('[data-target]').each(function () {
    $(this).hide();
  });

  $('[data-switch]').on('click', function () {
    var switchTarget = $(this).attr('data-switch');

    $('[data-target="' + switchTarget + '"]').slideDown('fast').addClass('opened');
    $(this).addClass('checked');
    $(this).siblings().removeClass('checked');
  });

  $('[data-close]').on('click', function () {
    var closeTarget = $(this).attr('data-close');

    $(this).addClass('checked');
    $(this).siblings().removeClass('checked');
    if ($('[data-target="' + closeTarget + '"]').hasClass('opened')) {
      $('[data-target="' + closeTarget + '"]').slideUp('fast').removeClass('opened');
    }

  });

  // radio elements
  var radioLabel = $('.radio-options'),
    radioFirst = $('.radio-options:first-child');
  radioLabel.parent().find('input[type="text"]').val('');
  radioFirst.find('input').prop('checked', true);

  radioLabel.on('click', function () {
    var nameTarget = $(this).attr('data-name'),
      siblings = $('[data-name="' + nameTarget + '"]'),
      parent = $(this).parent(),
      textField = $(this).find('input[type="text"]'),
      placeholder = $(this).find('.text-placeholder');

    siblings.removeClass('checked');
    $(this).addClass('checked');
    parent.find('input').prop('checked', false);
    $(this).find('input').prop('checked', true);
    parent.find('input[type="text"]').val('');
    textField.focus();
    parent.find('.text-placeholder').css('display', 'inline');
    placeholder.css('display', 'none');

  });

});
