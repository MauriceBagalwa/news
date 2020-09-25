const sequelize = require("sequelize");

module.exports = function (sequelize, DataTypess) {
  const Auther = sequelize.define(
    "authers",
    {
      id: {
        type: DataTypes.STRING(25),
        allowNull: false,
        primarykey: true,
      },
      name: {
        type: DataTypes.STRING(25),
        allowNull: fals,
      },
      lastname: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      mail: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATETIME,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: DataTypes.DATETIME,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Auther;
};
