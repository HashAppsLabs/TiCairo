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
    $.__views.postFormView = Alloy.createController("postFormView", {
        id: "postFormView"
    });
    $.__views.postFormView.setParent($.__views.win);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.orientationModes = [ Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ];
    var focused = !0, postContainer = $.postFormView.getView();
    function handleKeyboard(e) {
        focused && (Ti.Gesture.orientation === Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation === Ti.UI.LANDSCAPE_RIGHT ? postContainer.bottom = e.keyboardFrame.height + "dp" : postContainer.bottom = e.keyboardFrame.height + 5 + "dp");
    }
    Ti.App.addEventListener("keyboardFrameChanged", handleKeyboard);
    function handleOrientation(e) {
        if (focused) {
            var orientation = e && e.orientation ? e.orientation : Ti.Gesture.orientation;
            orientation === Ti.UI.LANDSCAPE_LEFT || orientation === Ti.UI.LANDSCAPE_RIGHT ? postContainer.animate({
                top: 0,
                left: 0,
                right: 0,
                duration: 250
            }) : postContainer.animate({
                top: "50dp",
                left: "5dp",
                right: "5dp",
                duration: 250
            });
        }
    }
    $.back.addEventListener("click", function() {
        $.win.close();
    });
    $.postFormView.addEventListener("focus", function() {
        focused = !0;
        handleOrientation();
    });
    $.postFormView.addEventListener("blur", function() {
        focused = !1;
        postContainer.animate({
            top: "50dp",
            bottom: "5dp",
            left: "5dp",
            right: "5dp",
            duration: 250
        });
    });
    $.postFormView.addEventListener("success", function() {
        $.win.close();
    });
    $.win.addEventListener("open", function() {
        $.postFormView.focus();
    });
    $.win.addEventListener("close", function() {
        Ti.App.removeEventListener("keyboardFrameChanged", handleKeyboard);
    });
    $.openWindow = function() {
        $.win.open({
            modal: !0
        });
    };
    exports.fireEvent = $.win.fireEvent;
    exports.addEventListener = $.win.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;