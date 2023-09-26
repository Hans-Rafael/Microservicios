/* module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res).catch((err) => {
      next(err);
    });
  };
}; */
// or que es igual a lo siguiente
module.exports = (fn) => (req, res, next) => 
    fn(req, res).catch((err) => next(err));
