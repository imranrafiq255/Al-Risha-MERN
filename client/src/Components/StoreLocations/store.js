import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../Company/Company.css"; // Assuming you want to use the same CSS styles

// Import your images
// import trashImage from "../../Assets/trash.png";
// import viewImage from "../../Assets/view.png";
// import pencilImage from "../../Assets/pencil.png";
import SideBar from "../SideBar/SideBar"; // Import the sidebar component
import Header from "../Header/Header"; // Import the Header component

const Store = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      storeId: "",
      storeLocation: "",
      storeState: "",
      storeStatus: "",
    },
    validationSchema: Yup.object().shape({
      storeId: Yup.string()
        .matches(/[0-9]/, 'Store ID should be a number')
        .required('Store ID is required'),
      storeLocation: Yup.string().required('Store Location is required'),
      storeState: Yup.string().required('Store State is required'),
      storeStatus: Yup.string().oneOf(["Active", "Inactive"], "Invalid status").required("Store status is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar /> {/* Include the sidebar */}
      <div className="right-sidebar-container w-10/12">
        <Header /> {/* Include the header */}
        <div className="projects-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Add Store Locations:</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
              {/* Store ID */}
              <div className="mb-4">
                <label htmlFor="storeId" className="font-semibold block mb-2">
                  Store Location ID
                </label>
                <input
                  type="text"
                  id="storeId"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="storeId"
                  placeholder="Enter Store Location ID"
                  value={formik.values.storeId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.storeId && formik.touched.storeId && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.storeId}
                  </div>
                )}
              </div>

              {/* Store Location */}
              <div className="mb-4">
                <label htmlFor="storeLocation" className="font-semibold block mb-2">
                  Store Location
                </label>
                <input
                  type="text"
                  id="storeLocation"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="storeLocation"
                  placeholder="Enter Store Location"
                  value={formik.values.storeLocation}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.storeLocation && formik.touched.storeLocation && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.storeLocation}
                  </div>
                )}
              </div>

              {/* Store State */}
              <div className="mb-4">
                <label htmlFor="storeState" className="font-semibold block mb-2">
                  Store State
                </label>
                <select
                  id="storeState"
                  name="storeState"
                  value={formik.values.storeState}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                >
                  <option value="">Select State</option>
                  <option value="State A">State A</option>
                  <option value="State B">State B</option>
                  <option value="State C">State C</option>
                  {/* Add more states as needed */}
                </select>
                {formik.errors.storeState && formik.touched.storeState && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.storeState}
                  </div>
                )}
              </div>

              {/* Status */}
              <div className="mb-4">
                <label className="font-semibold block mb-2">Status</label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="Active"
                      name="storeStatus"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.storeStatus === "Active"}
                      className="form-radio h-4 w-4 text-custom-class"
                    />
                    <span className="ml-2">Active</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="Inactive"
                      name="storeStatus"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.storeStatus === "Inactive"}
                      className="form-radio h-4 w-4 text-custom-class"
                    />
                    <span className="ml-2">Inactive</span>
                  </label>
                </div>
                {formik.errors.storeStatus && formik.touched.storeStatus && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.storeStatus}
                  </div>
                )}
              </div>
            </div>

            {/* Button Container */}
            <div className="flex justify-center space-x-4">
              {/* Submit Button */}
              <button
                type="submit"
                className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-blue-500 hover:bg-blue-600"
              >
                Submit
              </button>
              {/* Cancel Button */}
              <button
                type="button"
                className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Store Display Data Form */}
        <div className="projects-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Store Locations Details:</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Store Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/5">Store ID</div>
              <div className="w-1/5">Store Name</div>
              <div className="w-1/5">Store State</div>
              <div className="w-1/5">Status</div>
              <div className="w-1/5">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
            {/* Handle store values */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
