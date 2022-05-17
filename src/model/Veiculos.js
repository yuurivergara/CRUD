const { Model, DataTypes } = require("sequelize");

class Veiculos extends Model {
  static init(sequelize) {
    super.init(
      {
        marca: DataTypes.STRING,
        modelo: DataTypes.STRING,
        ano: DataTypes.INTEGER,
        km: DataTypes.INTEGER,
        cor: DataTypes.STRING,
        chassi: DataTypes.STRING,
        precoVenda: DataTypes.FLOAT,
        valorReserva: DataTypes.FLOAT,
        status: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        vendedor: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "veiculos",
        createdAt: true,
        updatedAt: true,
      }
    );
  }
}

module.exports = Veiculos;
