const { DataTypes, Sequelize } = require("sequelize");

const FAVORITE_TABLE = "Favorite";

module.exports = (sequelize) => {
  sequelize.define(
    FAVORITE_TABLE,
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.ENUM(
          "department",
          "tourism",
          "natural-area",
          "region",
          "president"
        ),
        allowNull: false,
      },
      idEntity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field: "create_at",
      },
    },
    {
      timestamps: false,
    }
  );
};
