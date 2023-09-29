const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  await Film.delete(id);
  response(res, 204, null);
};
