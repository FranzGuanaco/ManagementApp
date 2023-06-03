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

connection.query('SELECT project_name from Project where id = 1', function(err, results, fields){
 console.log(results) })

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
  const query1 = new Promise((resolve, reject) => {
    connection.query('SELECT project_name from Project where id = 1', function(err, results, fields){
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });

  const query2 = new Promise((resolve, reject) => {
    connection.query('SELECT Firstname from Employees where id = 6', function(err, results, fields){
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });

  const query3 = new Promise((resolve, reject) => {
    connection.query('SELECT Project.project_name, Employees.employee_name FROM ProjectEmployee JOIN Project ON Project.id = ProjectEmployee.project_id JOIN Employee ON Employee.id = ProjectEmployee.employee_id;', function(err, results, fields){
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });

  Promise.all([query1, query2, query3])
    .then(([result1, result2, result3]) => {
      const combinedResults = {
        result1,
        result2,
        result3
      };
      res.status(200).send(combinedResults);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ error: 'Il y a un souci' });
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





