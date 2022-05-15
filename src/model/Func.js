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
        tableName: "cad_func",
      }
    );
  }
}

module.exports = Func;
