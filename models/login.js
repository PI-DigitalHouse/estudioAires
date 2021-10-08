'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class login extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Associação com usuario
            this.belongsTo(models.usuarios, {
                foreignKey: 'idUsuario',
                id: 'idUsuario'
            })
        }
    };
    login.init({
        idLogin: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            references: {
                model: 'usuarios'
            },
            allowNull: false
        },
        id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'login',
    });
    return login;
};