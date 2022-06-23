module.exports = (app) => {
  const categories = require("../controllers/categories.controller.js");
  var express = require("express");
  var router = express.Router();

  // Create a new  category
  router.post("/", categories.create);
  // Retrieve all category
  router.get("/", categories.findAll);
  // Retrieve a single category with id
  router.get("/:id", categories.findOne);
  // Update  with id category
  router.put("/:id", categories.update);
  // Delete a  with id category
  router.delete("/:id", categories.delete);
  // Create a new  category
  router.delete("/", categories.deleteAll);
  app.use("/api/categories", router);
};
