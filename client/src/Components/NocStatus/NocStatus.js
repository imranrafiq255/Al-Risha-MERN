import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../Company/Company.css'; 
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';

const NocStatus = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      nocId: '',
      nocStatus: '',
      nocDetails: '',
    },
    validationSchema: Yup.object().shape({
      nocId: Yup.string()
        .matches(/^[0-9]+$/, 'NOC ID should be a number') 
        .required('NOC ID is required'),
      nocStatus: Yup.boolean().required('NOC Status is required'),
      nocDetails: Yup.string().required('NOC Details is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  // Handle status change
  const handleStatusChange = (event) => {
    formik.setFieldValue('nocStatus', event.target.value === 'true');
  };

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />

        {/* Add New NOC Form */}
        <div className="projects-container h-2/3 bg-white mt-12 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-salary-bg absolute top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Add New NOC Status:</h1>
          </div>
          <form onSubmit={formik.handleSubmit} className="projects-list flex flex-col pt-20 px-10">
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
              
              {/* NOC ID */}
              <div className="mb-4">
                <label htmlFor="nocId" className="font-semibold block mb-2">
                  NOC ID
                </label>
                <input
                  type="text"
                  id="nocId"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="nocId"
                  placeholder="Enter NOC ID"
                  value={formik.values.nocId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.nocId && formik.touched.nocId && (
                  <div className="text-red-500 text-xs">{formik.errors.nocId}</div>
                )}
              </div>

              {/* NOC Status */}
              <div className="mb-4">
                <label className="font-semibold block mb-2">NOC Status</label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="true"
                      name="nocStatus"
                      onChange={handleStatusChange}
                      checked={formik.values.nocStatus === true}
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
                      name="nocStatus"
                      onChange={handleStatusChange}
                      checked={formik.values.nocStatus === false}
                      className="form-radio h-4 w-4 text-custom-class"
                    />
                    <span className="ml-2">Inactive</span>
                  </label>
                </div>
                {formik.errors.nocStatus && formik.touched.nocStatus && (
                  <div className="text-red-500 text-xs">{formik.errors.nocStatus}</div>
                )}
              </div>

              {/* NOC Details */}
              <div className="mb-4 col-span-2">
                <label htmlFor="nocDetails" className="font-semibold block mb-2">
                  NOC Details
                </label>
                <textarea
                  id="nocDetails"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="nocDetails"
                  value={formik.values.nocDetails}
                  placeholder="Enter NOC Details"
                  className="input-field px-3 py-2 w-full h-20 outline-none border-custom-class resize-none"
                />
                {formik.errors.nocDetails && formik.touched.nocDetails && (
                  <div className="text-red-500 text-xs">{formik.errors.nocDetails}</div>
                )}
              </div>
            </div>

            {/* Button Container */}
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-blue-500 hover:bg-blue-600"
              >
                Submit
              </button>
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

        {/* NOC Type Section */}
        <div className="projects-container h-1/2 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-salary-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">NOC Status Details:</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            <div className="project-item flex mt-4">
              <div className="w-2/12 font-bold">NOC ID</div>
              <div className="w-2/12 font-bold">NOC Status</div>
              <div className="w-4/12 font-bold">Details</div>
              <div className="w-3/12 font-bold">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="salary-bottom-line w-full"></div>
            </div>
            {/* Render NOC Rows */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NocStatus;
