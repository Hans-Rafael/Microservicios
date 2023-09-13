const express = require("express");
const morgan = require("morgan");
const router = require("./routes");

const server = express();

//midlewares
server.use(morgan("dev"));
server.use(express.json());
//
//"/characters"
server.use(require("./routes"));// server.use(require("./routes"))

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
//routes

module.exports = server;
