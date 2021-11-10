const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '209.59.129.41',
  user: 'ingind_proyecto1',
  password: 'proYECTO2021',
  database: 'ingind_proyecto1',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('la db esta conectada');
  }
});

module.exports = mysqlConnection;