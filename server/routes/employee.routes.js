const express = require("express");
const {
  addEmployeeDetails,
  loadAllEmployeesDetails,
} = require("../controllers/employee.controllers");

const Router = express.Router();

Router.route("/addemployeedetails").post(addEmployeeDetails);
Router.route("/loadallemployeesdetails").get(loadAllEmployeesDetails);
module.exports = Router;
