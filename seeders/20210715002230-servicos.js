'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('servicos', [{
       
       tipoDeServico: 'Fotografia',
       descricao: 'Serviço de fotografia profissional',
       valor: 0.2,
       
       createdAt: new Date(),
       updatedAt: new Date()       
       
    },{
        tipoDeServico: 'Fotografia360',
       descricao: 'Serviço de realidade aumentada',
       valor: 0.2,
       
       createdAt: new Date(),
       updatedAt: new Date()
    },{
      tipoDeServico: 'Video Dinamico',
       descricao: 'Serviço de captação de imagem em vídeo',
       valor: 0.2,
       createdAt: new Date(),
       updatedAt: new Date()
    },{
      tipoDeServico: 'Imagens Aéreas',
       descricao: 'Serviço de captação de imagens com drone',
       valor: 0.2,
       
       createdAt: new Date(),
       updatedAt: new Date()
    },{
      tipoDeServico: 'Valor Fixo',
       descricao: 'Valor adicionado a todos os orçamentos',
       valor: 0.8,
       
       createdAt: new Date(),
       updatedAt: new Date()

    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
     await queryInterface.bulkDelete('servicos', null, {});
     
  }
};
