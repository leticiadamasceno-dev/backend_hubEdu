const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    }

    
});
module.exports = Usuario;