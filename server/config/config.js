require("dotenv").config();
const {
  NODE_ENV,
  PORT,
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  API_BASE_URL,
} = process.env;

const config = {
  env: NODE_ENV || "development",
  port: PORT || 3000,
  DB_NAME: DB_NAME || "postgres",
  DB_USER: DB_USER || "postgres",
  DB_PASS: DB_PASS || "123postgressql",
  DB_HOST: DB_HOST || "localhost",
  DB_PORT: DB_PORT || 5432,
  API_BASE_URL: API_BASE_URL,
};

module.exports = config;
