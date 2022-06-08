module.exports = app => {

    const categories = require("../controllers/categories.controller.js");
    var express = require('express');
    var router = express.Router();

    // Create a new Tutorial
    router.post("/", categories.create);
    // Retrieve all employee
    router.get("/", categories.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", categories.findOne);
    // Update a Tutorial with id
    router.put("/:id", categories.update);
    // Delete a Tutorial with id
    router.delete("/:id", categories.delete);
    // Create a new Tutorial
    router.delete("/", categories.deleteAll);
    app.use('/api/categories', router);
  };