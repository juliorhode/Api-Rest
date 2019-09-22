// modulos middlewares
const morgan = require('morgan');
const bodyParser = require('body-parser');

// para obtener las rutas de productos.js
const rutaProductos = require('./rutas/productos');

const express = require('express');
const app = express();

// confifuracion
// para que se vea mejor en el navegaros
app.set('json spaces',4); // agrega tabulacion

// middlewares
app.use(morgan('dev')); // muestra por consola las peticiones http
// cuando el navegador envie informacion en formato json 
// para que el servidor lo convierta y pueda utilizar los datos
app.use(bodyParser.json());

// para recibir y entender datos de un formulario
app.use(bodyParser.urlencoded({extended:false}));

// rutas
/**
 * '/productos' es un prefijo para no colocar
 * localhost:3000/productos
 */
app.use('/productos',rutaProductos); // se colocaron todas las rutas por separado en rutas/productos


// inicio del servidor
// ponemos a la escucha el servidor
app.listen(3000 , () =>{
    console.log('Servidor iniciado en puerto 3000');
    
});