const { DataTypes } = require('sequelize');
const sequelize = require('../db/database'); // Importa o objeto Sequelize configurado
const Grupos = require('./grupo'); // Corrige a importação do modelo Grupos
const Usuario = require('./usuario'); // Importa o modelo Usuario
const ClassificaoDificuldadePergunta = require('./classificacao_dificuldade_pergunta');
const UrgenciaPergunta = require('./urgencia_pergunta');
const Materia = require('../models/materias');

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
        references: {
            model: Materia,
            key: 'id'
        },
        onDelete: 'CASCADE', // Exclui automaticamente ao deletar a Pergunta
        onUpdate: 'CASCADE', // Atualiza os registros relacionados automaticamente
    },
    idUrgencia: {
        type: DataTypes.INTEGER,
        references: {
            model: ClassificaoDificuldadePergunta,
            key:'id',
        },
        onDelete: 'CASCADE',
    },
    idDificuldade: {
        type: DataTypes.INTEGER,
        references: {
            model: ClassificaoDificuldadePergunta,
            key:'id',
        },
        onDelete: 'CASCADE',
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
Perguntas.belongsTo(ClassificaoDificuldadePergunta, {foreignKey: 'idDificuldade', as: 'Dificuldade', onDelete: 'CASCADE'});
Perguntas.belongsTo(UrgenciaPergunta, {foreignKey: 'idUrgencia', as: 'Urgencia', onDelete: 'CASCADE'});
Perguntas.belongsTo(Materia, {foreignKey: 'idMateria', as: 'Materia', onDelete: 'CASCADE'});


module.exports = Perguntas;
