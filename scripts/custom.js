myResize();

$(window).resize(function() {
    myResize();
});

function myResize() {
    if ($(window).width() < 991) {
        console.log("< 992");
        $("nav .collapse").addClass("link-colors");
    } else {
        console.log("bigger");
        $("nav .collapse").removeClass("link-colors");
    }
}

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

// floating label
$(".form-group.bmd-form-group input").click(function(e) {
    $(this).addClass("is-focused");
});
$(window).click(function(e) {
    if (e.target.className != "form-control is-focused") {
        $(".is-focused").removeClass("is-focused");
    }
});