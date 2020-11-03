const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.17.0.1",
  port: "3306",
  database: "crud_node",
  user: "root",
  password: "34544615",
});

exports.pool = pool;
