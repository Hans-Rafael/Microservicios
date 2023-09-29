// function de "orden superior" resive la function mejora y retorna
module.exports = (fn) => (req, res, next) =>
  fn(req, res).catch((err) => next(err));
/* export default (fn) => (req, res, next) =>
  fn(req, res).catch((err) => next(err)); */

// or que es igual a lo siguiente
/* module.exports = (fn) =>{
  return function (req, res, next){
    fn(req, res).catch((err) => next(err));
  }
} */
//
/* 
module.exports = function (fn) {
  return function (req, res, next) {
    fn(req, res, next)
      .catch(next);
  };
};
 */
