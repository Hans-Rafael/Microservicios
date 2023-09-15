const planets = require("./planets.json");
const { ClientError } = require("../utils/errors");

module.exports = {
  list: async () => {
    return planets;
  },
  create: async () => {
    throw new ClientError("hay un error en la BDD al crear un personaje");
  },
};
