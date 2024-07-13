const express = require("express");
const {
  addProject,
  deleteProjectById,
  updateProjectById,
  loadAllProjects,
} = require("../controllers/employee.controllers");
const Router = express.Router();

Router.route("/add-project").post(addProject);
Router.route("/delete-project/:id").delete(deleteProjectById);
Router.route("/update-project/:id").put(updateProjectById);
Router.route("/load-all-projects").get(loadAllProjects);
module.exports = Router;
