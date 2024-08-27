import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../Company/Company.css'; // Assuming you want to use the same CSS styles
import Header from '../Header/Header'; // Adjust the path as needed
import SideBar from '../SideBar/SideBar'; // Import the sidebar component

const Zone = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      zoneId: "",
      zoneName: "",
      zoneState: "",
      zoneAddress: "", 
      zoneStatus: "", 
    },
    validationSchema: Yup.object({
      zoneId: Yup.string()
        .matches(/^[0-9]+$/, 'Zone ID should be a number')
        .required('Zone ID is required'),
      zoneName: Yup.string().required('Zone Name is required'),
      zoneState: Yup.string().required('Zone State is required'),
      zoneStatus: Yup.boolean().required('Status is required')
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
            <h1 className="text-white text-2xl font-bold">Add Zone:</h1>
          </div>
          <div className="projects-list flex flex-col pt-6 px-10">
            {/* Zone Form Fields */}
            <form onSubmit={formik.handleSubmit}>
              <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">

                {/* Zone ID */}
                <div className="mb-4">
                  <label htmlFor="zoneId" className="font-semibold block mb-2">
                    Zone ID
                  </label>
                  <input
                    type="text"
                    id="zoneId"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="zoneId"
                    placeholder="Enter Zone ID"
                    value={formik.values.zoneId}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.touched.zoneId && formik.errors.zoneId ? (
                    <div className="text-red-500 text-xs">{formik.errors.zoneId}</div>
                  ) : null}
                </div>

                {/* Zone Name */}
                <div className="mb-4">
                  <label htmlFor="zoneName" className="font-semibold block mb-2">
                    Zone Name
                  </label>
                  <input
                    type="text"
                    id="zoneName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="zoneName"
                    placeholder="Enter Zone Name"
                    value={formik.values.zoneName}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.touched.zoneName && formik.errors.zoneName ? (
                    <div className="text-red-500 text-xs">{formik.errors.zoneName}</div>
                  ) : null}
                </div>

                {/* Zone State */}
                <div className="mb-4">
                  <label htmlFor="zoneState" className="font-semibold block mb-2">
                    Zone State
                  </label>
                  <select
                    id="zoneState"
                    name="zoneState"
                    value={formik.values.zoneState}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option value="">Select State</option>
                    {/* Assuming you have a list of states */}
                    <option value="StateA">State A</option>
                    <option value="StateB">State B</option>
                    <option value="StateC">State C</option>
                  </select>
                  {formik.touched.zoneState && formik.errors.zoneState ? (
                    <div className="text-red-500 text-xs">{formik.errors.zoneState}</div>
                  ) : null}
                </div>

                {/* Status */}
                <div className="mb-4">
                  <label className="font-semibold block mb-2">Status</label>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value={true}
                        name="zoneStatus"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.zoneStatus === true}
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
                        name="zoneStatus"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.zoneStatus === false}
                        className="form-radio h-4 w-4 text-custom-class"
                      />
                      <span className="ml-2">Inactive</span>
                    </label>
                  </div>
                  {formik.touched.zoneStatus && formik.errors.zoneStatus ? (
                    <div className="text-red-500 text-xs">{formik.errors.zoneStatus}</div>
                  ) : null}
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
            </form>
          </div>
        </div>

        {/* Zone Display Data Form */}
        <div className="company-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Zone Details:</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Zone Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/5">Zone ID</div>
              <div className="w-1/5">Zone Name</div>
              <div className="w-1/5">Zone State</div>
              <div className="w-1/5">Zone Address</div>
              <div className="w-1/5">Status</div>
              <div className="w-1/5">Action</div>
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

export default Zone;
