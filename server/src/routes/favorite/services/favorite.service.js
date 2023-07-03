require("dotenv").config();
const config = require("../../../../config/config");
const { Favorite, User } = require("../../../database/db");

class Favorites {
  constructor() {
    this.API_URL = config.API_BASE_URL;
    this.version = "v1";
  }

  async addFavorite(req, res) {
    try {
      const { iduser, identity, type } = req.body;

      const user = await User.findByPk(iduser);

      const favorite = await Favorite.create({
        idEntity: identity,
        type,
      });
      console.log(favorite);

      user.addFavorite(favorite);
      return { message: "Favorito agregado correctamente." };
    } catch (error) {
      return { message: error.message };
    }
  }

  async getFavorites(req, res) {
    try {
      const { iduser } = req.body;

      const user = await User.findByPk(iduser);

      const favorites = await user.getFavorites();

      return favorites;
    } catch (error) {
      return { message: error.message };
    }
  }

  async deleteFavorite(req, res) {
    try {
      const { iduser, identity } = req.body;

      const user = await User.findByPk(iduser);

      const favorite = await Favorite.findOne({
        where: {
          idEntity: identity,
        },
      });

      user.removeFavorite(favorite);

      return { message: "Favorito eliminado correctamente." };
    } catch (error) {
      return { message: error.message };
    }
  }
}

module.exports = Favorites;
