const express = require("express");
const morgan = require("morgan");
//const router = require("./routes");
const { notFound, errorHandler } = require("./utils/errors"); //middleware guardado en utils por ser el mismo en diferentes partes

const server = express();

//middlewares
server.use(express.json());
server.use(morgan("dev"));
//
//llamo las rutas
server.use(require("./routes"));

server.use("*", notFound);
/* server.use("*",(req,res)=>{
    res.status(404).send("not found");//ruta no encontrada
}) */

// modularizar esta funcion poner en carpeta de handlers quede mejor
/* server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
        error:true,
        message:err.message,
    });
}) */
server.use(errorHandler);

//exporto el server
module.exports = server;
