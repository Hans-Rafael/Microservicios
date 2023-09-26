const { Schema } = require("mongoose");

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    res_idents: [{type:String, ref:"Character"}],
    films: [{type:String, ref:"Film"}]
})

planetSchema.statics.list = async function(){
    return await this.find()
        .populate("res_idents", ["name"])
        .populate("films", ["name"]);
};

planetSchema.statics.get = async function(id){
    return await this.findById(id)
        .populate("res_idents", ["name"])
        .populate("films", ["name"]);
};

planetSchema.statics.insert = async function(planet){
    return await this.create(planet)
};

module.exports = planetSchema;