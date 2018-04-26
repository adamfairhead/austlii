$(function() {
  var $document = $(document);
  var $searchBox = $('.search-box');
  var $searchInput = $('#search-box');

  var tabnumindex = 0;
  var formReload = {
    searchTabbed: function () {
      
      var thisInput = $('.check-inblock').find('input'),
        inblockCheckbox = $('.check-inblock').find('.checkbox');
      
      inblockCheckbox.each(function () {
        var thisInput = $('.check-inblock').find('input:checked');
        
        if (!$(this).hasClass('checked')) {
          $(this).addClass('checked');
        }
      });
      
      thisInput.attr('checked', true);
      
      if ($("#search-tabbed").length > 0){
        $('#search-tabbed')[0].reset();
      }
      
      $('.checkbox').each(function () {
        if(!$(this).hasClass('checked')) {
          $(this).addClass('checked');
        }      
      });
    }
  };
  var searchDropdown = {
    $el: $('#search-dropdown'),
    $databasesText: $('#search-dropdown-databases').find('li span strong'),
    isActive: false,
    delayedHideTimeoutId: null,
    setSearchText: function (text) {
      this.$databasesText.text(text);
    },
    redraw: function () {
      this.$el[0].offsetHeight;
    },
    show: function () {
      clearTimeout(this.delayedHideTimeoutId);
      if (this.isActive) {
        return;
      }
      this.isActive = true;
      this.$el.removeClass('is-hidden');
      this.redraw();
      this.$el.addClass('is-active');
    },
    hide: function () {
      clearTimeout(this.delayedHideTimeoutId);
      if (!this.isActive) {
        return;
      }
      this.isActive = false;
      this.$el.removeClass('is-active');
    },
    delayedHide: function () {
      clearTimeout(this.delayedHideTimeoutId);
      this.delayedHideTimeoutId = setTimeout(this.hide.bind(this), 200);
    },
  };
  searchDropdown.$el.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
    if (!searchDropdown.isActive) {
      searchDropdown.$el.addClass('is-hidden');
    }
  });
  searchDropdown.$el.on('click', 'label', function () {
    $searchInput.focus();
  });

  var searchSubmit = {
    $el: $searchBox.find('input[type="submit"]'),
    isActive: false,
    redraw: function () {
      this.$el[0].offsetHeight;
    },
    show: function () {
      if (this.isActive) {
        return;
      }
      this.isActive = true;
      this.$el.removeClass('is-hidden');
      this.redraw();
      this.$el.addClass('is-active');
    },
    hide: function () {
      if (!this.isActive) {
        return;
      }
      this.isActive = false;
      this.$el.removeClass('is-active');
    },
  };
  searchSubmit.$el.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
    if (!searchSubmit.isActive) {
      searchSubmit.$el.addClass('is-hidden');
    }
  });

  var $searchDropdownDatabases = $('#search-dropdown-databases');
  $searchDropdownDatabases.find('li').click(function () {
    $(this).find('input').prop('checked', true);
    searchSubmit.$el.click();
  });

  // Show search on mobile
  $('.go-search, .go-primary').on('click', function() {
    $('body').toggleClass('search-is-visible');
  });

  // Hovering on the search box
  $document.on('mouseover', '.search-box', function() {
    $searchBox.addClass('hover');
  });
  $document.on('mouseout', '.search-box', function() {
    $searchBox.removeClass('hover');
  });
  $document.on('focus', '#search-box', function() {
    $searchBox.addClass('focus');
    if($searchInput.val().length !== 0) {
      searchDropdown.show();
      searchDropdown.setSearchText($searchInput.val());
    }
  });
  $document.on('focusout', '#search-box', function() {
    $searchBox.removeClass('focus');
    searchDropdown.delayedHide();
  });

  // Clear search box
  if($searchInput.length > 0) {
    if( $searchInput.val().length !== 0 ) {
      $('.search-box-clear').removeClass('hide');
      searchSubmit.$el.removeClass('is-hidden').addClass('is-active');
    };
  };
  $searchInput.keyup(function() {
    if($searchInput.val().length === 0) {
      $('.search-box-clear').addClass('hide');
      searchDropdown.hide();
      searchSubmit.hide();
    } else {
      $('.search-box-clear').removeClass('hide');
      searchDropdown.show();
      searchDropdown.setSearchText($searchInput.val());
      searchSubmit.show();
    };
  });
  $document.on('click', '.search-box-clear', function() {
    $searchInput.val('');
    searchSubmit.hide();
    $(this).addClass('hide');
  });

  // Close search options when you click on the page
  $document.on('click', function() {
    $searchBox.removeClass('options-visible');
  });

  // Document page index expand/collapse
  $document.on('click', '.index-expand', function() {
    $('#page-index').toggleClass('is-expanded');

    if ($(this).parent().parent().hasClass('is-expanded')) {
      $(this).text('Hide');
    } else {
      $(this).text('Show');
    };
  });
   
  //prepare the advanced search js / no js verions method selection 
  $('#search-tabbed #page-sort').prepend('<input type="hidden" name="method" value="autoSearch">');
  $('.no-js-search-method input[checked]').attr('checked', false);
  
  //prepare the advanced search textfield 
  $('[data-type-name]').on('click', function () {
    var nameValue = $(this).data('type-name');
    
    $('[name="method"]').attr('value', nameValue);
  });

  //navigate search-tabbet with tab key
  $document.bind('keydown', function(event) {
    if(event.keyCode == 9){   
      event.preventDefault();
      if ( tabnumindex < 6 ) {
        tabnumindex++;
      } else {
        tabnumindex = 0;
      }
      $('[data-type-name]:eq(' + tabnumindex + ')').attr("tabindex",-1).focus().click();
    } 
  });

  //tick anything as true by populating any hidden field
  $('[data-type-hidden]').on('click', function () {
    var nameValue = $(this).data('type-hidden');
    
    $('#' + nameValue + '').attr('name', nameValue).val(true);
  });
  
  //tick the check-inblock field
  $('.check-inblock').on('click', function () {
    var thisInput = $(this).find('input:checked');
    
    $(this).find('.checkbox').toggleClass('checked');
    
    if (thisInput.length > 0) {
      thisInput.attr('checked', false);
    } else {
      thisInput.attr('checked', true);
    }
  });
  
  //uncheck off all the inputs that were unchecked by the user
  var unchecked = $('input[type="checkbox"]:not(:checked)').parents('label').removeClass('checked');
  
  //reset tabbed form on reset button click - the reset tabbed form on load was commented out because it clashes with browsers' native functionality where hitting the back button will preserve data
  //formReload.searchTabbed();
  
  $('#search-reset').on('click', function () {
    formReload.searchTabbed();
  });
});
