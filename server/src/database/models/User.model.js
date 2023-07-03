const { DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = "User";

const typeSTRING = {
  type: DataTypes.STRING,
  allowNull: false,
};

module.exports = (sequelize) => {
  sequelize.define(
    USER_TABLE,
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        ...typeSTRING,
      },
      email: {
        ...typeSTRING,
      },
      password: {
        ...typeSTRING,
      },
      createAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field: "create_at",
      },
      logged: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
