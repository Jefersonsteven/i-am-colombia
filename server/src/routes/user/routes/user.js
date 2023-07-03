const { Router } = require("express");
const Users = require("../services/user.service");

const user = Router();

user.post("/", async (req, res) => {
  try {
    const User = new Users();
    const user = await User.createUser(req, res);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

user.get("/", async (req, res) => {
  try {
    const User = new Users();
    const users = await User.getUsers(req, res);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

user.get("/:idUser", async (req, res) => {
  try {
    const User = new Users();
    const user = await User.getUser(req, res);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = user;
