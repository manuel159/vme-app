const express = require('express');
const path = require('path');

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
    res.render('pages/about');
});



router.post('/contacto', (req, res)=>{
    
});

router.get('/thank-you', (req, res)=>{
    res.render('pages/thank-you');
});
