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
* Adding our own function to jquery
* Similar to jQuery.fn but uses the $ alias
*/
$.fn.slideFadeToggle = function(easing, callback) {

  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};
