const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  // throw Error ("Hubo un Error")
  const data = req.body;
  console.log(data);
  const newCharacter = await Character.create(data);
  //res.status(200).send("creating a new character");
  response(res, 201, newCharacter);
};
