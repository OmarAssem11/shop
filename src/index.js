const express = require("express");
const productsRouter = require("./routers/products");

const server = express();

server.use("/products", productsRouter);

server.get("/", (req, res) => {
  res.send("Home Page");
});

server.listen(3000, () => console.log("Server is running..."));
