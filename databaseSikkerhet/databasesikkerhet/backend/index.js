const mysql = require('mysql2');
const express = require('express');
const app = express();
app.use(express.json());

app.listen(8080, () => {
    console.log('Server is running on port 80');
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'drom2rp',
    port: "3306"
})

conn.connect((err) => {
    if (err) {
        console.log(err)
    }
    console.log('connected to db')
})

app.post ('/api/register', (req, res) => {
    const {username, email, password} = req.body
    const server = [username, email, password]
    const query = conn.query('INSERT INTO `login` (username, email, password) VALUES (?, ?, ?)', server, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.json(result)
    })
})

app.post ('/api/login', (req, res) => {
    const {username, password} = req.body
    const server = [username, password]
    const query = conn.query('SELECT * FROM `login` WHERE username = ? AND password = ?', server, (err, result) => {
        if (err) {
            return res.json({success: false, message: "Could not find user"})
        }
        res.json({success: true, message: "succsefully found user", user: result})   
     })
})