$(function() {
    initPage();
    fixSizes();
    initDetailDisplay();
    $(window).resize(fixSizes);
});

$(window).load(showHeader);

function initPage() {
    $(document).scroll(function() {
        var f = window.innerHeight / 1.3;
        var e = $(this).scrollTop();
        $(".home .content").css("opacity", (1 - e / f));
        if ($("section.home").length && $(this).scrollTop() < 180) {
            $("header").stop().animate({
                backgroundColor: "rgba(17,17,17,0)"
            }, "fast")
        } else {
            $("header").stop().animate({
                backgroundColor: "rgba(17,17,17,1)"
            }, "fast")
        }
    });

    $(".home .scroll").click(function() {
        $("html,body").animate({
            scrollTop: $("section.about").position().top-30
        }, "slow")
    });

    $("#about").waypoint(function() {
        setTimeout(function() {
            $("#about .story").addClass("animated fadeInDown")
        }, 0)
    }, {
        offset: "50"
    });

    $("footer .top").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, "slow")
    });
}

function initDetailDisplay() {
    var animTime = 300,
    clickPolice = false;
    $(document).on('touchstart click', '.acc-btn', function() {
        if(!clickPolice) {
            clickPolice = true;
            var currIndex = $(this).index('.acc-btn');
            var targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();
            $('.acc-btn h1').removeClass('selected');
            $(this).find('h1').addClass('selected');
            $('.acc-content').stop().animate({ height: 0 }, animTime);
            $('.acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);
            setTimeout(function(){ clickPolice = false;}, animTime);
        }
    });
}

function fixSizes() {
    var h = $(window).height();
    var d = $(window).width();
    if (d < 600 ){
        $("#quotes5").hide();
        $("#quotes5-s").show();
    } else {
        $("#quotes5").show();
        $("#quotes5-s").hide();
    }
    $(".fullscreen").css("height", h);
    $(".vertical-center").each(function() {
        $(this).css("margin-top", ($(this).parent().height() - $(this).height()) / 2)
    });
}

function showHeader() {
    $(".loader").delay(800).fadeOut("slow");
    setTimeout(function() {
        $("header").addClass("animated fadeInDown")
    }, 900);
}
