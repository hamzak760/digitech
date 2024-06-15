! function(t, i) {
    "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof exports ? module.exports = i(require("jquery")) : t.lightbox = i(t.jQuery)
}(this, function(t) {
    function i(i) {
        this.album = [], this.currentImageIndex = void 0, this.init(), this.options = t.extend({}, this.constructor.defaults), this.option(i)
    }
    return i.defaults = {
        albumLabel: "Image %1 of %2",
        alwaysShowNavOnTouchDevices: !1,
        fadeDuration: 500,
        fitImagesInViewport: !0,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: !0,
        wrapAround: !1,
        disableScrolling: !1
    }, i.prototype.option = function(i) {
        t.extend(this.options, i)
    }, i.prototype.imageCountLabel = function(t, i) {
        return this.options.albumLabel.replace(/%1/g, t).replace(/%2/g, i)
    }, i.prototype.init = function() {
        this.enable(), this.build()
    }, i.prototype.enable = function() {
        var i = this;
        t("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(e) {
            return i.start(t(e.currentTarget)), !1
        })
    }, i.prototype.build = function() {
        var i = this;
        t('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(t("body")), this.$lightbox = t("#lightbox"), this.$overlay = t("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function() {
            return i.end(), !1
        }), this.$lightbox.hide().on("click", function(e) {
            return "lightbox" === t(e.target).attr("id") && i.end(), !1
        }), this.$outerContainer.on("click", function(e) {
            return "lightbox" === t(e.target).attr("id") && i.end(), !1
        }), this.$lightbox.find(".lb-prev").on("click", function() {
            return 0 === i.currentImageIndex ? i.changeImage(i.album.length - 1) : i.changeImage(i.currentImageIndex - 1), !1
        }), this.$lightbox.find(".lb-next").on("click", function() {
            return i.currentImageIndex === i.album.length - 1 ? i.changeImage(0) : i.changeImage(i.currentImageIndex + 1), !1
        }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
            return i.end(), !1
        })
    }, i.prototype.start = function(i) {
        var e = this,
            n = t(window);
        n.on("resize", t.proxy(this.sizeOverlay, this)), t("select, object, embed").css({
            visibility: "hidden"
        }), this.sizeOverlay(), this.album = [];
        var a = 0;

        function o(t) {
            e.album.push({
                link: t.attr("href"),
                title: t.attr("data-title") || t.attr("title")
            })
        }
        var s, h = i.attr("data-lightbox");
        if (h) {
            s = t(i.prop("tagName") + '[data-lightbox="' + h + '"]');
            for (var r = 0; r < s.length; r = ++r) o(t(s[r])), s[r] === i[0] && (a = r)
        } else if ("lightbox" === i.attr("rel")) o(i);
        else {
            s = t(i.prop("tagName") + '[rel="' + i.attr("rel") + '"]');
            for (var l = 0; l < s.length; l = ++l) o(t(s[l])), s[l] === i[0] && (a = l)
        }
        var d = n.scrollTop() + this.options.positionFromTop,
            g = n.scrollLeft();
        this.$lightbox.css({
            top: d + "px",
            left: g + "px"
        }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && t("body").addClass("lb-disable-scrolling"), this.changeImage(a)
    }, i.prototype.changeImage = function(i) {
        var e = this;
        this.disableKeyboardNav();
        var n = this.$lightbox.find(".lb-image");
        this.$overlay.fadeIn(this.options.fadeDuration), t(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
        var a = new Image;
        a.onload = function() {
            var o, s, h, r, l, d;
            n.attr("src", e.album[i].link), t(a), n.width(a.width), n.height(a.height), e.options.fitImagesInViewport && (d = t(window).width(), l = t(window).height(), r = d - e.containerLeftPadding - e.containerRightPadding - 20, h = l - e.containerTopPadding - e.containerBottomPadding - 120, e.options.maxWidth && e.options.maxWidth < r && (r = e.options.maxWidth), e.options.maxHeight && e.options.maxHeight < r && (h = e.options.maxHeight), (a.width > r || a.height > h) && (a.width / r > a.height / h ? (s = r, o = parseInt(a.height / (a.width / s), 10), n.width(s), n.height(o)) : (o = h, s = parseInt(a.width / (a.height / o), 10), n.width(s), n.height(o)))), e.sizeContainer(n.width(), n.height())
        }, a.src = this.album[i].link, this.currentImageIndex = i
    }, i.prototype.sizeOverlay = function() {
        this.$overlay.width(t(document).width()).height(t(document).height())
    }, i.prototype.sizeContainer = function(t, i) {
        var e = this,
            n = this.$outerContainer.outerWidth(),
            a = this.$outerContainer.outerHeight(),
            o = t + this.containerLeftPadding + this.containerRightPadding,
            s = i + this.containerTopPadding + this.containerBottomPadding;

        function h() {
            e.$lightbox.find(".lb-dataContainer").width(o), e.$lightbox.find(".lb-prevLink").height(s), e.$lightbox.find(".lb-nextLink").height(s), e.showImage()
        }
        n !== o || a !== s ? this.$outerContainer.animate({
            width: o,
            height: s
        }, this.options.resizeDuration, "swing", function() {
            h()
        }) : h()
    }, i.prototype.showImage = function() {
        this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
    }, i.prototype.updateNav = function() {
        var t = !1;
        try {
            document.createEvent("TouchEvent"), t = !!this.options.alwaysShowNavOnTouchDevices
        } catch (t) {}
        this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (t && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), t && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), t && this.$lightbox.find(".lb-next").css("opacity", "1"))))
    }, i.prototype.updateDetails = function() {
        var i = this;
        if (void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function(i) {
                void 0 !== t(this).attr("target") ? window.open(t(this).attr("href"), t(this).attr("target")) : location.href = t(this).attr("href")
            }), this.album.length > 1 && this.options.showImageNumberLabel) {
            var e = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(e).fadeIn("fast")
        } else this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
            return i.sizeOverlay()
        })
    }, i.prototype.preloadNeighboringImages = function() {
        this.album.length > this.currentImageIndex + 1 && ((new Image).src = this.album[this.currentImageIndex + 1].link);
        this.currentImageIndex > 0 && ((new Image).src = this.album[this.currentImageIndex - 1].link)
    }, i.prototype.enableKeyboardNav = function() {
        t(document).on("keyup.keyboard", t.proxy(this.keyboardAction, this))
    }, i.prototype.disableKeyboardNav = function() {
        t(document).off(".keyboard")
    }, i.prototype.keyboardAction = function(t) {
        var i = t.keyCode,
            e = String.fromCharCode(i).toLowerCase();
        27 === i || e.match(/x|o|c/) ? this.end() : "p" === e || 37 === i ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : "n" !== e && 39 !== i || (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
    }, i.prototype.end = function() {
        this.disableKeyboardNav(), t(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), t("select, object, embed").css({
            visibility: "visible"
        }), this.options.disableScrolling && t("body").removeClass("lb-disable-scrolling")
    }, new i
});