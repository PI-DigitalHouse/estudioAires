'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Associação com login 
            this.hasMany(models.Login, {
                    foreignKey: 'idUsuario',
                    targetKey: 'idUsuario'
                }),
                // Associação com Reservas
                this.hasOne(models.Reserva, {
                    foreignKey: 'reservadoPor',
                    targetKey: 'idUsuario'
                }),
                // Associação com Reservas
                this.hasOne(models.Reserva, {
                    foreignKey: 'aceitoPor',
                    targetKey: 'idUsuario'
                })
        }
    };
    Usuario.init({
        idUsuario: {
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
        imobiliaria: DataTypes.STRING(30),
        termosDeUso: DataTypes.STRING(30),
        //usuarioFotografo? 0 ou 1

    }, {
        sequelize,
        modelName: 'Usuario',
    });
    return Usuario;
};