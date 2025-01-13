const { DataTypes } = require('sequelize'); // Importa o DataTypes do Sequelize
const sequelize = require('../db/database'); // Importa o objeto sequelize configurado no arquivo database.js
const Grupo = require('../models/grupo');
const Usuario = require('../models/usuario');
const GrupoPerguntas = require('./grupo_perguntas');

const GrupoUsuario = sequelize.define('GrupoUsuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idGrupo: {
        type: DataTypes.INTEGER,
        references: {
            model: Grupo,
            key: 'id',
        },
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id',
        },
    }
});
-
GrupoUsuario.belongsTo(Grupo, { foreignKey: 'idGrupo', as: 'Grupo' });
GrupoUsuario.belongsTo(Usuario, { foreignKey: 'idUsuario', as: 'Usuario'});
GrupoUsuario.belongsTo(GrupoPerguntas, {foreignKey: 'idGrupo', as: 'GrupoPergunta'})

Grupo.hasMany(GrupoUsuario, { foreignKey: 'idGrupo', as: 'GrupoUsuario' });
Usuario.hasMany(GrupoUsuario, { foreignKey: 'idUsuario', as: 'GrupoUsuario' });
GrupoPerguntas.hasMany(GrupoUsuario, {foreignKey: 'idGrupo', as: 'GrupoUsuario'});


module.exports = GrupoUsuario;