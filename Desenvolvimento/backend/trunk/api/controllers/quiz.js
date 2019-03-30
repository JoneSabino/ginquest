"use strict";
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require("util");

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  getQuiz,
  deleteQuiz,
  postQuiz
};

const pg = require("pg");

const connectionName =
  process.env.INSTANCE_CONNECTION_NAME || "ginquest-app:us-central1:ginquest";
const dbUser = process.env.SQL_USER || "postgres";
const dbPassword = process.env.SQL_PASSWORD || "ginquest";
const dbName = process.env.SQL_DATABASE || "postgres";

let host;
if (process.env.NODE_ENV === "production") {
  host = `/cloudsql/${connectionName}`;
} else {
  host = "35.184.171.78";
}

console.log(host);

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

function getQuiz(req, res) {
  pgPool.query("select * from quiz", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.json(JSON.stringify(results));
    }
  });
}

function deleteQuiz(req, res) {
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
}

function postQuiz(req, res) {
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
}
