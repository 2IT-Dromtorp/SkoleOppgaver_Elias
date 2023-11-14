const express = require('express')
const app = express()
const port = 3000

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "vsc",
  password: "tullerusk91",  
  database: "dromtorp",
  port: 3306,
});
 
connection.connect();

connection.query('SELECT 1+1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

