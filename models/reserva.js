'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  reserva.init({
    data: DataTypes.DATE,
    horario: DataTypes.DATE,
    confirmado: DataTypes.NUMBER,
    horarioInicio: DataTypes.DATE,
    horarioFinal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'reserva',
  });
  return reserva;
};