// Import MySQL connection.
const connection = require("../config/connection.js");




const orm = {
    all: function(tableInput, cb) {
      const queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, cols, vals, cb) {
      let queryString = `INSERT INTO ${table} (${cols}) VALUES ("${vals}")`

      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
  
  updateOne: function(table, cols, vals, id, cb) {
    const queryString = `UPDATE ${table} SET ${cols} = ${vals} WHERE id = ${id}`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    let queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};
// Export the orm object for the model (server.js).
module.exports = orm;