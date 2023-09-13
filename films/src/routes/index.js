const {Router} = require("express");
const controllers = require('../controllers')
const middlewares = require('../middlewares')

const router = Router();

router.get('/',controllers.getFilms)
router.post('/',middlewares.filmValidation, controllers.createFilm);

module.exports = router;