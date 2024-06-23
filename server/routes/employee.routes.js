const express = require("express");
const {
  addEmployeeDetails,
  loadAllEmployeesDetails,
} = require("../controllers/employee.controllers");
const singleUpload = require("../middlewares/single-image.middlewares.js");
const Router = express.Router();

Router.route("/addemployeedetails").post(singleUpload, addEmployeeDetails);
Router.route("/loadallemployeesdetails").get(loadAllEmployeesDetails);
module.exports = Router;
