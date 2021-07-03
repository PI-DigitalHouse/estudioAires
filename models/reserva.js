'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Reserva extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Reserva.init({
        idReserva: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        data: DataTypes.DATE,
        horario: DataTypes.DATE,
        confirmado: DataTypes.BOOLEAN,
        horarioInicio: DataTypes.DATE,
        horarioFinal: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Reserva',
    });
    return Reserva;
};