"use strict";

const pgPool = require("../helpers/pgPool");

module.exports = {
  getGincana,
  getGincanas,
  getTarefa,
  criaTarefa
};

function getGincana(req, res) {
  console.log("Teste");
  pgPool.query(
    `select idgincana, g.nome, criador, datacriacao, idtarefa, idtipotarefa, 
            t.nome nometarefa, idusuario, u.nome nomeusuario
     from gincana g
      inner join tarefa t using (idgincana)
      inner join usuario u on (g.criador = u.idusuario)
     where idgincana = $1`,
    [req.swagger.params.id.value],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (results.rows.length) {
          let gincana = {
            idgincana: results.rows[0].idgincana,
            nome: results.rows[0].nome,
            datacriacao: results.rows[0].datacriacao,
            criador: {
              idusuario: results.rows[0].idusuario,
              nome: results.rows[0].nomeusuario
            },
            tarefas: []
          };
          for (let tarefas of results.rows) {
            gincana.tarefas.push({
              idtarefa: tarefas.idtarefa,
              nome: tarefas.nometarefa
            });
          }
          console.log(gincana);
          res.json(gincana);
        } else {
          res.status(500).send("Nenhuma gincana encontrada!!!");
        }
      }
    }
  );
}

function getGincanas(req, res) {
  pgPool.query(
    "select idgincana, nome, criador from gincana",
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

function getTarefa(req, res) {
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

function criaTarefa(req, res) {
  criaTarefaAsync(req, res).then();
}

async function criaTarefaAsync(req, res) {
  try {
    let body = req.swagger.params.body.value;
    const { idgincana, idtipotarefa, nome } = body;
    const insertTarefa = {
      name: "insereTarefa",
      text:
        "insert into Tarefa(IdGincana, IdTipoTarefa, Nome) values ($1, $2, $3) returning idtarefa",
      values: [idgincana, idtipotarefa, nome]
    };
    let result = await pgPool.query(insertTarefa);
    const { idtarefa } = result.rows[0];
    for (let param in body) {
      if (!["idgincana", "idtipotarefa", "nome"].includes(param)) {
        const getTipoAtributo = {
          name: "getTipoAtributo",
          text: "select idtipoatributo from tipoatributo where nome = $1",
          values: [param]
        };
        result = await pgPool.query(getTipoAtributo);
        const { idtipoatributo } = result.rows[0];
        const insereTipoAtributoValor = {
          name: "insereTipoAtributoValor",
          text: "insert into TarefaAtributoValor values($1, $2, $3, $4)",
          values: [idtarefa, idtipotarefa, idtipoatributo, body[param]]
        };
        result = await pgPool.query(insereTipoAtributoValor);
      }
    }
    res.json({ idtarefa });
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
}
