function deselect(e) {
  $('.pop').slideFadeToggle(function() {

    e.removeClass('selected');
  });
}

$(function() {
  $('#contact').on('click', function() {

    if($(this).hasClass('selected')) {

      deselect($(this));
    } else {

      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {

    deselect($('#contact'));
    return false;
  });
});

/*
* Adding our own function to jquery by the name of slideFadeToggle
* Similar to jQuery.prototype but uses the $ alias
*/
$.fn.slideFadeToggle = function(easing, callback) {

  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};
