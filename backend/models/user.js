"use strict";
const { Model } = require("sequelize");
const { hash } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Category);
      User.hasMany(models.Item);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Email telah terdaftar",
        },
        validate: {
          notNull: {
            msg: "Email tidak boleh kosong",
          },
          notEmpty: {
            msg: "Email tidak boleh kosong",
          },
          isEmail: {
            msg: "Format email salah",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password tidak boleh kosong",
          },
          len: {
            args: [6],
            msg: "Password minamal 6 karakter",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((password) => {
    password.password = hash(password.password);
  });
  return User;
};
