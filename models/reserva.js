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
            // Associação com Usuario
            this.belongsTo(models.Usuario, {
                    foreignKey: 'reservadoPor',
                    id: 'idUsuario'
                }),

                // Associação com Usuario
                this.belongsTo(models.Usuario, {
                    foreignKey: 'aceitoPor',
                    id: 'idUsuario'
                }),

                // Associação com Solicitação 
                this.belongsTo(models.Solicitacao, {
                    foreignKey: 'idSolicitacao',
                    id: 'idSolicitacao'
                })
        }
    };
    Reserva.init({
        idReserva: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        reservadoPor: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Usuarios'
            },
            allowNull: false
        },
        aceitoPor: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Usuarios'
            },
            allowNull: false
        },
        idSolicitacao: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Solicitacoes'
            },
            allowNull: false
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