'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Membro extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
                    
                // Associação com Reservas
                this.hasOne(models.Reserva, {
                    foreignKey: 'reservadoPor',
                    targetKey: 'idMembro'
                }),
                // Associação com Reservas
                this.hasOne(models.Reserva, {
                    foreignKey: 'aceitoPor',
                    targetKey: 'idMembro',
                    as :'reserva'

                                        
                })
                
        }
    };
    Membro.init({
        idMembro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        nome: DataTypes.STRING(150),
        email: DataTypes.STRING(150),
        telefone: DataTypes.BIGINT,
        cpfCnpj: DataTypes.STRING(18),
        senha: DataTypes.STRING(150),
        comoConheceu: DataTypes.STRING(30),
        experiencia: DataTypes.STRING(30),
        detalhes: DataTypes.STRING(150),
        //usuarioFotografo? 0 ou 1

    }, {
        sequelize,
        modelName: 'Membro',
    });
    return Membro;
};