function Controller() {
    function doTab(name, offset, noEvent) {
        _.each([ "home", "agenda", "post", "stream", "venue" ], function(item) {
            item !== "post" && (name === item ? $[item + "Icon"].image = "/img/tabs/btn-" + item + "-pressed.png" : $[item + "Icon"].image = "/img/tabs/btn-" + item + "-default.png");
        });
        noEvent || $.fireEvent("change", {
            name: name
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.root = Ti.UI.createView({
        backgroundImage: "/img/tabs/bg-tab.png",
        height: "46dp",
        bottom: 0,
        id: "root"
    });
    $.addTopLevelView($.__views.root);
    $.__views.home = Ti.UI.createView({
        zIndex: 10,
        width: "20%",
        id: "home"
    });
    $.__views.root.add($.__views.home);
    $.__views.homeIcon = Ti.UI.createImageView({
        image: "/img/tabs/btn-home-pressed.png",
        id: "homeIcon"
    });
    $.__views.home.add($.__views.homeIcon);
    $.__views.agenda = Ti.UI.createView({
        zIndex: 10,
        width: "20%",
        id: "agenda"
    });
    $.__views.root.add($.__views.agenda);
    $.__views.agendaIcon = Ti.UI.createImageView({
        image: "/img/tabs/btn-agenda-default.png",
        id: "agendaIcon"
    });
    $.__views.agenda.add($.__views.agendaIcon);
    $.__views.post = Ti.UI.createView({
        zIndex: 10,
        width: "20%",
        id: "post"
    });
    $.__views.root.add($.__views.post);
    $.__views.postIcon = Ti.UI.createButton({
        height: "46dp",
        width: "64dp",
        backgroundImage: "/img/tabs/btn-post-default.png",
        backgroundSelectedImage: "/img/tabs/btn-post-pressed.png",
        id: "postIcon"
    });
    $.__views.post.add($.__views.postIcon);
    $.__views.stream = Ti.UI.createView({
        zIndex: 10,
        width: "20%",
        id: "stream"
    });
    $.__views.root.add($.__views.stream);
    $.__views.streamIcon = Ti.UI.createImageView({
        image: "/img/tabs/btn-stream-default.png",
        id: "streamIcon"
    });
    $.__views.stream.add($.__views.streamIcon);
    $.__views.venue = Ti.UI.createView({
        zIndex: 10,
        width: "20%",
        id: "venue"
    });
    $.__views.root.add($.__views.venue);
    $.__views.venueIcon = Ti.UI.createImageView({
        image: "/img/tabs/btn-venue-default.png",
        id: "venueIcon"
    });
    $.__views.venue.add($.__views.venueIcon);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var tabWidth = Ti.Platform.displayCaps.platformWidth / 5, tabPositions = {
        home: 0,
        agenda: tabWidth,
        post: tabWidth * 2,
        stream: tabWidth * 3,
        venue: tabWidth * 4
    };
    $.home.left = tabPositions.home;
    $.agenda.left = tabPositions.agenda;
    $.post.left = tabPositions.post;
    $.stream.left = tabPositions.stream;
    $.venue.left = tabPositions.venue;
    $.home.addEventListener("click", function() {
        doTab("home", tabPositions.home);
    });
    $.agenda.addEventListener("click", function() {
        doTab("agenda", tabPositions.agenda);
    });
    $.postIcon.addEventListener("click", function() {
        $.fireEvent("change", {
            name: "post"
        });
    });
    $.stream.addEventListener("click", function() {
        doTab("stream", tabPositions.stream);
    });
    $.venue.addEventListener("click", function() {
        doTab("venue", tabPositions.venue);
    });
    $.setTab = function(name) {
        doTab(name, tabPositions[name], !0);
    };
    exports.fireEvent = $.root.fireEvent;
    exports.addEventListener = $.root.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;