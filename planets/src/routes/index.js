const {Router} = require("express");

const controllers = require('../controllers')
const middlewares = require('../middlewares')

const router = Router();


router.get('/planets',controllers.getPlanets);
router.post('/planets',middlewares.planetValidation, controllers.createCharacter);

module.exports = router; 