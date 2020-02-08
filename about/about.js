// var  i = 0;
$(document).ready(function() {
    topBar();
});

$(window).on('load', function() {
    $('.hero').removeClass('entrance');
    setTimeout(function() {
        $('.scroll_cta').removeClass('entrance');
    }, 1500);
});

$(window).on('scroll', function() {
    // topBar();
    // console.log($(window).scrollTop() + "\nhalf Window height is " + $(window).height()/2);
    // console.log("Scrolls");
    // var heroHeight = $(window).height() - $('.topbar_strip').innerHeight(); // TODO: Get hero.height instead
    // console.log("Hero height: " + heroHeight);
    if ( $(window).scrollTop() >= $('.hero').height()/2 ) {
        $('.topbar_container').addClass('visible');
    } else {
        $('.topbar_container').removeClass('visible');
    }
    if ( $(window).scrollTop() <= $('.hero').height() ) {
        // console.log("Hero start!");
        var opac = ( $('.hero').height() - $(window).scrollTop() ) / $('.hero').height();
        // console.log(opac);
        $('.hero .portrait img:last-child').css('filter', 'opacity('+opac+')');
    }
});