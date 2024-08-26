import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import '../Company/Company.css';

// Import your images
import trashImage from "../../Assets/trash.png";
import viewImage from "../../Assets/view.png";
import pencilImage from "../../Assets/pencil.png";

const Vendors = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      vendorId: '',
      vendorName: '',
      vendorAddress: '',
      vendorPhoneNumber: '',
      vendorPOCName: '',
      status: '', // Use an empty string initially
    },
    validationSchema: Yup.object().shape({
      vendorId: Yup.string()
        .matches(/^[0-9]+$/, 'Vendor ID should be a number')
        .required('Vendor ID is required'),
      vendorName: Yup.string().required('Vendor name is required'),
      vendorAddress: Yup.string().required('Vendor address is required'),
      vendorPhoneNumber: Yup.string().required('Vendor phone number is required'),
      vendorPOCName: Yup.string().required('Vendor POC name is required'),
      status: Yup.string().oneOf(['active', 'inactive'], 'Vendor status is required').required('Vendor status is required'),
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
        <div className="projects-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Add Vendor Details:</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">

              {/* Vendor ID */}
              <div className="mb-4">
                <label htmlFor="vendorId" className="font-semibold block mb-2">
                  Vendor ID
                </label>
                <input
                  type="text"
                  id="vendorId"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="vendorId"
                  placeholder="Enter Vendor ID"
                  value={formik.values.vendorId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.vendorId && formik.touched.vendorId && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.vendorId}
                  </div>
                )}
              </div>

              {/* Vendor Name */}
              <div className="mb-4">
                <label htmlFor="vendorName" className="font-semibold block mb-2">
                  Vendor Name
                </label>
                <input
                  type="text"
                  id="vendorName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="vendorName"
                  placeholder="Enter Vendor Name"
                  value={formik.values.vendorName}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.vendorName && formik.touched.vendorName && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.vendorName}
                  </div>
                )}
              </div>

              {/* Vendor Address */}
              <div className="mb-4">
                <label htmlFor="vendorAddress" className="font-semibold block mb-2">
                  Vendor Address
                </label>
                <input
                  type="text"
                  id="vendorAddress"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="vendorAddress"
                  placeholder="Enter Vendor Address"
                  value={formik.values.vendorAddress}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.vendorAddress && formik.touched.vendorAddress && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.vendorAddress}
                  </div>
                )}
              </div>

              {/* Vendor Phone Number */}
              <div className="mb-4">
                <label htmlFor="vendorPhoneNumber" className="font-semibold block mb-2">
                  Vendor Phone Number
                </label>
                <input
                  type="tel"
                  id="vendorPhoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="vendorPhoneNumber"
                  placeholder="Enter Vendor Phone Number"
                  value={formik.values.vendorPhoneNumber}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.vendorPhoneNumber && formik.touched.vendorPhoneNumber && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.vendorPhoneNumber}
                  </div>
                )}
              </div>

              {/* Vendor POC (Point of Contact) Name */}
              <div className="mb-4">
                <label htmlFor="vendorPOCName" className="font-semibold block mb-2">
                  Vendor POC Name
                </label>
                <input
                  type="text"
                  id="vendorPOCName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="vendorPOCName"
                  placeholder="Enter Vendor POC Name"
                  value={formik.values.vendorPOCName}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.vendorPOCName && formik.touched.vendorPOCName && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.vendorPOCName}
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
                      checked={formik.values.status === 'active'}
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
                      checked={formik.values.status === 'inactive'}
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
                className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-blue-500 hover:bg-blue-600"
              >
                Submit
              </button>
              {/* Cancel Button */}
              <button
                type="button"
                className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600"
                onClick={() => formik.resetForm()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Vendors Display Data Form */}
        <div className="company-container h-1/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Vendor Details:</h1>
          </div>
          {/* Placeholder for displaying vendor details */}
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Vendor Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/6">Vendor ID</div>
              <div className="w-2/6">Vendor Name</div>
              <div className="w-2/6">Address</div>
              <div className="w-1/6">Phone No</div>
              <div className="w-2/6">POC Name</div>
              <div className="w-1/6">Status</div>
              <div className="w-1/6">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
            {/* Placeholder for vendor data rows */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;
