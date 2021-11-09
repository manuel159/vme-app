const express = require('express');
const path = require('path');

const jsonfile = {
    "jsonarray": [
    {
       "Anio":2007,
       "PIB":7.7
    },
    {
       "Anio":2008,
       "PIB":9.5
    },
    {
       "Anio":2009,
       "PIB":3.4
    },
    {
       "Anio":2010,
       "PIB":5.8
    },
    {
        "Anio":2011,
        "PIB":2.5
    },
    {
        "Anio":2012,
        "PIB":3.6
     }
 ]
 };

const anio = jsonfile.jsonarray.map(function(e) {
    return e.Anio;
 });

const pib = jsonfile.jsonarray.map(function(e) {
    return e.P;
 });

// creamos un objeto ruta
const router = express.Router();

// exportamos nuestra ruta
module.exports = router;

//hacemos una ruta al home
router.get('/', function (req, res){
    res.render('pages/home', {extra: "Manuel Gastelum"});
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
    var etiquetas = ['2007', '2008', '2009', '2010', '2011', '2012'];
    var datos = [7.7, 9.5, 3.4, 5.8, 2.5, 3.6];
    res.render('pages/about',{eti:etiquetas, data:datos});
});



router.post('/contacto', (req, res)=>{
    
});

router.get('/thank-you', (req, res)=>{
    res.render('pages/thank-you');
});

