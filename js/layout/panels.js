$(function() {

  var body = $('body');
  //let browser cache the print version of screen.css to avoid screen flicker
  $('head').append('<link rel="stylesheet" type="text/css" href="/css/screen.css?print" media="screen" />');
  $('[href="/css/screen.css?print"]').remove();
  
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

  //hide year options when clicking outside
  $(document).click(function(event) { 
    var dropdown = $('.year-options');
    if(!$(event.target).closest('.year-options').length) {
      if(dropdown.hasClass("is-visible")) {
          dropdown.removeClass("is-visible");
      }
    }        
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
    body.addClass('special');
    $('head').append('<link rel="stylesheet" type="text/css" href="/css/screen.css?print" media="screen" />');
    setTimeout(function(){
      $('[href="/css/screen.css"]').remove();
      $('head').append('<link rel="stylesheet" type="text/css" href="/css/print.css" media="print" />');
      setTimeout(function(){
        window.print();
        $('head').append('<link rel="stylesheet" type="text/css" href="/css/screen.css" media="all" />');
        setTimeout(function(){
          body.removeClass('special');
          $('[href="/css/print.css"]').remove();
          $('[href="/css/screen.css?print"]').remove();
          return false;
        }, 300);
      }, 500);
    }, 500);
  });

  $(document).on('click', '.print-minimal', function() {
    $('head').append('<link rel="stylesheet" type="text/css" href="/css/screen.css?print" media="screen" />');
    setTimeout(function(){
      $('[href="/css/screen.css"]').remove();
      $('head').append('<link rel="stylesheet" type="text/css" href="/css/print.css" media="print" />');
      setTimeout(function(){
        window.print();
        $('head').append('<link rel="stylesheet" type="text/css" href="/css/screen.css" media="all" />');
        setTimeout(function(){
          $('[href="/css/print.css"]').remove();
          $('[href="/css/screen.css?print"]').remove();
          return false;
        }, 300);
      }, 500);
    }, 500);
  });

  $(document).on('click', '.print-webview', function() {
    window.print();
  });

  // Annual reports dropdown
  $('.annual-reports.is-open').removeClass('is-open');
  $(document).on('click', '.annual-reports-button', function() {
    $('.annual-reports').toggleClass('is-open');
  });
});
