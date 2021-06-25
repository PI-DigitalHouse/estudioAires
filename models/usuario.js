'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.NUMBER,
    cpfCnpj: DataTypes.STRING,
    senha: DataTypes.STRING,
    comoConheceu: DataTypes.STRING,
    imobiliaria: DataTypes.NUMBER,
    termosDeUso: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};