'use strict';
module.exports = function(sequelize, DataTypes) {
  var money = sequelize.define('money', {
    machine: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return money;
};
