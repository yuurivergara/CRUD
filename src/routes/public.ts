import express from "express";
// const http = require("http");
// const bodyParser = require("body-parser");
const VeiculosController = require("../controller/VeiculosController");
// const FuncController = require("../controller/FuncController");
// const { authPage } = require("../../middlewares");
const publicr = express.Router();
const jwt = require("jsonwebtoken");
const SECRET = "luby";

publicr.post("/admin/login", (req, res) => {
  if (req.body.user === "luby" && req.body.password === "123") {
    const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300 }); // Login de administrador
    return res.json({ auth: true, token });
  }
  res.status(401).end();
});

publicr.get("/veiculos/listar", VeiculosController.vlist); // Lista todos veiculos da loja
publicr.get("/veiculos/listar/:userId", VeiculosController.vlistOne); // Lista um unico veiculo da loja

module.exports = publicr;
