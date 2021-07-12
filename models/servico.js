'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Servico extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            //associação com solicitacao
            this.belongsTo(models.Orcamento, {
                foreignKey: 'idSolicitacao',
                id: 'idSolicitacao'
            })
        }
    };
    Servico.init({
        idServico: {
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
        tipoDeServico: DataTypes.STRING(150),
        descricao: DataTypes.STRING(150),
        valor: DataTypes.DECIMAL(2, 0)
    }, {
        sequelize,
        modelName: 'Servico',
    });
    return Servico;
};