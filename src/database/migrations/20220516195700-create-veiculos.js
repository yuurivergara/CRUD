"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("veiculos", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      km: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      chassi: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      pvenda: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      preserva: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      pcompra: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "disponivel",
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("veiculos");
  },
};
