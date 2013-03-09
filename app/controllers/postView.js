$.backdrop.addEventListener('click', function() {
	$.postFormView.blur();
	$.fireEvent('blur');
});

$.postFormView.addEventListener('blur', function() {
	$.fireEvent('blur');
});

$.postFormView.addEventListener('success', function() {
	$.postFormView.reset();
	$.postFormView.blur();
	$.fireEvent('success');
});

$.showForm = function(cb) {
	$.postContainer.animate({
		top:0,
		duration:250
	}, function() {
		$.postFormView.focus();
		cb && cb();
	});
};

$.hideForm = function(cb) {
	$.postContainer.animate({
		top:'-320dp',
		duration:250
	}, function() {
		cb && cb();
	});
};

exports.fireEvent = $.container.fireEvent;
exports.addEventListener = $.container.addEventListener;