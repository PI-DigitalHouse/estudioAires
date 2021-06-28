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
            // define association here
        }
    };
    Servico.init({
        tipoDeServico: DataTypes.STRING(150),
        descricao: DataTypes.STRING(150),
        valor: DataTypes.DECIMAL(2, 0)
    }, {
        sequelize,
        modelName: 'Servico',
    });
    return Servico;
};