const sequelize = require('./db/database');
const User = require('./models/usuario');

sequelize.sync({ force: false })
  .then(() => {
    console.log('banco de dados e tabela criados');
  })
  .catch((error) => console.error('erro ao criar o banco de dados:', error));
