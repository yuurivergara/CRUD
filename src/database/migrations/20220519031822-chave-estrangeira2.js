"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("veiculos", "vendedor", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "cadfunc", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("veiculos", "vendedor");
  },
};
