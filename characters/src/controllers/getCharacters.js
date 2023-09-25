const Character = require("../data");
const { response } = require("../utils");
 
module.exports = async ( req, res) => {
    const characters = await Character.list();
    response(res,200,characters);
    //-b//res.status(200).json(characters);
    //-a//res.status(200).send("Hello World i am characters");
  }; 
