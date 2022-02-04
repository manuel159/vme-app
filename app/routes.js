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
    con.query(queryString, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        array_json = Object.values(result);
        ficha1 = fields[0].name;
        ficha2 = fields[1].name;
    });
    //array_json = ["2005/01, 1187749", "2005/02, 1183093", "2005/03, 1203753", "2005/04, 1235183", "2006/01, 1243183", "2006/02, 1263649", "2006/03, 1276208", "2006/04, 1272354", "2007/01, 1267751", "2007/02, 1302074", "2007/03, 1282783", "2007/04, 1344049", "2008/01, 1318809", "2008/02, 1391828", "2008/03, 1384694", "2008/04, 1373116", "2009/01, 1390757", "2009/02, 1400121", "2009/03, 1403117", "2009/04, 1423103", "2010/01, 1395334", "2010/02, 1401569", "2010/03, 1382754", "2010/04, 1411439", "2011/01, 1400637", "2011/02, 1434978", "2011/03, 1439691", "2011/04, 1507177", "2012/01, 1445442", "2012/02, 1527672", "2012/03, 1523252", "2012/04, 1512675", "2013/01, 1482792", "2013/02, 1571599", "2013/03, 1549395", "2013/04, 1555422", "2014/01, 1538237", "2014/02, 1570158", "2014/03, 1557099", "2014/04, 1571047", "2015/01, 1562464", "2015/02, 1575652", "2015/03, 1574118", "2015/04, 1597427", "2016/01, 1576842", "2016/02, 1595592", "2016/03, 1637164", "2016/04, 1636376", "2017/01, 1616851", "2017/02, 1684210", "2017/03, 1680359", "2017/04, 1677618", "2018/01, 1684414", "2018/02, 1725122", "2018/03, 1725713", "2018/04, 1741615", "2019/01, 1729489", "2019/02, 1759204", "2019/03, 1773973", "2019/04, 1766564", "2020/01, 1726324"]
    for(var i = 0; i < array_json.length; i++)
    {
        etiquetas[i] = array_json[i].split(",")[0];
        datos[i] = parseInt(array_json[i].split(",")[1]);
    }
    console.log(datos);
    console.log(etiquetas);
    res.render('pages/about', {items : datos, labels : etiquetas}); 
});



router.post('/contacto', (req, res)=>{
    
});

router.get('/thank-you', (req, res)=>{
    res.render('pages/thank-you');
});
