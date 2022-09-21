const express = require("express");
const session = require("express-session");
const app = express();
app.use(express.json());
const fs = require("fs");
const mysql = require("mysql2");
const { JSDOM } = require("jsdom");

// static path mappings
app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));
app.use("/font", express.static("./public/font"));
app.use("/html", express.static("./public/html"));


app.get("/", (req, res) => {
  res.send(fs.readFileSync("./app/html/main.html", "utf8"));
})

app.get("/shop", (req, res) => {
  res.send(fs.readFileSync("./app/html/shop_template.html", "utf8"));
})

app.get("/shop-configuration", (req, res) => {
  res.send(fs.readFileSync("./app/html/shop_configuration.html", "utf-8"));
})

app.get("/shop-configuration-button", (req, res) => {
  let formatOfResponse = req.query["format"];
  let doc;
  switch (formatOfResponse) {
    case "product":
      res.setHeader("Content-Type", "text/html");
      doc = fs.readFileSync("./app/data/shop_configuration_product.html", "utf8");
      break;
    case "order":
      res.setHeader("Content-Type", "text/html");
      doc = fs.readFileSync("./app/data/shop_configuration_order.html", "utf8");
      break;
    case "design":
      res.setHeader("Content-Type", "text/html");
      doc = fs.readFileSync("./app/data/shop_configuration_design.html", "utf8");
      break;
    case "setting":
      res.setHeader("Content-Type", "text/html");
      doc = fs.readFileSync("./app/data/shop_configuration_setting.html", "utf8");
      break;
  }
  res.send(doc);
})

app.get("/product-configuration", (req, res) => {
  res.send(fs.readFileSync("./app/html/product_configuration.html", "utf-8"));
})

// RUN SERVER
let port = 8000;
app.listen(port);
console.log("Listening on port " + port + "!");