'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associação com Usuario
      this.belongsTo(models.usuarios, {
        foreignKey: 'reservadoPor',
        id: 'idUsuario',
        as: 'usuarios',
      }),
        // Associação com Membro
        this.belongsTo(models.usuarios, {
          foreignKey: 'membros_idMembro',
          id: 'idMembro',
        });
    }
  }
  reservas.init(
    {
      idReserva: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      reservadoPor: {
        type: DataTypes.INTEGER,
        references: {
          model: 'usuarios',
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
      modelName: 'reservas',
    },
    
  );
  return reservas;
};
