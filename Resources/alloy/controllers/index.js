function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createWindow({
        navBarHidden: !0,
        backgroundImage: "/img/general/bg-interior.png",
        exitOnClose: "true",
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    if (Alloy.isTablet) {
        $.__views.clouds = Ti.UI.createImageView({
            height: "1024dp",
            width: "1024dp",
            bottom: 0,
            image: "/img/general/bg-clouds-tablet.png",
            zIndex: -1,
            id: "clouds"
        });
        $.__views.index.add($.__views.clouds);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var User = require("User"), ui = require("ui");
    Ti.Facebook.appid = Ti.App.Properties.getString("ti.facebook.appid");
    Ti.Facebook.permissions = [ "publish_stream" ];
    Ti.Network.online || ui.alert("networkErrTitle", "networkErrMsg");
    $.login = Alloy.createController("login");
    if (User.confirmLogin()) {
        $.main = Alloy.createController("main");
        $.clouds && $.index.remove($.clouds);
        $.index.backgroundImage = "/img/general/bg-interior.png";
        $.index.add($.main.getView());
        $.main.init();
    } else {
        $.index.backgroundImage = "/img/general/bg-cloud.png";
        $.index.add($.login.getView());
        $.login.init();
    }
    $.login.addEventListener("loginSuccess", function(e) {
        $.main = Alloy.createController("main");
        $.clouds && $.index.remove($.clouds);
        $.index.backgroundImage = "/img/general/bg-interior.png";
        $.index.add($.main.getView());
        ui.zoom($.login.getView(), function() {
            ui.unzoom($.main.getView(), function() {
                $.main.init();
            });
        });
    });
    Ti.App.addEventListener("app:logout", function(e) {
        $.clouds && $.index.add($.clouds);
        $.index.backgroundImage = "/img/general/bg-cloud.png";
        $.index.add($.login.getView());
        $.login.init();
        ui.zoom($.main.getView(), function() {
            ui.unzoom($.login.getView());
        });
    });
    Alloy.isTablet || ($.index.orientationModes = [ Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ]);
    Ti.Platform.osname === "android" && $.index.addEventListener("android:back", function() {
        var od = Ti.UI.createOptionDialog({
            title: L("leave"),
            options: [ L("ok"), L("cancel") ],
            cancel: 1
        });
        od.addEventListener("click", function(e) {
            e.index === 0 && $.index.close();
        });
        od.show();
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;