'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pagamento.init({
    valorFinal: DataTypes.NUMBER,
    formaDePagamento: DataTypes.STRING,
    statusTransacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pagamento',
  });
  return pagamento;
};