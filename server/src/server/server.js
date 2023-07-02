const express = require("express");
const morgan = require("morgan");
const routes = require("../routes/index.js");
const { conn } = require("../database/db.js");
const cors = require("cors");

require("../database/db.js");

const server = express();
const port = 3001;

server.name = "API";

conn.sync({ alter: true }).then(() => {
  server.use(express.json());
  server.use(cors());
  server.use(morgan("dev"));
  server.listen(port);
  server.use("/", routes);
});

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
