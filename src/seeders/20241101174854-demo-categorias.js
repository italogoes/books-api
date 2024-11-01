'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      {
        titulo: "Java",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Node JS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "C#",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
