//aqui se crea la conexion con la base de datos
const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

/* const Character = conn.model(
  "Character",
  require("./schemas/charactersSchema")
); */
//const Film = conn.model("Film", require("./schemas/filmSchema"));
//const Planet = conn.model("Planet", require("./schemas/planetSchema"));

/* Character.find()
  .populate("films", ["_id", "title"]) // aqui se ponen los campos que quiero que se muestren
  .then((res) => console.log(res[0]));
 */
/* Planet.find()
  .populate("films",["_id","title"])// aqui se ponen los campos que quiero que se muestren
  .then((res) => console.log(res[0])); */

module.exports = {
  character: conn.model("Character", require("./schemas/charactersSchema")),
  films: conn.model("Films", require("./schemas/filmSchema")),
  planet: conn.model("Planet", require("./schemas/planetSchema")),
};
