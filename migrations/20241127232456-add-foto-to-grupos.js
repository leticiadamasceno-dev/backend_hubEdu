// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   }
// };



'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adicionar a coluna 'foto' na tabela 'Grupos'
    await queryInterface.addColumn('Grupos', 'foto', {
      type: Sequelize.STRING, // Tipo da coluna
      allowNull: true, // Permite valores nulos
    });
  },

  async down(queryInterface, Sequelize) {
    // Remover a coluna 'foto' da tabela 'Grupos'
    await queryInterface.removeColumn('Grupos', 'foto');
  }
};
