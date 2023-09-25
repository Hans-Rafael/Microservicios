const { response } = require("../utils");
const Films = require("../data")

module.exports = async (req, res) => {
  const body = req.body
  const data = await Films.insert(body)
  response(res, 201, data)
}

