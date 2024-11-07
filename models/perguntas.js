const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const Perguntas = sequelize.define('Perguntas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idMateria:{
        type: DataTypes.INTEGER,
    },
    idDificuldade:{
        type: DataTypes.INTEGER,
    },
   idUrgencia: {
        type: DataTypes.INTEGER
   },
   idUsuario: {
        type: DataTypes.INTEGER
   },
   idGrupo: {
        type: DataTypes.INTEGER
   },
   dataPublicacao:{
    type: DataTypes.DATE
   }
});

module.exports = Perguntas;