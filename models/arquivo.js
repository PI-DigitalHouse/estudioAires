'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Arquivo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Associação com Solicitacao
            this.belongsTo(models.Orcamento, {
                foreignKey: 'idSolicitacao',
                id: 'idSolicitacao'
            })
        }
    };
    Arquivo.init({
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
        modelName: 'Arquivo',
    });
    return Arquivo;
};