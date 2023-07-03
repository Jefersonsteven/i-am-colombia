const { Router } = require("express");
const Access = require("../services/access.service");

const access = Router();

access.post("/login", async (req, res) => {
  try {
    const ACCESS = new Access();
    const access = await ACCESS.login(req, res);
    res.json(access);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

access.post("/register", async (req, res) => {
  try {
    const ACCESS = new Access();
    const access = await ACCESS.register(req, res);
    res.json(access);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

access.get("/logout", async (req, res) => {
  try {
    const ACCESS = new Access();
    const access = await ACCESS.logout(req, res);
    res.json(access);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = access;
