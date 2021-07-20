'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('usuarios', [{
       nome: 'Lula Livre',
       sobrenome: 'Da Silva',
       email: 'lula@pt.com.br',
       telefone: '0000',
       cpfCnpj: '1234',
       senha: '$2a$10$RNnWUo/ueBAx3zXJ7kRekeActJ2zWlHpUoaBKi6SBbK3w/9lLXYka',
       comoConheceu: 'instagram',
       imobiliaria: 'off',
       termosDeUso:'on',
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
