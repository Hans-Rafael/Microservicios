const store = require("../database");//importo la db
const { response } = require('../utils/response');

module.exports = async (req, res) => {
    const { model } = req.params;
    const database = await store[model].list();
    response(res, 200, database)}