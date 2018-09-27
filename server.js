const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const socketIo = require("socket.io");

//Server configuration
const app = express();
const port = 5000 || process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Routes
app.get("/", (req, res) => {
  res.send("Alecrim");
});

//Socket IO configurantion
const io = socketIo(server);

io.on("connection", client => {});
