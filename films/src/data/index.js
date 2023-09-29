const films = require("./films.json");
const axios = require("axios");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Film");
    return results.data;
  },
  getById: async (id) => {
    return await axios
      .get(`http://database:8004/Film/${id}`)
      .then((res) => res.data);
  },

  create: async (Film) => {
    return await axios.post("http://database:8004/Film", Film);
  },

  update: async (id, character) => {
    return await axios
      .update(`http://database:8004/Film/${id}`, character)
      .then((res) => res.data);
  },
  delete: async (id) => {
    return await axios
      .delete(`http://database:8004/Film/${id}`)
      .then((res) => res.data);
  },
};
