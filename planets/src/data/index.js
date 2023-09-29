//const planets = require("./planets.json");
const axios = require("axios");
const { ClientError } = require("../utils/errors");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Planet");
    return results.data;
  },
  getById: async (id) => {
    const results = await axios.get(`http://database:8004/Planet/${id}`);
    return results.data;
  },
  create: async (object) => {
    return await axios.post("http://database:8004/Planet", object);
  },
  update: async (id, planet) => {
    return await axios
      .update(`http://database:8004/Planet/${id}`, planet)
      .then((res) => res.data);
  },
  delete: async (id) => {
    return await axios
      .delete(`http://database:8004/Planet/${id}`)
      .then((res) => res.data);
  },
};
