$(document).ready(function() {
    $('.prev').click(function() {
        $('.video-slider').animate({
            scrollLeft: '+=250'
        }, 300);
    });
    $('.next').click(function() {
        $('.video-slider').animate({
            scrollLeft: '-=250'
        }, 300);
    });

    $(".ham").click(function(){
        $("ul").slideDown("slow");
    });

    $(".close").click(function(){
        $("ul").slideUp("slow");
    });
});

