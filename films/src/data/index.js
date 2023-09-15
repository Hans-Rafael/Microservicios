const films = require("./films.json");
const { ClientError } = require("../utils/errors");

module.exports = {
  list: async () => {
    return films;
  },
  //manual error
  create: async() => {
    throw new ClientError("hay un error en la BDD al crear un Film");
  }
};
