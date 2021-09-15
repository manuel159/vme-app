const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./app/routes');
app.use('/', router);

app.listen(port, function() {
    console.log('app started, the cat on the table');
});

/*
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Manuel159357!',
    database: 'prueba 1'
});

connection.connect(err => {
    if (err) throw err;
    console.log('La base de datos se enchufo'); 
});

app.listen(port, () => console.log(`Server running on port ${port}`))
*/