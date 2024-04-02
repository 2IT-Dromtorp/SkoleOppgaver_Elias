const http = require("http");
const express = require("express");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const schema = require("./schema");
const cors = require("cors");
const socketIo = require("socket.io");
const fs = require("fs");

app.use(express.static("build"));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// multer for fil opplasting
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./filer/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const newUser = new schema({ username, password });
  newUser.save();
  res.send("User registered successfully!");
});

app.get("/filer", (req, res) => {
  fs.readdir("./filer", (err, files) => {
    if (err) {
      res.status(500).send("Error reading directory.");
    } else {
      res.json(files);
    }
  });
});

app.get("/fil/:file", (req, res) => {
  res.sendFile(path.join(__dirname, `filer`, req.params.file));
});

// Fikser fil upload
app.post("/upload", upload.single("file"), (req, res) => {
  const uploadedFile = req.file;
  if (!uploadedFile) {
    return res.status(400).send("No file uploaded.");
  }

  res.json(uploadedFile.filename);
});

// Mekker file download
app.get("/download/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "uploads", filename);

  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send("File not found.");
  }
});


// 2step autentication
app.get("/2step", (req, res) => {
  const token = req.query.token;
  const user = req.query.user;
  const foundUser = loginWaiting.find((cUser) => cUser.user === user);
  console.log("foundUser", foundUser, token, loginWaiting);
  if (foundUser && foundUser.token === token) {
    const fIndex = loginWaiting.findIndex(
      (cuser) => cuser.username === user.username
    );
    if (fIndex !== -1) {
      loginWaiting.splice(fIndex, 1);
    }
    res.send("Login successful!");
    foundUser.socket.emit("2step", {
      code: "sigma",
    });
  } else {
    res.status(401).send("Login failed!");
    foundUser.socket.emit("2step", {
      code: "beta",
    });
  }
});

const connectedUsers = [];
const loginWaiting = [];

const server = http.createServer(app);

server.listen(PORT, async () => {
  const uri = "mongodb+srv://eliashgod:tullerusk91@bbop.zxizce1.mongodb.net/"; //Mongodb login connection
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
});

const myIO = socketIo(server, {
  path: "/socket",
});


myIO.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("login", async (data) => {
    const { username, password } = data;
    const user = await schema.findOne({ username, password });
    if (user) {
      socket.emit("loginResult", {
        code: "sigma",
      });
      const fIndex = loginWaiting.findIndex(
        (cuser) => cuser.username === user.username
      );
      if (fIndex !== -1) {
        loginWaiting.splice(fIndex, 1);
      }
      loginWaiting.push({
        socket: socket,
        user: user.username,
        token: user.token,
      });
    } else {
      socket.emit("loginResult", {
        code: "beta",
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
