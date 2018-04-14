$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var doIt = 0;
    $("#sectionsNav").removeClass("navbar-transparent");
    $("#sectionsNav").removeClass("navbar-transparent");

    if (scroll < 50) {
        $("#sectionsNav").addClass("navbar-transparent");

        $(".logo-black").hide();
        $(".logo-white").show();
    } else {
        $(".logo-black").show();
        $(".logo-white").hide();
    }
});