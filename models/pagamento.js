'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pagamento extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            //associação com solicitacao
            this.belongsTo(models.Solicitacao, {
                foreignKey: 'idSolicitacao',
                id: 'idSolicitacao'
            })
        }
    };
    Pagamento.init({
        idPagamento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idSolicitacao: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Solicitacoes'
            },
            allowNull: false
        },
        valorFinal: DataTypes.DECIMAL(10, 0),
        formaDePagamento: DataTypes.STRING(150),
        statusTransacao: DataTypes.STRING(150)
    }, {
        sequelize,
        modelName: 'Pagamento',
    });
    return Pagamento;
};