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
  if (err) {
    console.error('Erreur: ' + err.stack);
    return;
  }
  console.log('Fetched projects from the database:', results);
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
  connection.query('SELECT position, Surname, Firstname, Mail, Availability, Income FROM Employees', function(err, results, fields) {
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
    res.status(200).send('suppression réussie.');
  });
});

app.get('/EmployeeDetails', function(req, res) {
  connection.query('SELECT * FROM Employees', function(err, results, fields) {
    if (err) {
      res.status(500).send({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).send(results);
  });
});


app.get('/Project', function(req, res) {
  connection.query('SELECT * from Project', function(err, results, fields) {
    if (err) {
      res.status(500).send({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).send(results);
  });
});

app.get('/Vacancy', function(req, res) {
  connection.query('SELECT Firstname, Surname from Employees', function(err, results, fields){
    if (err) {
      res.status(500).send({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).send(results);
  });
});

app.get('/Vacancy', function(req, res) {
  connection.query('SELECT Firstname, Surname from Employees', function(err, results, fields){
    if (err) {
      res.status(500).send({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).send(results);
  });
});

app.get('/Staffing', function(req, res) {
  const query1 = 'SELECT * FROM Employees';
  const query2 = 'SELECT * FROM Project';

  connection.query(query1, function(err1, employees, fields1) {
    if (err1) {
      console.error('Erreur lors de la récupération des employés:', err1.stack);
      res.status(500).send({ error: 'Internal Server Error' });
      return;
    }

    connection.query(query2, function(err2, projects, fields2) {
      if (err2) {
        console.error('Erreur lors de la récupération des projets:', err2.stack);
        res.status(500).send({ error: 'Internal Server Error' });
        return;
      }

      res.status(200).send({ employees, projects });
    });
  });
});



app.post('/AddAccount', function(req, res) {
  console.log('AddAccount endpoint hit');
  const { Position, Firstname, Surname, Mail, Cost, age, Diploma } = req.body;
  
  console.log('Request body:', req.body); // to check what data is coming in the request
  
  const query = `INSERT INTO Employees (Position, Firstname, Surname, Mail, Cost, age, Diploma) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [Position, Firstname, Surname, Mail, Cost, age, Diploma];

  connection.query(query, values, function(err, results, fields){
    if (err) {
      console.log('la query ne fonctionne pas'); // to check if there's an error executing the query
      res.status(500).send({ error: 'Internal Server Error' });
      return;
    }
    console.log('Query executed successfully, results:', results); // to check the result of the query
    res.status(200).send(results);
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))





