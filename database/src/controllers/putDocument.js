const store = require("../database");
const response = require('../utils/response');

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const updatedDB = await store[model].updateById(id, req.body);
  response(res, 201, updatedDB);
};