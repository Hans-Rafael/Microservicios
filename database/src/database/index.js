//Aqui crearemos la conexion con la base de datos
const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

// Se crea la conexion con la base de datos
const conn = mongoose.createConnection(MONGO_URI);

 //const Character = conn.model("Character",require("./schemas/characterSchema")); 
//const Film = conn.model("Film", require("./schemas/filmSchema"));
//const Planet = conn.model("Planet", require("./schemas/planetSchema"));
//Character.find().then((res) => console.log(res));
 /* Character.find()
  .populate("films", ["_id", "title"]) // aqui se ponen los campos que quiero que se muestren
  .then((res) => console.log(res[0]));
  */
/* Planet.find()
  .populate("films",["_id","title"])// aqui se ponen los campos que quiero que se muestren
  .then((res) => console.log(res[0])); */

// Exportamos los modelos
module.exports = {
  Character: conn.model("Character", require("./schemas/characterSchema")),
  Film: conn.model("Film", require("./schemas/filmSchema")),
  Planet: conn.model("Planet", require("./schemas/planetSchema")),
};
