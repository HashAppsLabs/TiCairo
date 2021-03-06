require("behave").andSetup(this);

describe("the Session Model", function() {
    var Session = require("Session");
    it.eventually("fetches a list of sessions from the Codestrong agenda", function(done) {
        Session.getAll(function(e) {
            Ti.API.info(JSON.stringify(e));
            expect(e.success).toBe(!0);
            done();
        });
    }, 10000);
});