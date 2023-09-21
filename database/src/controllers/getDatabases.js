const store = require("../database");
const response = require("../utils/response");

module.exports = async (req, res) => {
    const { model, id } = req.params;
    const databases = await store[model].get(id);
    response(res, 200, databases);
  }