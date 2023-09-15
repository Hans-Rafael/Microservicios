const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  // throw Error ("Hubo un Error")
  const newCharacter = await Character.create();
  //res.status(200).send("creating a new character");
  response(res, 201, newCharacter);
};
