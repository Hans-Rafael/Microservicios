const express = require('express');
const morgan = require('morgan');
const {notFound,errorHandler } = require("./middlewares");

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use(require("./routes"))
 
server.use("*", notFound);

//
server.use(errorHandler);
/* server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
        error:true,
        message:err.message,
    });
}) */

module.exports = server;