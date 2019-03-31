"use strict";

const pgPool = require("../helpers/pgPool");

module.exports = {
  getTarefas
};

function getTarefas(req, res) {
  pgPool.query(
    `select t.idtarefa, t.idtipotarefa, t.nome, ta.nome nomeAtributo, tav.valor
    from tarefa t
      inner join tarefaatributovalor tav on t.idtarefa = tav.idtarefa
      inner join tipoatributo ta on ta.idtipoatributo = tav.idtipoatributo
    where t.idtarefa = $1`,
    [req.swagger.params.id.value],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        if (results.rows.length) {
          const tarefa = {
            idtarefa: results.rows[0].idtarefa,
            idtipotarefa: results.rows[0].idtipotarefa,
            nome: results.rows[0].nome
          };
          for (let atributoValor of results.rows) {
            console.log(atributoValor);
            tarefa[atributoValor.nomeatributo] = atributoValor.valor;
          }
          res.json(tarefa);
        } else {
          res.json({});
        }
      }
    }
  );
}
