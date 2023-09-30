const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/films", controllers.getFilms);
router.get("/films/:id", controllers.getFilm);
router.post("/films", middlewares.filmValidation, controllers.createFilm);
router.put("/films/:id", middlewares.filmValidation, controllers.updateFilm);
router.delete("/films/:id", controllers.deleteFilm);

module.exports = router;
