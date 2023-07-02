const { Sequelize } = require("sequelize");
const config = require("../../../config/config");

const DB_USER = encodeURIComponent(config.DB_USER);
const DB_PASS = encodeURIComponent(config.DB_PASS);
const URI = `postgres://${DB_USER}:${DB_PASS}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`;

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
