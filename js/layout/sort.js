//globals
var switchAll = $('.card-options--toggle');
var $sortItem;
var sortItemElement = $('.sort-item');
var type = window.location.hash.substr(1);
var allSection = $('.all-section');
var tagged = $('.all-section.tag');
var taggedInput = $('.all-section.tag .card-title input');
var sortTarget = $('.sort-url');
var sortSelect = {
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
  },
  targetTab: function (getEl) {
    'use strict';
    if (sortTarget.length) {
      sortItemElement.removeClass('is-loading');
      getEl.addClass('is-loading');
    }
  }
};

$(function () {
  
  if(sortItemElement.length === 0 && window.location.hash) {
    var scrollTo = window.location.hash;
    $('html,body').animate({scrollTop:$('' + scrollTo + '').offset().top}, 600);
  }
  
  //cleanup on page load
  sortItemElement.removeClass('is-loading');
  
  // Sort item filtering
  sortItemElement.each(function () {
    
    if ($(this).attr('data-sort') === type) {
      sortSelect.activate($(this));
    }

    $(this).on('click', function (e) {
      e.preventDefault();
      sortSelect.activate($(this));
      sortSelect.targetTab($(this));
      if ($('#' + $sortItem).hasClass('tag')) {
        var range = $('[data-sort="' + $sortItem + '"] .range-options').val();
        var tag = $('#' + $sortItem + '.tag');
        var allSelect = $('.range-options').val();
        if ( allSelect !== 'All') {
          tag.find('.checkbox').toggleClass('checked');
          tag.find('.checkbox input').prop('checked', false);
          tag.find('.' + range + ' .checkbox').addClass('checked');
          tag.find('.' + range + ' .checkbox input').prop('checked', true);
          tag.find('.card-title input').addClass('range-selected').prop('checked', true);
          tag.find('.card-title label').addClass('checked');
        }      
      }
      var pathname = window.location.pathname;
      var historyHash;
      if ($sortItem === undefined) {
        historyHash = pathname;
      } else {
        historyHash = pathname + '#' + $sortItem;
      }
      history.pushState(null, null, historyHash);
      $(window).scrollTop(0);
    });

  });
  
  //check for unchecked elements and uncheck the toggler if they exist
  if($('input[type="checkbox"]:not(:checked)').length >= 1){
    switchAll.removeClass('checked');
  }
  
  $('.range-options').change(function (e) {
    e.stopPropagation();
    var range = $(this).val();
    var parentId = $(this).closest('.sort-item').attr('data-sort');
    var parent = $('#' + parentId);
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
  
  //Hide and Show more sidebar list elements
  var sideList = $('[data-expand-after]');
  
  sideList.each(function () {
    var sideListElThis = $(this).find('li');
    var sideListShowLength = parseInt($(this).attr('data-expand-after'), 10) + 1;
    var sideListElOver = $(this).find('li:nth-child(n+' + sideListShowLength + ')');
    sideListElOver.addClass('hide');
    if (sideListElThis.length > sideListShowLength - 1) {
      $(this).after('<span data-show="Less" class="hide">Less</span>');
      $(this).after('<span data-show="More">More</span>');
    }
  
    $(this).next($('[data-show="More"]')).on('click', function () {
      $(this).parent().find('ul li.hide').removeClass('hide');
      $(this).addClass('hide');
      $(this).next($('[data-show="Less"]')).removeClass('hide');
    });

    $(this).next().next($('[data-show="Less"]')).on('click', function () {
      $(this).parent().find('ul li:nth-child(n+' + sideListShowLength + ')').addClass('hide');
      $(this).addClass('hide');
      $(this).parent().find($('[data-show="More"]')).removeClass('hide');
    });
  });


  // Card checkboxes using JS so Firefox etc. can see the custom styles
  $('input[type="checkbox"]').parent().addClass('checkbox');
  $('input[type="checkbox"]:checked').parent().addClass('checked');
  $('input[type="checkbox"]').change(function () {
    if (this.checked) {
      $(this).parent().addClass('checked');
    } else {
      $(this).parent().removeClass('checked');
    }
  });

  $(document).on('click', '.card-title input', function (e) {
    var parent = $(this).closest('.all-section');
    var parentId = parent.attr('id');
    var range = $('[data-sort="' + parentId + '"] .range-options').val();
    switchAll.removeClass('checked');
    if ($(this).parent().hasClass('checked')) {
      parent.find('.card-checkboxes .checkbox').removeClass('checked');
      parent.find('.card-checkboxes .checkbox input').prop('checked', false);
      switchAll.removeClass('checked');
    } else if ($(this).hasClass('range-selected')) {
      parent.find('.checkbox').removeClass('checked');
      parent.find('.checkbox input').prop('checked', false);
      parent.find(' .checkbox').addClass('checked');
      parent.find('.' + range + ' .checkbox input').prop('checked', true);
      parent.find('.card-title input').prop('checked', true);
      parent.find('.card-title label').addClass('checked');
      switchAll.addClass('checked');
    } else {
      parent.find('.card-checkboxes .checkbox').addClass('checked');
      parent.find('.card-checkboxes .checkbox input').prop('checked', true);
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
  
  var listCollapse = {
    setHeight: function () {
      var $this = $('.card-checkboxes.is-collapsed');
      var getFullHeight = parseInt($this.data('items-shown'));
      var getChildHeight = $this.find('li').outerHeight() + 1;
      var setHeight = (getFullHeight * getChildHeight) + 'px';
      $this.css('max-height', setHeight);
    }
  }

  // Set shown items number for Adv. Search
  $('.card-checkboxes.is-collapsed').each(function () {
    listCollapse.setHeight();
  });

  // Narrow Results option for Adv. Search
  $('.search #show-databases').on('click', function (e) {
    
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      $('.card-checkboxes').addClass('is-collapsed');
      listCollapse.setHeight();
    } else {
      $(this).addClass('checked');
      $('.card-checkboxes.is-collapsed').removeClass('is-collapsed').css('max-height', '');
    }
    e.stopPropagation();
    return false;
  });

  // Card Options: Toggle (for 'select all' / 'select none')
  switchAll.on('click', function () {
    var tag = $('#' + $sortItem + '.tag');
    
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      $('.checkbox input').prop('checked', false).parent().removeClass('checked');
    } else if ($('.all-section:not(.is-hidden)').hasClass('tag')) {
      var sortItem = $('.all-section:not(.is-hidden)').attr('id');
      var range = $('[data-sort="' + sortItem + '"] .range-options').val();
      $(this).addClass('checked');
      $('.all-section:not(.is-hidden)' + ' .checkbox input').prop('checked', true).parent().addClass('checked');
      tag.find('.card-title input').addClass('range-selected').prop('checked', true);
      tag.find('.card-title label').addClass('checked');
    } else {
      $(this).addClass('checked');
      $('.all-section:not(.is-hidden) .checkbox input').prop('checked', true).parent().addClass('checked');
      tag.find('.card-title input').addClass('range-selected').prop('checked', true);
      tag.find('.card-title label').addClass('checked');
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
  var radioLabel = $('.radio-options');
  var radioFirst = $('.radio-options:first-child');
  var identifier = $('[data-open-trigger]').data('open-trigger');
  radioLabel.parent().find('input[type="text"]').val('');
  radioFirst.find('input').prop('checked', true);

  radioLabel.on('click', function () {
    var nameTarget = $(this).attr('data-name');
    var siblings = $('[data-name="' + nameTarget + '"]');
    var parent = $(this).parent();
    var textField = $(this).find('input[type="text"]');
    var placeholder = $(this).find('.text-placeholder');

    siblings.removeClass('checked');
    $(this).addClass('checked');
    parent.find('input').prop('checked', false);
    $(this).find('input').prop('checked', true);
    parent.find('input[type="text"]').val('');
    textField.focus();
    parent.find('.text-placeholder').css('display', 'inline');
    placeholder.css('display', 'none');
    
    if ($('[data-open-trigger="' + identifier + '"]').hasClass('checked')) {
      $('[data-open-target="' + identifier + '"]').addClass('is-opened');
    } else {
      $('[data-open-target="' + identifier + '"]').removeClass('is-opened');
    }
  });

});
