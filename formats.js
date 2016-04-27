$(document).ready(function() {

    $(".small").hover(function() {

      $(this).animate({width: '20%'});
    }, function() {
      $(this).animate({width: '15%'});
    });

    $(".medium").hover(function() {

      $(this).animate({width: '30%'});
    }, function() {

      $(this).animate({width: '25%'});
    });

    $(".large").hover(function() {

      $(this).animate({width: '40%'});
    }, function() {

      $(this).animate({width: '35%'});
    });
});
