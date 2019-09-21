module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("inventory", {
    item: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    measure: DataTypes.STRING,
    category: DataTypes.STRING
  });
  return Inventory;
};
