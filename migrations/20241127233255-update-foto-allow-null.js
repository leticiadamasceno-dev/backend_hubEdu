'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Grupos', 'foto', {
      type: Sequelize.STRING,
      allowNull: true, // Permite valores nulos
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Grupos', 'foto', {
      type: Sequelize.STRING,
      allowNull: false, // Reverter para não permitir nulos
    });
  },
};
