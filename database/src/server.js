const express = require('express');
const morgan = require('morgan');
const {notFound} = require("./middlewares");

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use(require("./routes"))
server.use("*", notFound);

module.exports = server;