"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cadfunc", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      avatar: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cadfunc");
  },
};
