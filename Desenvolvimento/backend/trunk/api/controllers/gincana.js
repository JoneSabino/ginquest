"use strict";

const pgPool = require("../helpers/pgPool");

module.exports = {
  getGincanas
};

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
