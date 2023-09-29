const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors"); //ojo

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(cors());

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true, // indica que la url de origen es diferente
  
  })
);

/* This code snippet is creating a proxy middleware for the "/films" route. It is using the
`createProxyMiddleware` function from the "http-proxy-middleware" package to create the proxy. */
app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,  
  })
);

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
  })
);

const Port = 8000;
app.listen(Port, () => {
  console.log(`Gateway on port ${Port}`);
});
