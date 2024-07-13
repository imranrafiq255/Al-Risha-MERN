import React, { useState } from 'react';
import '../Company/Company.css'; // Ensure correct path to your CSS file
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import trashImage from '../../Assets/trash.png';
import viewImage from '../../Assets/view.png';
import pencilImage from '../../Assets/pencil.png';

const NocStatus = () => {
  const [nocs, setNocs] = useState([
    {
      nocId: '101',
      status: 'Yes',
      details: 'Details for NOC 101',
    },
    {
      nocId: '201',
      status: 'No',
      details: 'Details for NOC 201',
    },
    // Add more NOCs as needed
  ]);

  const [formData, setFormData] = useState({
    nocId: '',
    status: '', // Updated to be an empty string initially
    details: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const newNoc = {
      ...formData,
      nocId: String(Math.floor(Math.random() * 1000)),
    };
    setNocs([...nocs, newNoc]);
    setFormData({
      nocId: '',
      status: '',
      details: '',
    });
  };

  const handleCancel = () => {
    setFormData({
      nocId: '',
      status: '',
      details: '',
    });
  };

  const NocRow = ({ data }) => {
    const { nocId, status, details } = data;

    const handleDelete = (nocId) => {
      setNocs(nocs.filter((noc) => noc.nocId !== nocId));
      console.log(`Deleting NOC: ${nocId}`);
      // Implement delete functionality here
    };

    const handleView = (nocId) => {
      console.log(`Viewing NOC details: ${nocId}`);
      // Implement view functionality here
    };

    const handleEdit = (nocId) => {
      console.log(`Editing NOC: ${nocId}`);
      // Implement edit functionality here
    };

    return (
      <>
        <div className="project-item flex mt-4 items-center">
          <div className="w-2/12">{nocId}</div>
          <div className="w-2/12">
            <div
              className={`${
                status === 'Yes' ? 'bg-green-400' : 'bg-red-600'
              } text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg`}
            >
              {status}
            </div>
          </div>
          <div className="w-3/12">{details}</div>
          <div className="w-3/12 flex justify-center">
            <img
              src={viewImage}
              alt="View"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleView(nocId)}
            />
            <img
              src={pencilImage}
              alt="Edit"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleEdit(nocId)}
            />
            <img
              src={trashImage}
              alt="Delete"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleDelete(nocId)}
            />
          </div>
        </div>
        <div className="line w-full mt-4">
          <div className="vender-bottom-line w-full"></div>
        </div>
      </>
    );
  };

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />

        {/* Add New NOC Form */}
        <div className="projects-container h-2/3 bg-white mt-12 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-salary-bg absolute top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Add New NOC Status:</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Form Fields */}
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
              {/* NOC ID */}
              <div className="mb-4">
                <label htmlFor="nocId" className="font-semibold block mb-2">
                  NOC ID
                </label>
                <input
                  type="text"
                  id="nocId"
                  onChange={handleInputChange}
                  name="nocId"
                  value={formData.nocId}
                  placeholder="Enter NOC ID"
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* NOC Status */}
              <div className="mb-4">
                <label htmlFor="status" className="font-semibold block mb-2">
                  NOC Status
                </label>
                <input
                  type="text"
                  id="status"
                  onChange={handleInputChange}
                  name="status"
                  value={formData.status}
                  placeholder="Enter  NOC Status"
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Details */}
              <div className="mb-4 col-span-2">
                <label htmlFor="details" className="font-semibold block mb-2">
                  Details
                </label>
                <textarea
                  id="details"
                  onChange={handleInputChange}
                  name="details"
                  value={formData.details}
                  placeholder="Enter Details"
                  className="input-field px-3 py-2 w-full h-20 outline-none border-custom-class resize-none"
                />
              </div>
            </div>

            {/* Button Container */}
            <div className="flex justify-center space-x-4">
              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-blue-500 hover:bg-blue-600"
              >
                Submit
              </button>
              {/* Cancel Button */}
              <button
                onClick={handleCancel}
                className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* NOC Type Section */}
        <div className="projects-container h-1/2 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-salary-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">NOC Status Details:</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* NOC Headings */}
            <div className="project-item flex mt-4">
              <div className="w-2/12 font-bold">NOC ID</div>
              <div className="w-2/12 font-bold">NOC Status</div>
              <div className="w-4/12 font-bold">Details</div>
              <div className="w-3/12 font-bold">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="salary-bottom-line w-full"></div>
            </div>
            {/* Render NOC Rows */}
            {nocs.map((noc) => (
              <NocRow key={noc.nocId} data={noc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NocStatus;
