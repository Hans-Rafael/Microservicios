const { catchAsync } = require("../utils");

module.exports = {
  getCharacters: catchAsync(require("./getCharacters")),
  getCharacter : catchAsync(require("./getCharacter")),
  createCharacter: catchAsync(require("./createCharacter")),
  putCharacter: catchAsync(require("./putCharacter")),
  deleteCharacter: catchAsync(require("./delete")),
};
