const express = require('express');
const conexion = require('./databases/db');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM agricultores', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    });
});

// Ruta para la creación de registros
router.get('/create', (req, res) => {
    res.render('create');
});

// Ruta para manejar la creación de registros
const crud = require('./controllers/crud');
router.post('/save', crud.save);

// Ruta para editar registros
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM agricultores WHERE id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

// Ruta para actualizar el usuario
router.post('/update', crud.update);

// Ruta para eliminar registros
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM agricultores WHERE id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    });
});

//  ruta para las estadísticas
router.get('/estadisticas', (req, res) => {
    // A realizar una consulta para obtener los datos que necesitas para las estadísticas
    // Por ejemplo, podrías consultar los cultivos por tipo y municipio
    conexion.query('SELECT tipo_de_cultivo, municipio, COUNT(*) as cantidad FROM agricultores GROUP BY tipo_de_cultivo, municipio', (error, results) => {
        if (error) {
            throw error;
        } else {
            // Pasamos los resultados a la vista estadisticas.ejs
            res.render('estadisticas', { resultados: results });
        }
    });
});



module.exports = router;
