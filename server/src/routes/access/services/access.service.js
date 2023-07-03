require("dotenv").config();
const config = require("../../../../config/config");
const { User } = require("../../../database/db");
const bcrypt = require("bcrypt");

class Users {
  constructor() {
    this.API_URL = config.API_BASE_URL;
    this.version = "v1";
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return { message: "Invalid credentials" };
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch && user.logged === false) {
        user.logged = true;
        await user.save();
        return user;
      } else {
        if (user.logged === true) {
          return { message: "User already logged" };
        }
        return { message: "Invalid credentials" };
      }
    } catch (error) {
      return { message: error.message };
    }
  }

  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (user) {
        return { message: "User already exists" };
      }

      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      return newUser;
    } catch (error) {
      return { message: error.message };
    }
  }
}

module.exports = Users;
