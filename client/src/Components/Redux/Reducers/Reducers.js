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
  }
);
export {
  addJobTypeReducer,
  loadJobTypes,
  deleteJobTypeReducer,
  updateJobTypeReducer,
};
