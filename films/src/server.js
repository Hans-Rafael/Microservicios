const express = require ("express");
const morgan = require("morgan");
const router = require("./routes");

const server = express();

//middlewares
server.use(express.json());
server.use(morgan("dev"));
//
//llamo las rutas
server.use(require("./routes"));

server.use("*",(req,res)=>{
    res,status(404).send("not found");
})

// modularizar esta funcion poner en carpeta de handlers quede mejor
server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
        error:true,
        message:err.message,
    });
})

//exporto el server
module.exports = server;