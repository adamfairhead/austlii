(function ( $ ) { 
  $.fn.redraw = function () {
    for (var i = 0; i < this.length; i++) {
      this[i].offsetHeight;
    }
    return this;
  };
}(jQuery));
