const { response } = require("../utils");
const Films = require("../data")
//const axios = require("axios");

/* module.exports = (req,res) => {
    res.status(200).send("creating a new Film");
}; */
module.exports = async (req, res) => {
  const body = req.body
  const data = await Films.insert(body)
  response(res, 201, data)
}
/* module.exports = async (req, res) => {
  const { data } = await axios.post("http://database:8004/Film", req.body);
  response(res, 201, data.data);
}; */
