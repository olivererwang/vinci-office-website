/*
 * Nara v1.0
 * Copyright 2014 Limitless LLC
 */
jQuery(document).ready(function(c) {
    var b = true;
    var d = c(window).height();
    var a = c(window).width();
    c("header .logo").click(function(f) {
        if (c("section.home").length) {
            c("html,body").animate({
                scrollTop: 0
            }, "slow")
        } else {
            window.open("index.html", "_self")
        }
    });
    c(document).scroll(function() {
        var f = window.innerHeight / 1.3;
        var e = c(this).scrollTop();
        c(".home .content").css("opacity", (1 - e / f));
        if (c("section.home").length && c(this).scrollTop() < 180) {
            c("header").stop().animate({
                backgroundColor: "rgba(17,17,17,0)"
            }, "fast")
        } else {
            c("header").stop().animate({
                backgroundColor: "rgba(17,17,17,1)"
            }, "fast")
        }
    });
    c(".notfound button").click(function() {
        var e = c(this).attr("data-url");
        window.open(e, "_self")
    });
    c("header .menu").click(function(g) {
        if (c("header .navigation").is(":hidden")) {
            c("header").stop().animate({
                height: d
            }, "slow");
            c("header .logo").stop().animate({
                top: d-55
            }, "fast");
            c("header .menu").stop().animate({
                top: d-45
            }, "fast");
            c("header .navigation").slideDown("fast", "easeInQuart");
            var f = d - c("header .navigation ul").height();
            c("header .navigation ul").stop().animate({
                marginTop: f / 2
            }, "fast")
        } else {
            c("header .logo").stop().animate({
                top: 15
            }, "fast");
            c("header .menu").stop().animate({
                top: 20
            }, "fast");
            c("header .navigation").slideUp("fast", "easeOutQuart");
            c("header").stop().animate({
                height: 70
            }, "slow")
        }
    });
    c(".navigation li").click(function(i) {
        var h = c(this).attr("data-type");
        if (h === "in") {
            var g = c(this).attr("data-url");
            c('.navigation li[data-url="' + g + '"]').addClass("active", {
                duration: 300
            });
            c('.navigation li[data-url="' + g + '"]').siblings().removeClass("active", {
                duration: 300
            });
            if (!c("header .navigation").is(":hidden")) {
                c("header .logo").stop().animate({
                    top: 15
                }, "fast");
                c("header .menu").stop().animate({
                    top: 25
                }, "fast");
                if (!c("header .menu").is(":hidden")) {
                    c("header .navigation").slideUp("fast", "easeOutQuart")
                }
                c("header").stop().animate({
                    height: "80px"
                }, "fast", function() {
                    c("html,body").stop().animate({
                        scrollTop: c("section." + g).position().top-60
                    }, "slow")
                })
            }
        } else {
            var f = c(this).attr("data-url");
            window.location = f
        }
    });
    c(".home .scroll").hover(function(f) {
        c(this).removeClass("fadeInDownHalf");
        c(this).removeClass("animated")
    });
    c(".home .scroll").click(function() {
        c("html,body").animate({
            scrollTop: c("section.about").position().top-60
        }, "slow")
    });
    c(".home .slide").each(function() {
        c(this).css("background-image", "url(" + c(this).attr("data-url") + ")")
    });
    c(".home").flexslider({
        animation: "fade",
        animationLoop: true,
        animationSpeed: 1500,
        easing: "easeOutBack",
        slideshow: true,
        pauseOnHover: false,
        controlNav: true,
        directionNav: true
    });
    c(".team .member").hover(function(f) {
        c(".team .member").stop().animate({
            opacity: 0.5
        }, "slow");
        c(this).stop().animate({
            opacity: 1
        }, "slow")
    }, function() {
        c(".team .member").stop().animate({
            opacity: 1
        }, "slow")
    });
    c(".client").hover(function(f) {
        c(this).find("img").stop().animate({
            opacity: 1
        }, "slow")
    }, function() {
        c(this).find("img").stop().animate({
            opacity: 0.4
        }, "slow")
    });
    c(".clients .grid:last-child .client").each(function() {
        c(this).css("border-bottom", "none")
    });
    c(".quotes").parallax("50%", 0.1);
    c(".project").hover(function(f) {
        c(this).find(".thumb img").addClass("active");
        c(this).find(".info").addClass("active")
    }, function() {
        c(this).find(".info").removeClass("active");
        c(this).find(".thumb img").removeClass("active")
    });
    c(".project").click(function() {
        var f = c(this).attr("data-url");
        var e = c(this).offset().top;
        c.ajax({
            url: f
        }).success(function(i) {
            c(".projects .preview").fadeIn("fast");
            c(".projects .preview").html(i);
            c("html,body").animate({
                scrollTop: c(".projects .preview").offset().top-80
            }, 500);
            c(".projects .preview .close").click(function() {
                c(".projects .preview").fadeOut("fast");
                c("html,body").animate({
                    scrollTop: e-140
                }, 500);
                setTimeout(function() {
                    c(".projects .preview").html("")
                }, 1000)
            });
            c(".projects .preview .slider").flexslider({
                animation: "slide",
                slideshow: true,
                directionNav: false,
                controlNav: true,
                animationSpeed: 600
            });
            var h = c(".projects .preview .player").attr("data-type");
            var g = c(".projects .preview .player").attr("data-url");
            if (h === "youtube") {
                var j = '<iframe width="530" height="299" src="//www.youtube.com/embed/' + g + '?rel=0" frameborder="0" allowfullscreen></iframe>';
                c(".projects .preview .player").html(j)
            } else {
                if (h === "vimeo") {
                    var j = '<iframe src="//player.vimeo.com/video/' + g + '?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="530" height="299" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                    c(".projects .preview .player").html(j)
                } else {
                    if (h === "soundcloud") {
                        var j = '<iframe width="530" height="299" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + g + '&amp;auto_play=false&amp;hide_related=false&amp;visual=true"></iframe>';
                        c(".projects .preview .player").html(j)
                    }
                }
            }
        });
        return false
    });
    c(".works .start button").click(function() {
        var e = c(this).attr("data-url");
        window.open(e, "_self")
    });
    c(".services .filter li").hover(function(f) {
        c(this).find("span").stop().animate({
            opacity: 1
        }, "fast")
    }, function() {
        c(".services .filter li").find("span").stop().animate({
            opacity: 0.5
        }, "fast")
    });
    c(".services .filter li").click(function() {
        var e = c(".services .filter li").index(c(this));
        c(this).addClass("active");
        c(this).siblings().removeClass("active");
        c(".services .grid").flexslider(e)
    });
    c(".services .grid").flexslider({
        animation: "slide",
        animationLoop: false,
        animationSpeed: 300,
        easing: "easeOutBack",
        slideshow: false,
        pauseOnHover: false,
        controlNav: false,
        directionNav: false
    });
    c(".facts .fact").hover(function(f) {
        c(".facts .fact").stop().animate({
            opacity: 0.5
        }, "slow");
        c(this).stop().animate({
            opacity: 1
        }, "slow")
    }, function() {
        c(".facts .fact").stop().animate({
            opacity: 1
        }, "slow")
    });
    if (c(".facts").length) {
        c(".facts").parallax("50%", 0.5)
    }
    c(".blog .slider").flexslider({
        animation: "slide",
        animationLoop: true,
        animationSpeed: 600,
        easing: "easeOutBack",
        slideshow: true,
        pauseOnHover: false,
        controlNav: true,
        directionNav: false
    });
    c(".contact .submit").click(function() {
        c(".contact input#name").removeClass("input-error");
        c(".contact input#subject").removeClass("input-error");
        c(".contact textarea#message").removeClass("input-error");
        c(".contact input#email").removeClass("input-error");
        var g = false;
        var f = c("input#name").val();
        if (f == "" || f == " ") {
            g = true;
            c(".contact input#name").addClass(".contact input-error")
        }
        var i = c(".contact input#subject").val();
        if (i == "" || i == " ") {
            g = true;
            c(".contact input#subject").addClass(".contact input-error")
        }
        var k = c(".contact textarea#message").val();
        if (k == "" || k == " ") {
            g = true;
            c(".contact textarea#message").addClass(".contact input-error")
        }
        var h = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        var e = c(".contact input#email").val();
        if (e == "" || e == " ") {
            c(".contact input#email").addClass(".contact input-error");
            g = true
        } else {
            if (!h.test(e)) {
                c(".contact input#email").addClass(".contact input-error");
                g = true
            }
        }
        if (g == true) {
            return false
        }
        var j = c(".contact form").serialize();
        c.ajax({
            type: "POST",
            url: c(".contact form").attr("action"),
            data: j,
            success: function(l) {
                if (l === "ok") {
                    c(".contact .message-success").fadeIn("slow");
                    c(".contact input#name").val("");
                    c(".contact input#email").val("");
                    c(".contact input#subject").val("");
                    c(".contact textarea#message").val("")
                } else {
                    c(".contact .message-error").fadeIn("slow")
                }
            }
        });
        return false
    });
    c("footer .top").click(function() {
        c("html,body").animate({
            scrollTop: 0
        }, "slow")
    });
    c("footer .social li").click(function() {
        var e = c(this).attr("data-url");
        window.open(e, "_blank")
    })
});
$(window).load(function() {
    fixSizes();
    loadMap();
    var c = $(window).height();
    var b = $(window).width();
    if ($("section.home").length && $(this).scrollTop() < 180) {
        $("header").stop().animate({
            backgroundColor: "rgba(17,17,17,0)"
        }, "fast")
    } else {
        $("header").stop().animate({
            backgroundColor: "rgba(17,17,17,1)"
        }, "fast")
    }
    var a = "15%";
    $("section").waypoint({
        handler: function(e, f) {
            var d = $(this).attr("id");
            if (f === "up") {
                d = $(this).prev().attr("id")
            }
            if (f === "up") {
                a = "30%"
            }
            $('.navigation li[data-url="' + d + '"]').addClass("active", {
                duration: 300
            });
            $('.navigation li[data-url="' + d + '"]').siblings().removeClass("active", {
                duration: 300
            })
        },
        offset: a
    });
    $(".loader").delay(1000).fadeOut("slow");
    setTimeout(function() {
        $("header").addClass("animated fadeInDown")
    }, 1300);
    setTimeout(function() {
        $("#home .content").addClass("animated fadeInDown")
    }, 1600);
    $("#about").waypoint(function() {
        setTimeout(function() {
            $("#about .story").addClass("animated fadeInDown")
        }, 0)
    }, {
        offset: "50"
    });
    $("#team").waypoint(function() {
        setTimeout(function() {
            $("#team .member").addClass("animated fadeInDown")
        }, 0)
    }, {
        offset: "50"
    });
    $("#clients").waypoint(function() {
        setTimeout(function() {
            $("#clients .grid").addClass("animated fadeInDown")
        }, 0)
    }, {
        offset: "50"
    });
    $("#quotes").waypoint(function() {
        setTimeout(function() {
            $("#quotes .slider").addClass("animated fadeInDown")
        }, 0)
    }, {
        offset: "50"
    });
    $("#facts").waypoint(function() {
        setTimeout(function() {
            $("#facts .fact").addClass("animated fadeInDown")
        }, 0)
    }, {
        offset: "50"
    });
    $("#services").waypoint(function() {
        setTimeout(function() {
            $("#services .filter li").addClass("animated fadeInDown")
        }, 0);
        setTimeout(function() {
            $("#services .service").addClass("animated fadeInUp")
        }, 0)
    }, {
        offset: "50"
    });
    $("#projects").waypoint(function() {
        setTimeout(function() {
            $("#projects .project").addClass("animated fadeInUp")
        }, 0)
    }, {
        offset: "50"
    });
    $("#contact").waypoint(function() {
        setTimeout(function() {
            $("#contact .two-thirds").addClass("animated fadeInLeft")
        }, 0);
        setTimeout(function() {
            $("#contact .one-third").addClass("animated fadeInRight")
        }, 0)
    }, {
        offset: "50"
    })
});
$(window).resize(function() {
    fixSizes()
});
function fixSizes() {
    var h = $(window).height();
    var d = $(window).width();
    $(".fullscreen").css("height", h);
    var e = d / h;
    if (e > (16 / 9)) {
        var a = d * (16 / 9);
        $(".home video").css("width", d);
        $(".home video").css("height", a);
        var c = ($(".home video").height() - h) / 2;
        $(".home video").css("margin-top", "-" + c + "px");
        $(".home video").css("margin-left", "0px")
    } else {
        var a = h * (16 / 9);
        $(".home video").css("height", h);
        $(".home video").css("width", a);
        var c = ($(".home video").width() - d) / 2;
        $(".home video").css("margin-top", "0px");
        $(".home video").css("margin-left", "-" + c + "px")
    }
    $(".vertical-center").each(function() {
        $(this).css("margin-top", ($(this).parent().height() - $(this).height()) / 2)
    });
    var g = (h - $(".home .flex-control-nav").height()) / 2;
    $(".home .flex-control-nav").css("top", g);
    $(".home .flex-prev").css("top", g-60);
    $(".home .flex-next").css("top", g + $(".home .flex-control-nav").height() + 55);
    var b = $(".services .filter").width() - ($(".services .filter li").length * 40);
    var f = b / $(".services .filter li").length;
    $(".services .filter li").each(function() {
        $(this).css("margin-right", f / 2);
        $(this).css("margin-left", f / 2)
    });
    loadServices()
}
function loadServices() {
    if ($(".services .filter li").length) {
        $(".services .filter li:eq(0)").trigger("click")
    }
}
function loadMap() {
    if ($("#map").length) {
        var d = document.getElementById("map");
        var c = $("#map").attr("data-latitude");
        var h = $("#map").attr("data-longitude");
        var e = new google.maps.LatLng(c, h);
        var a = $("#map").attr("data-zoom");
        var b = {
            zoom: parseInt(a),
            center: new google.maps.LatLng(c, h),
            disableDefaultUI: false,
            mapTypeControl: false,
            scrollwheel: false,
            styles: [{
                featureType: "administrative",
                elementType: "all",
                stylers: [{
                    visibility: "on"
                }, {
                    saturation: -100
                }, {
                    lightness: 20
                }
                ]
            }, {
                featureType: "road",
                elementType: "all",
                stylers: [{
                    visibility: "on"
                }, {
                    saturation: -100
                }, {
                    lightness: 40
                }
                ]
            }, {
                featureType: "water",
                elementType: "all",
                stylers: [{
                    visibility: "on"
                }, {
                    saturation: -10
                }, {
                    lightness: 30
                }
                ]
            }, {
                featureType: "landscape.man_made",
                elementType: "all",
                stylers: [{
                    visibility: "simplified"
                }, {
                    saturation: -60
                }, {
                    lightness: 10
                }
                ]
            }, {
                featureType: "landscape.natural",
                elementType: "all",
                stylers: [{
                    visibility: "simplified"
                }, {
                    saturation: -60
                }, {
                    lightness: 60
                }
                ]
            }, {
                featureType: "poi",
                elementType: "all",
                stylers: [{
                    visibility: "off"
                }, {
                    saturation: -100
                }, {
                    lightness: 60
                }
                ]
            }, {
                featureType: "transit",
                elementType: "all",
                stylers: [{
                    visibility: "off"
                }, {
                    saturation: -100
                }, {
                    lightness: 60
                }
                ]
            }
            ]
        };
        var g = {
            url: "img/misc/map-marker.png",
            size: new google.maps.Size(26, 38),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(26, 38)
        };
        var f = new google.maps.Map(d, b);
        marker = new google.maps.Marker({
            position: e,
            map: f,
            icon: g
        });
        marker.setPosition(new google.maps.LatLng(c, h))
    }
};
