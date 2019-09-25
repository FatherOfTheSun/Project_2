var models = require("../models");
var inventory = models.inventory;
var passport = require("../config/passport");
// Routes
// =============================================================
module.exports = function(app) {
  /**
   * Return and server status
   */
  app.post("/api/form", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
  app.get("/api/health", function(req, res) {
    res.json({ status: "OK" });
  });
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/inventory", function(req, res) {
    inventory.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific inventory
  app.get("/api/:item", function(req, res) {
    inventory
      .findAll({
        where: {
          item: req.params.item
        }
      })
      .then(function(results) {
        res.json(results);
      });
  });

  // Get all inventorys of a specific category
  app.get("/api/category/:category", function(req, res) {
    inventory
      .findAll({
        where: {
          category: req.params.category
        }
      })
      .then(function(results) {
        res.json(results);
      });
  });

  // Get all inventorys from a specific amount
  app.get("/api/amount/:amount", function(req, res) {
    inventory
      .findAll({
        where: {
          amount: req.params.amount
        }
      })
      .then(function(results) {
        res.json(results);
      });
  });

  // Add a inventory
  app.post("/api/inventory", function(req, res) {
    // console.log("inventory Data:");
    // console.log(req.body);
    inventory
      .create({
        item: req.body.item,
        amount: req.body.amount,
        measure: req.body.measure,
        category: req.body.category
      })
      .then(function(result) {
        res.status(201).json(result);
      });
  });

  // Delete a inventory
  app.delete("/api/inventory/:id", function(req, res) {
    console.log("inventory ID:");
    console.log(req.params.id);
    inventory
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function() {
        res.end();
      });
  });
};
