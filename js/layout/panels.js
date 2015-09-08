$(function() {
  // Select a panel item
  $('#panels a').on('click', function() {
    $('#panels li').removeClass('is-selected');
    $(this).parent().addClass('is-selected');
  });

  // Select 'Specific Year' panel dropdown
  $('.year-specific-dropdown').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.year-specific-options').addClass('is-visible');
    $('.year-range-dropdown-1, .year-range-dropdown-2').removeClass('is-selected');
    $(this).addClass('is-selected');
    return false;
  });

  // Select 'Year Range #1' panel dropdown
  $('.year-range-dropdown-1').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.year-range-1-options').addClass('is-visible');
    $('#panel-year .panel-type-all .is-selected').removeClass('is-selected');
    $(this).addClass('is-selected');
    return false;
  });

  // Select 'Year Range #2' panel dropdown
  $('.year-range-dropdown-2').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.year-range-2-options').addClass('is-visible');
    $('#panel-year .panel-type-all .is-selected').removeClass('is-selected');
    $(this).addClass('is-selected');
    return false;
  });

  // Select 'Date Range #1' panel dropdown
  $('.date-range-dropdown-1').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.date-range-1-options').addClass('is-visible');
    $('#panel-year .panel-type-all .is-selected').removeClass('is-selected');
    $(this).addClass('is-selected').parent().removeClass('is-selected');
    return false;
  });

  // Select 'Date Range #2' panel dropdown
  $('.date-range-dropdown-2').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.date-range-2-options').addClass('is-visible');
    $('#panel-year .panel-type-all .is-selected').removeClass('is-selected');
    $(this).addClass('is-selected').parent().removeClass('is-selected');
    return false;
  });

  // Select 'Date Range #3' panel dropdown
  $('.date-range-dropdown-3').on('click', function() {
    $('.year-options').removeClass('is-visible');
    $('.year-range-2-options').addClass('is-visible');
    $(this).parent().parent().find('.is-selected').removeClass('is-selected');
    $(this).addClass('is-selected').parent().removeClass('is-selected');
    return false;
  });

  // Hide the year options dropdown when a year is selected
  $('.year-options a').on('click', function() {
    $('.year-options.is-visible').removeClass('is-visible');
    $('#panel-year a.is-selected').removeClass('is-selected');
    return false;
  });
});
