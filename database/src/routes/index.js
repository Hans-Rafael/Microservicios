const { Router } = require("express");
const { validateModel } = require("../middlewares");
const controllers = require("../controllers");
const store = require("../database");
const { catchAsync } = require("../utils");

const router = Router();

//router.get("/:model", validateModel, controllers.getDatabase);
router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, controllers.getDatabases);
/* router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
}); */

router.post("/:model", validateModel, catchAsync(controllers.addDatabase));
/* router.post("/:model", validateModel, async (req, res) => {
  const {model} = req.params;
  const data = req.body;
  const response = await store[model].insert(data);
  res.status(200).json(response);
}); */

router.put(
  "/:model/:id",
  validateModel,
  catchAsync(controllers.deleteDatabase)
);

router.delete("/:model/:id", validateModel, controllers.updateDatabase);
/* router.delete("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].deleteById(id);
  res.status(200).json(response);
}); */

module.exports = router;
