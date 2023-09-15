const characters = require("./characters.json");
const { ClientError } = require("../utils/errors");

module.exports = {
  list: async () => {
    return characters;
  },
  //error simulado =>
  create: async () => {
    //throw Error("hay un error al crear un personaje");
    throw new ClientError("hay un error al crear un personaje");
  },
};
