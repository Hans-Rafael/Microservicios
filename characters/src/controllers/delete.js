const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    await Character.delete(id);
    response(res, 204, null);
    //-b//res.status(204).send("Character deleted");
}
