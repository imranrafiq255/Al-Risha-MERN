import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

const Shift = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      shiftId: "",
      shiftTime: "",
      shiftTimeStatus: "", 
    },
    validationSchema: Yup.object().shape({
      shiftId: Yup.string()
        .matches(/[0-9]/, 'Shift ID should be a number')
        .required('Shift ID is required'),
      shiftTime: Yup.string().required('Shift time is required'),
      shiftTimeStatus: Yup.boolean().required('Status is required'), // Boolean validation
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
        <div className="projects-container h-1/2 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Shift Timings:</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">

              {/* Shift ID */}
              <div className="mb-4">
                <label htmlFor="shiftId" className="font-semibold block mb-2">
                  Shift ID
                </label>
                <input
                  type="text"
                  id="shiftId"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="shiftId"
                  placeholder="Enter Shift ID"
                  value={formik.values.shiftId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.shiftId && formik.touched.shiftId && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.shiftId}
                  </div>
                )}
              </div>

              {/* Shift Timings */}
              <div className="mb-4">
                <label htmlFor="shiftTime" className="font-semibold block mb-2">
                  Shift Time
                </label>
                <input
                  type="text"
                  id="shiftTime"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="shiftTime"
                  placeholder="Enter Shift Time (e.g., 07:00am - 06:00pm)"
                  value={formik.values.shiftTime}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.errors.shiftTime && formik.touched.shiftTime && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.shiftTime}
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
                      name="shiftTimeStatus"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.shiftTimeStatus === true}
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
                      name="shiftTimeStatus"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.shiftTimeStatus === false}
                      className="form-radio h-4 w-4 text-custom-class"
                    />
                    <span className="ml-2">Inactive</span>
                  </label>
                </div>
                {formik.errors.shiftTimeStatus && formik.touched.shiftTimeStatus && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.shiftTimeStatus}
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
                type="button" // Change to type="button" if it should not submit the form
                className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Shift Display Data Form  */}
        <div className="company-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Shift Details:</h1>
          </div>
          {/* Placeholder for displaying shift details */}
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Shift Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/6">Shift ID</div>
              <div className="w-2/6">Shift Time</div>
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

export default Shift;
