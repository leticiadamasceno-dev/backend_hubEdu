const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const GrupoPerguntas = sequelize.define('GrupoPerguntas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    idPergunta:{
        type: DataTypes.INTEGER
    },
    idGrupo: {
        type: DataTypes.INTEGER
    },
    idUsuario: {
        type: DataTypes.INTEGER
    }

})

module.exports = GrupoPerguntas