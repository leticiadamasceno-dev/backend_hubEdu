const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hubEdu', 'root', '', {
  host: 'localhost',
//  port: 3307,
  dialect: 'mysql',
  logging: false, // Desativa os logs de queries SQL se tiver te incomodando
});

module.exports = sequelize;
