'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  servico.init({
    tipoDeServico: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'servico',
  });
  return servico;
};