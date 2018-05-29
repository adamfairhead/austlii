'use strict';
$(function () {
  var switchAll = $('.card-options--toggle');
  var $sortItem;
  var sortItemElement = $('.sort-item');
  var type = window.location.hash.substr(1);
  var allSection = $('.all-section');
  var tagged = allSection.filter('.tag');
  var taggedInput = tagged.find('.card-title input');
  var sortTarget = $('.sort-url');
  var rangeOptions = $('.range-options');
  var cardCheckboxes = $('.card-checkboxes');
  var sortSelect = {
    activate: function (getEl) {
      $('#page-sort .selected').removeClass('selected disabled').attr('aria-selected', false).attr('tabindex', 0);
      getEl.addClass('selected').attr('aria-selected', true).attr('tabindex', -1).blur();
      switchAll.addClass('checked');
      $sortItem = getEl.attr('data-sort');
      allSection.addClass('is-hidden');
      $('.card-title input').removeClass('range-selected');
      taggedInput.addClass('range-selected');
      

      if ($sortItem === undefined) {
        allSection.removeClass('is-hidden')
          .find('.tag').removeClass('tag')
          .find('li').show();
        rangeOptions.val('All');
        if (switchAll.hasClass('checked')) {
          setCheckbox(allSection.find('.checkbox'));
        }
      } else {
        var section = $('#' + $sortItem);
        section.removeClass('is-hidden');
        var options = getEl.find('.range-options');
        if (options.length > 0 && options.val() !== 'All') {
          section.find('.card-title input').addClass('range-selected');
        }
        setCheckbox(allSection.find('.checkbox'), false);
        setCheckbox(section.find('.card-title .checkbox'));
      }
    },
    targetTab: function (getEl) {
      if (sortTarget.length) {
        sortItemElement.removeClass('is-loading');
        getEl.addClass('is-loading');
      }
    }
  };
  var getAllCheckboxGroupElements = function (groups) {
    var $array = $([]);
    groups.split(' ').forEach(function (group) {
      $array = $array.add($('input[type="checkbox"][data-checkbox-group~="'+ group +'"]').parent());
    });
    return $array;
  };
  var getArrayCheckboxGroupElements = function (groups) {
    var groupsObj = {};
    groups.split(' ').forEach(function (group) {
      groupsObj[group] = $('input[type="checkbox"][data-checkbox-group~="'+ group +'"]').parent();
    });
    return groupsObj;
  };
  var setCheckbox = function ($checkbox, value, forceTrigger) {
    if (value == null) {
      value = true;
    }
    
    if (forceTrigger == null) {
      forceTrigger = false;
    }

    var input;

    if (value) {
      $input = $checkbox.find('input:not(:checked)');
    } else {
      $input = $checkbox.find('input:checked');
    }

    if (forceTrigger) {
      $checkbox.find('input').trigger('change');
    } else {
      $input.prop('checked', value).trigger('change');
    }
  }
  var updateCheckboxGroupControls = function ($checkbox) {
    $checkbox.each(function () {
      var $this = $(this);
      var groupsString = $this.data('checkbox-group');
      if (groupsString) {
        var groups = getArrayCheckboxGroupElements(groupsString);

        Object.keys(groups).forEach(function (group) {
          var $checked = groups[group].find('input:checked');
          var $semiChecked = groups[group].filter('.semi-checked');
          var $groupControlsInput = $('input[type="checkbox"][data-checkbox-group-control~="'+ group +'"]');
          var $groupControls = $groupControlsInput.parent();
          if ($checked.length > 0 || $semiChecked.length > 0) {
            if (groups[group].length !== $checked.length) {
              $groupControls.addClass('semi-checked').removeClass('checked');
              setCheckbox($groupControls, false);
            } else {
              $groupControls.removeClass('semi-checked');
              setCheckbox($groupControls, true);
            }
          } else {
            $groupControls.removeClass('semi-checked');
            setCheckbox($groupControls, false);
          }

          updateCheckboxGroupControls($groupControlsInput);
        });
      }
    });
  };
  
  if(sortItemElement.length === 0 && window.location.hash) {
    var scrollTo = window.location.hash;
    $('html,body').animate({scrollTop:$('' + scrollTo + '').offset().top}, 600);
  }
  
  //cleanup on page load
  sortItemElement.removeClass('is-loading');

  var handleUrl = function (preloaded) {
    var sortItem = window.location.hash.substr(1);
    var tab;
    if (sortItem !== '') {
      tab = sortItemElement.filter('[data-sort="'+ sortItem +'"]');
    } else {
      tab = sortItemElement.filter(':not([data-sort])').first();
      allSection.removeClass('is-hidden')
        .filter('.tag').removeClass('tag')
        .find('li').show();
    }

    sortSelect.activate(tab);

    if (!preloaded) {
      sortSelect.targetTab(tab);
    }
  };

  window.onhashchange = handleUrl;
  
  // Sort item filtering
  sortItemElement.each(function () {
    var $this = $(this);

    var handleSelection = (function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($(e.target).hasClass('range-options')) {
        return;
      }

      var pathname = window.location.pathname;
      var sortItem = $this.attr('data-sort');
      if (sortItem !== $sortItem) {
        var historyHash;
        if (sortItem === undefined) {
          historyHash = pathname;
        } else {
          historyHash = pathname + '#' + sortItem;
        }
        history.pushState(null, null, historyHash);
      }
      sortSelect.activate($this);
      sortSelect.targetTab($this);
      $(window).scrollTop(0);
    }).bind(this);

    $this.on('click', handleSelection);

    $this.on('keydown', function (e) {
      if ([32, 13].indexOf(e.keyCode) !== -1) {
        e.preventDefault();
        handleSelection(e);
      }
    });

  });
  
  //check for unchecked elements and uncheck the toggler if they exist
  if($('input[type="checkbox"]:not(:checked)').length >= 1){
    switchAll.removeClass('checked');
  }
  
  rangeOptions.change(function (e) {
    e.stopPropagation();
    var $this = $(this);
    var parentId = $this.closest('.sort-item').attr('data-sort');
    var parent = $('#' + parentId);
    parent.addClass('tag');
    var cardTitle = parent.find('.card-title');
    cardTitle.find('input').addClass('range-selected');
    parent.find('li').show();
    if ($this.val() == 'All') {
      cardTitle.find('input').removeClass('range-selected');
    } else {
      parent.find('li:not(.' + $this.val() + ')').hide();
    }
    setCheckbox(cardTitle.find('label'), true, true);
  });

  // Sort item "all"
  $('.sort-all').on('click', function () {
    allSection.removeClass('is-hidden')
      .filter('.tag').removeClass('tag')
      .find('li').show();
    rangeOptions.val('All');
    if (switchAll.hasClass('checked')) {
      setCheckbox(allSection.find('.checkbox'));
    }
  });

  //reset select range value on reload
  rangeOptions.val('All');

  // Show 'more' sidebar items
  $('.side-about-more-link').on('click', function () {
    var $this = $(this);
    if ($('.side-about').hasClass('has-more')) {
      $('.side-about').removeClass('has-more');
      $this.text('More...');
    } else {
      $('.side-about').addClass('has-more');
      $this.text('Less');
    }
  });
  
  //Hide and Show more sidebar list elements
  var sideList = $('[data-expand-after]');
  
  sideList.each(function () {
    var $this = $(this);
    var sideListElThis = $this.find('li');
    var sideListShowLength = parseInt($this.attr('data-expand-after'), 10) + 1;
    var sideListElOver = $this.find('li:nth-child(n+' + sideListShowLength + ')');
    sideListElOver.addClass('hide');
    if (sideListElThis.length > sideListShowLength - 1) {
      $this.after('<span data-show="Less" class="hide">Less</span>');
      $this.after('<span data-show="More">More</span>');
    }
  
    $this.next($('[data-show="More"]')).on('click', function () {
      var $this = $(this);
      $this.parent().find('ul li.hide').removeClass('hide');
      $this.addClass('hide');
      $this.next($('[data-show="Less"]')).removeClass('hide');
    });

    $this.next().next($('[data-show="Less"]')).on('click', function () {
      var $this = $(this);
      $this.parent().find('ul li:nth-child(n+' + sideListShowLength + ')').addClass('hide');
      $this.addClass('hide');
      $this.parent().find($('[data-show="More"]')).removeClass('hide');
    });
  });


  // Card checkboxes using JS so Firefox etc. can see the custom styles
  var checkbox = $('input[type="checkbox"]');
  var checkboxParent = checkbox.parent();
  checkboxParent.addClass('checkbox');
  checkbox.filter(':checked').parent().addClass('checked');
  
  updateCheckboxGroupControls(checkbox);

  checkbox.change(function (e) {
    var $this = $(this);
    var $parent = $this.parent();

    updateCheckboxGroupControls($this);

    if (this.checked) {
      if ($parent.hasClass('checkbox-group')) {
        if ($parent.hasClass('semi-checked')) {
          function deselect($this) {
            var $toUpdate = getAllCheckboxGroupElements($this.data('checkbox-group-control'));
            setCheckbox($toUpdate, false);
            $parent.removeClass('semi-checked');
            this.checked = false;
            
            $toUpdate.filter('.semi-checked').find('input').each(function () {
              deselect($(this));
            });
          }

          deselect($this);
        } else {
          var $toUpdate = getAllCheckboxGroupElements($this.data('checkbox-group-control'));
          setCheckbox($toUpdate);
          $parent.addClass('checked');
        }
      } else {
        $parent.addClass('checked');
      }
    } else {
      if ($parent.hasClass('semi-checked')) {
        e.preventDefault();
        return;
      }

      if ($parent.hasClass('checkbox-group')) {
        var $toUpdate = getAllCheckboxGroupElements($this.data('checkbox-group-control'));
        setCheckbox($toUpdate, false);
      }
      $parent.removeClass('checked');
    }

    if (this.value !== 'on') {
      setCheckbox($this.parents('form').find('input[type="checkbox"][name="'+ this.name +'"][value="'+ this.value +'"]').parent(), this.checked);
    }
  });

  checkboxParent.on('keydown', function (e) {
    if ([32, 13].indexOf(e.keyCode) !== -1) {
      e.preventDefault();
      $(this).find('input').click();
    }
  });

  checkboxParent.filter('.checkbox-group').each(function () {
    var $checkbox = $(this);

    $checkbox.parents('form').on('reset', function () {
      if ($checkbox.find('input')[0].checked) {
        $checkbox.removeClass('semi-checked').addClass('checked');
      } else {
        $checkbox.removeClass('checked semi-checked');
      }

      updateCheckboxGroupControls(checkbox);
    });
  });

  $(document).on('change', '.card-title input', function (e) {
    var $this = $(this);
    var parent = $this.closest('.all-section');
    var parentId = parent.attr('id');
    var range = $('[data-sort="' + parentId + '"] .range-options').val();
    if (!this.checked) {
      setCheckbox(parent.find('.card-checkboxes .checkbox'), false);
      switchAll.removeClass('checked');
    } else if ($this.hasClass('range-selected')) {
      setCheckbox(parent.find('.card-checkboxes .checkbox'), false);
      setCheckbox(parent.find('.' + range + ' .checkbox'));
      switchAll.addClass('checked');
    } else {
      setCheckbox(parent.find('.card-checkboxes .checkbox'));
      switchAll.addClass('checked');
    }
  });

  $('.card-options--show').on('click', function () {
    var $this = $(this);
    if ($this.hasClass('checked')) {
      $this.removeClass('checked');
      cardCheckboxes.removeClass('is-collapsed');
    } else {
      $this.addClass('checked');
      cardCheckboxes.addClass('is-collapsed');
    }
    return false;
  });

  $('.card-options--detail').on('click', function () {
    var $this = $(this);
    if ($this.hasClass('checked')) {
      $this.removeClass('checked').text('List View');
    } else {
      $this.addClass('checked').text('Detail View');
    }
  });

  // Card Options: Solo (for non-visual changes)
  $('.card-options--solo').on('click', function () {
    $(this).toggleClass('checked');
    return false;
  });
  
  var listCollapse = {
    setHeight: function () {
      var $this = cardCheckboxes.filter('.is-collapsed');
      var getFullHeight = parseInt($this.data('items-shown'));
      var getChildHeight = $this.find('li').outerHeight() + 1;
      var setHeight = (getFullHeight * getChildHeight) + 'px';
      $this.css('max-height', setHeight);
    }
  }

  cardCheckboxes.find('.checkbox + a').click(function () {
    var $prev = $(this).prev();

    if ($prev.hasClass('checkbox-group')) {
      $prev.prev().click();
    } else {
      $prev.find('input').click();
    }
  });

  // Set shown items number for Adv. Search
  cardCheckboxes.filter('.is-collapsed').each(function () {
    listCollapse.setHeight();
  });

  // Narrow Results option for Adv. Search
  $('.search #show-databases').on('click', function (e) {
    var $this = $(this);
    
    if ($this.hasClass('checked')) {
      $this.removeClass('checked');
      $('.card-checkboxes').addClass('is-collapsed');
      listCollapse.setHeight();
    } else {
      $this.addClass('checked');
      $('.card-checkboxes.is-collapsed').removeClass('is-collapsed').css('max-height', '');
    }
    e.stopPropagation();
    return false;
  });

  var $expandedLists = [];
  var $window = $(window);
  var $htmlAndBody = $('html, body');

  var cardCheckboxesDropdown = {
    open: function ($el) {
      var $list = $el.parent().nextAll('ul');
      $list.addClass('is-active');
      $list.stop().animate({ maxHeight: $list.outerHeight() + $list[0].scrollHeight },
        200, cardCheckboxesDropdown.updateFixedPosition);
      $expandedLists.push({
        $el: $el.parent(),
        $parent: $el.parent().parent(),
        isFixed: false,
      });
    },
    close: function ($el) {
      var $list = $el.parent().nextAll('ul');
      var $parent = $el.parent();

      function narrow() {
        $list.removeClass('is-active');
        $list.stop().animate({ maxHeight: 0 }, 200);
        $parent.removeClass('is-shadowed');
        $expandedLists = $expandedLists.filter(function (item) {
          return !item.$el.is($parent);
        });
      }

      var inStore = $expandedLists.find(function (item) { return item.$el.is($parent); });
      if (inStore && inStore.isFixed) {
        $htmlAndBody.animate({
          scrollTop: inStore.$parent.offset().top - 10
        }, 400, narrow);
      } else {
        narrow();
      }
    },
    updateFixedPosition: function (fullUpdate) {
      $expandedLists.forEach(function (item) {
        var offset = item.$parent.offset();
        if ($window.scrollTop() >= offset.top) {
          if (item.isFixed && !fullUpdate) {
            var position = Math.min(0, item.$parent[0].getBoundingClientRect().bottom - item.$el.outerHeight() - 1);
            item.$el.css('top', position);
            if (position < 0) {
              item.$el.removeClass('is-shadowed');
            } else {
              item.$el.addClass('is-shadowed');
            }
            return;
          }
  
          item.$el.css({
            width: item.$parent.outerWidth(),
            left: offset.left,
            top: Math.min(0, item.$parent[0].getBoundingClientRect().bottom - item.$el.outerHeight() - 1)
          });
          item.$el.addClass('is-fixed is-shadowed');
          item.$parent.css('padding-top', item.$el.outerHeight());
          item.isFixed = true;
        } else if (item.isFixed) {
          item.$el.css({
            width: '',
            left: '',
            top: ''
          });
          item.$el.removeClass('is-fixed');
          item.$parent.css('padding-top', '');
          item.isFixed = false;
        }
      });
    }
  };

  $('.card-checkboxes-dropdown').click(function (e) {
    e.preventDefault();

    var $this = $(this);
    var $list = $this.parent().nextAll('ul');
    $this.toggleClass('is-active');

    if ($this.hasClass('is-active')) {
      cardCheckboxesDropdown.open($this);
    } else {
      cardCheckboxesDropdown.close($this);
    }
  });

  $window.scroll(function () {
    cardCheckboxesDropdown.updateFixedPosition();
  });
  $window.resize(function () {
    cardCheckboxesDropdown.updateFixedPosition(true);
  });

  // Card Options: Toggle (for 'select all' / 'select none')
  switchAll.on('click', function () {
    var $this = $(this);
    var allSectionNotHidden = allSection.filter(':not(.is-hidden)');
    
    if ($this.hasClass('checked')) {
      $this.removeClass('checked');
      setCheckbox($('.checkbox'), false);
    } else {
      $this.addClass('checked');
      setCheckbox(allSectionNotHidden.find('.card-title .checkbox'));
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
    var $this = $(this);
    var switchTarget = $this.attr('data-switch');

    $('[data-target="' + switchTarget + '"]').slideDown('fast').addClass('opened');
    $this.addClass('checked');
    $this.siblings().removeClass('checked');
  });

  $('[data-close]').on('click', function () {
    var $this = $(this);
    var closeTarget = $this.attr('data-close');

    $this.addClass('checked');
    $this.siblings().removeClass('checked');
    if ($('[data-target="' + closeTarget + '"]').hasClass('opened')) {
      $('[data-target="' + closeTarget + '"]').slideUp('fast').removeClass('opened');
    }

  });

  // radio elements
  var radioLabel = $('.radio-options');
  var radioFirst = radioLabel.filter(':first-child');
  var identifier = $('[data-open-trigger]').data('open-trigger');
  radioLabel.parent().find('input[type="text"]').val('');
  radioFirst.find('input').prop('checked', true);

  radioLabel.on('click', function () {
    var $this = $(this);
    var nameTarget = $this.attr('data-name');
    var siblings = $('[data-name="' + nameTarget + '"]');
    var parent = $this.parent();
    var textField = $this.find('input[type="text"]');
    var placeholder = $this.find('.text-placeholder');

    siblings.removeClass('checked');
    $this.addClass('checked');
    parent.find('input').prop('checked', false);
    $this.find('input').prop('checked', true);
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

  handleUrl(true);
});
