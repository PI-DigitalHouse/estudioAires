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
        endereco: DataTypes.STRING,
        tamanhoImovel: DataTypes.STRING,
        cep: DataTypes.STRING,
        valor: DataTypes.NUMBER,
        dataPropostaUm: DataTypes.STRING,
        dataPropostaDois: DataTypes.STRING,
        dataPropostaTres: DataTypes.STRING,
        dataConfirmada: DataTypes.STRING,
        pagamento: DataTypes.STRING,
        status: DataTypes.STRING,
        contatoSessao: DataTypes.STRING,
        nomeContato: DataTypes.STRING,
        sessaoShooting: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Solicitacao',
    });
    return Solicitacao;
};