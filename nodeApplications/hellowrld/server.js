const express = require('express')
const app = express()
const port = 3305
var mysql = require('mysql');
const cors = require('cors')

app.use(cors())
app.use(express.json());

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


app.get('/', async (req, res) => {
  
  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send(JSON.stringify(results));
  });

})

app.put('/updateuser/:navn/:verdi/:id', async (req, res) => {
  let navn = req.params.navn;
  let verdi = req.params.verdi;
  let id = req.params.id;

  console.log(navn, verdi, id, req.params)

  let sqlquery = `UPDATE elev SET ${navn} = ? WHERE ElevID = ?`


  connection.query(sqlquery, [verdi, id], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send(JSON.stringify(results));
  });
});


app.post('/Select', async (req, res) => {
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

app.post('/insertsql', async (req, res) => {
console.log("finnes body?!?!?!?!?!?", req)
  connection.query(`INSERT INTO elev (ElevID, Fornavn, Etternavn, Klasse, Hobby, Kjonn, DatamaskinID) VALUES (null,'${req.body.Fornavn}','${req.body.Etternavn}','${req.body.Klasse}','${req.body.Hobby}','${req.body.Kjonn}','${req.body.DatamaskinID}')`, function (err, result) {
      if (err) throw err;
      res.send()
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

