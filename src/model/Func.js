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
      },
      {
        sequelize,
        tableName: "cadfunc",
        createdAt: true,
        updatedAt: true,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Veiculos, {
      foreignKey: "vendedor",
      as: "vendas",
    });
  }
}

module.exports = Func;
