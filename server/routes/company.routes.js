const express = require("express");
const {
  addCompany,
  loadAllCompanies,
  deleteCompanyById,
  updateCompanyById,
} = require("../controllers/employee.controllers");

const Router = express.Router();

Router.route("/add-company").post(addCompany);
Router.route("/load-all-companies").get(loadAllCompanies);
Router.route("/delete-company/:id").delete(deleteCompanyById);
Router.route("/update-company/:id").put(updateCompanyById);
module.exports = Router;
