function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createView({
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    $.__views.backdrop = Ti.UI.createView({
        backgroundColor: "#232323",
        opacity: 0.75,
        id: "backdrop"
    });
    $.__views.index.add($.__views.backdrop);
    $.__views.container = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "container"
    });
    $.__views.index.add($.__views.container);
    $.__views.loader = Ti.UI.createImageView({
        width: "75dp",
        height: "46dp",
        id: "loader"
    });
    $.__views.container.add($.__views.loader);
    $.__views.message = Ti.UI.createLabel({
        color: "#ebebeb",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        textAlign: "center",
        font: {
            fontSize: "12dp",
            fontWeight: "bold",
            fontFamily: "Quicksand-Bold"
        },
        id: "message",
        textid: "working"
    });
    $.__views.container.add($.__views.message);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.loader.images = [ "/img/loading/load-cloud1.png", "/img/loading/load-cloud2.png", "/img/loading/load-cloud3.png", "/img/loading/load-cloud4.png", "/img/loading/load-cloud5.png", "/img/loading/load-cloud6.png", "/img/loading/load-cloud7.png", "/img/loading/load-cloud8.png", "/img/loading/load-cloud9.png" ];
    $.start = function() {
        $.loader.start();
    };
    $.stop = function() {
        $.loader.stop();
    };
    $.setMessage = function(key) {
        $.message.text = L(key);
    };
    exports.fireEvent = $.index.fireEvent;
    exports.addEventListener = $.index.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;