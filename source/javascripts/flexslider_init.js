;(function($) {

  $('.flexslider').flexslider({
    controlNav: false,
    prevText: '',
    nextText: '',
    start: function(slider) {
      $.flexloader(slider, { 'picturefill': true });
    },
    after: function(slider) {
      $.flexloader(slider, { 'picturefill': true });
    }
  });

}(jQuery));
