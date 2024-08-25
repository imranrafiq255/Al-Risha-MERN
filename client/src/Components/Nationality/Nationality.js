import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Company/Company.css"; // Ensure your CSS file is properly imported

// Import your images
// import trashImage from "../../Assets/trash.png";
// import viewImage from "../../Assets/view.png";
// import pencilImage from "../../Assets/pencil.png";
import { useFormik } from "formik";
import * as Yup from "yup";
const Nationality = () => {
  const formik = useFormik({
    initialValues: {
      nationalityId: "",
      nationality: "",
      nationalityStatus: "",
    },
    validationSchema: Yup.object().shape({
      nationalityId: Yup.string()
        .matches(/[0-9]/, "Nationality ID should be a number")
        .required("Nationality ID is required"),
      nationality: Yup.string().required("Nationality is required"),
      nationalityStatus: Yup.boolean().required(
        "Nationality status is required"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);

  const toggleSideBarVisibility = () => {
    setIsSideBarVisible((prevState) => !prevState);
  };
  return (
    <div className="home-container custom-home-background w-screen h-full p-4">
      <Header toggleSideBarVisibility={toggleSideBarVisibility} />
      <div className="right-sidebar-container w-full relative">
        <div className="projects-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">
              Add Nationalities:
            </h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="projects-list flex flex-col pt-6 px-10">
              {/* Nationality Form Fields */}
              <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
                {/* Nationality ID */}
                <div className="mb-4">
                  <label
                    htmlFor="nationalityId"
                    className="font-semibold block mb-2"
                  >
                    Nationality ID
                  </label>
                  <input
                    type="text"
                    id="nationalityId"
                    name="nationalityId"
                    value={formik.values.nationalityId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Nationality ID"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.errors.nationalityId &&
                    formik.touched.nationalityId && (
                      <div className="text-red-500 text-xs">
                        {formik.errors.nationalityId}
                      </div>
                    )}
                </div>

                {/* Nationality */}
                <div className="mb-4">
                  <label
                    htmlFor="nationality"
                    className="font-semibold block mb-2"
                  >
                    Nationality
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formik.values.nationality}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Nationality Country"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                  {formik.errors.nationality && formik.touched.nationality && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.nationality}
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
                        checked={formik.values.nationalityStatus === "active"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
                        checked={formik.values.nationalityStatus === "inactive"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-radio h-4 w-4 text-custom-class"
                      />
                      <span className="ml-2">Inactive</span>
                    </label>
                  </div>
                  {formik.errors.nationalityStatus &&
                    formik.touched.nationalityStatus && (
                      <div className="text-red-500 text-xs">
                        {formik.errors.nationalityStatus}
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
                <button className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Nationalities Display Data Form  */}
        <div className="company-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="lg:h-20 h-14 w-11/12 custom-company-bg absolute lg:-top-6 -top-4 lg:left-14 left-4 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">
              Nationality Details:
            </h1>
          </div>
          {/* Placeholder for displaying nationality details */}
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Nationality Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/6">Nationality ID</div>
              <div className="w-1/6">Nationality</div>
              <div className="w-1/6">Status</div>
              <div className="w-1/6">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
          </div>
        </div>
        <div className="side-bar absolute xl:top-[-40px] top-[-70px] left-[-15px]">
          <SideBar isShowing={isSideBarVisible} />
        </div>
      </div>
    </div>
  );
};

export default Nationality;
