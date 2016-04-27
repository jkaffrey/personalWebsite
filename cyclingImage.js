$(document).ready(function() {

    var _intervalId;

    function letsFade() {

        var backIndex = $('.container img:first');
        backIndex.hide();
        backIndex.remove();
        $('.container' ).append(backIndex);
        backIndex.fadeIn()
    };

    _intervalId = setInterval( function() {

        letsFade();
    }, 5000 );

});
