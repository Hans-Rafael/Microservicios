const axios = require("axios");
//const characters = require("./characters.json");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Character");
    return results.data;
  },
  getById: async (id) => {
    const results = await axios.get(`http://database:8004/Character/${id}`);
    return results.data;
  },
  create: async (character) => {
    const results = await axios.post("http://database:8004/Character", character);
    return results.data;
  },

  //error simulado =>
  /* create: async () => {
    //throw Error("hay un error al crear un personaje");
    throw new ClientError("hay un error al crear un personaje");
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
