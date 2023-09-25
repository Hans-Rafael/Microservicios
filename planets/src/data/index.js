//const planets = require("./planets.json");
const axios = require("axios");
const { ClientError } = require("../utils/errors");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Planet");
    return results.data;
  },
  create: async (object) => {
    return await axios.post("http://database:8004/", object);
  },
};
