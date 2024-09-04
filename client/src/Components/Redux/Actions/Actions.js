import axios from "axios";

// Job Type Actions
const addJobTypeAction = (jobTypeData) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_JOB_TYPE_REQUEST",
    });
    const response = await axios.post(
      "/api/v1/admin/add-job-type",
      jobTypeData
    );
    dispatch({
      type: "ADD_JOB_TYPE_REQUEST_SUCCESS",
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_JOB_TYPE_REQUEST_FAILURE",
      payload: error.response.data.message || "Network error",
    });
  }
};
const loadJobTypesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_JOB_TYPES_REQUEST",
    });
    const response = await axios.get("/api/v1/admin/load-all-job-types");
    dispatch({
      type: "LOAD_JOB_TYPES_SUCCESS",
      payload: response.data.jobTypes,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_JOB_TYPES_FAILURE",
      payload: error.response.data.message || "Network error",
    });
  }
};
const deleteJobTypeAction = (jobTypeId) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_JOB_TYPE_REQUEST",
    });
    const response = await axios.delete(
      `/api/v1/admin/delete-job-type/${jobTypeId}`
    );
    dispatch({
      type: "DELETE_JOB_TYPE_SUCCESS",
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_JOB_TYPE_FAILURE",
      payload: error.response.data.message || "Network error",
    });
  }
};

const updateJobTypeAction = (id, jobTypeData) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_JOB_TYPE_REQUEST",
    });
    const response = await axios.put(
      `/api/v1/admin/update-job-type/${id}`,
      jobTypeData
    );
    dispatch({
      type: "UPDATE_JOB_TYPE_SUCCESS",
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_JOB_TYPE_FAILURE",
      payload: error.response.data.message || "Network error",
    });
  }
};
export {
  addJobTypeAction,
  loadJobTypesAction,
  deleteJobTypeAction,
  updateJobTypeAction,
};


// Add Project Action
const addProjectAction = (projectData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_PROJECT_REQUEST" });
    const response = await axios.post("/api/v1/admin/add-project", projectData);
    dispatch({ type: "ADD_PROJECT_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "ADD_PROJECT_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Load Projects Action
const loadProjectsAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_PROJECTS_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-all-projects");
    dispatch({ type: "LOAD_PROJECTS_SUCCESS", payload: response.data.projects });
  } catch (error) {
    dispatch({ type: "LOAD_PROJECTS_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Delete Project Action
const deleteProjectAction = (projectId) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_PROJECT_REQUEST" });
    const response = await axios.delete(`/api/v1/admin/delete-project/${projectId}`);
    dispatch({ type: "DELETE_PROJECT_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "DELETE_PROJECT_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Update Project Action
const updateProjectAction = (id, projectData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PROJECT_REQUEST" });
    const response = await axios.put(`/api/v1/admin/update-project/${id}`, projectData);
    dispatch({ type: "UPDATE_PROJECT_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "UPDATE_PROJECT_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

export {
  addProjectAction,
  loadProjectsAction,
  deleteProjectAction,
  updateProjectAction,
};



// Add NOC Status Action
const addNocStatusAction = (nocStatusData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_NOC_STATUS_REQUEST" });
    const response = await axios.post("/api/v1/admin/add-noc-status", nocStatusData);
    dispatch({ type: "ADD_NOC_STATUS_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "ADD_NOC_STATUS_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Load NOC Statuses Action
const loadNocStatusesAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_NOC_STATUSES_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-all-noc-statuses");
    dispatch({ type: "LOAD_NOC_STATUSES_SUCCESS", payload: response.data.nocStatuses });
  } catch (error) {
    dispatch({ type: "LOAD_NOC_STATUSES_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Delete NOC Status Action
const deleteNocStatusAction = (nocStatusId) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_NOC_STATUS_REQUEST" });
    const response = await axios.delete(`/api/v1/admin/delete-noc-status/${nocStatusId}`);
    dispatch({ type: "DELETE_NOC_STATUS_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "DELETE_NOC_STATUS_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Update NOC Status Action
const updateNocStatusAction = (id, nocStatusData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_NOC_STATUS_REQUEST" });
    const response = await axios.put(`/api/v1/admin/update-noc-status/${id}`, nocStatusData);
    dispatch({ type: "UPDATE_NOC_STATUS_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "UPDATE_NOC_STATUS_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

export {
  addNocStatusAction,
  loadNocStatusesAction,
  deleteNocStatusAction,
  updateNocStatusAction,
};


// Add Nationality Action
const addNationalityAction = (nationalityData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_NATIONALITY_REQUEST" });
    const response = await axios.post("/api/v1/admin/add-nationality", nationalityData);
    dispatch({ type: "ADD_NATIONALITY_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "ADD_NATIONALITY_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Load Nationalities Action
const loadNationalitiesAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_NATIONALITIES_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-all-nationalities");
    dispatch({ type: "LOAD_NATIONALITIES_SUCCESS", payload: response.data.nationalities });
  } catch (error) {
    dispatch({ type: "LOAD_NATIONALITIES_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Delete Nationality Action
const deleteNationalityAction = (nationalityId) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_NATIONALITY_REQUEST" });
    const response = await axios.delete(`/api/v1/admin/delete-nationality/${nationalityId}`);
    dispatch({ type: "DELETE_NATIONALITY_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "DELETE_NATIONALITY_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Update Nationality Action
const updateNationalityAction = (id, nationalityData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_NATIONALITY_REQUEST" });
    const response = await axios.put(`/api/v1/admin/update-nationality/${id}`, nationalityData);
    dispatch({ type: "UPDATE_NATIONALITY_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "UPDATE_NATIONALITY_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

export {
  addNationalityAction,
  loadNationalitiesAction,
  deleteNationalityAction,
  updateNationalityAction,
};


// Add Guarantor Action
const addGuarantorAction = (guarantorData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_GUARANTOR_REQUEST" });
    const response = await axios.post("/api/v1/admin/add-guarantor", guarantorData);
    dispatch({ type: "ADD_GUARANTOR_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "ADD_GUARANTOR_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Load Guarantors Action
const loadGuarantorsAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_GUARANTORS_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-all-guarantors");
    dispatch({ type: "LOAD_GUARANTORS_SUCCESS", payload: response.data.guarantors });
  } catch (error) {
    dispatch({ type: "LOAD_GUARANTORS_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Delete Guarantor Action
const deleteGuarantorAction = (guarantorId) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_GUARANTOR_REQUEST" });
    const response = await axios.delete(`/api/v1/admin/delete-guarantor/${guarantorId}`);
    dispatch({ type: "DELETE_GUARANTOR_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "DELETE_GUARANTOR_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Update Guarantor Action
const updateGuarantorAction = (id, guarantorData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_GUARANTOR_REQUEST" });
    const response = await axios.put(`/api/v1/admin/update-guarantor/${id}`, guarantorData);
    dispatch({ type: "UPDATE_GUARANTOR_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "UPDATE_GUARANTOR_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

export {
  addGuarantorAction,
  loadGuarantorsAction,
  deleteGuarantorAction,
  updateGuarantorAction,
};




// Add Gender Action
const addGenderAction = (genderData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_GENDER_REQUEST" });
    const response = await axios.post("/api/v1/admin/add-gender", genderData);
    dispatch({ type: "ADD_GENDER_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "ADD_GENDER_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Load Genders Action
const loadGendersAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_GENDERS_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-all-genders");
    dispatch({ type: "LOAD_GENDERS_SUCCESS", payload: { genders: response.data.genders } });
  } catch (error) {
    dispatch({ type: "LOAD_GENDERS_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Update Gender Action
const updateGenderAction = (id, genderData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_GENDER_REQUEST" });
    const response = await axios.put(`/api/v1/admin/update-gender/${id}`, genderData);
    dispatch({ type: "UPDATE_GENDER_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "UPDATE_GENDER_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Delete Gender Action
const deleteGenderAction = (genderId) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_GENDER_REQUEST" });
    const response = await axios.delete(`/api/v1/admin/delete-gender/${genderId}`);
    dispatch({ type: "DELETE_GENDER_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "DELETE_GENDER_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

export {
  addGenderAction,
  loadGendersAction,
  updateGenderAction,
  deleteGenderAction,
};



// Add Company Action
const addCompanyAction = (companyData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_COMPANY_REQUEST" });
    const response = await axios.post("/api/v1/admin/add-company", companyData);
    dispatch({ type: "ADD_COMPANY_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "ADD_COMPANY_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Load Companies Action
const loadCompaniesAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_COMPANIES_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-all-companies");
    dispatch({ type: "LOAD_COMPANIES_SUCCESS", payload: { companies: response.data.companies } });
  } catch (error) {
    dispatch({ type: "LOAD_COMPANIES_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Update Company Action
const updateCompanyAction = (id, companyData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_COMPANY_REQUEST" });
    const response = await axios.put(`/api/v1/admin/update-company/${id}`, companyData);
    dispatch({ type: "UPDATE_COMPANY_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "UPDATE_COMPANY_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Delete Company Action
const deleteCompanyAction = (companyId) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_COMPANY_REQUEST" });
    const response = await axios.delete(`/api/v1/admin/delete-company/${companyId}`);
    dispatch({ type: "DELETE_COMPANY_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "DELETE_COMPANY_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

export {
  addCompanyAction,
  loadCompaniesAction,
  updateCompanyAction,
  deleteCompanyAction,
};



// Add Salary Type Action
const addSalaryTypeAction = (salaryTypeData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_SALARY_TYPE_REQUEST" });
    const response = await axios.post("/api/v1/admin/add-salary-type", salaryTypeData);
    dispatch({ type: "ADD_SALARY_TYPE_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "ADD_SALARY_TYPE_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Load All Salary Types Action
const loadAllSalaryTypesAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_ALL_SALARY_TYPES_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-all-salary-types");
    dispatch({ type: "LOAD_ALL_SALARY_TYPES_SUCCESS", payload: { salaryTypes: response.data.salaryTypes } });
  } catch (error) {
    dispatch({ type: "LOAD_ALL_SALARY_TYPES_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Update Salary Type Action
const updateSalaryTypeAction = (id, salaryTypeData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_SALARY_TYPE_REQUEST" });
    const response = await axios.put(`/api/v1/admin/update-salary-type/${id}`, salaryTypeData);
    dispatch({ type: "UPDATE_SALARY_TYPE_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "UPDATE_SALARY_TYPE_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Delete Salary Type Action
const deleteSalaryTypeAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_SALARY_TYPE_REQUEST" });
    const response = await axios.delete(`/api/v1/admin/delete-salary-type/${id}`);
    dispatch({ type: "DELETE_SALARY_TYPE_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "DELETE_SALARY_TYPE_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

export {
  addSalaryTypeAction,
  loadAllSalaryTypesAction,
  updateSalaryTypeAction,
  deleteSalaryTypeAction,
};


// Add Shift Time Action
const addShiftTimeAction = (shiftTimeData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_SHIFT_TIME_REQUEST" });
    const response = await axios.post("/api/v1/admin/add-shift-time", shiftTimeData);
    dispatch({ type: "ADD_SHIFT_TIME_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "ADD_SHIFT_TIME_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Load All Shift Times Action
const loadAllShiftTimesAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_ALL_SHIFT_TIMES_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-all-shift-times");
    dispatch({ type: "LOAD_ALL_SHIFT_TIMES_SUCCESS", payload: { shiftTimes: response.data.shiftTimes } });
  } catch (error) {
    dispatch({ type: "LOAD_ALL_SHIFT_TIMES_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Update Shift Time Action
const updateShiftTimeAction = (id, shiftTimeData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_SHIFT_TIME_REQUEST" });
    const response = await axios.put(`/api/v1/admin/update-shift-time/${id}`, shiftTimeData);
    dispatch({ type: "UPDATE_SHIFT_TIME_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "UPDATE_SHIFT_TIME_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Delete Shift Time Action
const deleteShiftTimeAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_SHIFT_TIME_REQUEST" });
    const response = await axios.delete(`/api/v1/admin/delete-shift-time/${id}`);
    dispatch({ type: "DELETE_SHIFT_TIME_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "DELETE_SHIFT_TIME_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

export {
  addShiftTimeAction,
  loadAllShiftTimesAction,
  updateShiftTimeAction,
  deleteShiftTimeAction,
};


// Add Vendor Action
const addVendorAction = (vendorData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_VENDOR_REQUEST" });
    const response = await axios.post("/api/v1/admin/add-vendor", vendorData);
    dispatch({ type: "ADD_VENDOR_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({
      type: "ADD_VENDOR_FAILURE",
      payload: error.response.data.message || "Network error",
    });
  }
};

// Load Vendors Action
const loadVendorsAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_VENDORS_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-all-vendors");
    dispatch({ type: "LOAD_VENDORS_SUCCESS", payload: response.data.vendors });
  } catch (error) {
    dispatch({
      type: "LOAD_VENDORS_FAILURE",
      payload: error.response.data.message || "Network error",
    });
  }
};

// Delete Vendor Action
const deleteVendorAction = (vendorId) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_VENDOR_REQUEST" });
    const response = await axios.delete(`/api/v1/admin/delete-vendor/${vendorId}`);
    dispatch({ type: "DELETE_VENDOR_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({
      type: "DELETE_VENDOR_FAILURE",
      payload: error.response.data.message || "Network error",
    });
  }
};

// Update Vendor Action
const updateVendorAction = (id, vendorData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_VENDOR_REQUEST" });
    const response = await axios.put(`/api/v1/admin/update-vendor/${id}`, vendorData);
    dispatch({ type: "UPDATE_VENDOR_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({
      type: "UPDATE_VENDOR_FAILURE",
      payload: error.response.data.message || "Network error",
    });
  }
};

export {
  addVendorAction,
  loadVendorsAction,
  deleteVendorAction,
  updateVendorAction,
};


// Add Vehicle Type Action
const addVehicleTypeAction = (vehicleTypeData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_VEHICLE_TYPE_REQUEST" });
    const response = await axios.post("/api/v1/admin/add-vehicle-type", vehicleTypeData);
    dispatch({ type: "ADD_VEHICLE_TYPE_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "ADD_VEHICLE_TYPE_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Load All Vehicle Types Action
const loadVehicleTypesAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_VEHICLE_TYPES_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-all-vehicle-types");
    dispatch({ type: "LOAD_VEHICLE_TYPES_SUCCESS", payload: { vehicleTypes: response.data.vehicleTypes } });
  } catch (error) {
    dispatch({ type: "LOAD_VEHICLE_TYPES_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Update Vehicle Type Action
const updateVehicleTypeAction = (id, vehicleTypeData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_VEHICLE_TYPE_REQUEST" });
    const response = await axios.put(`/api/v1/admin/update-vehicle-type/${id}`, vehicleTypeData);
    dispatch({ type: "UPDATE_VEHICLE_TYPE_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "UPDATE_VEHICLE_TYPE_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Delete Vehicle Type Action
const deleteVehicleTypeAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_VEHICLE_TYPE_REQUEST" });
    const response = await axios.delete(`/api/v1/admin/delete-vehicle-type/${id}`);
    dispatch({ type: "DELETE_VEHICLE_TYPE_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "DELETE_VEHICLE_TYPE_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

export {
  addVehicleTypeAction,
  loadVehicleTypesAction,
  updateVehicleTypeAction,
  deleteVehicleTypeAction,
};


// Add Store Action
const addStoreAction = (storeData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_STORE_REQUEST" });
    const response = await axios.post("/api/v1/admin/add-store", storeData);
    dispatch({ type: "ADD_STORE_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "ADD_STORE_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Load Stores Action
const loadStoresAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_STORES_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-all-stores");
    dispatch({ type: "LOAD_STORES_SUCCESS", payload: response.data.stores });
  } catch (error) {
    dispatch({ type: "LOAD_STORES_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Update Store Action
const updateStoreAction = (id, storeData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_STORE_REQUEST" });
    const response = await axios.put(`/api/v1/admin/update-store/${id}`, storeData);
    dispatch({ type: "UPDATE_STORE_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "UPDATE_STORE_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

// Delete Store Action
const deleteStoreAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_STORE_REQUEST" });
    const response = await axios.delete(`/api/v1/admin/delete-store/${id}`);
    dispatch({ type: "DELETE_STORE_SUCCESS", payload: response.data.message });
  } catch (error) {
    dispatch({ type: "DELETE_STORE_FAILURE", payload: error.response.data.message || "Network error" });
  }
};

export {
  addStoreAction,
  loadStoresAction,
  updateStoreAction,
  deleteStoreAction,
};


// Add State of Issuance Action
const addStateOfIssuanceAction = (stateOfIssuanceData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_STATE_OF_ISSUANCE_REQUEST" });
    const response = await axios.post("/api/v1/admin/add-state-of-issuance", stateOfIssuanceData);
    dispatch({ type: "ADD_STATE_OF_ISSUANCE_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "ADD_STATE_OF_ISSUANCE_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Load All States of Issuance Action
const loadAllStateOfIssuancesAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_ALL_STATE_OF_ISSUANCES_REQUEST" });
    const response = await axios.get("/api/v1/admin/load-all-states");
    dispatch({ type: "LOAD_ALL_STATE_OF_ISSUANCES_SUCCESS", payload: { statesOfIssuance: response.data.statesOfIssuance } });
  } catch (error) {
    dispatch({ type: "LOAD_ALL_STATE_OF_ISSUANCES_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Update State of Issuance Action
const updateStateOfIssuanceAction = (id, stateOfIssuanceData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_STATE_OF_ISSUANCE_REQUEST" });
    const response = await axios.put(`/api/v1/admin/update-state-of-issuance/${id}`, stateOfIssuanceData);
    dispatch({ type: "UPDATE_STATE_OF_ISSUANCE_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "UPDATE_STATE_OF_ISSUANCE_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

// Delete State of Issuance Action
const deleteStateOfIssuanceAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_STATE_OF_ISSUANCE_REQUEST" });
    const response = await axios.delete(`/api/v1/admin/delete-state-of-issuance/${id}`);
    dispatch({ type: "DELETE_STATE_OF_ISSUANCE_SUCCESS", payload: { message: response.data.message } });
  } catch (error) {
    dispatch({ type: "DELETE_STATE_OF_ISSUANCE_FAILURE", payload: { error: error.response.data.message || "Network error" } });
  }
};

export {
  addStateOfIssuanceAction,
  loadAllStateOfIssuancesAction,
  updateStateOfIssuanceAction,
  deleteStateOfIssuanceAction,
};
