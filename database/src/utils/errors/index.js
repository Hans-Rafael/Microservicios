// statusCode = 400 que por defecto es 400 si no hay status code.
class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}
/*  function ClientError ( message, statusCode = 400 ) {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
 } */

module.exports = { ClientError };
