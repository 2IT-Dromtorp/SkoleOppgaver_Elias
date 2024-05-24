const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.listen(8080, () => {
    console.log('Server is running on port ' + port);
})

const db = mysql.createConnection({
    host: 'mulighet.no',
    user: 'MongoDB',
    password: 'passord',
    database: 'elias_kantine_pex',
    port: "3306"
})

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});


app.get('/api/items', (req, res) => {
    db.query('SELECT * FROM mat', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


app.post('/api/order/:item_id', (req, res) => {
    const { item_id } = req.params;
    db.query('UPDATE mat SET STK = STK - 1 WHERE id = ? AND STK > 0', [item_id], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(400).json({ error: 'Item not available' });
        }
        res.sendStatus(200);
    });
});

app.use(express.static("build"));