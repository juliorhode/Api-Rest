const express = require('express');
const app = express();

// creando las rutas
app.get('/', (req,res)=>{
    res.send('Pagina inicial');
});

app.get('/random/:numInicial/:numFinal', (req,res)=>{
    // console.log(req.params.numInicial);
    // console.log(req.params.numFinal);
    // console.log(typeof req.params.numInicial);
    // console.log(typeof req.params.numFinal);

    // de string a number
    const min = parseInt(req.params.numInicial);
    const max = parseInt(req.params.numFinal);

    const resultado =Math.floor(Math.random() * (max - min) + min);

    console.log(min);
    console.log(typeof min);
    console.log(max);
    console.log(typeof max);

    if (isNaN(min) || isNaN(max)) {
        res.status(404);
        res.json({
            'error':'Peticion incorrecta'
        });
        // para que termine y salga de la funcion
        return;
    }
    console.log('Resultado: ' + resultado);

    // enviar la informacion
    res.json({
        'Numero' : resultado
    });

    // res.send('Datos btenidos');
});

app.listen(3000 , () =>{
    console.log('Servidor iniciado en puerto 3000');
    
});