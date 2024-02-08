const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// multer for fil opplasting
const storage = multer.diskStorage({
    destination: './filer/',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

// Fikser fil upload
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully!');
});

// Mekker file download
app.get('/download/:filename', (req, res) => {
    const file = path.join(__dirname, 'uploads', req.params.filename);
    res.download(file);
});

app.listen(PORT, () => {
    console.log(`Port: ${PORT}`);
});
