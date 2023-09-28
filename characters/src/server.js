const express = require("express");
const morgan = require("morgan");
const {notFound,errorHandler } = require("./middlewares");


const server = express();

//midlewares
server.use(morgan("dev"));
server.use(express.json());
//
//"/characters"
server.use(require("./routes"));//


server.use("*", notFound);
/* server.use("*",(req,res)=>{
    res.status(404).send("not found");//ruta no encontrada
}) */
// modularizar esta funcion poner en carpeta de handlers quede mejor
server.use(errorHandler);
/* server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
        error:true,
        message:err.message,
    });
}) */


module.exports = server;
