function Controller() {
    function fbOn() {
        $.facebookIcon.image = "/img/post/btn-facebook-on.png";
        $.facebookText.text = L("disconnectFacebook");
    }
    function fbOff() {
        $.facebookIcon.image = "/img/post/btn-facebook-off.png";
        $.facebookText.text = L("connectFacebook");
    }
    function twitterOn() {
        $.twitterIcon.image = "/img/post/btn-twitter-on.png";
        $.twitterText.text = L("disconnectTwitter");
    }
    function twitterOff() {
        $.twitterIcon.image = "/img/post/btn-twitter-off.png";
        $.twitterText.text = L("connectTwitter");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createView({
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    $.__views.header = Ti.UI.createView({
        backgroundColor: "#ffffff",
        height: "34dp",
        right: "140dp",
        left: "5dp",
        top: "5dp",
        id: "header"
    });
    $.__views.index.add($.__views.header);
    $.__views.myProfile = Ti.UI.createLabel({
        color: "#373e47",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: "5dp",
        font: {
            fontFamily: "Quicksand-Bold",
            fontSize: "14dp"
        },
        id: "myProfile",
        textid: "myProfile"
    });
    $.__views.header.add($.__views.myProfile);
    $.__views.__alloyId39 = Ti.UI.createView({
        bottom: 0,
        height: "1dp",
        backgroundColor: "#9a9a9a",
        id: "__alloyId39"
    });
    $.__views.header.add($.__views.__alloyId39);
    $.__views.logout = Ti.UI.createButton({
        top: "5dp",
        width: "125dp",
        height: "34dp",
        right: "5dp",
        backgroundImage: "/img/profile/logoutButton.png",
        id: "logout"
    });
    $.__views.index.add($.__views.logout);
    $.__views.personal = Ti.UI.createView({
        backgroundColor: "#ffffff",
        top: "49dp",
        left: "5dp",
        right: "5dp",
        height: "85dp",
        id: "personal"
    });
    $.__views.index.add($.__views.personal);
    $.__views.avatar = Ti.UI.createImageView({
        image: "/img/profile/no-profile-pic.png",
        height: "50dp",
        width: "50dp",
        borderRadius: "3dp",
        left: "5dp",
        top: "8dp",
        id: "avatar"
    });
    $.__views.personal.add($.__views.avatar);
    $.__views.name = Ti.UI.createLabel({
        color: "#0574bf",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "5dp",
        left: "60dp",
        font: {
            fontWeight: "bold",
            fontSize: "16dp"
        },
        id: "name"
    });
    $.__views.personal.add($.__views.name);
    $.__views.email = Ti.UI.createLabel({
        color: "#787878",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "23dp",
        left: "60dp",
        font: {
            fontSize: "12dp"
        },
        id: "email"
    });
    $.__views.personal.add($.__views.email);
    $.__views.title = Ti.UI.createLabel({
        color: "#787878",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "38dp",
        left: "60dp",
        font: {
            fontStyle: "italic",
            fontSize: "12dp"
        },
        id: "title"
    });
    $.__views.personal.add($.__views.title);
    $.__views.org = Ti.UI.createLabel({
        color: "#787878",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "53dp",
        left: "60dp",
        font: {
            fontStyle: "italic",
            fontSize: "12dp"
        },
        id: "org"
    });
    $.__views.personal.add($.__views.org);
    $.__views.__alloyId40 = Ti.UI.createView({
        bottom: 0,
        height: "1dp",
        backgroundColor: "#9a9a9a",
        id: "__alloyId40"
    });
    $.__views.personal.add($.__views.__alloyId40);
    $.__views.social = Ti.UI.createView({
        backgroundColor: "#ffffff",
        top: "144dp",
        left: "5dp",
        right: "5dp",
        height: "80dp",
        layout: "vertical",
        id: "social"
    });
    $.__views.index.add($.__views.social);
    $.__views.twitter = Ti.UI.createView({
        height: "39dp",
        id: "twitter"
    });
    $.__views.social.add($.__views.twitter);
    $.__views.twitterIcon = Ti.UI.createImageView({
        left: "10dp",
        image: "/img/post/btn-twitter-off.png",
        height: "30dp",
        width: "30dp",
        id: "twitterIcon"
    });
    $.__views.twitter.add($.__views.twitterIcon);
    $.__views.twitterText = Ti.UI.createLabel({
        color: "#000",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: "50dp",
        right: "5dp",
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        id: "twitterText",
        textid: "connectTwitter"
    });
    $.__views.twitter.add($.__views.twitterText);
    $.__views.__alloyId41 = Ti.UI.createView({
        height: "1dp",
        backgroundColor: "#ebebeb",
        id: "__alloyId41"
    });
    $.__views.social.add($.__views.__alloyId41);
    $.__views.facebook = Ti.UI.createView({
        height: "39dp",
        id: "facebook"
    });
    $.__views.social.add($.__views.facebook);
    $.__views.facebookIcon = Ti.UI.createImageView({
        left: "10dp",
        image: "/img/post/btn-facebook-off.png",
        height: "30dp",
        width: "30dp",
        id: "facebookIcon"
    });
    $.__views.facebook.add($.__views.facebookIcon);
    $.__views.facebookText = Ti.UI.createLabel({
        color: "#000",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: "50dp",
        right: "5dp",
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        id: "facebookText",
        textid: "connectFacebook"
    });
    $.__views.facebook.add($.__views.facebookText);
    $.__views.__alloyId42 = Ti.UI.createView({
        bottom: 0,
        height: "1dp",
        backgroundColor: "#9a9a9a",
        id: "__alloyId42"
    });
    $.__views.social.add($.__views.__alloyId42);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var User = require("User"), ui = require("ui"), userDetails = User.getUserDetails();
    $.loading = Alloy.createController("loading");
    $.name.text = userDetails.attributes.firstname + " " + userDetails.attributes.lastname;
    $.email.text = userDetails.email;
    userDetails.attributes.organization && ($.org.text = userDetails.attributes.organization);
    userDetails.attributes.title && ($.title.text = userDetails.attributes.title);
    $.avatar.image = User.generateAvatarURL();
    $.logout.addEventListener("click", function() {
        $.loading.start();
        $.index.add($.loading.getView());
        User.logout(function(e) {
            $.loading.stop();
            $.index.remove($.loading.getView());
            e.success ? Ti.App.fireEvent("app:logout") : ui.alert("logoutError", "logoutErrorText");
        });
    });
    $.avatar.addEventListener("click", function() {
        var od = Ti.UI.createOptionDialog({
            options: [ "Go", L("cancel") ],
            cancel: 1,
            title: L("gravatar")
        });
        od.addEventListener("click", function(e) {
            e.index === 0 && Ti.Platform.openURL("http://gravatar.com");
        });
        od.show();
    });
    User.confirmLogin.toFacebook() && fbOn();
    User.confirmLogin.toTwitter() && twitterOn();
    $.facebook.addEventListener("click", function() {
        User.confirmLogin.toFacebook() ? User.logoutFacebook(function(e) {
            fbOff();
        }) : User.linkToFacebook(function(e) {
            fbOn();
        });
    });
    $.twitter.addEventListener("click", function() {
        User.confirmLogin.toTwitter() ? User.logoutTwitter(function(e) {
            twitterOff();
        }) : User.linkToTwitter(function(e) {
            twitterOn();
        });
    });
    exports.fireEvent = $.index.fireEvent;
    exports.addEventListener = $.index.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;