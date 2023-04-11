const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Elsalvador60?',
  database: 'appreact'
});

connection.query('SELECT * FROM admin', (error, results, fields) => {
    if (error) {
      console.error(error);
    } else {
      console.log('bien joué');
    }
  });
  
