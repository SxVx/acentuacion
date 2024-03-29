'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TheoreticalMaterial', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      resource: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      theme_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // timeStamps
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
    // Llaves foráneas
    await queryInterface.addConstraint('TheoreticalMaterial', {
      type: 'FOREIGN KEY',
      fields: ['theme_id'],
      references: {
        table: 'Theme',
        field: 'id',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TheoreticalMaterial')
  },
}
