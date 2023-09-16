
/* import express from 'express'
import morgan from 'morgan'; */
const express = require('express');
const morgan = require('morgan');
const {createProxyMiddleware}=require('http-proxy-middleware');

const app = express();
app.use(morgan('dev'));

app.use("./characters",
    createProxyMiddleware({
        target:"https://characters:8001",
        changeOrigin:true,
    })
);
app.use("./films",
    createProxyMiddleware({
        target:'https://films:8002',
        changeOrigin:true,
    })
);
app.use("./planets",
    createProxyMiddleware({
        target:'https://planets:8003',
        changeOrigin:true,
    })
);

const Port = 8000;
app.listen(8000, () => {
    console.log(`Gateway on port ${Port}`);
});