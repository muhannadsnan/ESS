$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var doIt = 0;
    $("#sectionsNav").removeClass("navbar-transparent");
    if (scroll < 50) {
        $("#sectionsNav").addClass("navbar-transparent");
    }
});