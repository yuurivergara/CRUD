"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("cadfunc", "veiculosvendidos", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "veiculos", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("cadfunc", "veiculosvendidos");
  },
};
