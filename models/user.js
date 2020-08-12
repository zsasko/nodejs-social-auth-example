"use strict";
const { Model } = require("sequelize");
var DataTypes = require("sequelize/lib/data-types");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      name: DataTypes.STRING(45),
      email: DataTypes.STRING(100),
      registration_type: DataTypes.ENUM("email", "google", "facebook"),
      social_user_id: DataTypes.STRING(30),
      password: DataTypes.STRING(80),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
