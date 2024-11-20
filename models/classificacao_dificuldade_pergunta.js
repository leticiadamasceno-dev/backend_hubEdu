const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const ClassificaoDificuldadePergunta = sequelize.define('ClassificaoDificuldadePergunta', {
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

module.exports = ClassificaoDificuldadePergunta;