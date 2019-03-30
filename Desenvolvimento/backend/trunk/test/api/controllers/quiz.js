var should = require("should");
var request = require("supertest");
var server = require("../../../app");

describe("controllers", function() {
  describe("quiz", function() {
    describe("GET /quiz", function() {
      it("should return a default string", function(done) {
        request(server)
          .get("/quiz")
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql("Hello, stranger!");

            done();
          });
      });
    });
  });
});
