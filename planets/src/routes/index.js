const { Router } = require("express");

const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/planets", controllers.getPlanets);
router.get("/planets:id", controllers.getPlanet);
router.post("/planets", middlewares.planetValidation, controllers.createPlanet);
router.put(
  "/planets:id",
  middlewares.planetValidation,
  controllers.updatePlanet
);
router.delete("/planets:id", controllers.deletePlanet);

module.exports = router;
