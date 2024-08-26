import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Company/Company.css";

// Validation Schema for the Gender Form
const validationSchema = Yup.object({
  genderId: Yup.string()
    .matches(/^[0-9]+$/, 'Gender ID should be a number')
    .required('Gender ID is required'),
  gender: Yup.string().required('Gender is required'),
  status: Yup.string().oneOf(['active', 'inactive'], 'Invalid status').required('Status is required')
});

const Gendors = () => {
  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      genderId: '',
      gender: '',
      status: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
     
    }
  });

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        <div className="projects-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Our Genders:</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">

              {/* Gender ID */}
              <div className="mb-4">
                <label htmlFor="genderId" className="font-semibold block mb-2">
                  Gender ID
                </label>
                <input
                  type="text"
                  id="genderId"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="genderId"
                  placeholder="Enter Gender ID"
                  value={formik.values.genderId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.genderId && formik.touched.genderId && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.genderId}
                  </div>
                )}
              </div>

              {/* Gender Text Input */}
              <div className="mb-4">
                <label htmlFor="gender" className="font-semibold block mb-2">
                  Gender
                </label>
                <input
                  type="text"
                  id="gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="gender"
                  placeholder="Enter Gender"
                  value={formik.values.gender}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.gender && formik.touched.gender && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.gender}
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
                      value="active"
                      name="status"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.status === "active"}
                      className="form-radio h-4 w-4 text-custom-class"
                    />
                    <span className="ml-2">Active</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="inactive"
                      name="status"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.status === "inactive"}
                      className="form-radio h-4 w-4 text-custom-class"
                    />
                    <span className="ml-2">Inactive</span>
                  </label>
                </div>
                {formik.errors.status && formik.touched.status && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.status}
                  </div>
                )}
              </div>
            </div>

            {/* Button Container */}
            <div className="flex justify-center space-x-4">
              {/* Submit Button */}
              <button
                type="submit"
                className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-green-500 hover:bg-green-600"
              >
                Submit
              </button>
              {/* Cancel Button */}
              <button
                type="button"
                onClick={() => formik.resetForm()}
                className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Genders Display Data Form */}
        <div className="company-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Gender Details:</h1>
          </div>
          {/* Placeholder for displaying gender details */}
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Gender Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/6">Gender ID</div>
              <div className="w-1/6">Gender</div>
              <div className="w-1/6">Status</div>
              <div className="w-1/6">Action</div>
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

export default Gendors;
