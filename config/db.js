const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'dulce_arelys'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Conexion exitosa a la base de datos')
});

module.exports = connection;