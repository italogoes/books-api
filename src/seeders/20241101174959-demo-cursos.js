'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cursos', [
      {
        titulo: "API com Express",
        descricao: "Curso de API com express",
        data_inicio: "2023/01/01",
        categoria_id: 1,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Spring Boot",
        descricao: "Curso de Java",
        data_inicio: "2023/01/01",
        categoria_id: 2,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cursos', null, {});
  }
};
