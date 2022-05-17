const { Model, DataTypes } = require("sequelize");

class Func extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        cpf: DataTypes.STRING,
        bio: DataTypes.TEXT,
        avatar: DataTypes.TEXT,
        vendas: DataTypes.TEXT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: "cad_func",
        createdAt: true,
        updatedAt: true,
      }
    );
  }
}

module.exports = Func;
