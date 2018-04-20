var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/fall", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/fall.html"));
    });

    app.get("/spring", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/spring.html"));
    });

    app.get("/chicken", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/chicken.html"));
    });

    app.get("/eggs", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/eggs.html"));
    });

    app.get("/honey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/honey.html"));
    });
};