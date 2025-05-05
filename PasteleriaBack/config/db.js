const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',               
    password: 'root',                    
    database: 'dulce_arelys',                      
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar: ', err);
        throw err;
    }
    console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;
