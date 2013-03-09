function Controller() {
    function loadRows() {
        Status.query(function(e) {
            $.loading.stop();
            $.index.remove($.loading.getView());
            if (e.success) {
                var td = [];
                for (var i = 0, l = e.statuses.length; i < l; i++) {
                    var status = e.statuses[i];
                    if (status.photo && !status.photo.processed) continue;
                    td.push(new ui.StatusRow(status));
                }
                $.table.setData(td);
            } else ui.alert("networkGenericErrorTitle", "activityStreamError");
        }, 30);
    }
    function startRefresh() {
        $.index.add($.loading.getView());
        $.loading.start();
        loadRows();
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
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: "35dp",
        id: "header"
    });
    $.__views.index.add($.__views.header);
    $.__views.headerLabel = Ti.UI.createLabel({
        color: "#373e47",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: "10dp",
        font: {
            fontFamily: "Quicksand-Bold",
            fontSize: "14dp"
        },
        id: "headerLabel",
        textid: "activityStream"
    });
    $.__views.header.add($.__views.headerLabel);
    $.__views.refresh = Ti.UI.createView({
        width: "50dp",
        right: 0,
        id: "refresh"
    });
    $.__views.header.add($.__views.refresh);
    $.__views.refreshIcon = Ti.UI.createImageView({
        right: "10dp",
        image: "/img/general/refresh.png",
        height: "20dp",
        width: "20dp",
        id: "refreshIcon"
    });
    $.__views.refresh.add($.__views.refreshIcon);
    $.__views.__alloyId43 = Ti.UI.createView({
        bottom: 0,
        height: "1dp",
        backgroundColor: "#9a9a9a",
        id: "__alloyId43"
    });
    $.__views.header.add($.__views.__alloyId43);
    $.__views.table = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        showVerticalScrollIndicator: !0,
        separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
        backgroundColor: "transparent",
        top: "50dp",
        left: "10dp",
        bottom: 0,
        right: "10dp",
        id: "table"
    });
    $.__views.index.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ui = require("ui"), Status = require("Status");
    $.loading = Alloy.createController("loading");
    $.index.add($.loading.getView());
    Ti.App.addEventListener("app:status.update", startRefresh);
    $.index.addEventListener("focus", startRefresh);
    $.refresh.addEventListener("click", startRefresh);
    $.table.addEventListener("click", function(e) {
        var statusObject;
        statusObject = e.rowData.statusObject;
        if (statusObject.photo) {
            var w = Ti.UI.createView({
                top: "5dp",
                left: "5dp",
                right: "5dp",
                bottom: "5dp"
            }), close = Ti.UI.createImageView({
                image: "/img/post/close.png",
                top: 0,
                left: 0,
                zIndex: 999
            });
            w.add(close);
            var container = Ti.UI.createView({
                backgroundColor: "#000",
                top: "10dp",
                left: "10dp",
                right: "10dp",
                bottom: "10dp"
            });
            w.add(container);
            var scroll = Ti.UI.createScrollView({
                contentHeight: "auto",
                contentWidth: "auto",
                maxZoomScale: 5,
                minZoomScale: 0.75
            });
            scroll.add(Ti.UI.createImageView({
                image: statusObject.photo.urls.medium_640
            }));
            container.add(scroll);
            $.index.parent.parent.add(w);
            close.addEventListener("click", function() {
                $.index.parent.parent.remove(w);
                w = null;
                container = null;
                web = null;
                close = null;
            });
        }
    });
    exports.fireEvent = $.index.fireEvent;
    exports.addEventListener = $.index.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;