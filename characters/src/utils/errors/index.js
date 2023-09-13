// statusCode = 400 que por defecto es 400 si no hay stotus code.
class ClientError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}
/*  function ClientError ( message, statusCode ) {
    super(message);
    this.statusCode = statusCode;
 } */

 module.exports ={ ClientError};