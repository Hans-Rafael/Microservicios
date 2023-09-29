const Characters = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const character = await Characters.getById(id);
  response(res, 200, character);
};
