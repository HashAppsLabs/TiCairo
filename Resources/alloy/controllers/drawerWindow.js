function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.win = Ti.UI.createWindow({
        navBarHidden: !0,
        backgroundImage: "/img/general/bg-interior.png",
        modal: !0,
        id: "win"
    });
    $.addTopLevelView($.__views.win);
    $.__views.header = Ti.UI.createView({
        backgroundImage: "/img/header/bg-title.png",
        height: "45dp",
        top: 0,
        id: "header"
    });
    $.__views.win.add($.__views.header);
    $.__views.back = Ti.UI.createView({
        left: "10dp",
        width: "50dp",
        id: "back"
    });
    $.__views.header.add($.__views.back);
    $.__views.backImage = Ti.UI.createImageView({
        left: 0,
        width: "18dp",
        height: "19dp",
        image: "/img/general/btn-back.png",
        id: "backImage"
    });
    $.__views.back.add($.__views.backImage);
    $.__views.logo = Ti.UI.createImageView({
        image: "/img/general/codestrong-bar-logo.png",
        height: "22dp",
        width: "81dp",
        id: "logo"
    });
    $.__views.header.add($.__views.logo);
    $.__views.underline = Ti.UI.createView({
        backgroundColor: "#0574bf",
        bottom: 0,
        height: "2dp",
        id: "underline"
    });
    $.__views.header.add($.__views.underline);
    $.__views.contentView = Ti.UI.createView({
        top: "50dp",
        left: "5dp",
        right: "5dp",
        bottom: "5dp",
        id: "contentView"
    });
    $.__views.win.add($.__views.contentView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.orientationModes = [ Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ];
    $.back.addEventListener("click", function() {
        $.win.close();
    });
    $.addView = function(view) {
        $.contentView.add(view);
    };
    $.open = function() {
        $.win.open();
    };
    exports.fireEvent = $.win.fireEvent;
    exports.addEventListener = $.win.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;