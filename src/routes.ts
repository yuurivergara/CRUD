const express = require("express");
const FuncController = require("./controller/FuncController.js");

const routes = express.Router();

routes.get("/funcionarios", FuncController.list);
routes.post("/funcionarios", FuncController.store);

module.exports = routes;
