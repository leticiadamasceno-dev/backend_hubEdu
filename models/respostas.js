const { DataTypes } = require('sequelize');
const sequelize = require('../db/database'); 
const Perguntas = require('./perguntas'); 
const Usuario = require('./usuario');

const Respostas = sequelize.define('Respostas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idPergunta: {
        type: DataTypes.INTEGER,
        references: {
            model: Perguntas,
            key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    idUsuario: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id',
        },
    },
    dataResposta: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    
});


Respostas.belongsTo(Perguntas, { foreignKey: 'idPergunta', as: 'Pergunta', onDelete: 'CASCADE' });
Perguntas.hasMany(Respostas, { foreignKey: 'idPergunta', as: 'Respostas', onDelete: 'CASCADE' });
Respostas.belongsTo(Usuario, {foreignKey: 'idUsuario', as: 'Usuario', onDelete: 'CASCADE'});

module.exports = Respostas;
