const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.listen(8080, () => {
  console.log("Server is running on port " + port);
});

const db = mysql.createConnection({
  host: "mulighet.no",
  user: "MongoDB",
  password: "passord",
  database: "elias_kantine_pex",
  port: "3306",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/api/items", (req, res) => {
  db.query("SELECT * FROM mat", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.post("/api/upload", (req, res) => {
  const stream = fs.createWriteStream("episk_fil.json");
  req.pipe(stream);

  stream.on("finish", async () => {
    const data = fs.readFileSync("episk_fil.json", "utf8");
    const lines = data.split("\n");
    const id = lines[0].trim();
    const contentDisposition = lines[1];
    const contentType = lines[2];

    let endLine;
    for (let i = 3; i < lines.length; i++) {
      if (lines[i].trim().startsWith(id)) {
        endLine = i;
        break;
      }
    }

    let jsonBody = "";
    for (let i = 3; i < endLine; i++) {
      jsonBody += lines[i] + "\n";
    }
    fs.writeFileSync("episk_fil_ferdig.json", jsonBody);

    const data2 = JSON.parse(fs.readFileSync("episk_fil_ferdig.json", "utf8"));
    for (ting of data2.mat) {
      const { Mat_navn, Bilde, STK, Pris } = ting;
      await new Promise((resolve, reject) => {
        db.query(
          "INSERT INTO mat (Mat_navn, Bilde, STK, Pris ) VALUES (?, ?, ?, ?)",
          [Mat_navn, Bilde, STK, Pris],
          (err, results) => {
            if (err) {
              console.error("Womp womp");
            }
            resolve();
          }
        );
      });
    }

    res.status(200).send();
  });
});
app.post("/api/order/:item_id", (req, res) => {
  const { item_id } = req.params;
  db.query(
    "UPDATE mat SET STK = STK - 1 WHERE id = ? AND STK > 0",
    [item_id],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
      }
      if (results.affectedRows === 0) {
        return res.status(400).json({ error: "Item not available" });
      }
      res.sendStatus(200);
    }
  );
});
