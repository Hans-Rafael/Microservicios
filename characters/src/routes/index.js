const {Router} = require("express");
const controllers = require('../controllers')
const middlewares = require('../middlewares')

const router = Router();

router.get('/characters',controllers.getCharacters)
router.post('/characters',middlewares.characterValidation, controllers.createCharacter);
/* router.put('/:id',controllers.updateCharacter)
router.delete('/:id',controllers.deleteCharacter) */

module.exports = router;

