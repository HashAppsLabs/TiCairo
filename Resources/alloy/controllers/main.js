function Controller() {
    function popDrawer() {
        var d = drawers.pop();
        d.closeDrawer(function() {
            $.container.remove(d.getView());
        });
        $.header.setBackVisible(drawers.length > 0);
    }
    function sectionNav(e) {
        if (currentSection !== sections[e.name]) if (e.name === "post") if (Alloy.isTablet) {
            if (!postViewShown) {
                $.content.add($.postView.getView());
                $.postView.getView().animate({
                    opacity: 1,
                    duration: 250
                }, function() {
                    $.postView.showForm(function() {
                        postViewShown = !0;
                    });
                });
            }
        } else {
            var w = Alloy.createController("postWindow");
            w.openWindow();
        } else {
            $.tabs && $.tabs.setTab(e.name);
            Alloy.isTablet && $.header.setNav(e.name);
            sections[e.name] || (sections[e.name] = Alloy.createController(e.name));
            var oldSection = currentSection;
            currentSection = sections[e.name];
            currentSection.addEventListener("nav", sectionNav);
            currentSection.getView().visible = !1;
            $.content.add(currentSection.getView());
            currentSection.fireEvent("focus");
            currentSection.getView().visible = !0;
            oldSection.getView().visible = !1;
            $.content.remove(oldSection.getView());
            oldSection.off("nav", sectionNav);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = Ti.UI.createView({
        opacity: 0,
        id: "container"
    });
    $.addTopLevelView($.__views.container);
    $.__views.content = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            top: "45dp"
        });
        Alloy.isHandheld && _.extend(o, {
            bottom: "46dp"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            bottom: 0
        });
        _.extend(o, {
            id: "content"
        });
        return o;
    }());
    $.__views.container.add($.__views.content);
    $.__views.header = Alloy.createController("header", {
        id: "header"
    });
    $.__views.header.setParent($.__views.container);
    if (!Alloy.isTablet) {
        $.__views.tabs = Alloy.createController("tabs", {
            id: "tabs"
        });
        $.__views.tabs.setParent($.__views.container);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var drawers = [], sections = {
        home: Alloy.createController("home")
    }, currentSection;
    currentSection = sections.home;
    $.content.add(currentSection.getView());
    currentSection.fireEvent("focus");
    currentSection.addEventListener("nav", sectionNav);
    Ti.App.addEventListener("app:open.drawer", function(e) {
        var d = Alloy.createController("drawer");
        drawers.push(d);
        $.container.add(d.getView());
        Alloy.isTablet || $.header.setBackVisible(!0);
        d.openDrawer(e.controller, e.contextData);
        d.addEventListener("close", function() {
            Ti.App.fireEvent("app:close.drawer", {
                controller: e.controller
            });
        });
    });
    $.header.addEventListener("back", popDrawer);
    var postViewShown = !1;
    if (Alloy.isTablet) {
        $.postView = Alloy.createController("postView");
        function dismissForm() {
            $.postView.hideForm(function() {
                $.postView.getView().animate({
                    opacity: 0,
                    duration: 250
                }, function() {
                    $.container.remove($.postView.getView());
                    postViewShown = !1;
                });
            });
        }
        $.postView.addEventListener("blur", dismissForm);
        $.postView.addEventListener("success", dismissForm);
    }
    $.tabs && $.tabs.addEventListener("change", sectionNav);
    $.header.addEventListener("change", sectionNav);
    Ti.App.addEventListener("app:logout", function() {
        while (drawers.length > 0) popDrawer();
        if (currentSection !== sections.home) {
            sectionNav({
                name: "home"
            });
            $.tabs && $.tabs.setTab("home");
            Alloy.isTablet && $.header.setNav("home");
        }
    });
    $.init = function(ready) {
        $.container.animate({
            opacity: 1,
            duration: 250
        }, function() {});
    };
    exports.fireEvent = $.container.fireEvent;
    exports.addEventListener = $.container.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;