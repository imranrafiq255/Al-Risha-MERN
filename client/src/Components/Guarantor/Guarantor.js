import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Company/Company.css";

// Import your images
// import trashImage from "../../Assets/trash.png";
// import viewImage from "../../Assets/view.png";
// import pencilImage from "../../Assets/pencil.png";

const Guarantors = () => {
  const formik = useFormik({
    initialValues: {
      guarantorId: '',
      guarantorName: '',
      guarantorPhoneNumber: '',
      guarantorResidentialAddress: '',
      guarantorOccupation: '',
      guarantorJobAddress: '',
      guarantorRelationWithDA: '',
      guarantorStatus: ''
    },
    validationSchema: Yup.object().shape({
      guarantorId: Yup.string().required("Guarantor ID is required"),
      guarantorName: Yup.string().required("Guarantor Name is required"),
      guarantorPhoneNumber: Yup.string().required("Guarantor Phone Number is required"),
      guarantorResidentialAddress: Yup.string().required("Guarantor Residential Address is required"),
      guarantorOccupation: Yup.string().required("Guarantor Occupation is required"),
      guarantorJobAddress: Yup.string().required("Guarantor Job Address is required"),
      guarantorRelationWithDA: Yup.string().required("Guarantor Relation with DA is required"),
      guarantorStatus: Yup.string().oneOf(['active', 'inactive'], "Status is required").required("Status is required")
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  // Handle radio button change
  const handleStatusChange = (event) => {
    formik.setFieldValue("guarantorStatus", event.target.value);
  };

  const [guarantors] = React.useState([
    // Sample data here
  ]);

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        <div className="projects-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Our Guarantors:</h1>
          </div>
          <form onSubmit={formik.handleSubmit} className="projects-list flex flex-col pt-6 px-10">
            {/* Guarantor Form Fields */}
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
              {/* Guarantor ID */}
              <div className="mb-4">
                <label htmlFor="guarantorId" className="font-semibold block mb-2">
                  Guarantor ID
                </label>
                <input
                  type="text"
                  id="guarantorId"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="guarantorId"
                  placeholder="Enter Guarantor ID"
                  value={formik.values.guarantorId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.touched.guarantorId && formik.errors.guarantorId && (
                  <div className="text-red-500 text-xs">{formik.errors.guarantorId}</div>
                )}
              </div>

              {/* Guarantor Name */}
              <div className="mb-4">
                <label htmlFor="guarantorName" className="font-semibold block mb-2">
                  Guarantor Name
                </label>
                <input
                  type="text"
                  id="guarantorName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="guarantorName"
                  placeholder="Enter Guarantor Name"
                  value={formik.values.guarantorName}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.touched.guarantorName && formik.errors.guarantorName && (
                  <div className="text-red-500 text-xs">{formik.errors.guarantorName}</div>
                )}
              </div>

              {/* Residential Address */}
              <div className="mb-4">
                <label htmlFor="guarantorResidentialAddress" className="font-semibold block mb-2">
                  Residential Address
                </label>
                <input
                  type="text"
                  id="guarantorResidentialAddress"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="guarantorResidentialAddress"
                  placeholder="Enter Residential Address"
                  value={formik.values.guarantorResidentialAddress}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.touched.guarantorResidentialAddress && formik.errors.guarantorResidentialAddress && (
                  <div className="text-red-500 text-xs">{formik.errors.guarantorResidentialAddress}</div>
                )}
              </div>

              {/* Guarantor Phone Number */}
              <div className="mb-4">
                <label htmlFor="guarantorPhoneNumber" className="font-semibold block mb-2">
                  Guarantor Phone Number
                </label>
                <input
                  type="tel"
                  id="guarantorPhoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="guarantorPhoneNumber"
                  placeholder="Enter Guarantor Phone Number"
                  value={formik.values.guarantorPhoneNumber}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.touched.guarantorPhoneNumber && formik.errors.guarantorPhoneNumber && (
                  <div className="text-red-500 text-xs">{formik.errors.guarantorPhoneNumber}</div>
                )}
              </div>

              {/* Guarantor Occupation */}
              <div className="mb-4">
                <label htmlFor="guarantorOccupation" className="font-semibold block mb-2">
                  Guarantor Occupation
                </label>
                <input
                  type="text"
                  id="guarantorOccupation"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="guarantorOccupation"
                  placeholder="Enter Guarantor Occupation"
                  value={formik.values.guarantorOccupation}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.touched.guarantorOccupation && formik.errors.guarantorOccupation && (
                  <div className="text-red-500 text-xs">{formik.errors.guarantorOccupation}</div>
                )}
              </div>

              {/* Job Address */}
              <div className="mb-4">
                <label htmlFor="guarantorJobAddress" className="font-semibold block mb-2">
                  Job Address
                </label>
                <input
                  type="text"
                  id="guarantorJobAddress"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="guarantorJobAddress"
                  placeholder="Enter Job Address"
                  value={formik.values.guarantorJobAddress}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.touched.guarantorJobAddress && formik.errors.guarantorJobAddress && (
                  <div className="text-red-500 text-xs">{formik.errors.guarantorJobAddress}</div>
                )}
              </div>

              {/* Relation with DA */}
              <div className="mb-4">
                <label htmlFor="guarantorRelationWithDA" className="font-semibold block mb-2">
                  Relation with DA
                </label>
                <input
                  type="text"
                  id="guarantorRelationWithDA"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="guarantorRelationWithDA"
                  placeholder="Enter Relation with DA"
                  value={formik.values.guarantorRelationWithDA}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
                {formik.touched.guarantorRelationWithDA && formik.errors.guarantorRelationWithDA && (
                  <div className="text-red-500 text-xs">{formik.errors.guarantorRelationWithDA}</div>
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
                      checked={formik.values.guarantorStatus === 'active'}
                      onChange={handleStatusChange}
                      name="guarantorStatus"
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
                      checked={formik.values.guarantorStatus === 'inactive'}
                      onChange={handleStatusChange}
                      name="guarantorStatus"
                      className="form-radio h-4 w-4 text-custom-class"
                    />
                    <span className="ml-2">Inactive</span>
                  </label>
                </div>
                {formik.touched.guarantorStatus && formik.errors.guarantorStatus && (
                  <div className="text-red-500 text-xs">{formik.errors.guarantorStatus}</div>
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

        {/* Guarantors Display Data Form */}
        <div className="company-container h-1/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Guarantor Details:</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Guarantor Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/6">Guarantor ID</div>
              <div className="w-2/6">Guarantor Name</div>
              <div className="w-2/6">Residential Address</div>
              <div className="w-1/6">Phone No</div>
              <div className="w-2/6">Occupation</div>
              <div className="w-2/6">Job Address</div>
              <div className="w-2/6">Relation with DA</div>
              <div className="w-1/6">Status</div>
              <div className="w-1/6">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
            {/* Render guarantors here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guarantors;
