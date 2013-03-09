var session = arguments[0];

$.name.text = session.name;
$.description.text = session.details;
$.presenter.text = session.custom_fields.presenter;
$.location.text = session.custom_fields.location;

exports.fireEvent = $.index.fireEvent;
exports.addEventListener = $.index.addEventListener;