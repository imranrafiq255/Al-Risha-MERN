import React, { useState } from 'react';
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Company/Company.css";

// Import your images
import trashImage from "../../Assets/trash.png";
import viewImage from "../../Assets/view.png";
import pencilImage from "../../Assets/pencil.png";

const Gendors = () => {
  const [formData, setFormData] = useState({
    genderId: "",
    gender: "", // Adding gender field
    status: "", // Defaulting to "inactive" status
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, status: e.target.value });
  };

  const handleAddGender = () => {
    // Validate form data before adding
    if (formData.genderId && formData.gender) {
      setGenders([
        ...genders,
        { genderId: formData.genderId, gender: formData.gender, status: formData.status }
      ]);
      setFormData({ genderId: "", gender: "", status: "inactive" });
    } else {
      alert("Please fill out Gender ID and Gender fields.");
    }
  };

  const handleEdit = (genderId) => {
    console.log(`Editing gender: ${genderId}`);
    // Implement edit functionality here
  };

  const handleDelete = (genderId) => {
    setGenders(genders.filter(gender => gender.genderId !== genderId));
    console.log(`Deleting gender: ${genderId}`);
    // Implement delete functionality here
  };

  const handleView = (genderId) => {
    console.log(`Viewing gender details: ${genderId}`);
    // Implement view functionality here
  };

  const GenderRow = ({ data }) => {
    const { genderId, gender, status } = data;

    return (
      <>
        <div className="flex mt-4 items-center">
          <div className="w-1/6">{genderId}</div>
          <div className="w-1/6">{gender}</div>
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
              onClick={() => handleView(genderId)}
            />
            <img
              src={pencilImage}
              alt="Edit"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleEdit(genderId)}
            />
            <img
              src={trashImage}
              alt="Delete"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleDelete(genderId)}
            />
          </div>
        </div>
        <div className="line w-full mt-4">
          <div className="company-bottom-line w-full"></div>
        </div>
      </>
    );
  };

  // Dummy data for genders
  const [genders, setGenders] = useState([
    {
      genderId: '1',
      gender: 'Male',
      status: 'Active',
    },
    {
      genderId: '2',
      gender: 'Female',
      status: 'Inactive',
    },
    {
      genderId: '3',
      gender: 'Other',
      status: 'Active',
    },
    // Add more genders as needed
  ]);

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        <div className="projects-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Our Genders:</h1>
          </div>
          <div className="projects-list flex flex-col pt-6 px-10">
            {/* Gender Form Fields */}
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
              {/* Gender ID */}
              <div className="mb-4">
                <label htmlFor="genderId" className="font-semibold block mb-2">
                  Gender ID
                </label>
                <input
                  type="text"
                  id="genderId"
                  onChange={handleInputChange}
                  name="genderId"
                  placeholder="Enter Gender ID"
                  value={formData.genderId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Gender Text Input */}
              <div className="mb-4">
                <label htmlFor="gender" className="font-semibold block mb-2">
                  Gender
                </label>
                <input
                  type="text"
                  id="gender"
                  onChange={handleInputChange}
                  name="gender"
                  placeholder="Enter Gender"
                  value={formData.gender}
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
              <button onClick={handleAddGender} className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-green-500 hover:bg-green-600">
                Submit
              </button>
              {/* Cancel Button */}
              <button className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Genders Display Data Form */}
        <div className="company-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Gender Details:</h1>
          </div>
          {/* Placeholder for displaying gender details */}
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Gender Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/6">Gender ID</div>
              <div className="w-1/6">Gender</div>
              <div className="w-1/6">Status</div>
              <div className="w-1/6">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
            {genders.map((gender) => (
              <GenderRow key={gender.genderId} data={gender} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gendors;
