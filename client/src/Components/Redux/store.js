import { configureStore } from "@reduxjs/toolkit";
import {
  addJobTypeReducer,
  deleteJobTypeReducer,
  loadJobTypes,
  updateJobTypeReducer,
  //Add Store
  addStoreReducer,
  loadStoresReducer,
  deleteStoreReducer,
  updateStoreReducer,
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
  },
});


export default store;
