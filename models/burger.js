const orm = require("../config/orm.js");

const burger = {

    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
      create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
      update: function(cols, vals, id, cb) {
        orm.updateOne("burgers", cols, vals, id, function(res) {
          cb(res);
        });
      },
      // delete: function(cols, vals, id, cb) {
      //   orm.delete("burgers", cols, vals, id, function(res) {
      //     cb(res);
      //   });
      // }
    };
    
    // Export the database functions for the controller (burgersController.js).
    module.exports = burger;