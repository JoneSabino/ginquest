var should = require("should");
var request = require("supertest");
var server = require("../../../app");

describe("controllers", function() {
  describe("quiz", function() {
    describe("POST /tarefa", function() {
      it("should return a default string", function(done) {
        request(server)
          .post("/tarefa")
          .set("Accept", "application/json")
          .send({
            idgincana: 1,
            idtipotarefa: 2,
            nome: "Teste de quiz",
            pergunta: "Uma pergunta",
            resposta1: "Resposta 1",
            resposta2: "Resposta 1",
            resposta3: "Resposta 1",
            resposta4: "Resposta 1",
            resposta5: "Resposta 1",
            correct: 3
          })
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            done();
          });
      });
    });
  });
});
