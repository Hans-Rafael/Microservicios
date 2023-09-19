const { Schema } = require("mongoose");

const planetShema = new Schema({
    _id: String,
    name:String,
    rotation_period: String,
    orbital_period:String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{ type: String, ref: "Characters" }],
    films: [{ type: String, ref: "Films" }]
});

module.exports = planetShema;