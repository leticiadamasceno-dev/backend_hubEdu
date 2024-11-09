const mysql = require('mysql2')

const conection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '',
    database: 'gerenciamento'
})

module.exports = conection