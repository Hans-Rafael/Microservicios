/* module.exports = (req,res) => {
    res.status(200).send("creating a new Planet");
}; */
const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const newPlanet = await Planet.create();
  response(res, 201, newPlanet.data);
};
