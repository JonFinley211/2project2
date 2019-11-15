
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "gk90usy5ik2otcvi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "pqlp5er6t9ewdbd7",
    password: "hblrg8t46arbpn4a",
    database: "lyahrumhglpwi3ax"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
