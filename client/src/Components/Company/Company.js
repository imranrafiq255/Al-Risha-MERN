import React, { useState } from 'react';
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Company/Company.css";

// Import your images
import trashImage from "../../Assets/trash.png";
import viewImage from "../../Assets/view.png";
import pencilImage from "../../Assets/pencil.png";

const Company = () => {
  const [formData, setFormData] = useState({
    companyId: "",
    companyName: "",
    companyAddress: "",
    poc: "",
    pocEmail: "",
    pocPhoneNumber: "",
    status: "", // Defaulting no "active" status
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, status: e.target.value });
  };

  // Dummy data for company details
  const [companies] = useState([
    {
      companyId: '1',
      companyName: 'Careem',
      companyAddress: '123 Main St, City, Dubai',
      poc: 'Akram Sindhu',
      pocEmail: 'Akram001@gmail.com',
      pocPhoneNumber: '+1234567890',
      status: 'Active',
    },
    {
      companyId: '2',
      companyName: 'Company B',
      companyAddress: '456 Broad St, Town, Country',
      poc: 'Ahmed',
      pocEmail: 'Ahmed127@gmail.com',
      pocPhoneNumber: '+9876543210',
      status: 'Inactive',
    },
    // Add more companies as needed
  ]);

  const CompanyRow = ({ company }) => {
    const {
      companyId,
      companyName,
      companyAddress,
      poc,
      pocEmail,
      pocPhoneNumber,
      status,
    } = company;

    const handleEdit = (companyId) => {
      console.log(`Editing company: ${companyId}`);
      // Implement edit functionality here
    };

    const handleDelete = (companyId) => {
      console.log(`Deleting company: ${companyId}`);
      // Implement delete functionality here
    };

    const handleView = (companyId) => {
      console.log(`Viewing company details: ${companyId}`);
      // Implement view functionality here
    };

    return (
      <>
        <div className="flex mt-4 items-center">
          <div className="w-1/6">{companyId}</div>
          <div className="w-2/6">{companyName}</div>
          <div className="w-2/6">{companyAddress}</div>
          <div className="w-1/6">{poc}</div>
          <div className="w-2/6">{pocEmail}</div>
          <div className="w-2/6">{pocPhoneNumber}</div>
          <div className="w-1/6">
            <div
              className={`${
                status === 'Active' ? 'bg-green-400' : 'bg-red-600'
              } text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg`}
            >
              {status}
            </div>
          </div>
          <div className="w-1/6 flex">
            <img
              src={viewImage}
              alt="View"
              className="w-7 h-8 cursor-pointer mr-2"
              onClick={() => handleView(companyId)}
            />
            <img
              src={pencilImage}
              alt="Edit"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleEdit(companyId)}
            />
            <img
              src={trashImage}
              alt="Delete"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleDelete(companyId)}
            />
          </div>
        </div>
        <div className="line w-full mt-4">
          <div className="company-bottom-line w-full"></div>
        </div>
      </>
    );
  };

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
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

              {/* Company Address */}
              <div className="mb-4">
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

              {/* POC (Point of Contact) */}
              <div className="mb-4">
                <label htmlFor="poc" className="font-semibold block mb-2">
                  POC (Person of Contact)
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

              {/* POC Email Address */}
              <div className="mb-4">
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

              {/* POC Phone Number */}
              <div className="mb-4">
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

              {/* Status */}
              <div className="mb-4">
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
            </div>

            {/* Button Container */}
            <div className="flex justify-center space-x-4">
              {/* Submit Button */}
              <button className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-blue-500 hover:bg-blue-600">
                Submit
              </button>
              {/* Cancel Button */}
              <button className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Company Display Data Form  */}
        <div className="company-container h-1/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Company Details:</h1>
          </div>
          {/* Placeholder for displaying company details */}
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Company Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/6">Company ID</div>
              <div className="w-2/6">Company Name</div>
              <div className="w-2/6">Address</div>
              <div className="w-1/6">POC</div>
              <div className="w-2/6">POC Email</div>
              <div className="w-2/6">POC Phone No</div>
              <div className="w-1/6">Status</div>
              <div className="w-1/6">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
            {companies.map((company) => (
              <CompanyRow key={company.companyId} company={company} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
