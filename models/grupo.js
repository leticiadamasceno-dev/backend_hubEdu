const { DataTypes } = require('sequelize'); // Importa o DataTypes do Sequelize
const sequelize = require('../db/database'); // Importa o objeto sequelize configurado no arquivo database.js
const Materias = require('./materias'); // Importa o modelo Materias

const Grupos = sequelize.define('Grupos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idMateria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Materias,
            key: 'id',
        },
        onDelete: 'CASCADE', // Configuração de exclusão em cascata
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Configura a relação com Materias
Grupos.belongsTo(Materias, { foreignKey: 'idMateria', as: 'Materia' });
Materias.hasMany(Grupos, { foreignKey: 'idMateria', as: 'Grupos' });

module.exports = Grupos;
