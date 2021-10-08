'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Associação com orçamento
      this.belongsTo(models.orcamentos, {
        foreignKey: 'idSolicitacao',
        id: 'idSolicitacao',
      });
    }
  }
  servicos.init(
    {
      idServico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idSolicitacao: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Orcamentos',
        },
        allowNull: false,
      },
      tipoDeServico: DataTypes.STRING(150),
      descricao: DataTypes.STRING(150),
      valor: DataTypes.DECIMAL(2, 2),
    },
    {
      sequelize,
      modelName: 'servicos',
    },
  );
  return servicos;
};
