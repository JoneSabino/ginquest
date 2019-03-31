"use strict";

const pgPool = require("../helpers/pgPool");

module.exports = {
  getQuiz,
  deleteQuiz,
  postQuiz
};

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
