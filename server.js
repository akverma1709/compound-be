"use strict";
require("dotenv").config();

const express = require("express");
const { errors } = require('celebrate');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

const cors = require("cors");
app.use(cors());

global.appPath = __dirname;

const Sequelize = require("sequelize");
global.routes = require("./src/middleware/index");

global.sequelize = new Sequelize(
  process.env.dbName,
  process.env.userName,
  process.env.password,
  {
    host: process.env.host,
    dialect: 'mysql'
  }
);

require("./src/db");

const apiRouter = require("./src/routes");
app.use("/api/v1", apiRouter);

app.use(errors());
const port = process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 5555;
const server = app.listen(port, () => {
  console.log("Server listening on port " + port);  
});
exports.closeServer = () => {
  httpServer.close();
};
