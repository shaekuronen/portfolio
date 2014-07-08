//= require jquery/dist/jquery
//= require flexslider/jquery.flexslider
//= require flexloader/dist/jquery.flexloader
//= require picturefill/picturefill

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
