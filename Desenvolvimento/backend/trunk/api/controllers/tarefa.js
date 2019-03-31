"use strict";

const pgPool = require("../helpers/pgPool");

module.exports = {
  getTarefas
};

function getTarefas(req, res) {
  pgPool.query(
    "select idtarefa, idgincana, idtipotarefa, nome from tarefa",
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        res.json(results.rows);
      }
    }
  );
}
