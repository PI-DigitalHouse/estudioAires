'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('solicitacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      endereco: {
        type: Sequelize.STRING
      },
      tamanhoImovel: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.NUMBER
      },
      dataPropostaUm: {
        type: Sequelize.STRING
      },
      dataPropostaDois: {
        type: Sequelize.STRING
      },
      dataPropostaTres: {
        type: Sequelize.STRING
      },
      dataConfirmada: {
        type: Sequelize.STRING
      },
      pagamento: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      contatoSessao: {
        type: Sequelize.STRING
      },
      nomeContato: {
        type: Sequelize.STRING
      },
      sessaoShooting: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('solicitacaos');
  }
};