 const Films = require("../data");
 const { response } = require("../utils");
 //const axios = require("axios");
 //const {ClientError}=require("../utils/error");

module.exports = async (req, res) => {
  const films = await Films.list();
  response(res, 200, films);
  //res.status(200).json(films);
};
/* module.exports = async (req, res, next) => {
  const { data } = await axios.get("http://database:8004/Film");
  if(!data.data.length) return next(ClientError("Collection empty.", 404));
  response(res, 200, data.data);
}; */