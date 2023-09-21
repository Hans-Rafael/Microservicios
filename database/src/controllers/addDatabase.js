const store = require("../database");
const response = require("../utils/response");

module.exports = async (req, res) => {
    const { model } = req.params;
    const data = req.body
    const addDatabase = await store[model].insert(data) //insert(data) function creade en schema
    response(res, 200, addDatabase);
};




