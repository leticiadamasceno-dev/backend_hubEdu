const { DataTypes } = require('sequelize');
const sequelize = require('../db/database'); // Corrige a importação do Sequelize
const Pergunta = require('./perguntas');
const Grupo = require('./grupo');
const Usuario = require('./usuario');

// Modelo GrupoPerguntas
const GrupoPerguntas = sequelize.define('GrupoPerguntas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idPergunta: {
        type: DataTypes.INTEGER,
        references: {
            model: Pergunta,
            key: 'id',
        },
        onDelete: 'CASCADE', // Exclui automaticamente ao deletar a Pergunta
    },
    idGrupo: {
        type: DataTypes.INTEGER,
        references: {
            model: Grupo,
            key: 'id',
        },
        onDelete: 'CASCADE', // Exclui automaticamente ao deletar o Grupo
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id',
        },
        onDelete: 'SET NULL', // Deixa nulo se o usuário for deletado
    },
});

// Relações entre tabelas
GrupoPerguntas.belongsTo(Pergunta, { foreignKey: 'idPergunta', as: 'Perguntas' });
GrupoPerguntas.belongsTo(Grupo, { foreignKey: 'idGrupo', as: 'Grupo',onDelete: 'CASCADE', });
GrupoPerguntas.belongsTo(Usuario, { foreignKey: 'idUsuario', as: 'Usuario' });

Pergunta.hasMany(GrupoPerguntas, { foreignKey: 'idPergunta', as: 'GrupoPerguntas' });
Grupo.hasMany(GrupoPerguntas, { foreignKey: 'idGrupo', as: 'GrupoPerguntas' });
Usuario.hasMany(GrupoPerguntas, { foreignKey: 'idUsuario', as: 'GrupoPerguntas' });

module.exports = GrupoPerguntas;