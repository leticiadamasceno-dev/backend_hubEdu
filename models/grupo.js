const sequelize = require('../db/database');
const { DataTypes } = require('sequelize');
const Grupos = sequelize.define('Grupos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    idMateria: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
});
module.exports = Grupos;