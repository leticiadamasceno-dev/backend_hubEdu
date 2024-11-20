const { DataTypes } = require('sequelize');
const sequelize = require('../db/database'); // Importa o objeto Sequelize configurado
const Grupos = require('./grupo'); // Corrige a importação do modelo Grupos
const Usuario = require('./usuario'); // Importa o modelo Usuario

const Perguntas = sequelize.define('Perguntas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idMateria: {
        type: DataTypes.INTEGER,
    },
    idDificuldade: {
        type: DataTypes.INTEGER,
    },
    idUrgencia: {
        type: DataTypes.INTEGER,
    },
    idUsuario: {
        type: DataTypes.INTEGER,
    },
    idGrupo: {
        type: DataTypes.INTEGER,
        references: {
            model: Grupos,
            key: 'id',
        },
        onDelete: 'CASCADE', // Exclui automaticamente ao deletar o Grupo
    },
    dataPublicacao: {
        type: DataTypes.DATE,
    },
});

// Relações
Perguntas.belongsTo(Grupos, { foreignKey: 'idGrupo', as: 'Grupo',onDelete: 'CASCADE', });// Exclui Perguntas ao excluir um Grupo
Grupos.hasMany(Perguntas, { foreignKey: 'idGrupo', as: 'Perguntas', onDelete: 'CASCADE', });

module.exports = Perguntas;
