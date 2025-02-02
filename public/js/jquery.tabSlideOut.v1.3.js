! function(t) {
    t.fn.tabSlideOut = function(o) {
        var a = t.extend({
            tabHandle: ".handle",
            speed: 300,
            action: "click",
            tabLocation: "left",
            topPos: "200px",
            leftPos: "20px",
            fixedPosition: !1,
            positioning: "absolute",
            pathToTabImage: null,
            imageHeight: null,
            imageWidth: null,
            onLoadSlideOut: !1
        }, o || {});
        a.tabHandle = t(a.tabHandle);
        var e = this;
        !0 === a.fixedPosition ? a.positioning = "fixed" : a.positioning = "absolute", !document.all || window.opera || window.XMLHttpRequest || (a.positioning = "absolute"), null != a.pathToTabImage && a.tabHandle.css({
            background: "url(" + a.pathToTabImage + ") no-repeat",
            width: a.imageWidth,
            height: a.imageHeight
        }), a.tabHandle.css({
            display: "block",
            textIndent: "-99999px",
            outline: "none",
            position: "absolute"
        }), e.css({
            "line-height": "1",
            position: a.positioning
        });
        var n = {
            containerWidth: parseInt(e.outerWidth(), 10) + "px",
            containerHeight: parseInt(e.outerHeight(), 10) + "px",
            tabWidth: parseInt(a.tabHandle.outerWidth(), 10) + "px",
            tabHeight: parseInt(a.tabHandle.outerHeight(), 10) + "px"
        };
        "top" !== a.tabLocation && "bottom" !== a.tabLocation || (e.css({
            left: a.leftPos
        }), a.tabHandle.css({
            right: 0
        })), "top" === a.tabLocation && (e.css({
            top: "-" + n.containerHeight
        }), a.tabHandle.css({
            bottom: "-" + n.tabHeight
        })), "bottom" === a.tabLocation && (e.css({
            bottom: "-" + n.containerHeight,
            position: "fixed"
        }), a.tabHandle.css({
            top: "-" + n.tabHeight
        })), "left" !== a.tabLocation && "right" !== a.tabLocation || (e.css({
            height: n.containerHeight,
            top: a.topPos
        }), a.tabHandle.css({
            top: 0
        })), "left" === a.tabLocation && (e.css({
            left: "-" + n.containerWidth
        }), a.tabHandle.css({
            right: "-" + n.tabWidth
        })), "right" === a.tabLocation && (e.css({
            right: "-" + n.containerWidth
        }), a.tabHandle.css({
            left: "-" + n.tabWidth
        }), t("html").css("overflow-x", "hidden")), a.tabHandle.click(function(t) {
            t.preventDefault()
        });
        var i = function() {
                "top" === a.tabLocation ? e.animate({
                    top: "-" + n.containerHeight
                }, a.speed).removeClass("open") : "left" === a.tabLocation ? e.animate({
                    left: "-" + n.containerWidth
                }, a.speed).removeClass("open") : "right" === a.tabLocation ? e.animate({
                    right: "-" + n.containerWidth
                }, a.speed).removeClass("open") : "bottom" === a.tabLocation && e.animate({
                    bottom: "-" + n.containerHeight
                }, a.speed).removeClass("open")
            },
            s = function() {
                "top" == a.tabLocation ? e.animate({
                    top: "-3px"
                }, a.speed).addClass("open") : "left" == a.tabLocation ? e.animate({
                    left: "-3px"
                }, a.speed).addClass("open") : "right" == a.tabLocation ? e.animate({
                    right: "-3px"
                }, a.speed).addClass("open") : "bottom" == a.tabLocation && e.animate({
                    bottom: "-3px"
                }, a.speed).addClass("open")
            },
            c = function() {
                e.click(function(t) {
                    t.stopPropagation()
                }), t(document).click(function() {
                    i()
                })
            };
        "click" === a.action && (a.tabHandle.click(function(t) {
            e.hasClass("open") ? i() : s()
        }), c()), "hover" === a.action && (e.hover(function() {
            s()
        }, function() {
            i()
        }), a.tabHandle.click(function(t) {
            e.hasClass("open") && i()
        }), c()), a.onLoadSlideOut && (i(), setTimeout(s, 500))
    }
}(jQuery);