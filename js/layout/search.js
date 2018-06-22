$(function() {
  var $document = $(document);
  var $searchBox = $('.search-box');
  var $searchInput = $('#search-box');
  var $searchClear = $searchBox.find('.search-box-clear');

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
    $quickSearchesListContainer: $('#search-dropdown-quick-list-container'),
    $quickSearchesList: $('#search-dropdown-quick-list'),
    $quickSearchesMore: $('#search-dropdown-quick-more'),
    $quickSearchesLoader: $('#search-dropdown-quick-loader'),
    isActive: false,
    delayedHideTimeoutId: null,
    currentSearchText: '',
    currentFetchRequest: null,
    currentFetchQuickSearchesRequest: null,
    lastSearchText: '',
    lastSearchData: {},
    quickSearchesOffset: 0,
    suggestionsLoader: null,
    showBlock: function (options) {
      if (options == null) {
        options = {};
      }

      if (options.fromHeight == null) {
        options.fromHeight = 0;
      }
      if (options.duration == null) {
        options.duration = 200;
      }
      
      if (options.$el.data('is-active')) {
        if (options.onFinish instanceof Function) {
          options.onFinish();
        }
        return;
      }
      options.$el.data('is-active', true);
      var targetHeight = options.$el[0].scrollHeight;
      options.$el.css('height', options.fromHeight)
        .removeClass('is-hidden')
        .stop()
        .animate({
          height: targetHeight,
        }, options.duration, function () {
          options.$el.css('height', '').addClass('is-active').redraw();
          if (options.onFinish instanceof Function) {
            options.onFinish();
          }
        });
    },
    hideBlock: function (options) {
      if (options == null) {
        options = {};
      }

      if (options.toHeight == null) {
        options.toHeight = 0;
      }
      if (options.duration == null) {
        options.duration = 200;
      }

      if (options.$el.data('is-active') === false) {
        if (options.onFinish instanceof Function) {
          options.onFinish();
        }
        return;
      }
      options.$el.data('is-active', false)
        .removeClass('is-active')
        .stop()
        .animate({
          height: options.toHeight,
        }, options.duration, function () {
          options.$el.addClass('is-hidden')
            .css('height', '');
          if (options.onFinish instanceof Function) {
            options.onFinish();
          }
        });
    },
    init: function () {
      var self = this;
      this.setSearchTextDebounced = $.debounce(250, this.setSearchText);
      this.fitContentDebounced = $.debounce(150, this.fitContent);
      this.fitDropdownInViewportDebounced = $.debounce(150, this.fitDropdownInViewport);
      $(window).on('resize', function () {
        self.fitContentDebounced();
      });
      $searchInput.attr('autocomplete', 'off');
      this.$el.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        if (!self.isActive) {
          self.$el.addClass('is-hidden');
        }
      });
      this.$el.on('click', 'label', function () {
        $searchInput.focus();
      });
      this.$quickSearchesMore.click(function (e) {
        e.preventDefault();
        self.fetchMoreQuickSearches.call(self);
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
    show: function (updateInput) {
      clearTimeout(this.delayedHideTimeoutId);
      if (this.isActive) {
        return;
      }
      this.isActive = true;
      this.setSearchText($searchInput.val(), updateInput);
      this.$el.removeClass('is-hidden');
      this.$el.redraw();
      this.$el.addClass('is-active');
      this.fitDropdownInViewport();
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
      var $items = $([]);
      items.forEach(function (item, index) {
        $items = $items.add($('<li/>').append(
          $('<a/>').text(item).attr('href', 'javascript:void(0);').attr('data-index', index)
        ));
      });
      this.$suggestionsList.html($items);

      this.fitSuggestions();
    },
    fitDropdownInViewport: function () {
      this.$quickSearchesListContainer.css('height', '');
      var maxHeight = window.innerHeight - this.$el.offset().top;
      var dropdownHeight = this.$el.outerHeight();
      if (dropdownHeight > maxHeight) {
        this.$quickSearchesListContainer.css('height',
          Math.max(150, this.$quickSearchesListContainer.outerHeight() - (dropdownHeight - maxHeight + 20)) + 'px'
        );
      }
    },
    clearQuickSearches: function () {
      this.hideBlock({
        $el: this.$quickSearchesMore
      });
      this.$quickSearchesList.html('');
    },
    addQuickSearches: function (items, hasMore) {
      if (hasMore == null) {
        hasMore = false;
      }

      var $items = $([]);
      items.forEach(function (item) {
        var $li = $('<li/>');
        var $link = $('<a/>').attr('href', item.link);
        var $topLine = $('<span/>');
        var $bottomLine = $('<span/>').addClass('search-dropdown-quick-info').text(item.info);
        $('<span/>').addClass('search-dropdown-quick-title').html(item.title).appendTo($topLine);
        $('<span/>').addClass('search-dropdown-quick-type')
          .attr('data-type', item.type.toLowerCase().replace(/ /, '-'))
          .text(item.type).appendTo($topLine);
        $topLine.appendTo($link);
        $bottomLine.appendTo($link);
        $link.appendTo($li);
        $items = $items.add($li);
      });

      this.$quickSearchesList.append($items);

      var self = this;
      this.hideBlock({
        $el: this.$quickSearchesLoader,
        duration: 0,
        onFinish: function () {
          if (hasMore) {
            self.showBlock({
              $el: self.$quickSearchesMore,
              duration: 0,
              onFinish: function () {
                self.fitDropdownInViewportDebounced();
              }
            });
          } else {
            self.fitDropdownInViewportDebounced();
          }
        }
      });
    },
    fetchSearchData: function (searchText) {
      var self = this;
      this.lastSearchText = searchText;
      if (this.currentFetchRequest && this.currentFetchRequest.readyState !== 4) {
        this.currentFetchRequest.abort();
      }
      if (this.currentFetchQuickSearchesRequest && this.currentFetchQuickSearchesRequest.readyState !== 4) {
        this.currentFetchQuickSearchesRequest.abort();
      }
      var transitionHeight;
      if (this.$suggestionsList.data('is-active')) {
        transitionHeight = this.$suggestionsLoader[0].scrollHeight;
      } else {
        transitionHeight = 0;
      }
      this.hideBlock({
        $el: this.$suggestionsList,
        onFinish: function () {
          self.showBlock({
            $el: self.$suggestionsLoader, 
            fromHeight: transitionHeight
          });
        },
        toHeight: transitionHeight
      });
      this.showBlock({
        $el: this.$quickSearchesLoader
      });
      this.clearQuickSearches();
      this.$quickSearchesListContainer.css('height', '');
      this.quickSearchesOffset = 0;

      function sendRequest() {
        return $.ajax({
            url: config.getSearchBoxEndpoint(searchText),
          })
          .done(function (data) {
            self.lastSearchData = data;
            self.quickSearchesOffset = data.quickSearches.items.length;
            self.mockSuggestions(data.suggestions.length);
            var transitionHeight = self.$suggestionsList[0].scrollHeight;
            self.hideBlock({
              $el: self.$suggestionsLoader,
              onFinish: function () {
                self.showBlock({
                  $el: self.$suggestionsList,
                  onFinish: function () {
                    self.setSuggestions(data.suggestions);
                  },
                  fromHeight: transitionHeight
                });
              },
              toHeight: transitionHeight
            });
            self.addQuickSearches(data.quickSearches.items, data.quickSearches.total - self.quickSearchesOffset > 0);
          }).fail(function () {
            self.setSuggestions([]);
            self.hideBlock({
              $el: self.$suggestionsLoader
            });
            self.hideBlock({
              $el: self.$quickSearchesLoader
            });
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
    fetchMoreQuickSearches: function () {
      var self = this;
      if (this.currentFetchQuickSearchesRequest && this.currentFetchQuickSearchesRequest.readyState !== 4) {
        this.currentFetchQuickSearchesRequest.abort();
      }
      this.hideBlock({
        $el: this.$quickSearchesMore,
        duration: 0,
      });
      this.showBlock({
        $el: this.$quickSearchesLoader
      });

      function sendRequest() {
        return $.ajax({
            url: config.getSearchBoxQuickSearchesEndpoint(self.lastSearchText, self.quickSearchesOffset),
          })
          .done(function (data) {
            self.quickSearchesOffset += data.items.length;
            var $content = self.$quickSearchesListContainer.find('.ss-content');
            var prevHeight = $content[0].scrollHeight;
            self.addQuickSearches(data.items, data.total - self.quickSearchesOffset > 0);
            setTimeout(function () {
              $content.stop().animate({
                scrollTop: prevHeight - 20
              }, 300);
            }, 200);
            self.hideBlock({
              $el: self.$quickSearchesLoader,
              duration: 0
            });
          }).fail(function () {
            self.showBlock({
              $el: self.$quickSearchesMore
            });
            self.hideBlock({
              $el: self.$quickSearchesLoader
            });
          });
      }

      if (config.isDev) {
        clearTimeout(this.currentFetchQuickSearchesDelay);
        this.currentFetchQuickSearchesDelay = setTimeout((function () {
          this.currentFetchQuickSearchesRequest = sendRequest();
        }).bind(this), 300 + (Math.random() * 3000));
      } else {
        this.currentFetchQuickSearchesRequest = sendRequest();
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
        }, 250, function () {
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
        }, 250, function () {
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
      $searchClear.removeClass('hide');
      searchSubmit.show();
    };
  };
  $searchInput.on('input', function() {
    if($searchInput.val().length === 0) {
      $searchClear.addClass('hide');
      searchDropdown.hide();
      searchSubmit.hide();
    } else {
      $searchClear.removeClass('hide');
      searchDropdown.show();
      searchDropdown.setSearchTextDebounced($searchInput.val(), false);
      searchSubmit.show();
    };
  });
  $searchClear.click(function() {
    $searchInput.val('');
    searchSubmit.hide();
    $searchClear.addClass('hide');
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
  $('#search-tabbed #page-sort').prepend('<input type="hidden" name="method" value="autoSearch">');
  var selectMethod = function () {
    $('[name="method"]').attr('value', $(this).data('type-name'));
  }
  $('[data-type-name]').on('click', selectMethod);
  $('[data-type-name]').on('keydown', function (e) {
    if ([32, 13].indexOf(e.keyCode) !== -1) {
      selectMethod.call(this);
    }
  });

  //tick anything as true by populating any hidden field
  $('[data-type-hidden]').on('click', function () {
    var nameValue = $(this).data('type-hidden');
    
    $('#' + nameValue + '').attr('name', nameValue).val(true);
  });
  
  //tick the check-inblock field
  $('.check-inblock').on('click', function (e) {
    if (e.target === e.currentTarget) {
      $(this).find('.checkbox').click();
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
