const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
const pg = require("pg");

const connectionName =
  process.env.INSTANCE_CONNECTION_NAME || "ginquest-app:us-central1:ginquest";
const dbUser = process.env.SQL_USER || "postgres";
const dbPassword = process.env.SQL_PASSWORD || "ginquest";
const dbName = process.env.SQL_NAME || "postgres";

let host;
if (process.env.NODE_ENV !== "production") {
  host = `/cloudsql/${connectionName}`;
} else {
  host = "35.184.171.78";
}

const pgConfig = {
  max: 1,
  host,
  user: dbUser,
  password: dbPassword,
  database: dbName
};

let pgPool;
if (!pgPool) {
  pgPool = new pg.Pool(pgConfig);
}

app.get("/quiz", function(req, res) {
  pgPool.query("select * from quiz", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.send(JSON.stringify(results));
    }
  });
});

app.delete("/quiz/:id", function(req, res) {
  pgPool.query(
    "delete from quiz where quizid = $1",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        res.send(JSON.stringify(results));
      }
    }
  );
});

app.post("/quiz", function(req, res) {
  const {
    pergunta,
    resposta1,
    resposta2,
    resposta3,
    resposta4,
    resposta5,
    correct
  } = req.body;
  pgPool.query(
    `insert into quiz
              (pergunta, resposta1, resposta2, resposta3, resposta4, resposta5, correct) 
              values($1, $2, $3, $4, $5, $6, $7)`,
    [pergunta, resposta1, resposta2, resposta3, resposta4, resposta5, correct],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        res.send(results);
      }
    }
  );
});

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/hello", function(req, res) {
  res.json({ hello: "hello" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
