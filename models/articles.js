module.exports = function (sequelize, DataTypes) {
  const Articles = sequelize.define(
    "articles",
    {
      id: {
        type: DataTypes.STRING(25),
        primaryKey: true,
      },
      // autherId: {
      //   type: DataTypes.STRING(25),
      //   AllowNull: false,
      // },
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
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tablename: "articles",
      timestamps: false,
    }
  );

  Articles.associate = (models) => {
    Articles.belongsTo(models.authers, {
      foreignKey: {
        AllowNull: false,
      },
    });
  };
  return Articles;
};
