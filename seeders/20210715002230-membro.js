'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('membros', [{
       nome: 'Dilmãe',
       email: 'dilma@pt.com.br',
       telefone: '0000',
       cpfCnpj: '123454',
       comoConheceu: 'instagram',
       senha: '$2a$10$RNnWUo/ueBAx3zXJ7kRekeActJ2zWlHpUoaBKi6SBbK3w/9lLXYka',
       experiencia: 'impeachment',
       detalhes: ' ',
       createdAt: new Date(),
       updatedAt: new Date()       
       
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
     await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
