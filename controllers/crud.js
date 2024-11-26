const conexion = require('../databases/db');

exports.save = (req, res) => {
    const cedula = req.body.cedula;
    const nombre = req.body.nombre;
    const celular = req.body.celular;
    const correo_electronico = req.body.correo_electronico;
    const tipo_de_cultivo = req.body.tipo_de_cultivo;
    const fecha_de_siembra = req.body.fecha_de_siembra;
    const area_sembrada = req.body.area_sembrada;
    const nombre_de_finca = req.body.nombre_de_finca;
    const municipio = req.body.municipio;

    conexion.query('INSERT INTO agricultores SET ?', {
        cedula: cedula,
        nombre: nombre,
        celular: celular,
        correo_electronico: correo_electronico,
        tipo_de_cultivo: tipo_de_cultivo,
        fecha_de_siembra: fecha_de_siembra,
        area_sembrada: area_sembrada,
        nombre_de_finca: nombre_de_finca,
        municipio: municipio
    }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    });
};


exports.update = (req, res) => {
    const cedula = req.body.cedula;
    const nombre = req.body.nombre;
    const celular = req.body.celular;
    const correo_electronico = req.body.correo_electronico;
    const tipo_de_cultivo = req.body.tipo_de_cultivo;
    const fecha_de_siembra = req.body.fecha_de_siembra;
    const area_sembrada = req.body.area_sembrada;
    const nombre_de_finca = req.body.nombre_de_finca;
    const municipio = req.body.municipio;

    conexion.query('UPDATE agricultores SET ? WHERE cedula = ?', [
        {
            nombre: nombre,
            celular: celular,
            correo_electronico: correo_electronico,
            tipo_de_cultivo: tipo_de_cultivo,
            fecha_de_siembra: fecha_de_siembra,
            area_sembrada: area_sembrada,
            nombre_de_finca: nombre_de_finca,
            municipio: municipio
        },
        cedula
    ], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    });
};

