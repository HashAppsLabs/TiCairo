function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = Ti.UI.createView({
        opacity: 0,
        zIndex: 999,
        id: "container"
    });
    $.addTopLevelView($.__views.container);
    $.__views.backdrop = Ti.UI.createView({
        opacity: 0.5,
        backgroundColor: "#787878",
        id: "backdrop"
    });
    $.__views.container.add($.__views.backdrop);
    $.__views.tinyShadow = Ti.UI.createView({
        top: 0,
        width: "482dp",
        height: "2dp",
        backgroundColor: "#cdcdcd",
        zIndex: 9999,
        id: "tinyShadow"
    });
    $.__views.container.add($.__views.tinyShadow);
    $.__views.postContainer = Ti.UI.createView({
        backgroundColor: "#ffffff",
        top: "-320dp",
        height: "320dp",
        width: "480dp",
        id: "postContainer"
    });
    $.__views.container.add($.__views.postContainer);
    $.__views.postFormView = Alloy.createController("postFormView", {
        id: "postFormView"
    });
    $.__views.postFormView.setParent($.__views.postContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.backdrop.addEventListener("click", function() {
        $.postFormView.blur();
        $.fireEvent("blur");
    });
    $.postFormView.addEventListener("blur", function() {
        $.fireEvent("blur");
    });
    $.postFormView.addEventListener("success", function() {
        $.postFormView.reset();
        $.postFormView.blur();
        $.fireEvent("success");
    });
    $.showForm = function(cb) {
        $.postContainer.animate({
            top: 0,
            duration: 250
        }, function() {
            $.postFormView.focus();
            cb && cb();
        });
    };
    $.hideForm = function(cb) {
        $.postContainer.animate({
            top: "-320dp",
            duration: 250
        }, function() {
            cb && cb();
        });
    };
    exports.fireEvent = $.container.fireEvent;
    exports.addEventListener = $.container.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;