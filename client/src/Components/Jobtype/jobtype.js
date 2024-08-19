import React from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Company/Company.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import trashImage from "../../Assets/trash.png";
import viewImage from "../../Assets/view.png";
import pencilImage from "../../Assets/pencil.png";

const JobType = () => {
  const formik = useFormik({
    initialValues: {
      jobTypeId: "",
      jobTypeName: "",
      jobTypeStatus: false,
    },
    validationSchema: Yup.object().shape({
      jobTypeId: Yup.string()
        .matches(/[0-9]/, "Job type ID should be a number")
        .required("Job type ID is required"),
      jobTypeName: Yup.string().required("Job type name is required"),
      jobTypeStatus: Yup.boolean().required("Job type status is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        <div className="projects-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Add Job Types:</h1>
          </div>
          <div className="projects-list flex flex-col pt-6 px-10">
            {/* Job Type Form Fields */}
            <form onSubmit={formik.handleSubmit}>
              <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
                {/* Job Type ID */}
                <div className="mb-4">
                  <label
                    htmlFor="jobTypeId"
                    className="font-semibold block mb-2"
                  >
                    Job Type ID
                  </label>
                  <input
                    type="text"
                    id="jobTypeId"
                    name="jobTypeId"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.jobTypeId}
                    placeholder="Enter Job Type ID"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.errors.jobTypeId && formik.touched.jobTypeId && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.jobTypeId}
                    </div>
                  )}
                </div>

                {/* Job Type Name */}
                <div className="mb-4">
                  <label
                    htmlFor="jobTypeName"
                    className="font-semibold block mb-2"
                  >
                    Job Type Name
                  </label>
                  <input
                    type="text"
                    id="jobTypeName"
                    name="jobTypeName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.jobTypeName}
                    placeholder="Enter Job Type Name"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.errors.jobTypeName && formik.touched.jobTypeName && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.jobTypeName}
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
                        name="jobTypeStatus"
                        value="true"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.jobTypeStatus === "true"}
                        className="form-radio h-4 w-4 text-custom-class"
                      />
                      <span className="ml-2">Active</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="jobTypeStatus"
                        value="false"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.jobTypeStatus === "false"}
                        className="form-radio h-4 w-4 text-custom-class"
                      />
                      <span className="ml-2">Inactive</span>
                    </label>
                  </div>
                  {formik.errors.jobTypeStatus &&
                    formik.touched.jobTypeStatus && (
                      <div className="text-red-500 text-xs">
                        {formik.errors.jobTypeStatus}
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
        </div>

        {/* Job Type Display Data Form */}
        <div className="company-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Job Type Details:</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Job Type Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/4">Job Type ID</div>
              <div className="w-3/4">Job Type Name</div>
              <div className="w-1/4">Status</div>
              <div className="w-1/4">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
            <div className="flex mt-4 items-center">
              <div className="w-1/4">jobTypeId</div>
              <div className="w-3/4">jobTypeName</div>
              <div className="w-1/4">
                <div className="text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg">
                  status
                </div>
              </div>
              <div className="w-1/4 flex">
                <img
                  src={viewImage}
                  alt="View"
                  className="w-7 h-8 cursor-pointer mr-2"
                />
                <img
                  src={pencilImage}
                  alt="Edit"
                  className="w-6 h-6 cursor-pointer mr-2"
                />
                <img
                  src={trashImage}
                  alt="Delete"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobType;
