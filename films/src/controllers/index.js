const {catchAsync} = require('../utils');

module.exports = {
    getFilms: catchAsync (require("./getFilms")),
    getFilm: catchAsync(require('./getFilm')),
    createFilm : catchAsync (require("./createFilm")),
}