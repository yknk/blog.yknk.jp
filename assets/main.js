(function($) {
  $(function() {
    $('a[href^="https://"], a[href^="http://"]').not('[href^="https://' + location.hostname + '"], [href^="http://' + location.hostname + '"]').not('[target]').attr('target', '_blank');
  });
})(jQuery);
