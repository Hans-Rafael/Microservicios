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
    },
    height: String , //no estecaso pero boleano 
    mass: String,
    hair_color: String,
    skin_color: String,
    eyes_color: String,
    birth_year: {type : String, }, //enacaso de fecha sera  type: Date podria llevar default: Date.now
    gender: {type: String, enum: ["male", "female", "unknown", "both"] }, //{type string, enum [male, female, unknown, both ]}//enum
    homeworld: { type: String, ref: "Planet" }, //ref al id del planet
    films: [{ type: String, ref: "Film" }],
  },
  
);

//add metodo d nombre list q sera metodo del model y no debe ser funcion flecha

characterSchema.statics.list = async function(){
  return await this.find()
  .populate("homeworld", ["_id", "name"])
  .populate("films", ["_id", "title"]) 
}

characterSchema.statics.get = async function(id){
   return await this.findById(id)
   .populate("homeworld", ["_id", "name"])
   .populate("films", ["_id", "title"])
}

characterSchema.statics.insert = async function(character){
   return await this.create(character);
}

characterSchema.statics.deleteById = function(_id) {
  return this.deleteOne({ _id: _id })
};

characterSchema.statics.updateById = function(_id, character) {
   return this.updateOne({ _id }, character)
};

module.exports = characterSchema;