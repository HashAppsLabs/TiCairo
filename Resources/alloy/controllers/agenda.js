function Controller() {
    function showDetail(e) {
        var sessionData;
        sessionData = e.rowData.sessionObject;
        Ti.App.fireEvent("app:open.drawer", {
            controller: "sessionDetail",
            contextData: sessionData
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createView({
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    $.__views.__alloyId8 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            layout: "horizontal",
            width: Ti.UI.SIZE
        });
        _.extend(o, {
            id: "__alloyId8"
        });
        return o;
    }());
    $.__views.index.add($.__views.__alloyId8);
    if (Alloy.isTablet) {
        $.__views.__alloyId9 = Ti.UI.createView({
            width: "33%",
            id: "__alloyId9"
        });
        $.__views.__alloyId8.add($.__views.__alloyId9);
        $.__views.sun = Ti.UI.createView({
            backgroundColor: "#ffffff",
            top: "10dp",
            left: "10dp",
            right: "10dp",
            bottom: "10dp",
            id: "sun"
        });
        $.__views.__alloyId9.add($.__views.sun);
        $.__views.__alloyId10 = Ti.UI.createLabel({
            color: "#0574bf",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            font: {
                fontFamily: "Quicksand-Bold",
                fontSize: "18dp"
            },
            top: "10dp",
            textAlign: "center",
            textid: "sunday",
            id: "__alloyId10"
        });
        $.__views.sun.add($.__views.__alloyId10);
        $.__views.sundayTable = Ti.UI.createTableView({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            showVerticalScrollIndicator: !0,
            separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
            backgroundColor: "transparent",
            top: "50dp",
            left: "10dp",
            right: "10dp",
            bottom: "10dp",
            id: "sundayTable"
        });
        $.__views.sun.add($.__views.sundayTable);
        $.__views.__alloyId11 = Ti.UI.createView({
            bottom: 0,
            height: "1dp",
            backgroundColor: "#9a9a9a",
            id: "__alloyId11"
        });
        $.__views.sun.add($.__views.__alloyId11);
    }
    if (Alloy.isTablet) {
        $.__views.__alloyId12 = Ti.UI.createView({
            width: "33%",
            id: "__alloyId12"
        });
        $.__views.__alloyId8.add($.__views.__alloyId12);
        $.__views.mon = Ti.UI.createView({
            backgroundColor: "#ffffff",
            top: "10dp",
            left: "10dp",
            right: "10dp",
            bottom: "10dp",
            id: "mon"
        });
        $.__views.__alloyId12.add($.__views.mon);
        $.__views.__alloyId13 = Ti.UI.createLabel({
            color: "#0574bf",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            font: {
                fontFamily: "Quicksand-Bold",
                fontSize: "18dp"
            },
            top: "10dp",
            textAlign: "center",
            textid: "monday",
            id: "__alloyId13"
        });
        $.__views.mon.add($.__views.__alloyId13);
        $.__views.mondayTable = Ti.UI.createTableView({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            showVerticalScrollIndicator: !0,
            separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
            backgroundColor: "transparent",
            top: "50dp",
            left: "10dp",
            right: "10dp",
            bottom: "10dp",
            id: "mondayTable"
        });
        $.__views.mon.add($.__views.mondayTable);
        $.__views.__alloyId14 = Ti.UI.createView({
            bottom: 0,
            height: "1dp",
            backgroundColor: "#9a9a9a",
            id: "__alloyId14"
        });
        $.__views.mon.add($.__views.__alloyId14);
    }
    if (Alloy.isTablet) {
        $.__views.__alloyId15 = Ti.UI.createView({
            width: "33%",
            id: "__alloyId15"
        });
        $.__views.__alloyId8.add($.__views.__alloyId15);
        $.__views.tue = Ti.UI.createView({
            backgroundColor: "#ffffff",
            top: "10dp",
            left: "10dp",
            right: "10dp",
            bottom: "10dp",
            id: "tue"
        });
        $.__views.__alloyId15.add($.__views.tue);
        $.__views.__alloyId16 = Ti.UI.createLabel({
            color: "#0574bf",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            font: {
                fontFamily: "Quicksand-Bold",
                fontSize: "18dp"
            },
            top: "10dp",
            textAlign: "center",
            textid: "tuesday",
            id: "__alloyId16"
        });
        $.__views.tue.add($.__views.__alloyId16);
        $.__views.tuesdayTable = Ti.UI.createTableView({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            showVerticalScrollIndicator: !0,
            separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
            backgroundColor: "transparent",
            top: "50dp",
            left: "10dp",
            right: "10dp",
            bottom: "10dp",
            id: "tuesdayTable"
        });
        $.__views.tue.add($.__views.tuesdayTable);
        $.__views.__alloyId17 = Ti.UI.createView({
            bottom: 0,
            height: "1dp",
            backgroundColor: "#9a9a9a",
            id: "__alloyId17"
        });
        $.__views.tue.add($.__views.__alloyId17);
    }
    if (!Alloy.isTablet) {
        $.__views.headerViewContainer = Ti.UI.createView({
            top: "10dp",
            left: "10dp",
            right: "10dp",
            height: "35dp",
            id: "headerViewContainer"
        });
        $.__views.__alloyId8.add($.__views.headerViewContainer);
    }
    if (!Alloy.isTablet) {
        $.__views.agendaTable = Ti.UI.createTableView({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            showVerticalScrollIndicator: !0,
            separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
            backgroundColor: "transparent",
            top: "55dp",
            left: "10dp",
            right: "10dp",
            bottom: "10dp",
            id: "agendaTable"
        });
        $.__views.__alloyId8.add($.__views.agendaTable);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("moment"), ui = require("ui"), Session = require("Session"), sunday = [], monday = [], tuesday = [], monDate = moment("Oct 22, 2012"), tueDate = moment("Oct 23, 2012");
    $.loading = Alloy.createController("loading");
    $.index.add($.loading.getView());
    $.loading.start();
    Session.getAll(function(e) {
        $.loading.stop();
        $.index.remove($.loading.getView());
        if (e.success) {
            var sessions = e.sessions;
            for (var i = 0, l = sessions.length; i < l; i++) {
                var session = sessions[i], row = ui.AgendaRow(session);
                debugger;
                sunday.push(row);
            }
            if (Alloy.isTablet) {
                $.sundayTable.setData(sunday);
                $.mondayTable.setData(monday);
                $.tuesdayTable.setData(tuesday);
            } else $.agendaTable.setData(sunday);
        } else {
            Ti.API.error("Error fetching session data: " + e);
            ui.alert("networkGenericErrorTitle", "agendaNetworkError");
        }
    });
    if (!Alloy.isTablet) {
        $.headerView = new ui.HeaderView({
            title: "agendaCaps",
            optionWidth: 70,
            options: [ "sun", "mon", "tue" ]
        });
        $.headerViewContainer.add($.headerView);
        $.headerView.addEventListener("change", function(e) {
            e.selection === "sun" ? $.agendaTable.setData(sunday) : e.selection === "mon" ? $.agendaTable.setData(monday) : $.agendaTable.setData(tuesday);
        });
        $.index.addEventListener("focus", function() {
            if ($.agendaTable && sunday.length > 0) {
                $.agendaTable && $.agendaTable.setData(sunday);
                $.headerView.goTo(0);
            }
        });
    }
    $.agendaTable && $.agendaTable.addEventListener("click", showDetail);
    $.sundayTable && $.sundayTable.addEventListener("click", showDetail);
    $.mondayTable && $.mondayTable.addEventListener("click", showDetail);
    $.tuesdayTable && $.tuesdayTable.addEventListener("click", showDetail);
    exports.fireEvent = $.index.fireEvent;
    exports.addEventListener = $.index.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;