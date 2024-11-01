'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('pessoas', [
      {
        nome: "italo",
        email: "email@gmail.com",
        cpf: "12312312345",
        ativo: true,
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
