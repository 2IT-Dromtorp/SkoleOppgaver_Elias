const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'mulighet.no',
  user: 'MongoDB',
  password: 'passord',
  database: 'vihjelperdeg_ex_elias',
  port: '3306'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

app.get('/api/products', (req, res) => {
  let sql = 'SELECT * FROM products';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

app.post('/api/checkout', (req, res) => {
  const { name, address, email, cart } = req.body;
  let sql = 'INSERT INTO orders (name, address, email, cart) VALUES (?, ?, ?, ?)';
  let cartString = JSON.stringify(cart);
  db.query(sql, [name, address, email, cartString], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: 'Order placed', orderId: result.insertId });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
