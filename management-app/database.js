const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Elsalvador60?',
  database: 'appreact'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database with id ' + connection.threadId);
});

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

connection.query('SELECT * FROM Employees', function(err, results, fields) {
  console.log(results);
});

app.post('/auth/login', function(req, res) {
  const { username, password } = req.body;

  connection.query(
    "SELECT * FROM Admin WHERE username = ? AND password = ?",
    [username, password],
    function(err, results, fields) {
      if (err) {
        res.status(500).send({ error: 'Internal Server Error' });
        return;
      }

      if (results.length > 0) {
        res.status(200).send({ success: 'User authenticated' });
      } else {
        res.status(401).send({ error: 'Invalid credentials' });
      }
    }
  );
});

app.post('/admin', function(req, res) {
  const admin = req.body;

  connection.query(
    "INSERT INTO Admin SET ?",
    admin,
    function(err, results, fields) {
      if (err) {
        res.status(500).send({ error: 'Internal Server Error' });
        return;
      }
      res.status(200).send({ success: 'Admin created' });
    });
});

app.get('/employees', function(req, res) {
  connection.query('SELECT Position, Firstname, Mail, Cost FROM Employees', function(err, results, fields) {
    if (err) {
      res.status(500).send({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).send(results);
  });
});

app.get('/delete', function(req, res) {
  connection.query('DELETE FROM Employees WHERE Position LIKE "%Junior%"', function(err, results, fields) {
    if (err) {
      res.status(500).send({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).send('suppression reussi.');
  });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



