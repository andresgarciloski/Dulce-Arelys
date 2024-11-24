const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'virtualazure.database.windows.net',  // Reemplaza con tu servidor en Azure
    user: 'andres',                // Reemplaza con tu usuario de Azure
    password: 'Royer280504+',                     // Reemplaza con tu contraseña
    database: 'dulce_arelys',                      // El nombre de la base de datos en Azure
    ssl: {
        ca: fs.readFileSync('/path-to-ca-cert.pem')  // Opcional, si usas SSL para la conexión (puedes omitirlo si no es necesario)
    }
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar: ', err);
        throw err;
    }
    console.log('Conexión exitosa a la base de datos en Azure');
});

module.exports = connection;
