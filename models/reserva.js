'use strict';
const { Model } = require('sequelize');
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
        id: 'idUsuario',
        as: 'usuarios',
      }),
        // Associação com Membro
        this.belongsTo(models.Usuario, {
          foreignKey: 'membros_idMembro',
          id: 'idMembro',
        });
    }
  }
  Reserva.init(
    {
      idReserva: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      reservadoPor: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Usuarios',
        },
        allowNull: false,
      },
      membros_idMembro: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Membros',
        },
        allowNull: false,
      },
      horarioInicio: DataTypes.TIME,
      dataInicio:DataTypes.DATE,   
      horarioFinal: DataTypes.TIME,
      dataFinal: DataTypes.DATE,
      membros_idMembro: DataTypes.INTEGER,
      status: DataTypes.STRING(150),
      servico: DataTypes.JSON
    },
    
    {
      sequelize,
      modelName: 'Reserva',
    },
    
  );
  return Reserva;
};
