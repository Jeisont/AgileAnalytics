
const express = require('express');
const app = express();


// Middleware para analizar JSON y datos de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

// Rutas
app.use('/', require('./router'));

app.use(express.static('public'));


app.listen(5000, () => {
    console.log('server corriendo en http://localhost:5000');
});
