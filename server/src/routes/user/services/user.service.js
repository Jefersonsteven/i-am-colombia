require("dotenv").config();
const config = require("../../../../config/config");
const { User, Favorite } = require("../../../database/db");

class Users {
  constructor() {
    this.API_URL = config.API_BASE_URL;
    this.version = "v1";
  }

  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = await User.create({
        name,
        email,
        password,
      });

      return user;
    } catch (error) {
      return { message: error.message };
    }
  }

  async getUser(req, res) {
    try {
      const { idUser } = req.params;
      console.log("Entre");
      const user = await User.findByPk(idUser, {
        include: {
          model: Favorite,
          attributes: ["idEntity", "type"],
          through: {
            attributes: [],
          },
        },
      });

      return user;
    } catch (error) {
      return { message: error.message };
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.findAll({
        include: {
          model: Favorite,
          attributes: ["idEntity", "type"],
          through: {
            attributes: [],
          },
        },
      });

      return users;
    } catch (error) {
      return { message: error.message };
    }
  }

  async updateUser(req, res) {
    try {
      const { iduser, name, email, password } = req.body;

      const user = await User.findByPk(iduser);

      user.name = name;
      user.email = email;
      user.password = password;

      return user.save();
    } catch (error) {
      return { message: error.message };
    }
  }
}

module.exports = Users;
