$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $(".fixed-top").addClass("navbar-light bg-light").removeClass("navbar-dark");
    } else {
        $(".fixed-top").addClass("navbar-dark").removeClass("navbar-light bg-light");
    }
});

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -70
    }, 1250);
    $('html, body').animate({path : new $.path.bezier(bezier_params)})


});

$('#github').on('click', function (e) {
    window.open('https://github.com/Ryandinulfatah12',"_blank");
});