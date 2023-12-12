const express = require('express')
const app = express()
const port = 3305
var mysql = require('mysql');
const cors = require('cors')

app.use(cors())

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'vsc',
  password: 'tullerusk91',
  database: 'dromtorp'
});

connection.connect(function(err) {

  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


app.get('/', (req, res) => {
  
  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send(JSON.stringify(results));
  });

})

app.get('/updateuser/:newhobby/:id', (req, res) => {
  let newhobby = req.params.newhobby;
  let id = req.params.id;
  let sqlquery = 'UPDATE elev SET hobby = ? WHERE ElevID = ?'


  connection.query(sqlquery, [newhobby, id], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send(JSON.stringify(results));
  });

  res.send('PUT is');
});


app.post('/Select', (req, res) => {
  const sql = 'SELECT * FROM elev';

  connection.query(sql, (error, results, fields) => {
    if (error) {
      return res.json({ status: 400, error: error });
    }
    if(results.length > 0){
      return res.json({ status: 200, data: results, message: 'data found' });
    } else {
      return res.json({ status: 400, data: results, message: 'data not found' });
    }
  }); 
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

