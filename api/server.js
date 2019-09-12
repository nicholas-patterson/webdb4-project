const express = require("express");
const server = express();
const recipeRouter = require("../recipes/recipeRouter");

server.use(express.json());
server.use("/recipes", recipeRouter);

module.exports = server;
