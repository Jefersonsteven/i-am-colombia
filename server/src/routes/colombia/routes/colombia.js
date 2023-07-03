const { Router } = require("express");
const axios = require("axios");
const Colombia = require("../services/colombia.service");

const colombia = Router();

colombia.get("/", async (req, res) => {
  try {
    const colombia = new Colombia();
    const info_colombia = await colombia.findInfoColombia();
    res.json(info_colombia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = colombia;
