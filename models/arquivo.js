'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class arquivos extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Associação com Solicitacao
            this.belongsTo(models.orcamentos, {
                foreignKey: 'idSolicitacao',
                id: 'idSolicitacao'
            })
        }
    };
    arquivos.init({
        idArquivo: {
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
        nomeArquivo: DataTypes.STRING(150),
        tipoDeArquivo: DataTypes.STRING(150)
    }, {
        sequelize,
        modelName: 'arquivos',
    });
    return arquivos;
};