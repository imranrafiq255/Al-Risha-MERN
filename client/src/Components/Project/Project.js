import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Project/Project.css";
import axios from "axios";

const Project = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch companies from the API
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("/api/companies");
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      projectId: "",
      projectName: "",
      projectStartDate: "", 
      companyName: "",
      projectStatus: "", 
    },
    validationSchema: Yup.object().shape({
      projectId: Yup.string()
        .matches(/^[0-9]+$/, 'Project ID should be a number')
        .required('Project ID is required'),
      projectName: Yup.string().required('Project Name is required'),
      projectStartDate: Yup.date().required('Start Date is required'),
      companyName: Yup.string().required('Company Name is required'),
      projectStatus: Yup.boolean().required('Project Status is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Submit the form data
        await axios.post("/api/projects", {
          ...values,
          projectStatus: values.projectStatus, // Map boolean status to projectStatus
        });
        formik.resetForm();
        alert("Project submitted successfully");
      } catch (error) {
        console.error("Error submitting project:", error);
      }
    },
  });

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        {/* Project Input Form */}
        <div className="projects-container h-3/5 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-projects-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Our Projects</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="projects-list flex flex-col pt-6 px-10">
              {/* Project Form Grid */}
              <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
                {/* Project ID */}
                <div className="mb-4">
                  <label htmlFor="projectId" className="font-semibold block mb-2">
                    Project ID
                  </label>
                  <input
                    type="text"
                    id="projectId"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="projectId"
                    placeholder="Enter Project ID"
                    value={formik.values.projectId}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.errors.projectId && formik.touched.projectId && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.projectId}
                    </div>
                  )}
                </div>

                {/* Project Name */}
                <div className="mb-4">
                  <label htmlFor="projectName" className="font-semibold block mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="projectName"
                    placeholder="Enter Project Name"
                    value={formik.values.projectName}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.errors.projectName && formik.touched.projectName && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.projectName}
                    </div>
                  )}
                </div>

                {/* Start Date */}
                <div className="mb-4">
                  <label htmlFor="projectStartDate" className="font-semibold block mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="projectStartDate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="projectStartDate"
                    value={formik.values.projectStartDate}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.errors.projectStartDate && formik.touched.projectStartDate && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.projectStartDate}
                    </div>
                  )}
                </div>

                {/* Company Name Dropdown */}
                <div className="mb-4">
                  <label htmlFor="companyName" className="font-semibold block mb-2">
                    Company Name
                  </label>
                  <select
                    id="companyName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="companyName"
                    value={formik.values.companyName}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option value="">Select Company Name</option>
                    {companies.map((company) => (
                      <option key={company._id} value={company._id}>
                        {company.companyName}
                      </option>
                    ))}
                  </select>
                  {formik.errors.companyName && formik.touched.companyName && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.companyName}
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
                        value={true}
                        name="projectStatus"
                        onChange={() => formik.setFieldValue('projectStatus', true)}
                        checked={formik.values.projectStatus === true}
                        className="form-radio h-4 w-4 text-custom-class"
                      />
                      <span className="ml-2">Active</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value={false}
                        name="projectStatus"
                        onChange={() => formik.setFieldValue('projectStatus', false)}
                        checked={formik.values.projectStatus === false}
                        className="form-radio h-4 w-4 text-custom-class"
                      />
                      <span className="ml-2">Inactive</span>
                    </label>
                  </div>
                  {formik.errors.projectStatus && formik.touched.projectStatus && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.projectStatus}
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
                  onClick={() => formik.resetForm()}
                  className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Project Display Form */}
        <div className="projects-container h-2/2 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Projects Details:</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Projects Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/6">Project ID</div>
              <div className="w-2/6">Project Name</div>
              <div className="w-1/6">Start Date</div>
              <div className="w-1/6">Company</div>
              <div className="w-1/6">Status</div>
            </div>
            {/* Render project details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
