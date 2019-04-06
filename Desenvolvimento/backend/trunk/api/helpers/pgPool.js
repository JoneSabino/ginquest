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

var socks = require("socks5-client");

var proxy_options = {
  host: "sp1674706:12dfe448@10.102.2.253",
  port: "3128"
};

var socksConn = socks.createConnection(proxy_options);

const pgConfig = {
  max: 1,
  host,
  user: dbUser,
  password: dbPassword,
  database: dbName //,
  //stream: socksConn
};

let pgPool;
if (!pgPool) {
  pgPool = new pg.Pool(pgConfig);
}

module.exports = pgPool;
