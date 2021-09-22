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

//informacion para abaut
router.get('/about', (req, res)=>{
    var users = [
        { name: 'Holly', email: 'holly@scotch.io', avatar: 'http://placekitten.com/300/300'},
        { name: 'Chris', email: 'chris@scotch.io', avatar: 'http://placekitten.com/400/400'},
        { name: 'Ado', email: 'Ado@scotch.io', avatar: 'http://placekitten.com/500/500'},
        { name: 'Samantha', email: 'Samantha@scotch.io', avatar: 'http://placekitten.com/700/700'}
        
    ];
    res.render('pages/about',{usr:users});
});


//este es el get contact redirige a contacto
router.get('/contact', (req, res)=>{
    res.render('pages/contact');
});



router.post('/contacto', (req, res)=>{
    
});

//Los datos que apareceran en ty se realizan aqui
router.get('/contacto', (req, res)=>{
    const nom = req.query.name;
    console.log( ` ${req.query} :  ${nom}`);
    console.log("Email: " + req.query.email);
    console.log("Mensaje: " + req.query.message);
    //Para que se envien las 2 variables
    const personal = {mess1: 'Gracias, querido ' + req.query.name + '. te enviamos un correo a ' + req.query.email};
    res.render('pages/thank-you', {personal: personal});
});



router.get('/thank-you', (req, res)=>{
    res.render('pages/thank-you');
});
