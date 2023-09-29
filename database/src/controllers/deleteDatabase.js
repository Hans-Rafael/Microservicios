const store = require("../database");
const response = require("../utils/response");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const deleteDatabase = await store[model].deleteById(id);
  response(res, 200, deleteDatabase);
};
