
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "inventory" model that matches up with DB
var inventory = sequelize.define("inventory", {
  item: Sequelize.STRING,
  amount: Sequelize.INTEGER,
  measure: Sequelize.STRING,
  category: Sequelize.STRING
});

// Syncs with DB
inventory.sync();

module.exports = inventory;
