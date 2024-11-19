const sequelize = require('../db/database');
const { DataTypes } = require('sequelize');
const Materias = require('../models/materias')
const Grupos = sequelize.define('Grupos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    idMateria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Materias,
            key: 'id'
          }
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
});
//Usuario.hasMany(Materias, { foreignKey: 'idMateria' });
//Grupos.belongsTo(Materias, { foreignKey: 'idMateria' });

module.exports = Grupos;