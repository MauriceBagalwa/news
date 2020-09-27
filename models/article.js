const sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const article = sequelize.define(
    "article",
    {
      id: {
        type: DataTypes.STRING(25),
        primaryKey: true,
      },
      auther: {
        type: DataTypes.STRING(25),
        AllowNull: false,
      },
      surTitre: {
        type: DataTypes.STRING,
      },
      sousTitre: {
        type: DataTypes.STRING,
      },
      chapeau: {
        type: DataTypes.STRING,
      },
      coprs: {
        type: DataTypes.TEXT,
        AllowNull: false,
      },
      photo: {
        type: DataTypes.STRING,
        AllowNull: false,
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
    {}
  );
};
