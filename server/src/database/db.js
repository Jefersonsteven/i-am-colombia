const sequelize = require("./libs/sequelize");
const path = require("path");
const fs = require("fs");

const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Models
const { User } = sequelize.models;
const { Favorite } = sequelize.models;

// Associations
Favorite.belongsToMany(User, { through: "FavoriteUser" });
User.belongsToMany(Favorite, { through: "FavoriteUser" });

module.exports = {
  ...sequelize.models,
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
