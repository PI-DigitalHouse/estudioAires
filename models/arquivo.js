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
            // define association here
        }
    };
    Arquivo.init({
        nomeArquivo: DataTypes.STRING,
        tipoDeArquivo: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Arquivo',
    });
    return Arquivo;
};