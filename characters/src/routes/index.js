const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
//const {characterValidation} = require('../middlewares')

const router = Router();

router.get("/characters", controllers.getCharacters);
router.get("/characters/:id", controllers.getCharacter);
router.post(
  "/characters",
  middlewares.characterValidation,
  controllers.createCharacter
);
router.put(
  "/characters/:id",
  middlewares.characterValidation,
  controllers.putCharacter
);
router.delete("/characters/:id", controllers.deleteCharacter);

module.exports = router;
