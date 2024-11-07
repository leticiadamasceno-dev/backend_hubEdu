const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const Materias = sequelize.define('Materias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome: {
        type: DataTypes.TEXT,
    }
})

module.exports = Materias;