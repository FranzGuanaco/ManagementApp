const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');


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
        const token = jwt.sign({ username: req.body.username }, 'secret_key');
        res.json({ token }); // Renvoie le token dans la réponse
      
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



// suppression de l'utilisateur connecté dans l'interface parameters
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
  connection.query('SELECT * FROM Employees where Surname = ?', 
  function(err, results, fields) {
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
  const query1 = 'SELECT id, Surname, Firstname FROM Employees';
  const query2 = 'SELECT id, project_name FROM Project';

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



app.post('/NewStaffing', function(req, res) {
  const { employeeId, projectId } = req.body;

  const query = 'INSERT INTO ProjectEmployee (employee_id, project_id) VALUES (?, ?)';
  connection.query(query, [employeeId, projectId], function(err, result) {
    if (err) {
      console.error('Erreur lors de l\'insertion dans la table Projectemployee:', err.stack);
      return;
    }

    res.status(200).send({ success: true });
  });
});



app.get('/NewProject', function(req, res) {
  const query = 'SELECT project_name, description, start_date, deadline, budget from Project';

  const promise = new Promise((resolve, reject) => {
    connection.query(query, function(err, result) {
      if (err) {
        console.error('Erreur lors de la récupération des données du projet:', err.stack);
        reject(err); // Rejeter la Promise avec l'erreur
      } else {
        resolve(result); // Résoudre la Promise avec le résultat
      }
    });
  });

  promise
    .then((result) => {
      res.status(200).send({ success: true, data: result });
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des données du projet:', error);
      res.status(500).send({ success: false, message: 'Erreur lors de la récupération des données du projet' });
    });
});



app.get('/Report', function(req, res) {
  const query1 = 'SELECT COUNT(*) AS employeeCount FROM Employees';
  const query2 = 'SELECT COUNT(*) AS projectCount FROM Project';

  connection.query(query1, function(err, employeeResult) {
    if (err) {
      console.error('Erreur lors de la récupération du nombre d\'employés :', err.stack);
      res.status(500).send({ success: false, error: 'Une erreur s\'est produite lors de la récupération du nombre d\'employés.' });
      return;
    }

    connection.query(query2, function(err, projectResult) {
      if (err) {
        console.error('Erreur lors de la récupération du nombre de projets :', err.stack);
        res.status(500).send({ success: false, error: 'Une erreur s\'est produite lors de la récupération du nombre de projets.' });
        return;
      }

      const employeeCount = employeeResult[0].employeeCount;
      const projectCount = projectResult[0].projectCount;

      res.status(200).send({ success: true, employeeCount, projectCount });
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





