const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const UrgenciaPergunta = sequelize.define('UrgenciaPergunta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = UrgenciaPergunta;