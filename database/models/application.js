'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    Name: DataTypes.STRING
  }, {});
  Application.associate = function(models) {
    // associations can be defined here
  };
  return Application;
};