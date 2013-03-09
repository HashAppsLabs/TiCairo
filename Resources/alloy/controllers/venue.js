function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = Ti.UI.createView({
        id: "container"
    });
    $.addTopLevelView($.__views.container);
    $.__views.headerViewContainer = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: "35dp",
        id: "headerViewContainer"
    });
    $.__views.container.add($.__views.headerViewContainer);
    $.__views.maps = Ti.UI.createView({
        backgroundColor: "#ffffff",
        top: "55dp",
        left: "10dp",
        right: "10dp",
        bottom: "10dp",
        id: "maps"
    });
    $.__views.container.add($.__views.maps);
    $.__views.scroller = Ti.UI.createScrollView(function() {
        var o = {};
        _.extend(o, {
            zoomScale: 0.5,
            maxZoomScale: 4,
            minZoomScale: 0.25,
            scrollType: "horizontal",
            contentWidth: 1376,
            contentHeight: 553
        });
        Alloy.isTablet && _.extend(o, {
            zoomScale: 1
        });
        _.extend(o, {
            id: "scroller"
        });
        return o;
    }());
    $.__views.maps.add($.__views.scroller);
    $.__views.venue = Ti.UI.createImageView({
        image: "/img/venue/venue-3rd-floor.png",
        id: "venue"
    });
    $.__views.scroller.add($.__views.venue);
    $.__views.__alloyId44 = Ti.UI.createView({
        bottom: 0,
        height: "1dp",
        backgroundColor: "#9a9a9a",
        id: "__alloyId44"
    });
    $.__views.maps.add($.__views.__alloyId44);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ui = require("ui");
    $.headerView = new ui.HeaderView({
        title: "venueCaps",
        optionWidth: 100,
        options: [ "thirdFloor", "fourthFloor" ]
    });
    $.headerViewContainer.add($.headerView);
    $.headerView.addEventListener("change", function(e) {
        e.selection === "thirdFloor" ? $.venue.image = "/img/venue/venue-3rd-floor.png" : $.venue.image = "/img/venue/venue-4th-floor.png";
    });
    $.container.addEventListener("focus", function() {
        $.venue.image = "/img/venue/venue-3rd-floor.png";
        $.headerView.goTo(0);
    });
    exports.fireEvent = $.container.fireEvent;
    exports.addEventListener = $.container.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;