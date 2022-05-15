const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");
const Func = require("../model/Func");

const connection = new Sequelize(dbConfig);

Func.init(connection);

module.exports = connection;
