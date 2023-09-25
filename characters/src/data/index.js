const axios = require("axios");
//const characters = require("./characters.json");


/* module.exports = {
  list: async () => {
    return characters;
  }, */
module.exports = {
  list: async () => {
    //return characters;
    const results = await axios.get("http://database:8004/Character");
    return results.data;
  },
  getById: async (id) => {
    //return characters.find((character) => character.id === id);
    const results = await axios.get(`http://database:8004/Character/${id}`);
    return results.data;
  },
  create: async (character) => {
    //characters.push(character);
    const results = await axios.post("http://database:8004/Character", character);
    return results.data;
  },

  //error simulado =>
  /* create: async () => {
    //throw Error("hay un error al crear un personaje");
    throw new ClientError("hay un error al crear un personaje");
  }, */
  /* getById: async (id) => {
    return await axios
      .get(`http://database:8004/Character/${id}`)
      .then((res) => res.data);
  }, */
  /* create: async (character) => {
    return await axios
      .post(`http://database:8004/Character`, character)
      .then((res) => res.data);
  }, */
  update: async (id, character) => {
    return await axios
      .update(`http://database:8004/Character/${id}`, character)
      .then((res) => res.data);
  },
  delete: async (id) => {
    return await axios
      .delete(`http://database:8004/Character/${id}`)
      .then((res) => res.data);
  },
};
