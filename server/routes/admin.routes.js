const express = require("express");
const {
  // addEmployeeDetails,
  // loadAllEmployeesDetails,
  // addCompany,
  // loadAllCompanies,
  // deleteCompanyById,
  // updateCompanyById,
  // addProject,
  // deleteProjectById,
  // updateProjectById,
  // loadAllProjects,
  // addGuarantor,
  // deleteGuarantorById,
  // updateGuarantorById,
  // loadAllGuarantors,
  // addJobType,
  // deleteJobTypeById,
  // updateJobTypeById,
  // loadAllJobTypes,
  // addNationality,
  // deleteNationalityById,
  // updateNationalityById,
  // loadAllNationalities,
  // addNOCStatus,
  // deleteNOCStatusById,
  // updateNOCStatusById,
  // loadAllNOCStatuses,
  // addSalaryType,
  // deleteSalaryType,
  // updateSalaryTypeById,
  // loadAllSalaryTypes,
  // addShiftTime,
  // deleteShiftTime,
  // updateShiftTime,
  // loadAllShiftTimes,
  // addVehicleType,
  // deleteVehicleType,
  // updateVehicleType,
  // loadVehicleTypes,
  // addStateOfIssuance,
  // deleteStateOfIssuance,
  // updateStateOfIssuance,
  // loadAllStateOfIssuances,
  // addShiftType,
  // deleteShiftType,
  // updateShiftType,
  // loadAllShiftTypes,
  // addGender,
  // loadAllGenders,
  // deleteGenderById,
  // updateGenderById,
  // addVendor,
  // loadAllVendors,
  // deleteVendor,
  // updateVendor,
  // addStore,
  // loadAllStores,
  // deleteStore,
  // updateStore,
// Employee Details
addEmployeeDetails, // Function to add employee details
loadAllEmployeesDetails, // Function to load all employee details

// Company
addCompany, // Function to add a new company
loadAllCompanies, // Function to load all companies
deleteCompanyById, // Function to delete a company by ID
updateCompanyById, // Function to update a company by ID

// Project
addProject, // Function to add a new project
deleteProjectById, // Function to delete a project by ID
updateProjectById, // Function to update a project by ID
loadAllProjects, // Function to load all projects

// Guarantor
addGuarantor, // Function to add a new guarantor
deleteGuarantorById, // Function to delete a guarantor by ID
updateGuarantorById, // Function to update a guarantor by ID
loadAllGuarantors, // Function to load all guarantors

// Job Type
addJobType, // Function to add a new job type
deleteJobTypeById, // Function to delete a job type by ID
updateJobTypeById, // Function to update a job type by ID
loadAllJobTypes, // Function to load all job types

// Nationality
addNationality, // Function to add a new nationality
deleteNationalityById, // Function to delete a nationality by ID
updateNationalityById, // Function to update a nationality by ID
loadAllNationalities, // Function to load all nationalities

// NOC Status
addNOCStatus, // Function to add a new NOC status
deleteNOCStatusById, // Function to delete an NOC status by ID
updateNOCStatusById, // Function to update an NOC status by ID
loadAllNOCStatuses, // Function to load all NOC statuses

// Salary Type
addSalaryType, // Function to add a new salary type
deleteSalaryType, // Function to delete a salary type by ID
updateSalaryTypeById, // Function to update a salary type by ID
loadAllSalaryTypes, // Function to load all salary types

// Shift Time
addShiftTime, // Function to add a new shift time
deleteShiftTime, // Function to delete a shift time by ID
updateShiftTime, // Function to update a shift time by ID
loadAllShiftTimes, // Function to load all shift times

// Vehicle Type
addVehicleType, // Function to add a new vehicle type
deleteVehicleType, // Function to delete a vehicle type by ID
updateVehicleType, // Function to update a vehicle type by ID
loadVehicleTypes, // Function to load all vehicle types

// State of Issuance
addStateOfIssuance, // Function to add a new state of issuance
deleteStateOfIssuance, // Function to delete a state of issuance by ID
updateStateOfIssuance, // Function to update a state of issuance by ID
loadAllStateOfIssuances, // Function to load all states of issuance

// Shift Type
addShiftType, // Function to add a new shift type
deleteShiftType, // Function to delete a shift type by ID
updateShiftType, // Function to update a shift type by ID
loadAllShiftTypes, // Function to load all shift types

// Gender
addGender, // Function to add a new gender
loadAllGenders, // Function to load all genders
deleteGenderById, // Function to delete a gender by ID
updateGenderById, // Function to update a gender by ID

// Vendor
addVendor, // Function to add a new vendor
loadAllVendors, // Function to load all vendors
deleteVendor, // Function to delete a vendor by ID
updateVendor, // Function to update a vendor by ID

// Store
addStore, // Function to add a new store
loadAllStores, // Function to load all stores
deleteStore, // Function to delete a store by ID
updateStore // Function to update a store by ID

} = require("../controllers/employee.controllers.js");
const singleUpload = require("../middlewares/single-image.middlewares.js");
const Router = express.Router();

Router.route("/addemployeedetails").post(singleUpload, addEmployeeDetails);
Router.route("/loadallemployeesdetails").get(loadAllEmployeesDetails);
// comapany routes D
Router.route("/add-company").post(addCompany);
Router.route("/load-all-companies").get(loadAllCompanies);
Router.route("/delete-company/:id").delete(deleteCompanyById);
Router.route("/update-company/:id").put(updateCompanyById);
// project routes D
Router.route("/add-project").post(addProject);
Router.route("/delete-project/:id").delete(deleteProjectById);
Router.route("/update-project/:id").put(updateProjectById);
Router.route("/load-all-projects").get(loadAllProjects);

// Guarantor routes D
Router.route("/add-guarantor").post(addGuarantor);
Router.route("/delete-guarantor/:id").delete(deleteGuarantorById);
Router.route("/update-guarantor/:id").put(updateGuarantorById);
Router.route("/load-all-guarantors").get(loadAllGuarantors);

// Job Type Routes D
Router.route("/add-job-type").post(addJobType);
Router.route("/delete-job-type/:id").delete(deleteJobTypeById);
Router.route("/update-job-type/:id").put(updateJobTypeById);
Router.route("/load-all-job-types").get(loadAllJobTypes);

// Nationality D
Router.route("/add-nationality").post(addNationality);
Router.route("/delete-nationality/:id").delete(deleteNationalityById);
Router.route("/update-nationality/:id").put(updateNationalityById);
Router.route("/load-all-nationalities").get(loadAllNationalities);

// NOC Status Routes D
Router.route("/add-noc-status").post(addNOCStatus);
Router.route("/delete-noc-status/:id").delete(deleteNOCStatusById);
Router.route("/update-noc-status/:id").put(updateNOCStatusById);
Router.route("/load-all-noc-statuses").get(loadAllNOCStatuses);

// Salary Types Routes D
Router.route("/add-salary-type").post(addSalaryType);
Router.route("/delete-salary-type/:id").delete(deleteSalaryType);
Router.route("/update-salary-type/:id").put(updateSalaryTypeById);
Router.route("/load-all-salary-types").get(loadAllSalaryTypes);
// Shift Time Routes D
Router.route("/add-shift-time").post(addShiftTime);
Router.route("/delete-shift-time/:id").delete(deleteShiftTime);
Router.route("/update-shift-time/:id").put(updateShiftTime);
Router.route("/load-all-shift-times").get(loadAllShiftTimes);
// Vehicle Type Routes D
Router.route("/add-vehicle-type").post(addVehicleType);
Router.route("/delete-vehicle-type/:id").delete(deleteVehicleType);
Router.route("/update-vehicle-type/:id").put(updateVehicleType);
Router.route("/load-all-vehicle-types").get(loadVehicleTypes);
// State of Issuance Routes D
Router.route("/add-state-of-issuance").post(addStateOfIssuance);
Router.route("/delete-state-of-issuance/:id").delete(deleteStateOfIssuance);
Router.route("/update-state-of-issuance/:id").put(updateStateOfIssuance);
Router.route("/load-all-states").get(loadAllStateOfIssuances);
// Gender routes D
Router.route("/add-gender").post(addGender);
Router.route("/load-all-genders").get(loadAllGenders);
Router.route("/delete-gender/:id").delete(deleteGenderById);
Router.route("/update-gender/:id").put(updateGenderById);
// Add Vendor D
Router.route("/add-vendor").post(addVendor);
Router.route("/load-all-vendors").get(loadAllVendors);
Router.route("/delete-vendor/:id").delete(deleteVendor);
Router.route("/update-vendor/:id").put(updateVendor);
// Add Store
Router.route("/add-store").post(addStore);
Router.route("/load-all-stores").get(loadAllStores);
Router.route("/delete-store/:id").delete(deleteStore);
Router.route("/update-store/:id").put(updateStore);

module.exports = Router;
