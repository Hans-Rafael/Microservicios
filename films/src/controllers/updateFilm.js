const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { data } = req.body;
  const id = req.params.id;
  if (id !== data)
    return response(res, 400, { error: true, message: "IDs no coinciden" });
  const newCharacter = await Film.create(data);
  response(res, 201, newCharacter);
};
