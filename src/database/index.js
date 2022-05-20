const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");
const Func = require("../model/Func");
const Veiculos = require("../model/Veiculos");

const connection = new Sequelize(dbConfig);

Func.init(connection);
Veiculos.init(connection);

Func.associate(connection.models);
Veiculos.associate(connection.models);

module.exports = connection;
