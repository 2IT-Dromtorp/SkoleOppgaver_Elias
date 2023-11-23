const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "vsc",
  password: "tullerusk91",
  database: "dromtorp",
  port: 3306,
});

connection.connect();

// Test query to check if the database connection is working
connection.query('SELECT 1+1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Define a router
const router = express.Router();

// Define a route on the router
router.get('/', function(req, res, next) {
  res.locals.connection.query('SELECT * from elev', function (error, results, fields) {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({"status": 500, "error": "Internal Server Error", "response": null});
    } else {
      res.status(200).json({"status": 200, "error": null, "response": results});
    }
  });
});


// Use the router for the '/api' path
// app.use('/api', router);

// Define a basic route outside the router
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

fetch('http://localhost:3000/api')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
