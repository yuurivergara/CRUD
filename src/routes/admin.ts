import express from "express";
const VeiculosController = require("../controller/VeiculosController");
const FuncController = require("../controller/FuncController");
// const { authPage } = require("../../middlewares");
const routes = express.Router();
const verifyJWT = require("./verifyJWT");

// ROTAS RELACIONADAS À FUNCIONÁRIOS

routes.get("/funcionarios/list/:vendedor", verifyJWT, FuncController.listOne); // Lista um funcionário
routes.get("/funcionarios/list", verifyJWT, FuncController.list); // Lista Funcionários
routes.post("/funcionarios/new", verifyJWT, FuncController.store); // Adiciona Funcionários
routes.put("/funcionarios/edit/:userId", verifyJWT, FuncController.update); // Atualiza info dos funcionários
routes.delete(
  "/funcionarios/delete/:userId",
  verifyJWT,
  FuncController.destroy
); // Deleta o funcionário

// ROTAS RELACIONADAS À LISTA DE VEICULOS.

routes.post("/veiculos/new", verifyJWT, VeiculosController.vstore); // Adquirir veiculo para a loja
routes.put("/veiculos/:veicId/sale/", verifyJWT, VeiculosController.venda);
routes.put("/veiculos/:veicId/reserv/", verifyJWT, VeiculosController.reserva);
routes.delete(
  "/veiculos/delete/:userId",
  verifyJWT,
  VeiculosController.vdestroy
); // Remove um veiculo da loja

module.exports = routes;
