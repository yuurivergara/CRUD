import express from "express";
const VeiculosController = require("../controller/VeiculosController");
const FuncController = require("../controller/FuncController");
// const { authPage } = require("../../middlewares");
const routes = express.Router();
const verifyJWT = require("./verifyJWT");

// ROTAS RELACIONADAS À FUNCIONÁRIOS

routes.get("/funcionarios/:userId", verifyJWT, FuncController.listOne); // Lista um funcionário
routes.get("/funcionarios", verifyJWT, FuncController.list); // Lista Funcionários
routes.post("/funcionarios", verifyJWT, FuncController.store); // Adiciona Funcionários
routes.put("/funcionarios/:userId", verifyJWT, FuncController.update); // Atualiza info dos funcionários
routes.delete("/funcionarios/:userId", verifyJWT, FuncController.destroy); // Deleta o funcionário

// ROTAS RELACIONADAS À LISTA DE VEICULOS.

routes.post("/veiculos/add", verifyJWT, VeiculosController.vstore); // Adquirir veiculo para a loja
routes.put("/veiculos/update/:userId", verifyJWT, VeiculosController.vupdate);
routes.delete(
  "/veiculos/remover/:userId",
  verifyJWT,
  VeiculosController.vdestroy
); // Remove um veiculo da loja

module.exports = routes;
