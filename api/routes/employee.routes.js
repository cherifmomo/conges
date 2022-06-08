module.exports = app => {

    const employee = require("../controllers/employee.controller.js");
    var express = require('express');
    var router = express.Router();

    // Create a new Tutorial
    router.post("/", employee.create);
    // Retrieve all employee
    router.get("/", employee.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", employee.findOne);
    // Update a Tutorial with id
    router.put("/:id", employee.update);
    // Delete a Tutorial with id
    router.delete("/:id", employee.delete);
    // Create a new Tutorial
    router.delete("/", employee.deleteAll);
    app.use('/api/employee', router);
  };