$(function () {
  "use strict";
  
  //set up vars - alphabet is an array of alphabet letters to be used with latin-style ordered lists
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
      listLatin = $('ol[type="a"] li'),
      listRoman = $('ol[type="i"] li');
 
  //function to bind digits and roman numerals, turn them into strings and loop through available numbers to generate roman number
  
  function romanize(num) {
    var lookup = {
      m: 1000,
      cm: 900,
      d: 500,
      cd: 400,
      c: 100,
      xc: 90,
      l: 50,
      xl: 40,
      x: 10,
      ix: 9,
      v: 5,
      iv: 4,
      i: 1
    }, roman = '', i;
    for (i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }
 
  //get value from list element value attribute, attach correct letter to it and pass to data-value attribute to be processed by css
  
  listLatin.each(function () {
    var thisValue = $(this).attr('value'),
        thisAlphabet = alphabet[thisValue-1];
    $(this).attr('data-value', thisAlphabet);
  });
  
  //get value from list element value attribute, attach correct roman number to it and pass to data-value attribute to be processed by css
  
  listRoman.each(function () {
    var thisValue = $(this).attr('value'),
        thisRoman = romanize(thisValue);
    $(this).attr('data-value', thisRoman);
  });

});
