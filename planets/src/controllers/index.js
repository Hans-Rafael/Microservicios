const {catchAsync} = require('../utils');

module.exports = {
    getPlanets: require("./getPlanets"),
    createCharacter: catchAsync (require("./createPlanets")),
};