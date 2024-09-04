import { createReducer } from "@reduxjs/toolkit";

// Job Type Reducers
const addJobTypeInitialValues = {
  addJobTypeLoading: false,
  addJobTypeError: null,
  addJobTypeMessage: "",
};

const addJobTypeReducer = createReducer(addJobTypeInitialValues, (builder) => {
  builder
    .addCase("ADD_JOB_TYPE_REQUEST", (state, action) => {
      state.addJobTypeLoading = true;
    })
    .addCase("ADD_JOB_TYPE_REQUEST_SUCCESS", (state, action) => {
      state.addJobTypeLoading = false;
      state.addJobTypeMessage = action.payload;
    })
    .addCase("ADD_JOB_TYPE_REQUEST_FAILURE", (state, action) => {
      state.addJobTypeLoading = false;
      state.addJobTypeError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addJobTypeError = null;
    });
});
const loadJobTypesInitialState = {
  loadJobTypesLoading: false,
  jobTypes: null,
  loadJobTypesError: null,
};
const loadJobTypes = createReducer(loadJobTypesInitialState, (builder) => {
  builder.addCase("LOAD_JOB_TYPES_REQUEST", (state, action) => {
    state.loadJobTypesLoading = true;
  });
  builder.addCase("LOAD_JOB_TYPES_SUCCESS", (state, action) => {
    state.loadJobTypesLoading = false;
    state.jobTypes = action.payload;
  });
  builder.addCase("LOAD_JOB_TYPES_FAILURE", (state, action) => {
    state.loadJobTypesLoading = false;
    state.loadJobTypesError = action.payload;
  });
  builder.addCase("CLEAR_ERRORS", (state, action) => {
    state.loadJobTypesError = null;
  });
});

const deleteJobTypeInitialState = {
  deleteJobTypeLoading: false,
  deleteJobTypeError: null,
  deleteJobTypeMessage: null,
};
const deleteJobTypeReducer = createReducer(
  deleteJobTypeInitialState,
  (builder) => {
    builder.addCase("DELETE_JOB_TYPE_REQUEST", (state, action) => {
      state.deleteJobTypeLoading = true;
    });
    builder.addCase("DELETE_JOB_TYPE_SUCCESS", (state, action) => {
      state.deleteJobTypeLoading = false;
      state.deleteJobTypeMessage = action.payload;
    });
    builder.addCase("DELETE_JOB_TYPE_FAILURE", (state, action) => {
      state.deleteJobTypeLoading = false;
      state.deleteJobTypeError = action.payload;
    });
    builder.addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteJobTypeError = null;
    });
  }
);

const updateJobTypeInitialState = {
  updateJobTypeLoading: false,
  updateJobTypeError: null,
  updateJobTypeMessage: null,
};
const updateJobTypeReducer = createReducer(
  updateJobTypeInitialState,
  (builder) => {
    builder.addCase("UPDATE_JOB_TYPE_REQUEST", (state, action) => {
      state.updateJobTypeLoading = true;
    });
    builder.addCase("UPDATE_JOB_TYPE_SUCCESS", (state, action) => {
      state.updateJobTypeLoading = false;
      state.updateJobTypeMessage = action.payload;
    });
    builder.addCase("UPDATE_JOB_TYPE_FAILURE", (state, action) => {
      state.updateJobTypeLoading = false;
      state.updateJobTypeError = action.payload;
    });
    builder.addCase("CLEAR_ERRORS", (state, action) => {
      state.updateJobTypeError = null;
    });
  }
);
export {
  addJobTypeReducer,
  loadJobTypes,
  deleteJobTypeReducer,
  updateJobTypeReducer,
};


// Add Zone Reducer
const addZoneInitialState = {
  addZoneLoading: false,
  addZoneError: null,
  addZoneMessage: "",
};

const addZoneReducer = createReducer(addZoneInitialState, (builder) => {
  builder
    .addCase("ADD_ZONE_REQUEST", (state, action) => {
      state.addZoneLoading = true;
    })
    .addCase("ADD_ZONE_SUCCESS", (state, action) => {
      state.addZoneLoading = false;
      state.addZoneMessage = action.payload;
    })
    .addCase("ADD_ZONE_FAILURE", (state, action) => {
      state.addZoneLoading = false;
      state.addZoneError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addZoneError = null;
    });
});

// Load Zones Reducer
const loadZonesInitialState = {
  loadZonesLoading: false,
  zones: null,
  loadZonesError: null,
};

const loadZonesReducer = createReducer(loadZonesInitialState, (builder) => {
  builder
    .addCase("LOAD_ZONES_REQUEST", (state, action) => {
      state.loadZonesLoading = true;
    })
    .addCase("LOAD_ZONES_SUCCESS", (state, action) => {
      state.loadZonesLoading = false;
      state.zones = action.payload;
    })
    .addCase("LOAD_ZONES_FAILURE", (state, action) => {
      state.loadZonesLoading = false;
      state.loadZonesError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadZonesError = null;
    });
});

// Delete Zone Reducer
const deleteZoneInitialState = {
  deleteZoneLoading: false,
  deleteZoneError: null,
  deleteZoneMessage: null,
};

const deleteZoneReducer = createReducer(deleteZoneInitialState, (builder) => {
  builder
    .addCase("DELETE_ZONE_REQUEST", (state, action) => {
      state.deleteZoneLoading = true;
    })
    .addCase("DELETE_ZONE_SUCCESS", (state, action) => {
      state.deleteZoneLoading = false;
      state.deleteZoneMessage = action.payload;
    })
    .addCase("DELETE_ZONE_FAILURE", (state, action) => {
      state.deleteZoneLoading = false;
      state.deleteZoneError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteZoneError = null;
    });
});

// Update Zone Reducer
const updateZoneInitialState = {
  updateZoneLoading: false,
  updateZoneError: null,
  updateZoneMessage: null,
};

const updateZoneReducer = createReducer(updateZoneInitialState, (builder) => {
  builder
    .addCase("UPDATE_ZONE_REQUEST", (state, action) => {
      state.updateZoneLoading = true;
    })
    .addCase("UPDATE_ZONE_SUCCESS", (state, action) => {
      state.updateZoneLoading = false;
      state.updateZoneMessage = action.payload;
    })
    .addCase("UPDATE_ZONE_FAILURE", (state, action) => {
      state.updateZoneLoading = false;
      state.updateZoneError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateZoneError = null;
    });
});

export {
  addZoneReducer,
  loadZonesReducer,
  deleteZoneReducer,
  updateZoneReducer,
};



// Add Vendor Reducer
const addVendorInitialState = {
  addVendorLoading: false,
  addVendorError: null,
  addVendorMessage: "",
};

const addVendorReducer = createReducer(addVendorInitialState, (builder) => {
  builder
    .addCase("ADD_VENDOR_REQUEST", (state, action) => {
      state.addVendorLoading = true;
    })
    .addCase("ADD_VENDOR_SUCCESS", (state, action) => {
      state.addVendorLoading = false;
      state.addVendorMessage = action.payload;
    })
    .addCase("ADD_VENDOR_FAILURE", (state, action) => {
      state.addVendorLoading = false;
      state.addVendorError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addVendorError = null;
    });
});

// Load Vendors Reducer
const loadVendorsInitialState = {
  loadVendorsLoading: false,
  vendors: null,
  loadVendorsError: null,
};

const loadVendorsReducer = createReducer(loadVendorsInitialState, (builder) => {
  builder
    .addCase("LOAD_VENDORS_REQUEST", (state, action) => {
      state.loadVendorsLoading = true;
    })
    .addCase("LOAD_VENDORS_SUCCESS", (state, action) => {
      state.loadVendorsLoading = false;
      state.vendors = action.payload;
    })
    .addCase("LOAD_VENDORS_FAILURE", (state, action) => {
      state.loadVendorsLoading = false;
      state.loadVendorsError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadVendorsError = null;
    });
});

// Delete Vendor Reducer
const deleteVendorInitialState = {
  deleteVendorLoading: false,
  deleteVendorError: null,
  deleteVendorMessage: null,
};

const deleteVendorReducer = createReducer(deleteVendorInitialState, (builder) => {
  builder
    .addCase("DELETE_VENDOR_REQUEST", (state, action) => {
      state.deleteVendorLoading = true;
    })
    .addCase("DELETE_VENDOR_SUCCESS", (state, action) => {
      state.deleteVendorLoading = false;
      state.deleteVendorMessage = action.payload;
    })
    .addCase("DELETE_VENDOR_FAILURE", (state, action) => {
      state.deleteVendorLoading = false;
      state.deleteVendorError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteVendorError = null;
    });
});

// Update Vendor Reducer
const updateVendorInitialState = {
  updateVendorLoading: false,
  updateVendorError: null,
  updateVendorMessage: null,
};

const updateVendorReducer = createReducer(updateVendorInitialState, (builder) => {
  builder
    .addCase("UPDATE_VENDOR_REQUEST", (state, action) => {
      state.updateVendorLoading = true;
    })
    .addCase("UPDATE_VENDOR_SUCCESS", (state, action) => {
      state.updateVendorLoading = false;
      state.updateVendorMessage = action.payload;
    })
    .addCase("UPDATE_VENDOR_FAILURE", (state, action) => {
      state.updateVendorLoading = false;
      state.updateVendorError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateVendorError = null;
    });
});

export {
  addVendorReducer,
  loadVendorsReducer,
  deleteVendorReducer,
  updateVendorReducer,
};


// Add Vehicle Type Reducer
const addVehicleTypeInitialState = {
  addVehicleTypeLoading: false,
  addVehicleTypeError: null,
  addVehicleTypeMessage: "",
};

const addVehicleTypeReducer = createReducer(addVehicleTypeInitialState, (builder) => {
  builder
    .addCase("ADD_VEHICLE_TYPE_REQUEST", (state, action) => {
      state.addVehicleTypeLoading = true;
    })
    .addCase("ADD_VEHICLE_TYPE_SUCCESS", (state, action) => {
      state.addVehicleTypeLoading = false;
      state.addVehicleTypeMessage = action.payload;
    })
    .addCase("ADD_VEHICLE_TYPE_FAILURE", (state, action) => {
      state.addVehicleTypeLoading = false;
      state.addVehicleTypeError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addVehicleTypeError = null;
    });

});

// Load Vehicle Types Reducer
const loadVehicleTypesInitialState = {
  loadVehicleTypesLoading: false,
  vehicleTypes: null,
  loadVehicleTypesError: null,
};

const loadVehicleTypesReducer = createReducer(loadVehicleTypesInitialState, (builder) => {
  builder
    .addCase("LOAD_VEHICLE_TYPES_REQUEST", (state, action) => {
      state.loadVehicleTypesLoading = true;
    })
    .addCase("LOAD_VEHICLE_TYPES_SUCCESS", (state, action) => {
      state.loadVehicleTypesLoading = false;
      state.vehicleTypes = action.payload;
    })
    .addCase("LOAD_VEHICLE_TYPES_FAILURE", (state, action) => {
      state.loadVehicleTypesLoading = false;
      state.loadVehicleTypesError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadVehicleTypesError = null;
    });
});

// Delete Vehicle Type Reducer
const deleteVehicleTypeInitialState = {
  deleteVehicleTypeLoading: false,
  deleteVehicleTypeError: null,
  deleteVehicleTypeMessage: null,
};

const deleteVehicleTypeReducer = createReducer(deleteVehicleTypeInitialState, (builder) => {
  builder
    .addCase("DELETE_VEHICLE_TYPE_REQUEST", (state, action) => {
      state.deleteVehicleTypeLoading = true;
    })
    .addCase("DELETE_VEHICLE_TYPE_SUCCESS", (state, action) => {
      state.deleteVehicleTypeLoading = false;
      state.deleteVehicleTypeMessage = action.payload;
    })
    .addCase("DELETE_VEHICLE_TYPE_FAILURE", (state, action) => {
      state.deleteVehicleTypeLoading = false;
      state.deleteVehicleTypeError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteVehicleTypeError = null;
    });
});

// Update Vehicle Type Reducer
const updateVehicleTypeInitialState = {
  updateVehicleTypeLoading: false,
  updateVehicleTypeError: null,
  updateVehicleTypeMessage: null,
};

const updateVehicleTypeReducer = createReducer(updateVehicleTypeInitialState, (builder) => {
  builder
    .addCase("UPDATE_VEHICLE_TYPE_REQUEST", (state, action) => {
      state.updateVehicleTypeLoading = true;
    })
    .addCase("UPDATE_VEHICLE_TYPE_SUCCESS", (state, action) => {
      state.updateVehicleTypeLoading = false;
      state.updateVehicleTypeMessage = action.payload;
    })
    .addCase("UPDATE_VEHICLE_TYPE_FAILURE", (state, action) => {
      state.updateVehicleTypeLoading = false;
      state.updateVehicleTypeError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateVehicleTypeError = null;
    });
});

export {
  addVehicleTypeReducer,
  loadVehicleTypesReducer,
  deleteVehicleTypeReducer,
  updateVehicleTypeReducer,
};

// Add Store Reducer
const addStoreInitialState = {
  addStoreLoading: false,
  addStoreError: null,
  addStoreMessage: "",
};

const addStoreReducer = createReducer(addStoreInitialState, (builder) => {
  builder
    .addCase("ADD_STORE_REQUEST", (state, action) => {
      state.addStoreLoading = true;
    })
    .addCase("ADD_STORE_SUCCESS", (state, action) => {
      state.addStoreLoading = false;
      state.addStoreMessage = action.payload;
    })
    .addCase("ADD_STORE_FAILURE", (state, action) => {
      state.addStoreLoading = false;
      state.addStoreError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addStoreError = null;
    });
});

// Load Stores Reducer
const loadStoresInitialState = {
  loadStoresLoading: false,
  stores: null,
  loadStoresError: null,
};

const loadStoresReducer = createReducer(loadStoresInitialState, (builder) => {
  builder
    .addCase("LOAD_STORES_REQUEST", (state, action) => {
      state.loadStoresLoading = true;
    })
    .addCase("LOAD_STORES_SUCCESS", (state, action) => {
      state.loadStoresLoading = false;
      state.stores = action.payload;
    })
    .addCase("LOAD_STORES_FAILURE", (state, action) => {
      state.loadStoresLoading = false;
      state.loadStoresError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadStoresError = null;
    });
});

// Delete Store Reducer
const deleteStoreInitialState = {
  deleteStoreLoading: false,
  deleteStoreError: null,
  deleteStoreMessage: null,
};

const deleteStoreReducer = createReducer(deleteStoreInitialState, (builder) => {
  builder
    .addCase("DELETE_STORE_REQUEST", (state, action) => {
      state.deleteStoreLoading = true;
    })
    .addCase("DELETE_STORE_SUCCESS", (state, action) => {
      state.deleteStoreLoading = false;
      state.deleteStoreMessage = action.payload;
    })
    .addCase("DELETE_STORE_FAILURE", (state, action) => {
      state.deleteStoreLoading = false;
      state.deleteStoreError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteStoreError = null;
    });
});

// Update Store Reducer
const updateStoreInitialState = {
  updateStoreLoading: false,
  updateStoreError: null,
  updateStoreMessage: null,
};

const updateStoreReducer = createReducer(updateStoreInitialState, (builder) => {
  builder
    .addCase("UPDATE_STORE_REQUEST", (state, action) => {
      state.updateStoreLoading = true;
    })
    .addCase("UPDATE_STORE_SUCCESS", (state, action) => {
      state.updateStoreLoading = false;
      state.updateStoreMessage = action.payload;
    })
    .addCase("UPDATE_STORE_FAILURE", (state, action) => {
      state.updateStoreLoading = false;
      state.updateStoreError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateStoreError = null;
    });
});

export {
  addStoreReducer,
  loadStoresReducer,
  deleteStoreReducer,
  updateStoreReducer,
};


// Add State Reducer
const addStateInitialState = {
  addStateLoading: false,
  addStateError: null,
  addStateMessage: "",
};

const addStateReducer = createReducer(addStateInitialState, (builder) => {
  builder
    .addCase("ADD_STATE_REQUEST", (state, action) => {
      state.addStateLoading = true;
    })
    .addCase("ADD_STATE_SUCCESS", (state, action) => {
      state.addStateLoading = false;
      state.addStateMessage = action.payload;
    })
    .addCase("ADD_STATE_FAILURE", (state, action) => {
      state.addStateLoading = false;
      state.addStateError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addStateError = null;
    });
});

// Load States Reducer
const loadStatesInitialState = {
  loadStatesLoading: false,
  states: null,
  loadStatesError: null,
};

const loadStatesReducer = createReducer(loadStatesInitialState, (builder) => {
  builder
    .addCase("LOAD_STATES_REQUEST", (state, action) => {
      state.loadStatesLoading = true;
    })
    .addCase("LOAD_STATES_SUCCESS", (state, action) => {
      state.loadStatesLoading = false;
      state.states = action.payload;
    })
    .addCase("LOAD_STATES_FAILURE", (state, action) => {
      state.loadStatesLoading = false;
      state.loadStatesError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadStatesError = null;
    });
});

// Delete State Reducer
const deleteStateInitialState = {
  deleteStateLoading: false,
  deleteStateError: null,
  deleteStateMessage: null,
};

const deleteStateReducer = createReducer(deleteStateInitialState, (builder) => {
  builder
    .addCase("DELETE_STATE_REQUEST", (state, action) => {
      state.deleteStateLoading = true;
    })
    .addCase("DELETE_STATE_SUCCESS", (state, action) => {
      state.deleteStateLoading = false;
      state.deleteStateMessage = action.payload;
    })
    .addCase("DELETE_STATE_FAILURE", (state, action) => {
      state.deleteStateLoading = false;
      state.deleteStateError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteStateError = null;
    });
});

// Update State Reducer
const updateStateInitialState = {
  updateStateLoading: false,
  updateStateError: null,
  updateStateMessage: null,
};

const updateStateReducer = createReducer(updateStateInitialState, (builder) => {
  builder
    .addCase("UPDATE_STATE_REQUEST", (state, action) => {
      state.updateStateLoading = true;
    })
    .addCase("UPDATE_STATE_SUCCESS", (state, action) => {
      state.updateStateLoading = false;
      state.updateStateMessage = action.payload;
    })
    .addCase("UPDATE_STATE_FAILURE", (state, action) => {
      state.updateStateLoading = false;
      state.updateStateError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateStateError = null;
    });
});

export {
  addStateReducer,
  loadStatesReducer,
  deleteStateReducer,
  updateStateReducer,
};


// Add Shift Reducer
const addShiftInitialState = {
  addShiftLoading: false,
  addShiftError: null,
  addShiftMessage: "",
};

const addShiftReducer = createReducer(addShiftInitialState, (builder) => {
  builder
    .addCase("ADD_SHIFT_REQUEST", (state, action) => {
      state.addShiftLoading = true;
    })
    .addCase("ADD_SHIFT_SUCCESS", (state, action) => {
      state.addShiftLoading = false;
      state.addShiftMessage = action.payload;
    })
    .addCase("ADD_SHIFT_FAILURE", (state, action) => {
      state.addShiftLoading = false;
      state.addShiftError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addShiftError = null;
    });
});

// Load Shifts Reducer
const loadShiftsInitialState = {
  loadShiftsLoading: false,
  shifts: null,
  loadShiftsError: null,
};

const loadShiftsReducer = createReducer(loadShiftsInitialState, (builder) => {
  builder
    .addCase("LOAD_SHIFTS_REQUEST", (state, action) => {
      state.loadShiftsLoading = true;
    })
    .addCase("LOAD_SHIFTS_SUCCESS", (state, action) => {
      state.loadShiftsLoading = false;
      state.shifts = action.payload;
    })
    .addCase("LOAD_SHIFTS_FAILURE", (state, action) => {
      state.loadShiftsLoading = false;
      state.loadShiftsError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadShiftsError = null;
    });
});

// Delete Shift Reducer
const deleteShiftInitialState = {
  deleteShiftLoading: false,
  deleteShiftError: null,
  deleteShiftMessage: null,
};

const deleteShiftReducer = createReducer(deleteShiftInitialState, (builder) => {
  builder
    .addCase("DELETE_SHIFT_REQUEST", (state, action) => {
      state.deleteShiftLoading = true;
    })
    .addCase("DELETE_SHIFT_SUCCESS", (state, action) => {
      state.deleteShiftLoading = false;
      state.deleteShiftMessage = action.payload;
    })
    .addCase("DELETE_SHIFT_FAILURE", (state, action) => {
      state.deleteShiftLoading = false;
      state.deleteShiftError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteShiftError = null;
    });
});

// Update Shift Reducer
const updateShiftInitialState = {
  updateShiftLoading: false,
  updateShiftError: null,
  updateShiftMessage: null,
};

const updateShiftReducer = createReducer(updateShiftInitialState, (builder) => {
  builder
    .addCase("UPDATE_SHIFT_REQUEST", (state, action) => {
      state.updateShiftLoading = true;
    })
    .addCase("UPDATE_SHIFT_SUCCESS", (state, action) => {
      state.updateShiftLoading = false;
      state.updateShiftMessage = action.payload;
    })
    .addCase("UPDATE_SHIFT_FAILURE", (state, action) => {
      state.updateShiftLoading = false;
      state.updateShiftError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateShiftError = null;
    });
});

export {
  addShiftReducer,
  loadShiftsReducer,
  deleteShiftReducer,
  updateShiftReducer,
};


// Add Salary Reducer
const addSalaryInitialValues = {
  addSalaryLoading: false,
  addSalaryError: null,
  addSalaryMessage: "",
};

const addSalaryReducer = createReducer(addSalaryInitialValues, (builder) => {
  builder
    .addCase("ADD_SALARY_REQUEST", (state, action) => {
      state.addSalaryLoading = true;
    })
    .addCase("ADD_SALARY_SUCCESS", (state, action) => {
      state.addSalaryLoading = false;
      state.addSalaryMessage = action.payload;
    })
    .addCase("ADD_SALARY_FAILURE", (state, action) => {
      state.addSalaryLoading = false;
      state.addSalaryError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addSalaryError = null;
    });
});

// Load Salaries Reducer
const loadSalariesInitialState = {
  loadSalariesLoading: false,
  salaries: null,
  loadSalariesError: null,
};

const loadSalariesReducer = createReducer(loadSalariesInitialState, (builder) => {
  builder
    .addCase("LOAD_SALARIES_REQUEST", (state, action) => {
      state.loadSalariesLoading = true;
    })
    .addCase("LOAD_SALARIES_SUCCESS", (state, action) => {
      state.loadSalariesLoading = false;
      state.salaries = action.payload;
    })
    .addCase("LOAD_SALARIES_FAILURE", (state, action) => {
      state.loadSalariesLoading = false;
      state.loadSalariesError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadSalariesError = null;
    });
});

// Delete Salary Reducer
const deleteSalaryInitialState = {
  deleteSalaryLoading: false,
  deleteSalaryError: null,
  deleteSalaryMessage: null,
};

const deleteSalaryReducer = createReducer(deleteSalaryInitialState, (builder) => {
  builder
    .addCase("DELETE_SALARY_REQUEST", (state, action) => {
      state.deleteSalaryLoading = true;
    })
    .addCase("DELETE_SALARY_SUCCESS", (state, action) => {
      state.deleteSalaryLoading = false;
      state.deleteSalaryMessage = action.payload;
    })
    .addCase("DELETE_SALARY_FAILURE", (state, action) => {
      state.deleteSalaryLoading = false;
      state.deleteSalaryError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteSalaryError = null;
    });
});

// Update Salary Reducer
const updateSalaryInitialState = {
  updateSalaryLoading: false,
  updateSalaryError: null,
  updateSalaryMessage: null,
};

const updateSalaryReducer = createReducer(updateSalaryInitialState, (builder) => {
  builder
    .addCase("UPDATE_SALARY_REQUEST", (state, action) => {
      state.updateSalaryLoading = true;
    })
    .addCase("UPDATE_SALARY_SUCCESS", (state, action) => {
      state.updateSalaryLoading = false;
      state.updateSalaryMessage = action.payload;
    })
    .addCase("UPDATE_SALARY_FAILURE", (state, action) => {
      state.updateSalaryLoading = false;
      state.updateSalaryError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateSalaryError = null;
    });
});

export {
  addSalaryReducer,
  loadSalariesReducer,
  deleteSalaryReducer,
  updateSalaryReducer,
};



// Add Project Reducer
const addProjectInitialValues = {
  addProjectLoading: false,
  addProjectError: null,
  addProjectMessage: "",
};

const addProjectReducer = createReducer(addProjectInitialValues, (builder) => {
  builder
    .addCase("ADD_PROJECT_REQUEST", (state, action) => {
      state.addProjectLoading = true;
    })
    .addCase("ADD_PROJECT_SUCCESS", (state, action) => {
      state.addProjectLoading = false;
      state.addProjectMessage = action.payload;
    })
    .addCase("ADD_PROJECT_FAILURE", (state, action) => {
      state.addProjectLoading = false;
      state.addProjectError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addProjectError = null;
    });
});

// Load Projects Reducer
const loadProjectsInitialState = {
  loadProjectsLoading: false,
  projects: null,
  loadProjectsError: null,
};

const loadProjectsReducer = createReducer(loadProjectsInitialState, (builder) => {
  builder
    .addCase("LOAD_PROJECTS_REQUEST", (state, action) => {
      state.loadProjectsLoading = true;
    })
    .addCase("LOAD_PROJECTS_SUCCESS", (state, action) => {
      state.loadProjectsLoading = false;
      state.projects = action.payload;
    })
    .addCase("LOAD_PROJECTS_FAILURE", (state, action) => {
      state.loadProjectsLoading = false;
      state.loadProjectsError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadProjectsError = null;
    });
});

// Delete Project Reducer
const deleteProjectInitialState = {
  deleteProjectLoading: false,
  deleteProjectError: null,
  deleteProjectMessage: null,
};

const deleteProjectReducer = createReducer(deleteProjectInitialState, (builder) => {
  builder
    .addCase("DELETE_PROJECT_REQUEST", (state, action) => {
      state.deleteProjectLoading = true;
    })
    .addCase("DELETE_PROJECT_SUCCESS", (state, action) => {
      state.deleteProjectLoading = false;
      state.deleteProjectMessage = action.payload;
    })
    .addCase("DELETE_PROJECT_FAILURE", (state, action) => {
      state.deleteProjectLoading = false;
      state.deleteProjectError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteProjectError = null;
    });
});

// Update Project Reducer
const updateProjectInitialState = {
  updateProjectLoading: false,
  updateProjectError: null,
  updateProjectMessage: null,
};

const updateProjectReducer = createReducer(updateProjectInitialState, (builder) => {
  builder
    .addCase("UPDATE_PROJECT_REQUEST", (state, action) => {
      state.updateProjectLoading = true;
    })
    .addCase("UPDATE_PROJECT_SUCCESS", (state, action) => {
      state.updateProjectLoading = false;
      state.updateProjectMessage = action.payload;
    })
    .addCase("UPDATE_PROJECT_FAILURE", (state, action) => {
      state.updateProjectLoading = false;
      state.updateProjectError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateProjectError = null;
    });
});

export {
  addProjectReducer,
  loadProjectsReducer,
  deleteProjectReducer,
  updateProjectReducer,
};


// Add NOC Status Reducer
const addNocStatusInitialValues = {
  addNocStatusLoading: false,
  addNocStatusError: null,
  addNocStatusMessage: "",
};

const addNocStatusReducer = createReducer(addNocStatusInitialValues, (builder) => {
  builder
    .addCase("ADD_NOC_STATUS_REQUEST", (state, action) => {
      state.addNocStatusLoading = true;
    })
    .addCase("ADD_NOC_STATUS_SUCCESS", (state, action) => {
      state.addNocStatusLoading = false;
      state.addNocStatusMessage = action.payload;
    })
    .addCase("ADD_NOC_STATUS_FAILURE", (state, action) => {
      state.addNocStatusLoading = false;
      state.addNocStatusError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addNocStatusError = null;
    });
});

// Load NOC Statuses Reducer
const loadNocStatusesInitialState = {
  loadNocStatusesLoading: false,
  nocStatuses: null,
  loadNocStatusesError: null,
};

const loadNocStatusesReducer = createReducer(loadNocStatusesInitialState, (builder) => {
  builder
    .addCase("LOAD_NOC_STATUSES_REQUEST", (state, action) => {
      state.loadNocStatusesLoading = true;
    })
    .addCase("LOAD_NOC_STATUSES_SUCCESS", (state, action) => {
      state.loadNocStatusesLoading = false;
      state.nocStatuses = action.payload;
    })
    .addCase("LOAD_NOC_STATUSES_FAILURE", (state, action) => {
      state.loadNocStatusesLoading = false;
      state.loadNocStatusesError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadNocStatusesError = null;
    });
});

// Delete NOC Status Reducer
const deleteNocStatusInitialState = {
  deleteNocStatusLoading: false,
  deleteNocStatusError: null,
  deleteNocStatusMessage: null,
};

const deleteNocStatusReducer = createReducer(deleteNocStatusInitialState, (builder) => {
  builder
    .addCase("DELETE_NOC_STATUS_REQUEST", (state, action) => {
      state.deleteNocStatusLoading = true;
    })
    .addCase("DELETE_NOC_STATUS_SUCCESS", (state, action) => {
      state.deleteNocStatusLoading = false;
      state.deleteNocStatusMessage = action.payload;
    })
    .addCase("DELETE_NOC_STATUS_FAILURE", (state, action) => {
      state.deleteNocStatusLoading = false;
      state.deleteNocStatusError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteNocStatusError = null;
    });
});

// Update NOC Status Reducer
const updateNocStatusInitialState = {
  updateNocStatusLoading: false,
  updateNocStatusError: null,
  updateNocStatusMessage: null,
};

const updateNocStatusReducer = createReducer(updateNocStatusInitialState, (builder) => {
  builder
    .addCase("UPDATE_NOC_STATUS_REQUEST", (state, action) => {
      state.updateNocStatusLoading = true;
    })
    .addCase("UPDATE_NOC_STATUS_SUCCESS", (state, action) => {
      state.updateNocStatusLoading = false;
      state.updateNocStatusMessage = action.payload;
    })
    .addCase("UPDATE_NOC_STATUS_FAILURE", (state, action) => {
      state.updateNocStatusLoading = false;
      state.updateNocStatusError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateNocStatusError = null;
    });
});

export {
  addNocStatusReducer,
  loadNocStatusesReducer,
  deleteNocStatusReducer,
  updateNocStatusReducer,
};



// Add Nationality Reducer
const addNationalityInitialValues = {
  addNationalityLoading: false,
  addNationalityError: null,
  addNationalityMessage: "",
};

const addNationalityReducer = createReducer(addNationalityInitialValues, (builder) => {
  builder
    .addCase("ADD_NATIONALITY_REQUEST", (state, action) => {
      state.addNationalityLoading = true;
    })
    .addCase("ADD_NATIONALITY_SUCCESS", (state, action) => {
      state.addNationalityLoading = false;
      state.addNationalityMessage = action.payload;
    })
    .addCase("ADD_NATIONALITY_FAILURE", (state, action) => {
      state.addNationalityLoading = false;
      state.addNationalityError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addNationalityError = null;
    });
});

// Load Nationalities Reducer
const loadNationalitiesInitialState = {
  loadNationalitiesLoading: false,
  nationalities: null,
  loadNationalitiesError: null,
};

const loadNationalitiesReducer = createReducer(loadNationalitiesInitialState, (builder) => {
  builder
    .addCase("LOAD_NATIONALITIES_REQUEST", (state, action) => {
      state.loadNationalitiesLoading = true;
    })
    .addCase("LOAD_NATIONALITIES_SUCCESS", (state, action) => {
      state.loadNationalitiesLoading = false;
      state.nationalities = action.payload;
    })
    .addCase("LOAD_NATIONALITIES_FAILURE", (state, action) => {
      state.loadNationalitiesLoading = false;
      state.loadNationalitiesError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadNationalitiesError = null;
    });
});

// Delete Nationality Reducer
const deleteNationalityInitialState = {
  deleteNationalityLoading: false,
  deleteNationalityError: null,
  deleteNationalityMessage: null,
};

const deleteNationalityReducer = createReducer(deleteNationalityInitialState, (builder) => {
  builder
    .addCase("DELETE_NATIONALITY_REQUEST", (state, action) => {
      state.deleteNationalityLoading = true;
    })
    .addCase("DELETE_NATIONALITY_SUCCESS", (state, action) => {
      state.deleteNationalityLoading = false;
      state.deleteNationalityMessage = action.payload;
    })
    .addCase("DELETE_NATIONALITY_FAILURE", (state, action) => {
      state.deleteNationalityLoading = false;
      state.deleteNationalityError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteNationalityError = null;
    });
});

// Update Nationality Reducer
const updateNationalityInitialState = {
  updateNationalityLoading: false,
  updateNationalityError: null,
  updateNationalityMessage: null,
};

const updateNationalityReducer = createReducer(updateNationalityInitialState, (builder) => {
  builder
    .addCase("UPDATE_NATIONALITY_REQUEST", (state, action) => {
      state.updateNationalityLoading = true;
    })
    .addCase("UPDATE_NATIONALITY_SUCCESS", (state, action) => {
      state.updateNationalityLoading = false;
      state.updateNationalityMessage = action.payload;
    })
    .addCase("UPDATE_NATIONALITY_FAILURE", (state, action) => {
      state.updateNationalityLoading = false;
      state.updateNationalityError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateNationalityError = null;
    });
});

export {
  addNationalityReducer,
  loadNationalitiesReducer,
  deleteNationalityReducer,
  updateNationalityReducer,
};


// Add Guarantor Reducer
const addGuarantorInitialValues = {
  addGuarantorLoading: false,
  addGuarantorError: null,
  addGuarantorMessage: "",
};

const addGuarantorReducer = createReducer(addGuarantorInitialValues, (builder) => {
  builder
    .addCase("ADD_GUARANTOR_REQUEST", (state) => {
      state.addGuarantorLoading = true;
    })
    .addCase("ADD_GUARANTOR_SUCCESS", (state, action) => {
      state.addGuarantorLoading = false;
      state.addGuarantorMessage = action.payload;
    })
    .addCase("ADD_GUARANTOR_FAILURE", (state, action) => {
      state.addGuarantorLoading = false;
      state.addGuarantorError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addGuarantorError = null;
    });
});

// Load Guarantors Reducer
const loadGuarantorsInitialState = {
  loadGuarantorsLoading: false,
  guarantors: null,
  loadGuarantorsError: null,
};

const loadGuarantorsReducer = createReducer(loadGuarantorsInitialState, (builder) => {
  builder
    .addCase("LOAD_GUARANTORS_REQUEST", (state) => {
      state.loadGuarantorsLoading = true;
    })
    .addCase("LOAD_GUARANTORS_SUCCESS", (state, action) => {
      state.loadGuarantorsLoading = false;
      state.guarantors = action.payload;
    })
    .addCase("LOAD_GUARANTORS_FAILURE", (state, action) => {
      state.loadGuarantorsLoading = false;
      state.loadGuarantorsError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadGuarantorsError = null;
    });
});

// Delete Guarantor Reducer
const deleteGuarantorInitialState = {
  deleteGuarantorLoading: false,
  deleteGuarantorError: null,
  deleteGuarantorMessage: null,
};

const deleteGuarantorReducer = createReducer(deleteGuarantorInitialState, (builder) => {
  builder
    .addCase("DELETE_GUARANTOR_REQUEST", (state) => {
      state.deleteGuarantorLoading = true;
    })
    .addCase("DELETE_GUARANTOR_SUCCESS", (state, action) => {
      state.deleteGuarantorLoading = false;
      state.deleteGuarantorMessage = action.payload;
    })
    .addCase("DELETE_GUARANTOR_FAILURE", (state, action) => {
      state.deleteGuarantorLoading = false;
      state.deleteGuarantorError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteGuarantorError = null;
    });
});

// Update Guarantor Reducer
const updateGuarantorInitialState = {
  updateGuarantorLoading: false,
  updateGuarantorError: null,
  updateGuarantorMessage: null,
};

const updateGuarantorReducer = createReducer(updateGuarantorInitialState, (builder) => {
  builder
    .addCase("UPDATE_GUARANTOR_REQUEST", (state) => {
      state.updateGuarantorLoading = true;
    })
    .addCase("UPDATE_GUARANTOR_SUCCESS", (state, action) => {
      state.updateGuarantorLoading = false;
      state.updateGuarantorMessage = action.payload;
    })
    .addCase("UPDATE_GUARANTOR_FAILURE", (state, action) => {
      state.updateGuarantorLoading = false;
      state.updateGuarantorError = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateGuarantorError = null;
    });
});

export {
  addGuarantorReducer,
  loadGuarantorsReducer,
  deleteGuarantorReducer,
  updateGuarantorReducer,
};


// Add Gender Reducer
const addGenderInitialValues = {
  addGenderLoading: false,
  addGenderError: null,
  addGenderMessage: "",
};

const addGenderReducer = createReducer(addGenderInitialValues, (builder) => {
  builder
    .addCase("ADD_GENDER_REQUEST", (state) => {
      state.addGenderLoading = true;
    })
    .addCase("ADD_GENDER_SUCCESS", (state, action) => {
      state.addGenderLoading = false;
      state.addGenderMessage = action.payload.message;
    })
    .addCase("ADD_GENDER_FAILURE", (state, action) => {
      state.addGenderLoading = false;
      state.addGenderError = action.payload.error;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addGenderError = null;
    });
});



// Load Genders Reducer
const loadGendersInitialState = {
  loadGendersLoading: false,
  genders: [],
  loadGendersError: null,
};

const loadGendersReducer = createReducer(loadGendersInitialState, (builder) => {
  builder
    .addCase("LOAD_GENDERS_REQUEST", (state) => {
      state.loadGendersLoading = true;
    })
    .addCase("LOAD_GENDERS_SUCCESS", (state, action) => {
      state.loadGendersLoading = false;
      state.genders = action.payload.genders;
    })
    .addCase("LOAD_GENDERS_FAILURE", (state, action) => {
      state.loadGendersLoading = false;
      state.loadGendersError = action.payload.error;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadGendersError = null;
    });
});

// Update Gender Reducer
const updateGenderInitialState = {
  updateGenderLoading: false,
  updateGenderError: null,
  updateGenderMessage: "",
};

const updateGenderReducer = createReducer(updateGenderInitialState, (builder) => {
  builder
    .addCase("UPDATE_GENDER_REQUEST", (state) => {
      state.updateGenderLoading = true;
    })
    .addCase("UPDATE_GENDER_SUCCESS", (state, action) => {
      state.updateGenderLoading = false;
      state.updateGenderMessage = action.payload.message;
    })
    .addCase("UPDATE_GENDER_FAILURE", (state, action) => {
      state.updateGenderLoading = false;
      state.updateGenderError = action.payload.error;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateGenderError = null;
    });
});

// Delete Gender Reducer
const deleteGenderInitialState = {
  deleteGenderLoading: false,
  deleteGenderError: null,
  deleteGenderMessage: "",
};

const deleteGenderReducer = createReducer(deleteGenderInitialState, (builder) => {
  builder
    .addCase("DELETE_GENDER_REQUEST", (state) => {
      state.deleteGenderLoading = true;
    })
    .addCase("DELETE_GENDER_SUCCESS", (state, action) => {
      state.deleteGenderLoading = false;
      state.deleteGenderMessage = action.payload.message;
    })
    .addCase("DELETE_GENDER_FAILURE", (state, action) => {
      state.deleteGenderLoading = false;
      state.deleteGenderError = action.payload.error;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteGenderError = null;
    });
});

export {
  addGenderReducer,
  loadGendersReducer,
  updateGenderReducer,
  deleteGenderReducer,
};

// Add Company Reducer
const addCompanyInitialState = {
  addCompanyLoading: false,
  addCompanyError: null,
  addCompanyMessage: "",
};

const addCompanyReducer = createReducer(addCompanyInitialState, (builder) => {
  builder
    .addCase("ADD_COMPANY_REQUEST", (state) => {
      state.addCompanyLoading = true;
    })
    .addCase("ADD_COMPANY_SUCCESS", (state, action) => {
      state.addCompanyLoading = false;
      state.addCompanyMessage = action.payload.message;
    })
    .addCase("ADD_COMPANY_FAILURE", (state, action) => {
      state.addCompanyLoading = false;
      state.addCompanyError = action.payload.error;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.addCompanyError = null;
    });
});

// Load Companies Reducer
const loadCompaniesInitialState = {
  loadCompaniesLoading: false,
  companies: [],
  loadCompaniesError: null,
};

const loadCompaniesReducer = createReducer(loadCompaniesInitialState, (builder) => {
  builder
    .addCase("LOAD_COMPANIES_REQUEST", (state) => {
      state.loadCompaniesLoading = true;
    })
    .addCase("LOAD_COMPANIES_SUCCESS", (state, action) => {
      state.loadCompaniesLoading = false;
      state.companies = action.payload.companies;
    })
    .addCase("LOAD_COMPANIES_FAILURE", (state, action) => {
      state.loadCompaniesLoading = false;
      state.loadCompaniesError = action.payload.error;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.loadCompaniesError = null;
    });
});

// Update Company Reducer
const updateCompanyInitialState = {
  updateCompanyLoading: false,
  updateCompanyError: null,
  updateCompanyMessage: "",
};

const updateCompanyReducer = createReducer(updateCompanyInitialState, (builder) => {
  builder
    .addCase("UPDATE_COMPANY_REQUEST", (state) => {
      state.updateCompanyLoading = true;
    })
    .addCase("UPDATE_COMPANY_SUCCESS", (state, action) => {
      state.updateCompanyLoading = false;
      state.updateCompanyMessage = action.payload.message;
    })
    .addCase("UPDATE_COMPANY_FAILURE", (state, action) => {
      state.updateCompanyLoading = false;
      state.updateCompanyError = action.payload.error;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.updateCompanyError = null;
    });
});

// Delete Company Reducer
const deleteCompanyInitialState = {
  deleteCompanyLoading: false,
  deleteCompanyError: null,
  deleteCompanyMessage: "",
};

const deleteCompanyReducer = createReducer(deleteCompanyInitialState, (builder) => {
  builder
    .addCase("DELETE_COMPANY_REQUEST", (state) => {
      state.deleteCompanyLoading = true;
    })
    .addCase("DELETE_COMPANY_SUCCESS", (state, action) => {
      state.deleteCompanyLoading = false;
      state.deleteCompanyMessage = action.payload.message;
    })
    .addCase("DELETE_COMPANY_FAILURE", (state, action) => {
      state.deleteCompanyLoading = false;
      state.deleteCompanyError = action.payload.error;
    })
    .addCase("CLEAR_ERRORS", (state, action) => {
      state.deleteCompanyError = null;
    });
});

export {
  addCompanyReducer,
  loadCompaniesReducer,
  updateCompanyReducer,
  deleteCompanyReducer,
};
