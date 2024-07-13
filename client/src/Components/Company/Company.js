import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Company/Company.css";

// Import your images
import trashImage from "../../Assets/trash.png";
import viewImage from "../../Assets/view.png";
import pencilImage from "../../Assets/pencil.png";
import axios from "axios";
import errorMessage from "../ToastMessages/errorMessage";
import successMessage from "../ToastMessages/successMessage";
import { Toaster } from "react-hot-toast";
const Company = () => {
  const [formData, setFormData] = useState({
    companyId: "",
    companyName: "",
    companyAddress: "",
    companyPOCName: "",
    companyPOCEmail: "",
    companyPOCPhoneNumber: "",
    companyStatus: false,
  });
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, companyStatus: e.target.value });
  };
  const loadAllCompanies = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/v1/company/load-all-companies");
      setCompany(response?.data?.companies);
      setLoading(false);
    } catch (error) {
      console.log(error?.response?.data?.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    loadAllCompanies();
  }, []);

  const submitCompanyData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "/api/v1/company/add-company",
        formData
      );
      console.log(response?.data?.message);
      successMessage(response?.data?.message);
      setLoading(false);
      loadAllCompanies();
    } catch (error) {
      console.log(error?.response?.data?.message);
      errorMessage(error?.response?.data?.message);
      setLoading(false);
    }
  };
  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        <Toaster />
        <div className="projects-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Our Company:</h1>
          </div>
          <div className="projects-list flex flex-col pt-6 px-10">
            {/* Company Form Fields */}
            <div className="form-field-grid mb-1  grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
              {/* Company ID */}
              <div className="mb-4">
                <label htmlFor="companyId" className="font-semibold block mb-2">
                  Company ID
                </label>
                <input
                  type="text"
                  id="companyId"
                  onChange={handleInputChange}
                  name="companyId"
                  placeholder="Enter Company ID"
                  value={formData.companyId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Company Name */}
              <div className="mb-4">
                <label
                  htmlFor="companyName"
                  className="font-semibold block mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  onChange={handleInputChange}
                  name="companyName"
                  placeholder="Enter Company Name"
                  value={formData.companyName}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Company Address */}
              <div className="mb-4">
                <label
                  htmlFor="companyAddress"
                  className="font-semibold block mb-2"
                >
                  Company Address
                </label>
                <input
                  type="text"
                  id="companyAddress"
                  onChange={handleInputChange}
                  name="companyAddress"
                  placeholder="Enter Company Address"
                  value={formData.companyAddress}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* POC (Point of Contact) */}
              <div className="mb-4">
                <label htmlFor="poc" className="font-semibold block mb-2">
                  POC (Person of Contact)
                </label>
                <input
                  type="text"
                  id="poc"
                  onChange={handleInputChange}
                  name="companyPOCName"
                  placeholder="Enter POC Name"
                  value={formData.poc}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* POC Email Address */}
              <div className="mb-4">
                <label htmlFor="pocEmail" className="font-semibold block mb-2">
                  POC Email Address
                </label>
                <input
                  type="email"
                  id="pocEmail"
                  onChange={handleInputChange}
                  name="companyPOCEmail"
                  placeholder="Enter POC Email Address"
                  value={formData.pocEmail}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* POC Phone Number */}
              <div className="mb-4">
                <label
                  htmlFor="pocPhoneNumber"
                  className="font-semibold block mb-2"
                >
                  POC Phone Number
                </label>
                <input
                  type="tel"
                  id="pocPhoneNumber"
                  onChange={handleInputChange}
                  name="companyPOCPhoneNumber"
                  placeholder="Enter POC Phone Number"
                  value={formData.pocPhoneNumber}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Status */}
              <div className="mb-4">
                <label className="font-semibold block mb-2" id="active">
                  Status
                </label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      id="active"
                      name="companyStatus" // Add this
                      value={true}
                      onChange={handleStatusChange}
                      className="form-radio h-4 w-4 text-custom-class"
                    />
                    <span className="ml-2">Active</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center" id="inactive">
                    <input
                      type="radio"
                      id="inactive"
                      name="companyStatus" // Add this
                      value={false}
                      onChange={handleStatusChange}
                      className="form-radio h-4 w-4 text-custom-class"
                    />
                    <span className="ml-2">Inactive</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Button Container */}
            <div className="flex justify-center space-x-4">
              {/* Submit Button */}
              {loading ? (
                <button
                  className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-blue-500 hover:bg-blue-600"
                  disabled
                >
                  Please wait ...
                </button>
              ) : (
                <div className="w-2/3">
                  <button
                    className="submit-btn w-5/12 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-blue-500 hover:bg-blue-600"
                    onClick={submitCompanyData}
                  >
                    Submit
                  </button>
                  {/* Cancel Button */}
                  <button className="cancel-btn w-5/12 ml-2 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600">
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Company Display Data Form  */}
        <div className="company-container h-full bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Company Details:</h1>
          </div>
          {/* Placeholder for displaying company details */}
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Company Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-2/12">Company ID</div>
              <div className="w-2/12">Company Name</div>
              <div className="w-2/12">Address</div>
              <div className="w-2/12">POC</div>
              <div className="w-2/12">POC Email</div>
              <div className="w-2/12 lg:ml-20">POC Phone No</div>
              <div className="w-2/12">Status</div>
              <div className="w-2/12">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
            {/* {companies.map((company) => (
              <CompanyRow key={company.companyId} company={company} />
            ))} */}

            {loading ? (
              <div className="flex justify-center items-center h-32">
                loading
              </div>
            ) : company && Array.isArray(company) && company.length > 0 ? (
              company.map((com) => (
                <div>
                  <div className="flex mt-4 items-center">
                    <div className="w-2/12">{com.companyId}</div>
                    <div className="w-2/12">{com.companyName}</div>
                    <div className="w-2/12">{com.companyAddress}</div>
                    <div className="w-2/12">{com.companyPOCName}</div>
                    <div className="w-2/12">{com.companyPOCEmail}</div>
                    <div className="w-2/12 lg:ml-20">
                      {com.companyPOCPhoneNumber}
                    </div>
                    <div className="w-2/12">
                      <div
                        className={`${
                          com.companyStatus ? "bg-green-500" : "bg-red-600"
                        } text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg`}
                      >
                        {com.companyStatus ? "Active" : "Offline"}
                      </div>
                    </div>
                    <div className="w-2/12 flex">
                      <img
                        src={viewImage}
                        alt="View"
                        className="w-7 h-8 cursor-pointer mr-2"
                      />
                      <img
                        src={pencilImage}
                        alt="Edit"
                        className="w-6 h-6 cursor-pointer mr-2"
                      />
                      <img
                        src={trashImage}
                        alt="Delete"
                        className="w-6 h-6 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="line w-full mt-4">
                    <div className="projects-bottom-line w-full"></div>
                  </div>
                </div>
              ))
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
