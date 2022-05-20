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
        pvenda: DataTypes.FLOAT,
        pcompra: DataTypes.FLOAT,
        preserva: DataTypes.FLOAT,
        status: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "veiculos",
        createdAt: true,
        updatedAt: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Func, {
      foreignKey: "vendedor",
      as: "finv",
    });
  }
}

module.exports = Veiculos;
