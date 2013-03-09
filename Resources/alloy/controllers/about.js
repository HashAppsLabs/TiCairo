function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = Ti.UI.createView({
        id: "container"
    });
    $.addTopLevelView($.__views.container);
    $.__views.madeWith = Ti.UI.createImageView({
        top: "10dp",
        image: "/img/about/about-app-love.png",
        height: "13dp",
        width: "174dp",
        id: "madeWith"
    });
    $.__views.container.add($.__views.madeWith);
    $.__views.divider = Ti.UI.createView({
        top: "35dp",
        width: Ti.UI.FILL,
        height: "4dp",
        backgroundImage: "/img/about/divider-line-inset.png",
        id: "divider"
    });
    $.__views.container.add($.__views.divider);
    $.__views.content = Ti.UI.createView({
        backgroundColor: "#ffffff",
        top: "50dp",
        left: "10dp",
        right: "10dp",
        bottom: "10dp",
        id: "content"
    });
    $.__views.container.add($.__views.content);
    $.__views.innerContent = Ti.UI.createView({
        id: "innerContent"
    });
    $.__views.content.add($.__views.innerContent);
    $.__views.scroller = Ti.UI.createScrollView({
        id: "scroller",
        scrollType: "vertical",
        layout: "vertical"
    });
    $.__views.innerContent.add($.__views.scroller);
    $.__views.imgContainer = Ti.UI.createView({
        top: "10dp",
        bottom: "15dp",
        height: Ti.UI.SIZE,
        id: "imgContainer"
    });
    $.__views.scroller.add($.__views.imgContainer);
    $.__views.appcelerator = Ti.UI.createImageView({
        image: "/img/about/about-appc-logo.png",
        height: "32dp",
        width: "158dp",
        id: "appcelerator"
    });
    $.__views.imgContainer.add($.__views.appcelerator);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        color: "#607080",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        bottom: "5dp",
        textAlign: "left",
        font: {
            fontSize: "14dp"
        },
        textid: "aboutOneOne",
        id: "__alloyId0"
    });
    $.__views.scroller.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        color: "#607080",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        bottom: "5dp",
        textAlign: "left",
        font: {
            fontSize: "14dp"
        },
        textid: "aboutOneTwo",
        id: "__alloyId1"
    });
    $.__views.scroller.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        color: "#607080",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        bottom: "5dp",
        textAlign: "left",
        font: {
            fontSize: "14dp"
        },
        textid: "aboutOneThree",
        id: "__alloyId2"
    });
    $.__views.scroller.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#607080",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        bottom: "5dp",
        textAlign: "left",
        font: {
            fontSize: "14dp"
        },
        textid: "aboutOneFour",
        id: "__alloyId3"
    });
    $.__views.scroller.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        color: "#232323",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "15dp",
        left: "10dp",
        right: "10dp",
        textAlign: "left",
        font: {
            fontWeight: "bold",
            fontFamily: "Quicksand-Bold",
            fontSize: "18dp"
        },
        textid: "source",
        id: "__alloyId4"
    });
    $.__views.scroller.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        color: "#607080",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        bottom: "5dp",
        textAlign: "left",
        font: {
            fontSize: "14dp"
        },
        textid: "aboutTwo",
        id: "__alloyId5"
    });
    $.__views.scroller.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        color: "#232323",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "15dp",
        left: "10dp",
        right: "10dp",
        textAlign: "left",
        font: {
            fontWeight: "bold",
            fontFamily: "Quicksand-Bold",
            fontSize: "18dp"
        },
        textid: "specialThanks",
        id: "__alloyId6"
    });
    $.__views.scroller.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        color: "#607080",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        bottom: "5dp",
        textAlign: "left",
        font: {
            fontSize: "14dp"
        },
        textid: "aboutThree",
        id: "__alloyId7"
    });
    $.__views.scroller.add($.__views.__alloyId7);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.fireEvent = $.container.fireEvent;
    exports.addEventListener = $.container.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;