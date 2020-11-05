// require path
var path = require("path");

module.exports = function(app) {
    // index route loads index.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // about route loads about.html
    app.get("/portfolio", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });
    // contact route loads contact.html
    app.get("/contacts", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contacts.html"));
    });
};