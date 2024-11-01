const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hubEdu', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
