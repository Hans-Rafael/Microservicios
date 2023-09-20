const { Router } = require("express");
const store = require("../database");
const { validateModel } = require("../middlewares");

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

////falta modularizar y enviar a carpeta de controles

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});

router.post("/:model", validateModel, async (req, res) => {
  const model = req.params;
  const data = req.body;
  const response = await store[model].insert(data);
  res.status(200).json(response);
});
//router.post('/:model',validateModel,controllers.createRequest)

router.delete("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].delete(id);
  res.status(200).json(response);
});

module.exports = router;
