let package = require("../../package.json");

module.exports = {
  getVersion
};

function getVersion(req, res) {
  console.log(package.version);
  res.json(package.version);
}
