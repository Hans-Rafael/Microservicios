const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: { type: String, required: true, unique: true },
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "Character" }],
  films: [{ type: String, ref: "Film" }],
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("films", ["_id", "title"])
    .populate("residents", ["_id", "name"]);
};

planetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("films", ["_id", "title"])
    .populate("residents", ["_id", "name"]);
};

planetSchema.statics.insert = async function (planet) {
  return await this.create(planet);
};

planetSchema.statics.deleteById = function (_id) {
  return this.deleteOne({ _id });
};

module.exports = planetSchema;
