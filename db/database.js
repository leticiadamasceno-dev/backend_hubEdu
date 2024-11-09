const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hubEdu', 'root', '', {
  host: 'localhost',
  port: 3307,
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 60000 // opcional, aumenta o tempo limite de conexão
  }
});

module.exports = sequelize;
