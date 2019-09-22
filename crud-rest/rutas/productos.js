const express = require('express');

// esto es para poder crear las rutas e indicarle al servidor que hacer
const ruta = express.Router();


// vamos autilizar todo desde controlador/productos,js

/**
 * con esto simulamos datos desde la base de datos
 * const productos = require('../../db.json');
 * console.log(productos);
 * 
 * para una forma mas detallada por si hay varios objetos
 * en el arreglo, podemos hacer destructuring como se muestra
 * a continuacion, el cual le indicamos el nombre del objeto  
 * para solo obtener el arreglo
 */
// const {productos} = require('../../db.json');
// console.log(productos);

// ruta.route('/')
    // esto lo movimos a controlador/productos.js
    /*
    .get( (req,res)=>{
        res.json({
            // 'productos' : productos
            // forma abreviada
            productos

        });
    })
    .post((req,res)=>{
        console.log(req.body);
        // const producto =  req.body.nombre;
        // console.log(producto);
        
        // usando destructuring para no hacer lo anterior
        const {nombre} = req.body;

        // almacenar el valor en el arreglo
        productos.push({
            //nombre : nombre
            // forma abreviada
            nombre,
            id: productos.length
        });

        // console.log(nombre);
        res.json({
            'success' : true,
            'msg': 'Se agregó con éxito'
        });
        
    });
    */

/**
 * Es lo mismo que escribir esto:
 * ruta.get('/', (req,res)=>{});
 * ruta.post('/', (req,res)=>{});
 */



//  const controlador = require('../../controlador/productos')
//  ruta.route('/')
//     .get(controlador.getProductos)
//     .post(controlador.addProductos);

// forma mas corta usando destructuring
// colocamos solo el nombre de los metodos que queremos
const {
    getProductos,
    addProductos,
    updateProductos,
    deleteProductos
} = require('../../controlador/productos')

/**
 * es como decir localhost:3000/productos
 * ya que en index.js definimos esto:
 * app.use('/productos',rutaProductos);
 */
ruta.route('/') 
    .get(getProductos)
    .post(addProductos);

/**
 * es como decir localhost:3000/productos/1
 * ya que en index.js definimos esto:
 * app.use('/productos',rutaProductos);
 */
ruta.route('/:id')
    .put(updateProductos)
    .delete(deleteProductos);
module.exports = ruta;
