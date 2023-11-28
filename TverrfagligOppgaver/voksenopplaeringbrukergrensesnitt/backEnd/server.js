const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'voksenopplaering',
});

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
  const values = [req.body.navn, req.body.email, req.body.password];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ status: 400, error: err });
    } else {
      return res.json({ status: 200, data: data });
    }
  });
});


app.post('/login', (req, res) => {
        const sql = "SELECT * FROM login WHERE 'email' = ? AND 'password' = ?";
      
        db.query(sql, [req.body.email, req.body.password], (err, data) => {
          if (err) {
            return res.json({ status: 400, error: err });
          } 
          if(data.length > 0){
            return res.json( true );
          } else {
            return res.json({ status: 400, data: data });
          }
        });
      });

const port = 8081; // Use the correct port number
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
