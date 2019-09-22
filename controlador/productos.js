const {productos} = require('../db.json');

module.exports = {
    getProductos : (req,res)=>{
        res.json({
            // 'productos' : productos
            // forma abreviada
            productos

        })
    },
    addProductos : (req,res)=>{
        const {nombre} = req.body;
        productos.push({
            //nombre : nombre
            // forma abreviada
            nombre,
            id: productos.length
        });
        res.json({
            'success' : true,
            'msg': 'Se agregó con éxito'
        });
    },
    updateProductos : (req,res)=>{
        // console.log(req.params.id);
        const {id} = req.params;
        const {nombre} = req.body;
        productos.forEach( (productos , i) =>{
            // comparar que sea exactamente igual
            if (productos.id === Number(id)) {
                productos.nombre = nombre;
            }
        } );

        res.json({
            'success' : true,
            'msg': 'Se actualizó con éxito'
        });
        
    },
    deleteProductos : (req,res)=>{
        const {id} = req.params;
        productos.forEach( (producto , i) =>{
            // comparar que sea exactamente igual
            if (producto.id === Number(id)) {
                // de ese indice, solo elimina 1
                productos.splice(i, 1);
            }
        } );

        res.json({
            'success' : true,
            'msg': 'Se eliminó con éxito'
        });
    }
};