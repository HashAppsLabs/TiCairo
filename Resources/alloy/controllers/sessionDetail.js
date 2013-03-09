function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createView({
        layout: "vertical",
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    $.__views.name = Ti.UI.createLabel({
        color: "#787878",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "10dp",
        left: "10dp",
        right: "10dp",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        id: "name"
    });
    $.__views.index.add($.__views.name);
    $.__views.presenter = Ti.UI.createLabel({
        color: "#787878",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "2dp",
        left: "10dp",
        right: "10dp",
        font: {
            fontSize: "12dp",
            fontStyle: "italic"
        },
        id: "presenter"
    });
    $.__views.index.add($.__views.presenter);
    $.__views.location = Ti.UI.createLabel({
        color: "#787878",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "2dp",
        left: "10dp",
        right: "10dp",
        font: {
            fontSize: "12dp",
            fontStyle: "italic"
        },
        id: "location"
    });
    $.__views.index.add($.__views.location);
    $.__views.description = Ti.UI.createLabel({
        color: "#000",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "20dp",
        left: "10dp",
        right: "10dp",
        font: {
            fontSize: "14dp"
        },
        id: "description"
    });
    $.__views.index.add($.__views.description);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var session = arguments[0];
    $.name.text = session.name;
    $.description.text = session.details;
    $.presenter.text = session.custom_fields.presenter;
    $.location.text = session.custom_fields.location;
    exports.fireEvent = $.index.fireEvent;
    exports.addEventListener = $.index.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;