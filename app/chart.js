const express = require('express');

const path = require('path');

// creamos un objeto ruta
const router = express.Router();

// exportamos nuestra ruta
module.exports = router;




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
