'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Solicitacao extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Solicitacao.init({
        idSolicitacao: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        endereco: DataTypes.STRING(300),
        tamanhoImovel: DataTypes.STRING(45),
        cep: DataTypes.STRING(9),
        valor: DataTypes.DECIMAL(10, 0),
        dataPropostaUm: DataTypes.STRING(8),
        dataPropostaDois: DataTypes.STRING(8),
        dataPropostaTres: DataTypes.STRING(8),
        dataConfirmada: DataTypes.STRING(8),
        pagamento: DataTypes.STRING(30),
        status: DataTypes.STRING(45),
        contatoSessao: DataTypes.STRING(45),
        nomeContato: DataTypes.STRING(150),
        sessaoShooting: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Solicitacao',
    });
    return Solicitacao;
};