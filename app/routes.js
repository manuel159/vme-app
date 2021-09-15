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






