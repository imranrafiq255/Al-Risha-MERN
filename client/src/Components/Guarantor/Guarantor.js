import React, { useState } from 'react';
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Company/Company.css";

// Import your images
import trashImage from "../../Assets/trash.png";
import viewImage from "../../Assets/view.png";
import pencilImage from "../../Assets/pencil.png";

const Guarantors = () => {
  const [formData, setFormData] = useState({
    guarantorId: "",
    guarantorName: "",
    residentialAddress: "",
    guarantorPhoneNumber: "",
    guarantorOccupation: "",
    jobAddress: "",
    relationWithDA: "",
    status: "", // Defaulting to "inactive" status
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, status: e.target.value });
  };

  // Dummy data for guarantors
  const [guarantors] = useState([
    {
      guarantorId: '1',
      guarantorName: 'Guarantor A',
      residentialAddress: '123 Oak St, Town, Country',
      guarantorPhoneNumber: '+1234567890',
      guarantorOccupation: 'Engineer',
      jobAddress: '456 Maple St, City, Country',
      relationWithDA: 'Friend',
      status: 'Active',
    },
    {
      guarantorId: '2',
      guarantorName: 'Guarantor B',
      residentialAddress: '789 Pine St, City, Country',
      guarantorPhoneNumber: '+9876543210',
      guarantorOccupation: 'Teacher',
      jobAddress: '123 Birch St, City, Country',
      relationWithDA: 'Relative',
      status: 'Inactive',
    },
    // Add more guarantors as needed
  ]);

  const GuarantorRow = ({ guarantor }) => {
    const {
      guarantorId,
      guarantorName,
      residentialAddress,
      guarantorPhoneNumber,
      guarantorOccupation,
      jobAddress,
      relationWithDA,
      status,
    } = guarantor;

    const handleEdit = (guarantorId) => {
      console.log(`Editing guarantor: ${guarantorId}`);
      // Implement edit functionality here
    };

    const handleDelete = (guarantorId) => {
      console.log(`Deleting guarantor: ${guarantorId}`);
      // Implement delete functionality here
    };

    const handleView = (guarantorId) => {
      console.log(`Viewing guarantor details: ${guarantorId}`);
      // Implement view functionality here
    };

    return (
      <>
        <div className="flex mt-4 items-center">
          <div className="w-1/6">{guarantorId}</div>
          <div className="w-2/6">{guarantorName}</div>
          <div className="w-2/6">{residentialAddress}</div>
          <div className="w-1/6">{guarantorPhoneNumber}</div>
          <div className="w-2/6">{guarantorOccupation}</div>
          <div className="w-2/6">{jobAddress}</div>
          <div className="w-2/6">{relationWithDA}</div>
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
              onClick={() => handleView(guarantorId)}
            />
            <img
              src={pencilImage}
              alt="Edit"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleEdit(guarantorId)}
            />
            <img
              src={trashImage}
              alt="Delete"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleDelete(guarantorId)}
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
            <h1 className="text-white text-2xl font-bold">Our Guarantors:</h1>
          </div>
          <div className="projects-list flex flex-col pt-6 px-10">
            {/* Guarantor Form Fields */}
            <div className="form-field-grid mb-1  grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
              {/* Guarantor ID */}
              <div className="mb-4">
                <label htmlFor="guarantorId" className="font-semibold block mb-2">
                  Guarantor ID
                </label>
                <input
                  type="text"
                  id="guarantorId"
                  onChange={handleInputChange}
                  name="guarantorId"
                  placeholder="Enter Guarantor ID"
                  value={formData.guarantorId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Guarantor Name */}
              <div className="mb-4">
                <label htmlFor="guarantorName" className="font-semibold block mb-2">
                  Guarantor Name
                </label>
                <input
                  type="text"
                  id="guarantorName"
                  onChange={handleInputChange}
                  name="guarantorName"
                  placeholder="Enter Guarantor Name"
                  value={formData.guarantorName}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Residential Address */}
              <div className="mb-4">
                <label htmlFor="residentialAddress" className="font-semibold block mb-2">
                  Residential Address
                </label>
                <input
                  type="text"
                  id="residentialAddress"
                  onChange={handleInputChange}
                  name="residentialAddress"
                  placeholder="Enter Residential Address"
                  value={formData.residentialAddress}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Guarantor Phone Number */}
              <div className="mb-4">
                <label htmlFor="guarantorPhoneNumber" className="font-semibold block mb-2">
                  Guarantor Phone Number
                </label>
                <input
                  type="tel"
                  id="guarantorPhoneNumber"
                  onChange={handleInputChange}
                  name="guarantorPhoneNumber"
                  placeholder="Enter Guarantor Phone Number"
                  value={formData.guarantorPhoneNumber}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Guarantor Occupation */}
              <div className="mb-4">
                <label htmlFor="guarantorOccupation" className="font-semibold block mb-2">
                  Guarantor Occupation
                </label>
                <input
                  type="text"
                  id="guarantorOccupation"
                  onChange={handleInputChange}
                  name="guarantorOccupation"
                  placeholder="Enter Guarantor Occupation"
                  value={formData.guarantorOccupation}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Job Address */}
              <div className="mb-4">
                <label htmlFor="jobAddress" className="font-semibold block mb-2">
                  Job Address
                </label>
                <input
                  type="text"
                  id="jobAddress"
                  onChange={handleInputChange}
                  name="jobAddress"
                  placeholder="Enter Job Address"
                  value={formData.jobAddress}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Relation with DA */}
              <div className="mb-4">
                <label htmlFor="relationWithDA" className="font-semibold block mb-2">
                  Relation with DA
                </label>
                <input
                  type="text"
                  id="relationWithDA"
                  onChange={handleInputChange}
                  name="relationWithDA"
                  placeholder="Enter Relation with DA"
                  value={formData.relationWithDA}
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

        {/* Guarantors Display Data Form */}
        <div className="company-container h-1/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Guarantor Details:</h1>
          </div>
          {/* Placeholder for displaying guarantor details */}
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
            {guarantors.map((guarantor) => (
              <GuarantorRow key={guarantor.guarantorId} guarantor={guarantor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guarantors;
