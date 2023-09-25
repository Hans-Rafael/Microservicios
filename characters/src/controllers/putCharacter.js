const Character = require("../data");
const { response } = require("../utils");


module.exports = async (req, res) => {
  const {data} = req.body;
  const id = req.params.id;
  if (id !== data) return response(res, 400, {error: true, message: "IDs no coinciden"});
  const newCharacter = await Character.create(data);
  //res.status(200).send("creating a new character");
  response(res, 201, newCharacter);
};
