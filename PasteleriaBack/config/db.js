const sql = require('mssql');
 
const config = {
    user: 'admin',
    password: 'Fime2025',
    server: 'LATITUDE-3540\\SQLEXPRESS',
    database: 'dulce_arelys',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
 
sql.connect(config)
    .then(() => {
        console.log('Conexión exitosa a la base de datos local en SQL Server');
    })
    .catch((err) => {
        console.error('Error al conectar a la base de datos:', err);
    });
 
module.exports = sql;