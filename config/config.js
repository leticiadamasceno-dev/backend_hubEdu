module.exports = {
    development: {
      username: 'root',
      password: '',
      database: 'hubEdu',
      host: '127.0.0.1',
      port: 3307,
      dialect: 'mysql',
      logging: false, // Desativa logs de SQL no console
    },
    test: {
      username: 'root',
      password: '',
      database: 'hubEdu_test',
      host: '127.0.0.1',
      port: 3307,
      dialect: 'mysql',
      logging: false,
    },
    production: {
      username: 'root',
      password: '',
      database: 'hubEdu_prod',
      host: '127.0.0.1',
      port: 3307,
      dialect: 'mysql',
      logging: false,
    },
  };
  