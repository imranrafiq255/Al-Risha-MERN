import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import '../Company/Company.css';
import { useFormik } from "formik";
import * as Yup from "yup";
// Import your images
// import trashImage from '../../Assets/trash.png';
// import viewImage from '../../Assets/view.png';
// import pencilImage from '../../Assets/pencil.png';

const Vehicle = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      vehicleTypeId: "",
      vehicleTypeName: "",
      vehicleTypeStatus: "",
    },
    validationSchema: Yup.object().shape({
      vehicleTypeId: Yup.string()
        .matches(/[0-9]/, 'Vehicle type ID should be a number')
        .required('Vehicle type ID is required'),
      vehicleTypeName: Yup.string().required('Vehicle type name is required'),
      vehicleTypeStatus: Yup.boolean().required("vehicle type status is required"),
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
            <h1 className="text-white text-2xl font-bold">Add Vehicle Types:</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">

              {/* Vehicle Type ID */}
              <div className="mb-4">
                <label htmlFor="vehicleTypeId" className="font-semibold block mb-2">
                  Vehicle Type ID
                </label>
                <input
                  type="text"
                  id="vehicleTypeId"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="vehicleTypeId"
                  placeholder="Enter Vehicle Type ID"
                  value={formik.values.vehicleTypeId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.vehicleTypeId && formik.touched.vehicleTypeId && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.vehicleTypeId}
                  </div>
                )}
              </div>

              {/* Vehicle Type Name */}
              <div className="mb-4">
                <label htmlFor="vehicleTypeName" className="font-semibold block mb-2">
                  Vehicle Type Name
                </label>
                <input
                  type="text"
                  id="vehicleTypeName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="vehicleTypeName"
                  placeholder="Enter Vehicle Type Name"
                  value={formik.values.vehicleTypeName}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.vehicleTypeName && formik.touched.vehicleTypeName && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.vehicleTypeName}
                  </div>
                )}
              </div>

              {/* Vehicle Type Status */}
              {/* <div className="mb-4">
                <label className="font-semibold block mb-2">Status</label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="true"
                      name="vehicleTypeStatus"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.vehicleTypeStatus === true}
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
                      name="vehicleTypeStatus"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.vehicleTypeStatus === false}
                      className="form-radio h-4 w-4 text-custom-class"
                    />
                    <span className="ml-2">Inactive</span>
                  </label>
                </div>
                {formik.errors.vehicleTypeStatus && formik.touched.vehicleTypeStatus && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.vehicleTypeStatus}
                  </div>
                )}
              </div> */}
              {/* Vehicle Type Status */}
<div className="mb-4">
  <label className="font-semibold block mb-2">Status</label>
  <div>
    <label className="inline-flex items-center">
      <input
        type="radio"
        value="true"
        name="vehicleTypeStatus"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values.vehicleTypeStatus === "true"}
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
        name="vehicleTypeStatus"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values.vehicleTypeStatus === "false"}
        className="form-radio h-4 w-4 text-custom-class"
      />
      <span className="ml-2">Inactive</span>
    </label>
  </div>
  {formik.errors.vehicleTypeStatus && formik.touched.vehicleTypeStatus && (
    <div className="text-red-500 text-xs">
      {formik.errors.vehicleTypeStatus}
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
              > Submit
              </button>
              {/* Cancel Button */}
              <button
              className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>


        </div>

        {/* Vehicle Type Display Data Form */}
        <div className="company-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Vehicle Type Details:</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Vehicle Type Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/4">Car Type ID</div>
              <div className="w-3/4">Car Type Name</div>
              <div className="w-1/4">Status</div>
              <div className="w-1/4">Action</div>
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

export default Vehicle;
