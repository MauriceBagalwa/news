const bcrypt = require("bcryptjs");
const { authers } = require("../controllers/autherController");

module.exports = function (sequelize, DataTypes) {
  const Auther = sequelize.define(
    "authers",
    {
      id: {
        type: DataTypes.STRING(25),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tablename: "authers",
      timestamps: false,
      hooks: {
        beforeValidate: function (auther) {
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(auther.password, salt);
          auther.password = hash;
        },
      },
    }
  );
  return Auther;
};
