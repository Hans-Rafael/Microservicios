const { Schema } = require("mongoose");

const characterSchema = new Schema(
  {
    _id: {
      type: String, //Schema.Types.UUID, // Can also do `_id: 'UUID'`
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    height: String, //no estecaso pero boleano 
    mass: String,
    hair_color: String,
    skin_color: String,
    eyes_color: String,
    birth_year: String, //enacaso de fecha sera  type: Date podria llevar default: Date.now
    gender: String, //{type string, enum [male, female, unknown, both ]}//enum
    homeworld: { type: String, ref: "Planet" }, //ref al id del planet
    films: [{ type: String, ref: "Film" }],
  },
  {
    versionKey: false,
  }
);

module.exports = characterSchema;