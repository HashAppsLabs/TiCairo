function Controller() {
    function updateCount() {
        var startNumber = currentBlob ? 118 : 140;
        count = startNumber - $.post.value.length;
        $.characters.color = count >= 0 ? "#000" : "#ff0000";
        $.characters.text = count;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.postContainer = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            backgroundColor: "#ffffff",
            top: "50dp",
            left: "5dp",
            right: "5dp",
            bottom: "5dp"
        });
        Alloy.isTablet && _.extend(o, {
            top: "5dp"
        });
        _.extend(o, {
            id: "postContainer"
        });
        return o;
    }());
    $.addTopLevelView($.__views.postContainer);
    $.__views.post = Ti.UI.createTextArea({
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        autocorrect: !0,
        top: "5dp",
        left: "5dp",
        right: "5dp",
        bottom: "85dp",
        font: {
            fontSize: "14dp"
        },
        id: "post"
    });
    $.__views.postContainer.add($.__views.post);
    $.__views.twitter = Ti.UI.createView({
        bottom: "10dp",
        left: "5dp",
        backgroundImage: "/img/post/btn-twitter-off.png",
        height: "30dp",
        width: "30dp",
        id: "twitter"
    });
    $.__views.postContainer.add($.__views.twitter);
    $.__views.facebook = Ti.UI.createView({
        bottom: "10dp",
        left: "45dp",
        backgroundImage: "/img/post/btn-facebook-off.png",
        height: "30dp",
        width: "30dp",
        id: "facebook"
    });
    $.__views.postContainer.add($.__views.facebook);
    $.__views.camera = Ti.UI.createView({
        bottom: "55dp",
        left: "5dp",
        height: "30dp",
        width: "30dp",
        id: "camera"
    });
    $.__views.postContainer.add($.__views.camera);
    $.__views.camicon = Ti.UI.createImageView({
        image: "/img/post/btn-add-photo.png",
        id: "camicon"
    });
    $.__views.camera.add($.__views.camicon);
    $.__views.imagePreview = Ti.UI.createView({
        visible: !1,
        opacity: 0,
        bottom: "55dp",
        left: "5dp",
        height: "55dp",
        width: "55dp",
        id: "imagePreview"
    });
    $.__views.postContainer.add($.__views.imagePreview);
    $.__views.preview = Ti.UI.createImageView({
        bottom: 0,
        left: 0,
        height: "44dp",
        width: "44dp",
        id: "preview"
    });
    $.__views.imagePreview.add($.__views.preview);
    $.__views.deleteButton = Ti.UI.createImageView({
        top: 0,
        right: 0,
        height: "22dp",
        width: "22dp",
        image: "/img/post/close.png",
        id: "deleteButton"
    });
    $.__views.imagePreview.add($.__views.deleteButton);
    $.__views.submit = Ti.UI.createButton({
        width: "65dp",
        height: "30dp",
        backgroundImage: "/img/post/btn-post-default.png",
        backgroundSelectedImage: "/img/post/btn-post-pressed.png",
        bottom: "10dp",
        right: "5dp",
        id: "submit"
    });
    $.__views.postContainer.add($.__views.submit);
    $.__views.characters = Ti.UI.createLabel({
        color: "#cdcdcd",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        bottom: "10dp",
        right: "75dp",
        font: {
            fontSize: "10dp"
        },
        visible: !1,
        id: "characters",
        text: "140"
    });
    $.__views.postContainer.add($.__views.characters);
    $.__views.divider = Ti.UI.createView({
        bottom: "50dp",
        height: "1dp",
        backgroundColor: "#cdcdcd",
        left: "5dp",
        right: "5dp",
        id: "divider"
    });
    $.__views.postContainer.add($.__views.divider);
    if (!Alloy.isTablet) {
        $.__views.__alloyId38 = Ti.UI.createView({
            bottom: 0,
            height: "1dp",
            backgroundColor: "#9a9a9a",
            id: "__alloyId38"
        });
        $.__views.postContainer.add($.__views.__alloyId38);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ui = require("ui"), Status = require("Status"), User = require("User"), Cloud = require("ti.cloud"), currentBlob = null;
    $.loading = Alloy.createController("loading");
    $.post.addEventListener("focus", function(e) {
        $.fireEvent("focus", e);
    });
    $.post.addEventListener("blur", function(e) {
        $.fireEvent("blur", e);
    });
    $.focus = function() {
        $.post.focus();
    };
    $.blur = function() {
        $.post.blur();
    };
    $.camera.addEventListener("click", function() {
        var options = [ L("camera") ];
        options.push(L("photoGallery"));
        options.push(L("cancel"));
        var od = Ti.UI.createOptionDialog({
            options: options,
            cancel: options.length > 2 ? 2 : 1,
            title: L("attachPhoto")
        });
        od.addEventListener("click", function(e) {
            var callbacks = {
                success: function(e) {
                    currentBlob = e.media;
                    $.preview.image = currentBlob;
                    $.camera.animate({
                        opacity: 0,
                        duration: 250
                    }, function() {
                        $.imagePreview.visible = !0;
                        $.imagePreview.animate({
                            opacity: 1,
                            duration: 250
                        });
                        updateCount();
                    });
                },
                error: function(e) {
                    ui.alert("mediaErrorTitle", "mediaErrorText");
                }
            };
            e.index === 0 ? Ti.Media.showCamera(callbacks) : e.index === 1 && options.length > 2 && Ti.Media.openPhotoGallery(callbacks);
        });
        od.show({
            view: $.camera
        });
    });
    $.deleteButton.addEventListener("click", function() {
        $.imagePreview.animate({
            opacity: 0,
            duration: 250
        }, function() {
            $.camera.animate({
                opacity: 1,
                duration: 250
            }, function() {
                $.imagePreview.visible = !1;
                $.preview.image = "";
                currentBlob = null;
                updateCount();
            });
        });
    });
    var fbOn = !1;
    $.facebook.addEventListener("click", function() {
        if (!fbOn) {
            function setOn() {
                fbOn = !0;
                $.facebook.backgroundImage = "/img/post/btn-facebook-on.png";
            }
            User.confirmLogin.toFacebook() ? setOn() : User.linkToFacebook(function(e) {
                setOn();
            });
        } else {
            fbOn = !1;
            $.facebook.backgroundImage = "/img/post/btn-facebook-off.png";
        }
    });
    var twitterOn = !1;
    $.twitter.addEventListener("click", function() {
        if (!twitterOn) {
            function setOn() {
                twitterOn = !0;
                $.twitter.backgroundImage = "/img/post/btn-twitter-on.png";
                updateCount();
                $.characters.visible = !0;
            }
            User.confirmLogin.toTwitter() ? setOn() : User.linkToTwitter(function(e) {
                setOn();
            });
        } else {
            twitterOn = !1;
            $.characters.visible = !0;
            $.twitter.backgroundImage = "/img/post/btn-twitter-off.png";
            updateCount();
            $.characters.visible = !1;
        }
    });
    var count = 140;
    $.post.addEventListener("change", updateCount);
    $.submit.addEventListener("click", function() {
        if ($.post.value || currentBlob) {
            if (twitterOn && currentBlob && $.post.value.length > 118 || twitterOn && !currentBlob && $.post.value.length > 140) {
                ui.alert("tooLong", "tooLongMessage");
                return;
            }
            var currentPost = $.post.value;
            $.postContainer.add($.loading.getView());
            $.loading.start();
            Status.create({
                message: currentPost === "" ? "Just uploaded from @codestrong 2012!" : currentPost,
                photo: currentBlob
            }, function(e) {
                if (e.success) if (twitterOn || fbOn) {
                    var args = {
                        success: function(ev) {
                            $.loading.stop();
                            $.postContainer.remove($.loading.getView());
                            ui.alert("updateSuccessTitle", "updateSuccessText");
                            $.fireEvent("success");
                            Ti.App.fireEvent("app:status.update", {
                                withPhoto: currentBlob ? !0 : !1
                            });
                        },
                        error: function(ev) {
                            $.loading.stop();
                            $.postContainer.remove($.loading.getView());
                            Ti.API.error("Error on social post: " + ev);
                            ui.alert("updateErrorTitle", "updateErrorText");
                        }
                    };
                    if (twitterOn) if (currentBlob) setTimeout(function() {
                        Cloud.Statuses.query({
                            limit: 1,
                            where: {
                                user_id: e.status.user.id
                            },
                            order: "-created_at"
                        }, function(pe) {
                            if (pe.success) {
                                args.message = currentPost + ": " + pe.statuses[0].photo.urls.original;
                                User.tweet(args);
                            } else args.error(pe);
                        });
                    }, 5000); else {
                        args.message = currentPost;
                        User.tweet(args);
                    }
                    if (fbOn) {
                        args.message = currentPost;
                        args.image = currentBlob;
                        User.facebookPost(args);
                    }
                } else {
                    $.loading.stop();
                    $.postContainer.remove($.loading.getView());
                    ui.alert("updateSuccessTitle", "updateSuccessText");
                    $.fireEvent("success");
                    Ti.App.fireEvent("app:status.update", {
                        withPhoto: currentBlob ? !0 : !1
                    });
                } else {
                    $.loading.stop();
                    $.postContainer.remove($.loading.getView());
                    Ti.API.error("Error on ACS post: " + e);
                    ui.alert("updateErrorTitle", "updateErrorText");
                }
            });
        }
    });
    $.reset = function() {
        fbOn = !1;
        $.facebook.backgroundImage = "/img/post/btn-facebook-off.png";
        twitterOn = !1;
        $.twitter.backgroundImage = "/img/post/btn-twitter-off.png";
        $.post.value = "";
        count = 140;
        $.characters.text = count;
        $.characters.visible = !1;
        currentBlob = null;
        $.imagePreview.visible = !1;
        $.imagePreview.opacity = 0;
        $.preview.image = "";
        $.camera.opacity = 1;
    };
    exports.fireEvent = $.postContainer.fireEvent;
    exports.addEventListener = $.postContainer.addEventListener;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;