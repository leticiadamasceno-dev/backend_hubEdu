const { DataTypes } = require('sequelize');
const Pergunta = require('./perguntas');
const Usuario = require('./usuario');
const Repostas = require('./respostas');
const sequelize = require('../db/database'); 


const CurtidaReposta = sequelize.define('CurtidaReposta', {
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
        onUpdate: 'CASCADE', // Atualiza os registros relacionados automaticamente

    },
    idUsuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id',
        },
        onDelete: 'SET NULL', // Deixa nulo se o usuário for deletado
    },
    idReposta: {
        type: DataTypes.INTEGER,
        references: {
            model: Repostas,
            key: 'id',
        },
        onDelete: 'SET NULL', // Deixa nulo se o usuário for deletado
    },
});

CurtidaReposta.belongsTo(Pergunta, { foreignKey: 'idPergunta', as: 'Perguntas' });
CurtidaReposta.belongsTo(Usuario, { foreignKey: 'idUsuario', as: 'Usuario' });
CurtidaReposta.belongsTo(Repostas, {foreignKey: 'idResposta', as: 'Repostas'})

module.exports = CurtidaReposta;