const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',  // Reemplaza con tu servidor en Azure
    user: 'root',                // Reemplaza con tu usuario de Azure
    password: 'gabrielMonroy1905.',                     // Reemplaza con tu contraseña
    database: 'dulce_arelys',                      // El nombre de la base de datos en Azure
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar: ', err);
        throw err;
    }
    console.log('Conexión exitosa a la base de datos en Azure');
});

module.exports = connection;
