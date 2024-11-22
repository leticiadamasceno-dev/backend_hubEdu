const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Materia = require('../models/materias');
const Usuario = require('../models/usuario');

const Provas = sequelize.define('Prova',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE', 
    },
    idMateria: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE', 
    },
    dataHora: {
        type: DataTypes.TEXT,
    }

});

Provas.belongsTo(Materia, { foreignKey: 'idMateria', as: 'Materia', onDelete: 'CASCADE', });
Provas.belongsTo(Usuario, {foreignKey: 'idUsuario', as: 'Usuario', onDelete: 'CASCADE',})

module.exports = Provas;
