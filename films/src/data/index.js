const films = require("./films.json");

module.exports = {
  list: async () => {
    return films;
  },
 /*  //manual error
  create: async() => {
    throw Error("hay un error en la BDD al crear un Film");
  } */
};
