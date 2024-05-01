const mysql = require('mysql2');
const express = require('express');
const app = express();
const {hash, compare} = require('./ascii');
const jwt = require('jsonwebtoken');
app.use(express.json());


app.listen(8080, () => {
    console.log('Server is running on port aaaaaaa');
})

const conn = mysql.createConnection({
    host: 'mulighet.no',
    user: 'MongoDB',
    password: 'passord',
    database: 'elias_pex',
    port: "3306"
})

conn.connect((err) => {
    if (err) {
        console.log(err)
    }
    console.log('connected to db')
})

app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;

    const hashedPassword = hash(password);

    const server = [username, email, hashedPassword];

    const query = conn.query('INSERT INTO `users` (username, email, password) VALUES (?, ?, ?)', server, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(200).json({ success: true });
        }
    });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const server = [username];

    const query = conn.query('SELECT * FROM `users` WHERE username = ?', server, (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }

        const user = results[0];
        const hashedPasswordFromDB = user.password;

        if (!compare(password, hashedPasswordFromDB)) {
            return res.status(401).json({ success: false, message: 'Incorrect password' });
        }

        jwt.sign({ user }, 'Skole12321', (err, token) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Internal server error' });
            }

            return res.status(200).json({ success: true, message: 'Successfully logged in', user, token });
            
        })

    });
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    const bearerToken = bearerHeader.split(' ')[1];
    if(!bearerToken) return res.sendtatus(403);
    jwt.verify(bearerToken, 'Skole12321', (err, authData) => {
        if(err) {
            res.sendStatus(401);
        } else {
            req.jwtinfo = authData;
            next();
        }
    })
}

app.get("/api/getname", verifyToken, (req, res) => {
    const a = req.jwtinfo;
    res.status(200).json({name: a.user.username});
})

//mongob

app.get('/api/utstyr',  verifyToken, (req, res) => {
    const a = req.jwtinfo;
    const query = conn.query('SELECT * FROM `utstyr`', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.json(result)
    })
})