var drawerWidth = 364; //tablet width scalar

//Set drawer width to  platform width for small form
if (!Alloy.isTablet) {
	drawerWidth = Ti.Platform.displayCaps.platformWidth;
	$.container.width = drawerWidth;
	$.container.right = drawerWidth*-1;
}

$.closeDrawer = function(cb) {
	//handle animation of self
	$.container.animate({
		right:'-'+drawerWidth,
		duration:250
	}, function() {
		$.fireEvent('close');
		cb && cb();
	});
};

$.openDrawer = function(controller, contextData) {
	//create the requested controller, and add it to the drawer
	var c = Alloy.createController(controller, contextData);
	$.content.add(c.getView());
	
	//handle animation of self
	$.container.animate({
		right:0,
		duration:250
	}, function() {
		$.fireEvent('open');
	});
};

//internal event handling
if ($.close) {
	$.close.addEventListener('click', function() {
		$.closeDrawer();
	});
}

exports.fireEvent = $.container.fireEvent;
exports.addEventListener = $.container.addEventListener;