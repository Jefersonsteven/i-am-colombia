const { Router } = require("express");

const user = Router();

user.get("/", async (req, res) => {
  res.json("Hello World!");
});

module.exports = user;
