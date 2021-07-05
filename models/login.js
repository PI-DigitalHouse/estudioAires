'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Login extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Associação com usuario
            this.belongsTo(models.Usuario, {
                foreignKey: 'idUsuario',
                //?
            })
        }
    };
    Login.init({
        idLogin: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Usuarios'
            },
            allowNull: false
        },
        id: DataTypes.INTEGER //arrumar isso aqui matheus
    }, {
        sequelize,
        modelName: 'Login',
    });
    return Login;
};