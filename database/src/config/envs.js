require("dotenv").config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  //aqui resto de las variables de entorno
  PORT: process.env.PORT,
};
