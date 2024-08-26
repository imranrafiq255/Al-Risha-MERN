import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../Salary/Salary.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

const Salary = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      salaryTypeId: "",
      salaryTypeName: "",
      salaryTypeStatus: "", 
    },
    validationSchema: Yup.object().shape({
      salaryTypeId: Yup.string()
        .matches(/^[0-9]+$/, 'Salary Type ID should be a number')
        .required('Salary Type ID is required'),
      salaryTypeName: Yup.string().required('Salary Type Name is required'),
      salaryTypeStatus: Yup.boolean().required("Status is required"), 
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

        {/* Add New Salary Form */}
        <div className="projects-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-salary-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Add New Salary</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="projects-list flex flex-col pt-6 px-10">
              {/* Form Fields */}
              <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
                {/* Salary ID */}
                <div className="mb-4">
                  <label htmlFor="salaryTypeId" className="font-semibold block mb-2">
                    Salary ID
                  </label>
                  <input
                    type="text"
                    id="salaryTypeId"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="salaryTypeId"
                    placeholder="Enter Salary ID"
                    value={formik.values.salaryTypeId}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.errors.salaryTypeId && formik.touched.salaryTypeId && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.salaryTypeId}
                    </div>
                  )}
                </div>

                {/* Salary Type Name */}
                <div className="mb-4">
                  <label htmlFor="salaryTypeName" className="font-semibold block mb-2">
                    Salary Type
                  </label>
                  <input
                    type="text"
                    id="salaryTypeName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="salaryTypeName"
                    placeholder="Enter Salary Type"
                    value={formik.values.salaryTypeName}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.errors.salaryTypeName && formik.touched.salaryTypeName && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.salaryTypeName}
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
                        name="salaryTypeStatus"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.salaryTypeStatus === 'true'}
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
                        name="salaryTypeStatus"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.salaryTypeStatus === 'false'}
                        className="form-radio h-4 w-4 text-custom-class"
                      />
                      <span className="ml-2">Inactive</span>
                    </label>
                  </div>
                  {formik.errors.salaryTypeStatus && formik.touched.salaryTypeStatus && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.salaryTypeStatus}
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
                  type="button" // Changed to type="button" if it should not submit the form
                  onClick={() => formik.resetForm()}
                  className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Salaries Type Section */}
        <div className="projects-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-salary-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Salaries Type</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Salary Headings */}
            <div className="project-item flex mt-4">
              <div className="w-3/12 font-bold">Salary ID</div>
              <div className="w-3/12 font-bold">Type</div>
              <div className="w-2/12 font-bold">Status</div>
              <div className="w-1/12 font-bold">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="salary-bottom-line w-full"></div>
            </div>
            {/* Render Salary Rows */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
