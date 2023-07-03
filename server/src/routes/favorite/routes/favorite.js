const { Router } = require("express");
const Favorites = require("../services/favorite.service");

const favorite = Router();

favorite.post("/", async (req, res) => {
  try {
    const Favorite = new Favorites();
    const favorite = await Favorite.addFavorite(req, res);
    res.json(favorite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

favorite.get("/", async (req, res) => {
  try {
    const Favorite = new Favorites();
    const favorites = await Favorite.getFavorites(req, res);
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

favorite.delete("/", async (req, res) => {
  try {
    const Favorite = new Favorites();
    const favorite = await Favorite.deleteFavorite(req, res);
    res.json(favorite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = favorite;
