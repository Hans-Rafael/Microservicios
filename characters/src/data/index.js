const characters = require("./characters.json");

module.exports = {
  list: async() => {
    return characters;
  },
  //error simulado =>   
 /*  create: async() => {
    throw Error("hay un error en la BDD al crear un personaje");
  } */
};
