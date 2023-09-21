const {catchAsync} = require('../utils');

module.exports = {
    getPlanets: require("./getPlanets"),
    createPlanet: catchAsync (require("./createPlanets")),
};