import { configureStore } from "@reduxjs/toolkit";
import {
  // Job type
  addJobTypeReducer,
  deleteJobTypeReducer,
  loadJobTypes,
  updateJobTypeReducer,
  //Add Store
  addStoreReducer,
  loadStoresReducer,
  deleteStoreReducer,
  updateStoreReducer,

    // Zones
  addZoneReducer,
  loadZonesReducer,
  deleteZoneReducer,
  updateZoneReducer,

   // Vendors
  addVendorReducer,
  loadVendorsReducer,
  deleteVendorReducer,
  updateVendorReducer,
// Vehicle Types
  addVehicleTypeReducer,
  loadVehicleTypesReducer,
  deleteVehicleTypeReducer,
  updateVehicleTypeReducer,
  
    // States 
  
  addStateReducer,
  loadStatesReducer,
  deleteStateReducer,
  updateStateReducer,
  // Shifts    
  addShiftReducer,
  loadShiftsReducer,
  deleteShiftReducer,
  updateShiftReducer,
  // Salaries
  addSalaryReducer,
  loadSalariesReducer,
  deleteSalaryReducer,
  updateSalaryReducer,

   // Project Reducers
   addProjectReducer,
   loadProjectsReducer,
   deleteProjectReducer,
   updateProjectReducer,
 
   // NOC Status Reducers
   addNocStatusReducer,
   loadNocStatusesReducer,
   deleteNocStatusReducer,
   updateNocStatusReducer,
 
   // Nationality Reducers
   addNationalityReducer,
   loadNationalitiesReducer,
   deleteNationalityReducer,
   updateNationalityReducer,
 
   // Guarantor Reducers
   addGuarantorReducer,
   loadGuarantorsReducer,
   deleteGuarantorReducer,
   updateGuarantorReducer,
 
   // Gender Reducers
   addGenderReducer,
   loadGendersReducer,
   updateGenderReducer,
   deleteGenderReducer,
 
   // Company Reducers
   addCompanyReducer,
   loadCompaniesReducer,
   updateCompanyReducer,
   deleteCompanyReducer,
} from "./Reducers/Reducers";

const store = configureStore({
  reducer: {
    // Job type
    addJobTypeReducer: addJobTypeReducer,
    loadJobTypes: loadJobTypes,
    deleteJobTypeReducer: deleteJobTypeReducer,
    updateJobTypeReducer: updateJobTypeReducer,

    //Store
    addStore: addStoreReducer,
    loadStores: loadStoresReducer,
    deleteStore: deleteStoreReducer,
    updateStore: updateStoreReducer,

     // Zones
     addZone: addZoneReducer,
     loadZones: loadZonesReducer,
     deleteZone: deleteZoneReducer,
     updateZone: updateZoneReducer,
 
     // Vendors
     addVendor: addVendorReducer,
     loadVendors: loadVendorsReducer,
     deleteVendor: deleteVendorReducer,
     updateVendor: updateVendorReducer,

     // Vehicle Types
    addVehicleType: addVehicleTypeReducer,
    loadVehicleTypes: loadVehicleTypesReducer,
    deleteVehicleType: deleteVehicleTypeReducer,
    updateVehicleType: updateVehicleTypeReducer,

    // States
    addState: addStateReducer,
    loadStates: loadStatesReducer,
    deleteState: deleteStateReducer,
    updateState: updateStateReducer,

    // Shifts
    addShift: addShiftReducer,
    loadShifts: loadShiftsReducer,
    deleteShift: deleteShiftReducer,
    updateShift: updateShiftReducer,

    // Salaries
    addSalary: addSalaryReducer,
    loadSalaries: loadSalariesReducer,
    deleteSalary: deleteSalaryReducer,
    updateSalary: updateSalaryReducer,

    // Project Reducers
    addProject: addProjectReducer,
    loadProjects: loadProjectsReducer,
    deleteProject: deleteProjectReducer,
    updateProject: updateProjectReducer,

    // NOC Status Reducers
    addNocStatus: addNocStatusReducer,
    loadNocStatuses: loadNocStatusesReducer,
    deleteNocStatus: deleteNocStatusReducer,
    updateNocStatus: updateNocStatusReducer,

    // Nationality Reducers
    addNationality: addNationalityReducer,
    loadNationalities: loadNationalitiesReducer,
    deleteNationality: deleteNationalityReducer,
    updateNationality: updateNationalityReducer,

    // Guarantor Reducers
    addGuarantor: addGuarantorReducer,
    loadGuarantors: loadGuarantorsReducer,
    deleteGuarantor: deleteGuarantorReducer,
    updateGuarantor: updateGuarantorReducer,

    // Gender Reducers
    addGender: addGenderReducer,
    loadGenders: loadGendersReducer,
    updateGender: updateGenderReducer,
    deleteGender: deleteGenderReducer,

    // Company Reducers
    addCompany: addCompanyReducer,
    loadCompanies: loadCompaniesReducer,
    updateCompany: updateCompanyReducer,
    deleteCompany: deleteCompanyReducer,
  },
});


export default store;
