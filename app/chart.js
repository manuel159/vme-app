const express = require('express');
const path = require('path');
const router = express.Router();
module.exports = router;

const mysqlConnection  = require('../database.js');

var data;

router.get('/', (req, res) => {
   mysqlConnection.query('SELECT * FROM TABLA1', (err, rows, fields) => {
     if(!err) {
       data = res.json;
     } else {
       console.log(err);
     }
   });  
 });

var etiquetas = data['año'];
var datos = data['pib']

var canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const myChart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: etiquetas,
      datasets: [{
            label: 'PIB Baja California',
            data: datos,
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
