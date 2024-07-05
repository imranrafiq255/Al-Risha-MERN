import React, { useState } from 'react';
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Company/Company.css";

const Company = () => {
  const [formData, setFormData] = useState({
    companyId: "",
    companyName: "",
    companyAddress: "",
    poc: "",
    pocEmail: "",
    pocPhoneNumber: "",
    status: "active", // Defaulting to "active" status
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, status: e.target.value });
  };

  return (
    <div>
      <div className="home-container custom-home-background w-screen h-full p-4 flex">
        <SideBar />
        <div className="right-sidebar-container w-10/12">
          <Header />
          
          {/* Company Input Form */}
          <div className="projects-container h-3/4 bg-white mt-14 rounded-lg relative shadow-lg">
            <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
              <h1 className="text-white text-2xl font-bold">Our Company:</h1>
            </div>
            <div className="projects-list flex flex-col pt-6 px-10">
              {/* Company Form Fields */}
              <div className="form-field mb-4 mt-10">
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

              <div className="form-field mb-4">
                <label htmlFor="companyName" className="font-semibold block mb-2">
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

              <div className="form-field mb-4">
                <label htmlFor="companyAddress" className="font-semibold block mb-2">
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

              <div className="form-field mb-4">
                <label htmlFor="poc" className="font-semibold block mb-2">
                  POC (Point of Contact)
                </label>
                <input
                  type="text"
                  id="poc"
                  onChange={handleInputChange}
                  name="poc"
                  placeholder="Enter POC Name"
                  value={formData.poc}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              <div className="form-field mb-4">
                <label htmlFor="pocEmail" className="font-semibold block mb-2">
                  POC Email Address
                </label>
                <input
                  type="email"
                  id="pocEmail"
                  onChange={handleInputChange}
                  name="pocEmail"
                  placeholder="Enter POC Email Address"
                  value={formData.pocEmail}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              <div className="form-field mb-4">
                <label htmlFor="pocPhoneNumber" className="font-semibold block mb-2">
                  POC Phone Number
                </label>
                <input
                  type="tel"
                  id="pocPhoneNumber"
                  onChange={handleInputChange}
                  name="pocPhoneNumber"
                  placeholder="Enter POC Phone Number"
                  value={formData.pocPhoneNumber}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              <div className="form-field mb-4">
                <label className="font-semibold block mb-2">Status</label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="active"
                      checked={formData.status === "active"}
                      onChange={handleStatusChange}
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
                      checked={formData.status === "inactive"}
                      onChange={handleStatusChange}
                      className="form-radio h-4 w-4 text-custom-class"
                    />
                    <span className="ml-2">Inactive</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </div>

          {/* Company Display Data Form  */}
          <div className="projects-container h-1/3 bg-white mt-14 rounded-lg relative shadow-lg">
            <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
              <h1 className="text-white text-2xl font-bold">Company Details:</h1>
            </div>
            {/* Placeholder for displaying company details */}
            <div className="projects-list flex flex-col pt-20 px-10">
              {/* Company Headings */}
              <div className="project-item flex mt-4">
                <div className="w-3/12 font-bold">Project ID</div>
                <div className="w-3/12 font-bold">Project Contractor</div>
                <div className="w-3/12 font-bold">Start Date</div>
                <div className="w-3/12 font-bold">Status</div>
              </div>
              <div className="line w-full mt-4">
                <div className="vender-bottom-line w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
