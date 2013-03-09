function Controller() {
    function loadContent() {
        Session.getNext(function(e) {
            if (e.success) {
                var session = e.next;
                $.title.text = session.name;
                $.presenter.text = session.custom_fields.presenter;
                $.location.text = session.custom_fields.location;
                if ($.dailySchedule) {
                    var now = moment(), monDate = moment("Oct 22, 2012"), tueDate = moment("Oct 23, 2012");
                    day = "tuesday";
                    now.diff(monDate) < 0 ? day = "sunday" : now.diff(tueDate) < 0 && (day = "monday");
                    Session.getForDay(day, function(ev) {
                        if (e.success) {
                            var data = [];
                            for (var i = 0, l = ev.sessions.length; i < l; i++) data.push(new ui.AgendaRow(ev.sessions[i]));
                            $.dailySchedule.setData(data);
                        } else ui.alert("networkGenericErrorTitle", "agendaNetworkError");
                    });
                }
                Status.query(function(e) {
                    $.loading.stop();
                    $.index.remove($.loading.getView());
                    if (e.success) {
                        var data = [];
                        for (var i = 0, l = e.statuses.length; i < l; i++) {
                            var status = e.statuses[i];
                            if (status.photo && !status.photo.processed) continue;
                            data.push(new ui.StatusRow(status));
                        }
                        $.streamTable.setData(data);
                    } else ui.alert("networkGenericErrorTitle", "activityStreamError");
                }, 10);
            } else {
                Ti.API.error("error fetching initial content: " + JSON.stringify(e));
                ui.alert("networkGenericErrorTitle", "agendaNetworkError");
            }
        });
    }
    function startRefresh() {
        $.index.add($.loading.getView());
        $.loading.start();
        loadContent();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createView({
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    if (!Alloy.isTablet) {
        $.__views.dashboard = Ti.UI.createView({
            id: "dashboard"
        });
        $.__views.index.add($.__views.dashboard);
        $.__views.now = Ti.UI.createView({
            top: "10dp",
            left: "10dp",
            right: "10dp",
            height: "150dp",
            backgroundImage: "/img/home/now/dashboard-box1-talks.png",
            id: "now"
        });
        $.__views.dashboard.add($.__views.now);
        $.__views.title = Ti.UI.createLabel({
            color: "#ffffff",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            left: "5dp",
            right: "20dp",
            font: {
                fontWeight: "bold",
                fontSize: "18dp"
            },
            id: "title",
            text: "Morning Keynote"
        });
        $.__views.now.add($.__views.title);
        $.__views.presenter = Ti.UI.createLabel({
            color: "#ffffff",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            left: "5dp",
            right: "15dp",
            bottom: "20dp",
            ellipsize: !0,
            wordWrap: !1,
            minimumFontSize: "12dp",
            font: {
                fontSize: "12dp"
            },
            id: "presenter",
            text: "Jeff Haynie, CEO, Appcelerator"
        });
        $.__views.now.add($.__views.presenter);
        $.__views.location = Ti.UI.createLabel({
            color: "#ffffff",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            left: "5dp",
            right: "15dp",
            bottom: "5dp",
            ellipsize: !0,
            wordWrap: !1,
            minimumFontSize: "12dp",
            font: {
                fontSize: "12dp"
            },
            id: "location",
            text: "Grand Ballroom"
        });
        $.__views.now.add($.__views.location);
        $.__views.stream = Ti.UI.createView(function() {
            var o = {};
            _.extend(o, {
                top: "170dp",
                left: "10dp",
                right: "10dp",
                bottom: 0
            });
            Alloy.isTablet && _.extend(o, {
                top: "50dp",
                left: 0,
                bottom: 0,
                right: 0,
                separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE
            });
            _.extend(o, {
                id: "stream"
            });
            return o;
        }());
        $.__views.dashboard.add($.__views.stream);
        $.__views.streamTable = Ti.UI.createTableView(function() {
            var o = {};
            _.extend(o, {
                width: Ti.UI.FILL,
                height: Ti.UI.FILL,
                showVerticalScrollIndicator: !0,
                separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
                backgroundColor: "transparent"
            });
            Alloy.isTablet && _.extend(o, {
                top: "45dp"
            });
            _.extend(o, {
                id: "streamTable"
            });
            return o;
        }());
        $.__views.stream.add($.__views.streamTable);
    }
    if (Alloy.isTablet) {
        $.__views.tabletDash = Ti.UI.createView({
            id: "tabletDash"
        });
        $.__views.index.add($.__views.tabletDash);
        $.__views.nowContainer = Ti.UI.createView({
            top: 0,
            left: 0,
            width: "320dp",
            bottom: "100dp",
            id: "nowContainer"
        });
        $.__views.tabletDash.add($.__views.nowContainer);
        $.__views.now = Ti.UI.createView({
            top: "10dp",
            left: "10dp",
            right: "10dp",
            height: "150dp",
            backgroundImage: "/img/home/now/dashboard-box1-talks.png",
            id: "now"
        });
        $.__views.nowContainer.add($.__views.now);
        $.__views.title = Ti.UI.createLabel({
            color: "#ffffff",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            left: "5dp",
            right: "20dp",
            font: {
                fontWeight: "bold",
                fontSize: "18dp"
            },
            id: "title",
            text: "Morning Keynote"
        });
        $.__views.now.add($.__views.title);
        $.__views.presenter = Ti.UI.createLabel({
            color: "#ffffff",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            left: "5dp",
            right: "15dp",
            bottom: "20dp",
            ellipsize: !0,
            wordWrap: !1,
            minimumFontSize: "12dp",
            font: {
                fontSize: "12dp"
            },
            id: "presenter",
            text: "Jeff Haynie, CEO, Appcelerator"
        });
        $.__views.now.add($.__views.presenter);
        $.__views.location = Ti.UI.createLabel({
            color: "#ffffff",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            left: "5dp",
            right: "15dp",
            bottom: "5dp",
            ellipsize: !0,
            wordWrap: !1,
            minimumFontSize: "12dp",
            font: {
                fontSize: "12dp"
            },
            id: "location",
            text: "Grand Ballroom"
        });
        $.__views.now.add($.__views.location);
        $.__views.agendaPeek = Ti.UI.createView({
            backgroundColor: "#ffffff",
            top: "175dp",
            left: "10dp",
            bottom: "10dp",
            right: "10dp",
            id: "agendaPeek"
        });
        $.__views.nowContainer.add($.__views.agendaPeek);
        $.__views.agendaHeader = Ti.UI.createLabel({
            color: "#0574bf",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            font: {
                fontFamily: "Quicksand-Bold",
                fontSize: "18dp"
            },
            top: "10dp",
            id: "agendaHeader",
            textid: "sunday"
        });
        $.__views.agendaPeek.add($.__views.agendaHeader);
        $.__views.dailySchedule = Ti.UI.createTableView({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            showVerticalScrollIndicator: !0,
            separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
            backgroundColor: "transparent",
            top: "50dp",
            left: "10dp",
            right: "10dp",
            bottom: "10dp",
            id: "dailySchedule"
        });
        $.__views.agendaPeek.add($.__views.dailySchedule);
        $.__views.__alloyId18 = Ti.UI.createView({
            bottom: 0,
            height: "1dp",
            backgroundColor: "#9a9a9a",
            id: "__alloyId18"
        });
        $.__views.agendaPeek.add($.__views.__alloyId18);
        $.__views.streamContainer = Ti.UI.createView({
            top: 0,
            right: 0,
            left: "320dp",
            bottom: "100dp",
            id: "streamContainer"
        });
        $.__views.tabletDash.add($.__views.streamContainer);
        $.__views.streamPeek = Ti.UI.createView({
            top: "10dp",
            left: "10dp",
            bottom: "10dp",
            right: "10dp",
            id: "streamPeek"
        });
        $.__views.streamContainer.add($.__views.streamPeek);
        $.__views.streamHeader = Ti.UI.createView({
            backgroundColor: "#ffffff",
            top: 0,
            left: 0,
            right: 0,
            height: "35dp",
            id: "streamHeader"
        });
        $.__views.streamPeek.add($.__views.streamHeader);
        $.__views.headerLabel = Ti.UI.createLabel({
            color: "#373e47",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            left: "5dp",
            font: {
                fontFamily: "Quicksand-Bold",
                fontSize: "14dp"
            },
            id: "headerLabel",
            textid: "activityStream"
        });
        $.__views.streamHeader.add($.__views.headerLabel);
        $.__views.__alloyId19 = Ti.UI.createView({
            bottom: 0,
            height: "1dp",
            backgroundColor: "#9a9a9a",
            id: "__alloyId19"
        });
        $.__views.streamHeader.add($.__views.__alloyId19);
        $.__views.streamTable = Ti.UI.createTableView(function() {
            var o = {};
            _.extend(o, {
                width: Ti.UI.FILL,
                height: Ti.UI.FILL,
                showVerticalScrollIndicator: !0,
                separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
                backgroundColor: "transparent"
            });
            Alloy.isTablet && _.extend(o, {
                top: "45dp"
            });
            _.extend(o, {
                id: "streamTable"
            });
            return o;
        }());
        $.__views.streamPeek.add($.__views.streamTable);
    }
    if (Alloy.isTablet) {
        $.__views.sponsorsContainer = Ti.UI.createView({
            bottom: 0,
            left: 0,
            right: 0,
            height: "100dp",
            id: "sponsorsContainer"
        });
        $.__views.index.add($.__views.sponsorsContainer);
        $.__views.sponsorHeader = Ti.UI.createLabel({
            color: "#787878",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            top: 0,
            textAlign: "center",
            font: {
                fontFamily: "Quicksand-Bold",
                fontSize: "14dp"
            },
            id: "sponsorHeader",
            textid: "sponsorHeader"
        });
        $.__views.sponsorsContainer.add($.__views.sponsorHeader);
        $.__views.sponsorBox = Ti.UI.createView({
            backgroundColor: "#ffffff",
            top: "25dp",
            left: "10dp",
            right: "10dp",
            bottom: "10dp",
            id: "sponsorBox"
        });
        $.__views.sponsorsContainer.add($.__views.sponsorBox);
        $.__views.__alloyId20 = Ti.UI.createScrollView({
            scrollType: "horizontal",
            id: "__alloyId20"
        });
        $.__views.sponsorBox.add($.__views.__alloyId20);
        $.__views.horizontalContainer = Ti.UI.createView({
            height: "60dp",
            width: "810dp",
            layout: "horizontal",
            id: "horizontalContainer"
        });
        $.__views.__alloyId20.add($.__views.horizontalContainer);
        $.__views.__alloyId21 = Ti.UI.createView({
            width: "15dp",
            id: "__alloyId21"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId21);
        $.__views.__alloyId22 = Ti.UI.createImageView({
            image: "/img/home/sponsors/redhat.png",
            height: "28",
            width: "156dp",
            id: "__alloyId22"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId22);
        $.__views.__alloyId23 = Ti.UI.createView({
            width: "15dp",
            id: "__alloyId23"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId23);
        $.__views.__alloyId24 = Ti.UI.createImageView({
            image: "/img/home/sponsors/denso.png",
            width: "76dp",
            height: "28dp",
            id: "__alloyId24"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId24);
        $.__views.__alloyId25 = Ti.UI.createView({
            width: "15dp",
            id: "__alloyId25"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId25);
        $.__views.__alloyId26 = Ti.UI.createImageView({
            image: "/img/home/sponsors/box.png",
            width: "42dp",
            height: "30dp",
            id: "__alloyId26"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId26);
        $.__views.__alloyId27 = Ti.UI.createView({
            width: "15dp",
            id: "__alloyId27"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId27);
        $.__views.__alloyId28 = Ti.UI.createImageView({
            image: "/img/home/sponsors/utest.png",
            width: "65dp",
            height: "26dp",
            id: "__alloyId28"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId28);
        $.__views.__alloyId29 = Ti.UI.createView({
            width: "15dp",
            id: "__alloyId29"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId29);
        $.__views.__alloyId30 = Ti.UI.createImageView({
            image: "/img/home/sponsors/venturebeat.png",
            width: "136dp",
            height: "26dp",
            id: "__alloyId30"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId30);
        $.__views.__alloyId31 = Ti.UI.createView({
            width: "15dp",
            id: "__alloyId31"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId31);
        $.__views.__alloyId32 = Ti.UI.createImageView({
            image: "/img/home/sponsors/challengepost.png",
            width: "116dp",
            height: "33dp",
            id: "__alloyId32"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId32);
        $.__views.__alloyId33 = Ti.UI.createView({
            width: "15dp",
            id: "__alloyId33"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId33);
        $.__views.__alloyId34 = Ti.UI.createImageView({
            image: "/img/home/sponsors/centrify.png",
            width: "95dp",
            height: "33dp",
            id: "__alloyId34"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId34);
        $.__views.__alloyId35 = Ti.UI.createView({
            width: "15dp",
            id: "__alloyId35"
        });
        $.__views.horizontalContainer.add($.__views.__alloyId35);
        $.__views.__alloyId36 = Ti.UI.createView({
            bottom: 0,
            height: "1dp",
            backgroundColor: "#9a9a9a",
            id: "__alloyId36"
        });
        $.__views.sponsorBox.add($.__views.__alloyId36);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ui = require("ui"), moment = require("moment"), Status = require("Status"), Session = require("Session");
    $.loading = Alloy.createController("loading");
    $.index.add($.loading.getView());
    Ti.App.addEventListener("app:status.update", startRefresh);
    $.index.addEventListener("focus", startRefresh);
    $.streamTable.addEventListener("click", function() {
        $.fireEvent("nav", {
            name: "stream"
        });
    });
    $.now.addEventListener("click", function() {
        $.fireEvent("nav", {
            name: "agenda"
        });
    });
    exports.fireEvent = $.index.fireEvent;
    exports.addEventListener = $.index.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;