const express = require("express");
const {
  addEmployeeDetails,
  loadAllEmployeesDetails,
  addCompany,
  loadAllCompanies,
  deleteCompanyById,
  updateCompanyById,
  addProject,
  deleteProjectById,
  updateProjectById,
  loadAllProjects,
  addGuarantor,
  deleteGuarantorById,
  updateGuarantorById,
  loadAllGuarantors,
  addJobType,
  deleteJobTypeById,
  updateJobTypeById,
  loadAllJobTypes,
  addNationality,
  deleteNationalityById,
  updateNationalityById,
  loadAllNationalities,
  addNOCStatus,
  deleteNOCStatusById,
  updateNOCStatusById,
  loadAllNOCStatuses,
  addSalaryType,
  deleteSalaryType,
  updateSalaryTypeById,
  loadAllSalaryTypes,
} = require("../controllers/employee.controllers.js");
const singleUpload = require("../middlewares/single-image.middlewares.js");
const Router = express.Router();

Router.route("/addemployeedetails").post(singleUpload, addEmployeeDetails);
Router.route("/loadallemployeesdetails").get(loadAllEmployeesDetails);
// comapany routes
Router.route("/add-company").post(addCompany);
Router.route("/load-all-companies").get(loadAllCompanies);
Router.route("/delete-company/:id").delete(deleteCompanyById);
Router.route("/update-company/:id").put(updateCompanyById);
// project routes
Router.route("/add-project").post(addProject);
Router.route("/delete-project/:id").delete(deleteProjectById);
Router.route("/update-project/:id").put(updateProjectById);
Router.route("/load-all-projects").get(loadAllProjects);

// Guarantor routes
Router.route("/add-guarantor").post(addGuarantor);
Router.route("/delete-guarantor/:id").delete(deleteGuarantorById);
Router.route("/update-guarantor/:id").put(updateGuarantorById);
Router.route("/load-all-guarantors").get(loadAllGuarantors);

// Job Type Routes
Router.route("/add-job-type").post(addJobType);
Router.route("/delete-job-type/:id").delete(deleteJobTypeById);
Router.route("/update-job-type/:id").put(updateJobTypeById);
Router.route("/load-all-job-types").get(loadAllJobTypes);

// Nationality
Router.route("/add-nationality").post(addNationality);
Router.route("/delete-nationality/:id").delete(deleteNationalityById);
Router.route("/update-nationality/:id").put(updateNationalityById);
Router.route("/load-all-nationalities").get(loadAllNationalities);

// NOC Status Routes
Router.route("/add-noc-status").post(addNOCStatus);
Router.route("/delete-noc-status/:id").delete(deleteNOCStatusById);
Router.route("/update-noc-status/:id").put(updateNOCStatusById);
Router.route("/load-all-noc-statuses").get(loadAllNOCStatuses);

// Salary Types Routes
Router.route("/add-salary-type").post(addSalaryType);
Router.route("/delete-salary-type/:id").delete(deleteSalaryType);
Router.route("/update-salary-type/:id").put(updateSalaryTypeById);
Router.route("/load-all-salary-types").get(loadAllSalaryTypes);
module.exports = Router;
