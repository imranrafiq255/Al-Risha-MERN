import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Company/Company.css";
import { useFormik } from "formik";
import * as Yup from "yup";
// Import your images
// import trashImage from "../../Assets/trash.png";
// import viewImage from "../../Assets/view.png";
// import pencilImage from "../../Assets/pencil.png";

const StateOfIssuance = () => {
  const formik = useFormik({
    initialValues: {
      stateId: "",
      stateName: "",
      stateStatus: "",
    },
    validationSchema: Yup.object().shape({
      stateId: Yup.string()
        .matches(/[0-9]/, "State type ID should be a number")
        .required("State type ID is required"),
      stateName: Yup.string().required("State type name is required"),
      stateStatus: Yup.boolean().required("State type status is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        <div className="projects-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">
              State of Issuance:
            </h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="projects-list flex flex-col pt-6 px-10">
              {/* State Form Fields */}
              <div className="form-field-grid mb-1  grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
                {/* State ID */}
                <div className="mb-4">
                  <label htmlFor="stateId" className="font-semibold block mb-2">
                    State ID
                  </label>
                  <input
                    type="text"
                    id="stateId"
                    onChange={formik.handleChange}
                    name="stateId"
                    placeholder="Enter State ID"
                    value={formik.values.stateId}
                    onBlur={formik.handleBlur}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.errors.stateId && formik.touched.stateId && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.stateId}
                    </div>
                  )}
                </div>

                {/* State Name */}
                <div className="mb-4">
                  <label
                    htmlFor="stateName"
                    className="font-semibold block mb-2"
                  >
                    State Name
                  </label>
                  <input
                    type="text"
                    id="stateName"
                    onChange={formik.handleChange}
                    name="stateName"
                    placeholder="Enter State Name"
                    onBlur={formik.handleBlur}
                    value={formik.values.stateName}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.errors.stateName && formik.touched.stateName && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.stateName}
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
                        value="true"
                        name="stateStatus"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.stateStatus === "true"}
                        className="form-radio h-4 w-4 text-custom-class"
                      />
                      <span className="ml-2">Active</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="false"
                        name="stateStatus"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.stateStatus === "false"}
                        className="form-radio h-4 w-4 text-custom-class"
                      />
                      <span className="ml-2">Inactive</span>
                    </label>
                  </div>
                  {formik.errors.stateStatus && formik.touched.stateStatus && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.stateStatus}
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
                <button className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* State Display Data Form */}
        <div className="company-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">State Details:</h1>
          </div>
          {/* Placeholder for displaying state details */}
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* State Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/6">State ID</div>
              <div className="w-1/6">State Name</div>
              <div className="w-1/6">Status</div>
              <div className="w-1/6">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
            {/* write logic here for states data  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateOfIssuance;
