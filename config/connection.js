// Set up MySQL connection.
const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
const connection = mysql.createConnection({
  host: "nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "zp97f78bmar8pcav",
  password: "ewmbz9awa8mu3uwl",
  database: "fr9uwkvogulg03lc"
});
};
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