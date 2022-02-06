const express = require('express');
const path = require('path');

// creamos un objeto ruta
const router = express.Router();

// exportamos nuestra ruta
module.exports = router;

//exportamos el modulo de las bases de datos
const mysqlConnection = require('./database');

//elemntos de la base de datos
var queryString = 'SELECT * FROM `TABLE 1`';

//hacemos una ruta al home
router.get('/', function (req, res){
    res.render('pages/home');
});

//informacion para contact
router.get('/contact', (req, res)=>{
    var users = [
        { name: 'Estudiante 1', email: 'e1@tectijuana.edu.mx', avatar: 'http://placekitten.com/301/300'},
        { name: 'Estudiante 2', email: 'e2@tectijuana.edu.mx', avatar: 'http://placekitten.com/302/300'},
        { name: 'Estudiante 3', email: 'e3@tectijuana.edu.mx', avatar: 'http://placekitten.com/303/300'},
        { name: 'Estudiante 4', email: 'e4@tectijuana.edu.mx', avatar: 'http://placekitten.com/304/300'}
        
    ];
    res.render('pages/contact',{usr:users});
});




//este es el get contact redirige a contacto
router.get('/about', (req, res)=>{
    var datos = [];
    var etiquetas = [];
    var array_json = [];
    var ficha1, ficha2; 
    mysqlConnection.query(queryString, function (err, result, fields) {
        if (err) throw err;
        array_json = result;
        ficha1 = fields[0].name;
        ficha2 = fields[1].name;
        for(var i = 0; i < array_json.length; i++)
    {
        etiquetas[i] = array_json[i].Periodos;
        datos[i] = array_json[i].Poblacion;
    }
    res.render('pages/about', {items : datos, labels : etiquetas, ficha1 : ficha1, ficha2 : ficha2}); 
    });
});



router.post('/contacto', (req, res)=>{
    
});

router.get('/thank-you', (req, res)=>{
    res.render('pages/thank-you');
});
