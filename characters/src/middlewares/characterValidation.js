const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { name } = req.body; //debe tener siempre un nombre
  if (name) return next();
  else throw new ClientError("Name is required", 401);
};
