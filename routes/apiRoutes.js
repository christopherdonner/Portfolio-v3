var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/messages", function(req, res) {
    db.Messages.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/messages", function(req, res) {
    db.contacts.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
