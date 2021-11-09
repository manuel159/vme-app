const express = require('express');
const path = require('path');

// creamos un objeto ruta
const router = express.Router();

// exportamos nuestra ruta
module.exports = router;

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
    res.render('pages/about.html');
});



router.post('/contacto', (req, res)=>{
    
});

router.get('/thank-you', (req, res)=>{
    res.render('pages/thank-you');
});

var canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const myChart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
      }]
   },
   options: {
      scales: {
            y: {
               beginAtZero: true
            }
      }
   }
});
