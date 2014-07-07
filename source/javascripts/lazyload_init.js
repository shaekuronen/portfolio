;(function($) {

  $('.lazyload').lazyload({
    threshold : 200,
    failure_limit : 10,
    skip_invisible : true,
    effect : 'show',
    event : 'scroll'
  });

}(jQuery));