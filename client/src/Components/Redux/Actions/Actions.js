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
