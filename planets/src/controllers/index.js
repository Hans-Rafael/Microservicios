const { catchAsync } = require("../utils");

module.exports = {
  getPlanets: require("./getPlanets"),
  getPlanet: require("./getPlanet"),
  createPlanet: catchAsync(require("./createPlanets")),
  updatePlanet: catchAsync(require("./updatePlanet")),
  deletePlanet: catchAsync(require("./deletePlanet")),
};
