function Controller() {
    function showError() {
        ui.alert("loginError", "loginErrorText");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            height: "480dp",
            width: "320dp"
        });
        Alloy.isTablet && _.extend(o, {
            top: "20dp"
        });
        _.extend(o, {
            id: "index"
        });
        return o;
    }());
    $.addTopLevelView($.__views.index);
    $.__views.logo = Ti.UI.createImageView({
        top: "70dp",
        width: "252dp",
        height: "186dp",
        image: "/img/general/logo-cs-rocket.png",
        id: "logo"
    });
    $.__views.index.add($.__views.logo);
    $.__views.loginContents = Ti.UI.createView({
        layout: "vertical",
        top: "200dp",
        bottom: "10dp",
        width: "250dp",
        opacity: 0,
        id: "loginContents"
    });
    $.__views.index.add($.__views.loginContents);
    $.__views.loginHelp = Ti.UI.createLabel({
        color: "#000",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontSize: "14dp",
            fontFamily: "Quicksand"
        },
        id: "loginHelp",
        textid: "appcNetwork"
    });
    $.__views.loginContents.add($.__views.loginHelp);
    $.__views.emailWrapper = Ti.UI.createView({
        width: "250dp",
        height: "47dp",
        backgroundImage: "/img/general/form-bg.png",
        top: "10dp",
        id: "emailWrapper"
    });
    $.__views.loginContents.add($.__views.emailWrapper);
    $.__views.email = Ti.UI.createTextField({
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        autocorrect: !1,
        top: "4dp",
        left: "4dp",
        bottom: "4dp",
        right: "4dp",
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        id: "email"
    });
    $.__views.emailWrapper.add($.__views.email);
    $.__views.passwordWrapper = Ti.UI.createView({
        width: "250dp",
        height: "47dp",
        backgroundImage: "/img/general/form-bg.png",
        top: "10dp",
        id: "passwordWrapper"
    });
    $.__views.loginContents.add($.__views.passwordWrapper);
    $.__views.password = Ti.UI.createTextField({
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        autocorrect: !1,
        top: "4dp",
        left: "4dp",
        bottom: "4dp",
        right: "4dp",
        passwordMask: !0,
        id: "password"
    });
    $.__views.passwordWrapper.add($.__views.password);
    $.__views.buttonContainer = Ti.UI.createView({
        top: "10dp",
        height: Ti.UI.SIZE,
        id: "buttonContainer"
    });
    $.__views.loginContents.add($.__views.buttonContainer);
    $.__views.create = Ti.UI.createButton({
        left: "-20dp",
        width: "116dp",
        height: "33dp",
        backgroundImage: "/img/login/btn-create-default.png",
        backgroundSelectedImage: "/img/login/btn-create-pressed.png",
        opacity: 0,
        id: "create"
    });
    $.__views.buttonContainer.add($.__views.create);
    $.__views.login = Ti.UI.createButton({
        right: "-20dp",
        width: "116dp",
        height: "33dp",
        backgroundImage: "/img/login/btn-login-default.png",
        backgroundSelectedImage: "/img/login/btn-login-pressed.png",
        opacity: 0,
        id: "login"
    });
    $.__views.buttonContainer.add($.__views.login);
    $.__views.forgot = Ti.UI.createView({
        top: "20dp",
        height: "44dp",
        width: Ti.UI.SIZE,
        id: "forgot"
    });
    $.__views.loginContents.add($.__views.forgot);
    $.__views.forgotText = Ti.UI.createLabel({
        color: "#000",
        height: Ti.UI.SIZE,
        width: "125dp",
        textAlign: "center",
        font: {
            fontSize: "12dp"
        },
        id: "forgotText",
        textid: "forgot"
    });
    $.__views.forgot.add($.__views.forgotText);
    $.__views.underline = Ti.UI.createView({
        bottom: "14dp",
        backgroundColor: "#000",
        height: "1dp",
        width: "125dp",
        id: "underline"
    });
    $.__views.forgot.add($.__views.underline);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var User = require("User"), ui = require("ui");
    $.loading = Alloy.createController("loading");
    $.email.hintText = L("email");
    $.password.hintText = L("password");
    function doScroll(val, force) {
        Alloy.isTablet || $.index.animate({
            top: $.index.rect.y + val,
            duration: 250
        });
    }
    function moveScrollerUp() {
        doScroll(-180);
    }
    function moveScrollerDown() {
        doScroll(180);
    }
    $.email.addEventListener("focus", moveScrollerUp);
    $.password.addEventListener("focus", moveScrollerUp);
    $.email.addEventListener("blur", moveScrollerDown);
    $.password.addEventListener("blur", moveScrollerDown);
    !Alloy.isTablet && Ti.Platform.displayCaps.platformHeight > 480 && ($.logo.top = "90dp");
    $.login.addEventListener("click", function() {
        $.index.parent.add($.loading.getView());
        $.loading.start();
        $.email.blur();
        $.password.blur();
        User.login($.email.value, $.password.value, function(e) {
            $.fireEvent("loginSuccess", e);
            $.password.value = "";
            $.loading.stop();
            $.index.parent.remove($.loading.getView());
        }, function() {
            $.loading.stop();
            $.index.parent.remove($.loading.getView());
            showError();
        });
    });
    $.create.addEventListener("click", function() {
        $.email.blur();
        $.password.blur();
        Ti.Platform.openURL("https://my.appcelerator.com/auth/signup");
    });
    $.forgot.addEventListener("click", function() {
        $.email.blur();
        $.password.blur();
        Ti.Platform.openURL("https://my.appcelerator.com/auth/reset");
    });
    $.reset = function() {};
    $.init = function() {
        $.logo.animate({
            top: "20dp",
            duration: 250
        }, function() {
            $.loginContents.animate({
                opacity: 1,
                duration: 250
            }, function() {
                $.login.animate({
                    right: 0,
                    opacity: 1,
                    duration: 250
                });
                $.create.animate({
                    left: 0,
                    opacity: 1,
                    duration: 250
                });
            });
        });
    };
    exports.fireEvent = $.index.fireEvent;
    exports.addEventListener = $.index.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;