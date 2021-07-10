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
            // Associação com Reserva 
            this.hasOne(models.Reserva, {
                    foreignKey: 'idSolicitacao',
                    targetKey: 'idSolicitacao'
                }),

                // Associação com Arquivo
                this.hasMany(models.Arquivo, {
                    foreignKey: 'idSolicitacao',
                    targetKey: 'idSolicitacao'
                }),

                // Associação com Pagamento
                this.hasOne(models.Pagamento, {
                    foreignKey: 'idSolicitacao',
                    targetKey: 'idSolicitacao'
                }),

                // Associação com Servico
                this.hasMany(models.Servico, {
                    foreignKey: 'idSolicitacao',
                    targetKey: 'idSolicitacao'
                })
        }
    };
    Solicitacao.init({
        idSolicitacao: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        endereco: DataTypes.STRING(300),
        tamanhoImovel: DataTypes.STRING(45),
        cep: DataTypes.STRING(9),
        valor: DataTypes.DECIMAL(10, 0),
        dataInicio: DataTypes.DATE,
        dataFinal: DataTypes.DATE,
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