const mysql = require('mysql');

const conection = mysql.createConnection({
    user: 'root',
    host: 'Localhost',
    password: '',
    database: 'nodejs',
})

conection.connect((err)=>{
    (err)?console.log(`Se ha producido un error: ${err}`):console.log('BD conectada');
})


module.exports = conection;