const express = require("express");

const router = express.Router();


const burger = require("../models/burger.js");




router.get("/", function(req, res) {
    burger.all(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name"
      ], [
        req.body.name
      ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      "devoured", 1, req.params.id
    , function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  
  // Export routes for server.js to use.
  module.exports = router;
  