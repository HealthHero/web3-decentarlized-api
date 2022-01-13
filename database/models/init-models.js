var DataTypes = require("sequelize").DataTypes;
var _activities = require("./activities");
var _users = require("./users");

function initModels(sequelize) {
  var activities = _activities(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    activities,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
