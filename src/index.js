const express = require("express");
const productsRouter = require("./routers/products");
const cartRouter = require("./routers/cart");

const server = express();

const port = process.env.port || 3000;

server.use("/products", productsRouter);
server.use("/cart", cartRouter);

server.get("/", (req, res) => {
  res.send("Home Page");
});

server.listen(port, () => console.log(`Server is running on ${port}...`));
