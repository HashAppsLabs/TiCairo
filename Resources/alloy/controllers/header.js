function Controller() {
    function profileOn() {
        $.profile.enabled = !0;
        $.profile.visible = !0;
    }
    function aboutOn() {
        $.about.enabled = !0;
        $.about.visible = !0;
    }
    function doProfile() {
        if ($.profile.enabled) {
            Ti.App.fireEvent("app:open.drawer", {
                controller: "profile"
            });
            $.profile.enabled = !1;
            $.profile.visible = !1;
            if (!Alloy.isTablet) {
                $.about.enabled = !1;
                $.about.visible = !1;
            }
        }
    }
    function doAbout() {
        if ($.about.enabled) {
            Ti.App.fireEvent("app:open.drawer", {
                controller: "about"
            });
            if (!Alloy.isTablet) {
                $.profile.enabled = !1;
                $.profile.visible = !1;
            }
            $.about.enabled = !1;
            $.about.visible = !1;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = Ti.UI.createView({
        backgroundImage: "/img/header/bg-title.png",
        height: "45dp",
        top: 0,
        id: "container"
    });
    $.addTopLevelView($.__views.container);
    $.__views.logo = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {
            image: "/img/general/codestrong-bar-logo.png",
            height: "22dp",
            width: "81dp"
        });
        Alloy.isTablet && _.extend(o, {
            left: "10dp"
        });
        _.extend(o, {
            id: "logo"
        });
        return o;
    }());
    $.__views.container.add($.__views.logo);
    if (!Alloy.isTablet) {
        $.__views.back = Ti.UI.createView({
            left: "10dp",
            width: "50dp",
            enabled: !1,
            visible: !1,
            id: "back"
        });
        $.__views.container.add($.__views.back);
        $.__views.backImage = Ti.UI.createImageView({
            left: 0,
            width: "18dp",
            height: "19dp",
            image: "/img/general/btn-back.png",
            id: "backImage"
        });
        $.__views.back.add($.__views.backImage);
    }
    if (!Alloy.isTablet) {
        $.__views.about = Ti.UI.createView({
            left: "10dp",
            width: "50dp",
            enabled: !0,
            id: "about"
        });
        $.__views.container.add($.__views.about);
        $.__views.aboutSmallIcon = Ti.UI.createImageView({
            left: 0,
            image: "/img/header/btn-about.png",
            id: "aboutSmallIcon"
        });
        $.__views.about.add($.__views.aboutSmallIcon);
    }
    if (Alloy.isTablet) {
        $.__views.nav = Ti.UI.createView({
            left: "95dp",
            layout: "horizontal",
            width: "300dp",
            id: "nav"
        });
        $.__views.container.add($.__views.nav);
        $.__views.home = Ti.UI.createView({
            top: "2dp",
            height: "40dp",
            width: "60dp",
            id: "home"
        });
        $.__views.nav.add($.__views.home);
        $.__views.homeIcon = Ti.UI.createImageView({
            image: "/img/header/btn-tablet-home-pressed.png",
            id: "homeIcon"
        });
        $.__views.home.add($.__views.homeIcon);
        $.__views.agenda = Ti.UI.createView({
            top: "2dp",
            height: "40dp",
            width: "60dp",
            id: "agenda"
        });
        $.__views.nav.add($.__views.agenda);
        $.__views.agendaIcon = Ti.UI.createImageView({
            image: "/img/header/btn-tablet-agenda-default.png",
            id: "agendaIcon"
        });
        $.__views.agenda.add($.__views.agendaIcon);
        $.__views.stream = Ti.UI.createView({
            top: "2dp",
            height: "40dp",
            width: "60dp",
            id: "stream"
        });
        $.__views.nav.add($.__views.stream);
        $.__views.streamIcon = Ti.UI.createImageView({
            image: "/img/header/btn-tablet-stream-default.png",
            id: "streamIcon"
        });
        $.__views.stream.add($.__views.streamIcon);
        $.__views.venue = Ti.UI.createView({
            top: "2dp",
            height: "40dp",
            width: "60dp",
            id: "venue"
        });
        $.__views.nav.add($.__views.venue);
        $.__views.venueIcon = Ti.UI.createImageView({
            image: "/img/header/btn-tablet-venue-default.png",
            id: "venueIcon"
        });
        $.__views.venue.add($.__views.venueIcon);
        $.__views.about = Ti.UI.createView({
            top: "2dp",
            height: "40dp",
            width: "50dp",
            left: "10dp",
            enabled: !0,
            id: "about"
        });
        $.__views.nav.add($.__views.about);
        $.__views.aboutIcon = Ti.UI.createImageView({
            image: "/img/header/btn-tablet-about-default.png",
            id: "aboutIcon"
        });
        $.__views.about.add($.__views.aboutIcon);
    }
    if (!Alloy.isTablet) {
        $.__views.profile = Ti.UI.createView(function() {
            var o = {};
            _.extend(o, {
                width: "50dp",
                right: "10dp",
                enabled: !0
            });
            Alloy.isTablet && _.extend(o, {
                top: "5dp",
                right: "75dp",
                width: "48dp",
                height: "34dp",
                backgroundImage: "/img/header/btn-tablet-profile-default.png",
                backgroundSelectedImage: "/img/header/btn-tablet-profile-pressed.png"
            });
            _.extend(o, {
                id: "profile"
            });
            return o;
        }());
        $.__views.container.add($.__views.profile);
        $.__views.profileImage = Ti.UI.createImageView({
            right: 0,
            image: "/img/header/btn-profile.png",
            width: "27dp",
            height: "22dp",
            opacity: 1,
            id: "profileImage"
        });
        $.__views.profile.add($.__views.profileImage);
    }
    if (Alloy.isTablet) {
        $.__views.profile = Ti.UI.createButton(function() {
            var o = {};
            _.extend(o, {
                width: "50dp",
                right: "10dp",
                enabled: !0
            });
            Alloy.isTablet && _.extend(o, {
                top: "5dp",
                right: "75dp",
                width: "48dp",
                height: "34dp",
                backgroundImage: "/img/header/btn-tablet-profile-default.png",
                backgroundSelectedImage: "/img/header/btn-tablet-profile-pressed.png"
            });
            _.extend(o, {
                id: "profile"
            });
            return o;
        }());
        $.__views.container.add($.__views.profile);
    }
    if (Alloy.isTablet) {
        $.__views.post = Ti.UI.createButton(function() {
            var o = {};
            _.extend(o, {
                height: "36dp",
                top: "4dp",
                backgroundColor: "#057dec",
                borderRadius: "5dp"
            });
            Alloy.isTablet && _.extend(o, {
                top: "5dp",
                right: "10dp",
                width: "48dp",
                height: "34dp",
                backgroundImage: "/img/header/btn-tablet-post-default.png",
                backgroundSelectedImage: "/img/header/btn-tablet-post-pressed.png"
            });
            _.extend(o, {
                id: "post"
            });
            return o;
        }());
        $.__views.container.add($.__views.post);
    }
    $.__views.underline = Ti.UI.createView({
        backgroundColor: "#0574bf",
        bottom: 0,
        height: "2dp",
        id: "underline"
    });
    $.__views.container.add($.__views.underline);
    exports.destroy = function() {};
    _.extend($, $.__views);
    if (Alloy.isTablet) {
        var tabOffset = 121, tabWidth = 60, navOffsets = {
            home: 0,
            agenda: tabWidth,
            stream: tabWidth * 2,
            venue: tabWidth * 3,
            about: tabWidth * 4
        };
        function doTab(name, noEvent) {
            _.each([ "home", "agenda", "stream", "venue", "about" ], function(item) {
                name === item ? $[item + "Icon"].image = "/img/header/btn-tablet-" + item + "-pressed.png" : $[item + "Icon"].image = "/img/header/btn-tablet-" + item + "-default.png";
            });
            noEvent || $.fireEvent("change", {
                name: name
            });
        }
        $.home.addEventListener("click", function() {
            doTab("home");
        });
        $.agenda.addEventListener("click", function() {
            doTab("agenda");
        });
        $.stream.addEventListener("click", function() {
            doTab("stream");
        });
        $.venue.addEventListener("click", function() {
            doTab("venue");
        });
        $.post.addEventListener("click", function() {
            $.fireEvent("change", {
                name: "post"
            });
        });
        $.setNav = function(name) {
            doTab(name, !0);
        };
    }
    $.setBackVisible = function(toggle) {
        if (!Alloy.isTablet) if (toggle) {
            $.back.enabled = !0;
            $.back.visible = !0;
            $.about.enabled = !1;
            $.about.visible = !1;
            $.profile.visible = !1;
            $.profile.enabled = !1;
        } else {
            $.back.enabled = !1;
            $.back.visible = !1;
            $.about.enabled = !0;
            $.about.visible = !0;
            $.profile.visible = !0;
            $.profile.enabled = !0;
        }
    };
    $.back && $.back.addEventListener("click", function() {
        $.back.enabled && $.fireEvent("back");
    });
    Ti.App.addEventListener("app:close.drawer", function(e) {
        if (e.controller === "profile" || !Alloy.isTablet) profileOn(); else if (e.controller === "about" || !Alloy.isTablet) aboutOn(); else {
            profileOn();
            aboutOn();
        }
    });
    $.profile.addEventListener("click", doProfile);
    $.about.addEventListener("click", doAbout);
    exports.fireEvent = $.container.fireEvent;
    exports.addEventListener = $.container.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;