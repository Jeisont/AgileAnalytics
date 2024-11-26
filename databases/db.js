const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'cultivos_agricolas',
    user: 'root',
    password: 'Yonacien1992',
    insecureAuth : true
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('¡conectado a la BD mysql!');
})

module.exports = conexion;