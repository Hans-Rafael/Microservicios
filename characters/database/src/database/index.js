const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

// const Character = conn.model("Character", require("./schemes/characterSchema"));
// const Film = conn.model("Film", require("./schemes/filmSchema"));
// const Planet = conn.model("Planet", require("./schemes/planetSchema"));

// Character.find()
//     .populate("films", ["title"])
//     .populate("homeworld", "-res_idents -films")
//     .then(res=> console.log(res[0]));

module.exports = {
    Character: conn.model("Character", require("./schemes/characterSchema")),
    Film: conn.model("Film", require("./schemes/filmSchema")),
    Planet: conn.model("Planet", require("./schemes/planetSchema"))
};