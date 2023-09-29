const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const { notFound, errorHandler } = require("./utils/errors");

const server = express();
//mdw
server.use(morgan("dev"));
server.use(express.json());
//routes
server.use(router);

server.use("*", notFound);

server.use(errorHandler);

module.exports = server;
