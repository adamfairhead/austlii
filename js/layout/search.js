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
    $suggestionsList: $('#search-dropdown-suggestions'),
    $databasesOptions: $('#search-dropdown-databases').find('li'),
    $suggestionsLoader: $('#search-dropdown-suggestions-loader'),
    isActive: false,
    delayedHideTimeoutId: null,
    currentSearchText: '',
    currentFetchRequest: null,
    lastSearchText: '',
    lastSearchData: {},
    suggestionsLoader: null,
    showBlock: function ($el, onFinish, fromHeight) {     
      if (fromHeight == null) {
        fromHeight = 0;
      }
      
      if ($el.data('is-active')) {
        if (onFinish instanceof Function) {
          onFinish();
        }
        return;
      }
      $el.data('is-active', true);
      var targetHeight = $el[0].scrollHeight;
      $el.css('height', fromHeight)
        .removeClass('is-hidden')
        .stop()
        .animate({
          height: targetHeight,
        }, 200, function () {
          $el.css('height', '').addClass('is-active').redraw();
          if (onFinish instanceof Function) {
            onFinish();
          }
        });
    },
    hideBlock: function ($el, onFinish, toHeight) {
      if (toHeight == null) {
        toHeight = 0;
      }

      if (!$el.data('is-active')) {
        if (onFinish instanceof Function) {
          onFinish();
        }
        return;
      }
      $el.data('is-active', false)
        .removeClass('is-active')
        .stop()
        .animate({
          height: toHeight,
        }, 200, function () {
          $el.addClass('is-hidden')
            .css('height', '');
          if (onFinish instanceof Function) {
            onFinish();
          }
        });
    },
    init: function () {
      var self = this;
      this.setSearchTextDebounced = $.debounce(250, this.setSearchText);
      this.fitContentDebounced = $.debounce(150, this.fitContent);
      $(window).on('resize', this.fitContentDebounced.bind(this));
      $searchInput.attr('autocomplete', 'off');
      this.$el.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        if (!self.isActive) {
          self.$el.addClass('is-hidden');
        }
      });
      this.$el.on('click', 'label', function () {
        $searchInput.focus();
      });

      this.$suggestionsList.on('click', 'a', function (e) {
        e.preventDefault();

        self.setSearchText(self.lastSearchData.suggestions[$(this).attr('data-index')]);
      });
    },
    fitTextRow: function ($container, $child, text, isReversed) {
      if (isReversed == null) {
        isReversed = false;
      }

      $container.each(function (index) {
        var $this = $(this);
        var $target;
        var currentText;
        if ($child) {
          $target = $child.eq(index);
        } else {
          $target = $this;
        }
        if (text instanceof Array) {
          currentText = text[index];
        } else {
          currentText = text;
        }

        $target.text('.');
        var height = $this.height();

        $target.text(currentText);

        if ($this.height() > height) {
          var cuttedText;
          if (!isReversed) {
            cuttedText = currentText.slice(0, 140) + '...';
          } else {
            cuttedText = '...' + currentText.slice(-140, currentText.length);
          }

          do {
            if (!isReversed) {
              cuttedText = cuttedText.slice(0, cuttedText.length - 4) + '...';
            } else {
              cuttedText = '...' + cuttedText.slice(4, cuttedText.length);
            }

            $target.text(cuttedText);
          } while ($this.height() > height);
        }
      });
    },
    fitSuggestions: function () {
      var $suggestionsItems = this.$suggestionsList.find('li');
      this.fitTextRow($suggestionsItems, $suggestionsItems.find('a'), this.lastSearchData.suggestions, true);
    },
    fitContent: function () {
      var text = $searchInput.val();
      this.fitTextRow(this.$databasesOptions, this.$databasesOptions.find('span strong'), text);
      this.fitSuggestions();
    },
    setSearchText: function (text, updateInput) {
      if (updateInput == null) {
        updateInput = true;
      }

      if (updateInput) {
        $searchInput.val(text).focus();
      }
      this.fitContent();

      if (this.lastSearchText !== text) {
        this.fetchSearchData(text);
      }
    },
    show: function () {
      clearTimeout(this.delayedHideTimeoutId);
      if (this.isActive) {
        return;
      }
      this.isActive = true;
      this.setSearchText($searchInput.val());
      this.$el.removeClass('is-hidden');
      this.$el.redraw();
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
    mockSuggestions: function (count) {
      var $items = $([]);
      for (var i = 0; i < count; i++) {
        $items = $items.add($('<li/>').append(
          $('<a/>').text('.').attr('href', 'javascript:void(0);')
        ));
      }
      this.$suggestionsList.html($items);
    },
    setSuggestions: function (items) {
      var self = this;
      var $items = $([]);
      items.forEach(function (item, index) {
        $items = $items.add($('<li/>').append(
          $('<a/>').text(item).attr('href', 'javascript:void(0);').attr('data-index', index)
        ));
      });
      this.$suggestionsList.html($items);

      this.fitSuggestions();
    },
    fetchSearchData: function (searchText) {
      var self = this;
      this.lastSearchText = searchText;
      if (this.currentFetchRequest && this.currentFetchRequest.readyState !== 4) {
        this.currentFetchRequest.abort();
      }
      var transitionHeight;
      if (this.$suggestionsList.data('is-active')) {
        transitionHeight = 60;
      } else {
        transitionHeight = 0;
      }
      this.hideBlock(this.$suggestionsList, function () {
        self.showBlock(self.$suggestionsLoader, null, transitionHeight);
      }, transitionHeight);

      function sendRequest() {
        return $.ajax({
            url: config.getSearchBoxEndpoint(searchText),
          })
          .done(function (data) {
            self.lastSearchData = data;
            self.mockSuggestions(data.suggestions.length);
            var transitionHeight = self.$suggestionsList[0].scrollHeight;
            self.hideBlock(self.$suggestionsLoader, function () {
              self.showBlock(self.$suggestionsList, function () {
                self.setSuggestions(data.suggestions);
              }, transitionHeight);
            }, transitionHeight);
          }).fail(function () {
            self.setSuggestions([]);
            self.hideBlock(self.$suggestionsLoader);
          });
      }

      if (config.isDev) {
        clearTimeout(this.currentFetchDelay);
        this.currentFetchDelay = setTimeout((function () {
          this.currentFetchRequest = sendRequest();
        }).bind(this), 300 + (Math.random() * 3000));
      } else {
        this.currentFetchRequest = sendRequest();
      }
    },
  };
  searchDropdown.init();

  var searchSubmit = {
    $el: $searchBox.find('input[type="submit"]'),
    isActive: false,
    show: function () {
      if (this.isActive) {
        return;
      }
      var self = this;
      this.isActive = true;
      this.$el
        .stop().animate({
          width: this.$el[0].scrollWidth
        }, 300, function () {
          self.$el.css('width', '');
        })
        .addClass('is-active');
    },
    hide: function () {
      if (!this.isActive) {
        return;
      }
      var self = this;
      this.isActive = false;
      this.$el
        .stop().animate({
          width: 40
        }, 300, function () {
          self.$el.css('width', '');
        })
        .removeClass('is-active');
    },
  };

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
      searchDropdown.setSearchText($searchInput.val(), false);
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
      searchSubmit.show();
    };
  };
  $searchInput.on('input', function() {
    if($searchInput.val().length === 0) {
      $('.search-box-clear').addClass('hide');
      searchDropdown.hide();
      searchSubmit.hide();
    } else {
      $('.search-box-clear').removeClass('hide');
      searchDropdown.show();
      searchDropdown.setSearchTextDebounced($searchInput.val(), false);
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
