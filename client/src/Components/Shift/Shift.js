import React, { useState } from 'react';
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import trashImage from "../../Assets/trash.png";
import viewImage from "../../Assets/view.png";
import pencilImage from "../../Assets/pencil.png";

const Shift = () => {
  const [formData, setFormData] = useState({
    shiftId: "",
    shiftTime: "",
    status: "", // Defaulting to "active" status
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, status: e.target.value });
  };

  // Dummy data for shift details
  const [shifts] = useState([
    {
      shiftId: '1',
      shiftTime: '7:00am - 4:00pm',
      status: 'active',
    },
    {
      shiftId: '2',
      shiftTime: '8:00pm - 4:00am',
      status: 'inactive',
    },
    {
      shiftId: '3',
      shiftTime: '5:00am - 6:00am',
      status: 'active',
    },
    // Add more shifts as needed
  ]);

  const ShiftRow = ({ shift }) => {
    const { shiftId, shiftTime, status } = shift;

    const handleEdit = (shiftId) => {
      console.log(`Editing shift: ${shiftId}`);
      // Implement edit functionality here
    };

    const handleDelete = (shiftId) => {
      console.log(`Deleting shift: ${shiftId}`);
      // Implement delete functionality here
    };

    const handleView = (shiftId) => {
      console.log(`Viewing shift details: ${shiftId}`);
      // Implement view functionality here
    };

    return (
      <>
        <div className="flex mt-4 items-center">
          <div className="w-1/6">{shiftId}</div>
          <div className="w-2/6">{shiftTime}</div>
          <div className="w-1/6">
            <div
              className={`${status === 'active' ? 'bg-green-400' : 'bg-red-600'
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
              onClick={() => handleView(shiftId)}
            />
            <img
              src={pencilImage}
              alt="Edit"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleEdit(shiftId)}
            />
            <img
              src={trashImage}
              alt="Delete"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleDelete(shiftId)}
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
        <div className="projects-container h-1/2 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Shift Timings:</h1>
          </div>
          <div className="projects-list flex flex-col pt-6 px-10">
            {/* Shift Form Fields */}
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
              {/* Shift ID */}
              <div className="mb-4">
                <label htmlFor="shiftId" className="font-semibold block mb-2">
                  Shift ID
                </label>
                <input
                  type="text"
                  id="shiftId"
                  onChange={handleInputChange}
                  name="shiftId"
                  placeholder="Enter Shift ID"
                  value={formData.shiftId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Shift Timings */}
              <div className="mb-4">
                <label htmlFor="shiftTime" className="font-semibold block mb-2">
                  Shift Time
                </label>
                <input
                  type="text"
                  id="shiftTime"
                  onChange={handleInputChange}
                  name="shiftTime"
                  placeholder="Enter Shift Time (e.g., 07:00am - 06:00pm)"
                  value={formData.shiftTime}
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
            {shifts.map((shift) => (
              <ShiftRow key={shift.shiftId} shift={shift} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shift;
