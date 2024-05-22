const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})

const conn = mysql.createConnection({
    host: 'mulighet.no',
    user: 'MongoDB',
    password: 'passord',
    database: 'elias_kantine_pex',
    port: "3306"
})

conn.connect((err) => {
    if (err) {
        console.log(err)
    }
    console.log('connected to db')
})

app.get ('/api/products', (req, res) => {
    const query = conn.query('SELECT * FROM `mat`', (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
        return res.status(200).json({ success: true, message: 'Products fetched successfully', products: results });
    })
})