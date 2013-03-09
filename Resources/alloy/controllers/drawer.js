function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            top: "45dp",
            bottom: 0,
            backgroundColor: "#e4e7ea"
        });
        Alloy.isTablet && _.extend(o, {
            top: "43dp",
            right: -364,
            width: 364
        });
        _.extend(o, {
            id: "container"
        });
        return o;
    }());
    $.addTopLevelView($.__views.container);
    if (Alloy.isTablet) {
        $.__views.underline = Ti.UI.createView({
            backgroundColor: "#0574bf",
            top: 0,
            height: "2dp",
            id: "underline"
        });
        $.__views.container.add($.__views.underline);
    }
    if (Alloy.isTablet) {
        $.__views.close = Ti.UI.createView({
            left: 0,
            width: "44dp",
            backgroundImage: "/img/general/vert-bar.png",
            id: "close"
        });
        $.__views.container.add($.__views.close);
        $.__views.closeIcon = Ti.UI.createImageView({
            image: "/img/drawer/btn-close.png",
            height: "18dp",
            width: "18dp",
            id: "closeIcon"
        });
        $.__views.close.add($.__views.closeIcon);
    }
    $.__views.content = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: "44dp",
            top: "2dp"
        });
        _.extend(o, {
            id: "content"
        });
        return o;
    }());
    $.__views.container.add($.__views.content);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var drawerWidth = 364;
    if (!Alloy.isTablet) {
        drawerWidth = Ti.Platform.displayCaps.platformWidth;
        $.container.width = drawerWidth;
        $.container.right = drawerWidth * -1;
    }
    $.closeDrawer = function(cb) {
        $.container.animate({
            right: "-" + drawerWidth,
            duration: 250
        }, function() {
            $.fireEvent("close");
            cb && cb();
        });
    };
    $.openDrawer = function(controller, contextData) {
        var c = Alloy.createController(controller, contextData);
        $.content.add(c.getView());
        $.container.animate({
            right: 0,
            duration: 250
        }, function() {
            $.fireEvent("open");
        });
    };
    $.close && $.close.addEventListener("click", function() {
        $.closeDrawer();
    });
    exports.fireEvent = $.container.fireEvent;
    exports.addEventListener = $.container.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;