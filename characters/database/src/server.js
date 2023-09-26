const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const server = express();

server.use(morgan('dev'));
server.use(express.json());

server.use(cors());

server.use(require("./routes"));

// server.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     next();
//   });

server.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message,
    });
})

module.exports = server;