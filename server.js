const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const socketIo = require("socket.io");

//BD Configuration
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "62013",
  database: "sga"
});
con.connect(() => {
  console.log("DB connected");
});

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

app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;

  con.query(
    `SELECT nome, usuario, senha FROM atendentes WHERE usuario='${usuario}'`,
    (err, result) => {
      if (err) throw err;
      if (result[0] === undefined) {
        res.status(200);
        res.send({ query: "not ok", error: "Usuário não existente" });
      } else {
        const senhaBD = result[0]["senha"];
        const nome = result[0]["nome"];

        if (senhaBD === senha) {
          res.status(200);
          res.send({ query: "ok", error: "", nome });
        } else {
          res.status(200);
          res.send({ query: "not ok", error: "Senha incorreta" });
        }
      }
    }
  );
});

//Socket IO configurantion
const io = socketIo(server);

io.on("connection", client => {
  console.log(client.id);
});
