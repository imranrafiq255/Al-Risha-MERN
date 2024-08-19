import { configureStore } from "@reduxjs/toolkit";
import {
  addJobTypeReducer,
  deleteJobTypeReducer,
  loadJobTypes,
  updateJobTypeReducer,
} from "./Reducers/Reducers";

const store = configureStore({
  reducer: {
    // Job type
    addJobTypeReducer: addJobTypeReducer,
    loadJobTypes: loadJobTypes,
    deleteJobTypeReducer: deleteJobTypeReducer,
    updateJobTypeReducer: updateJobTypeReducer,
  },
});

export default store;
