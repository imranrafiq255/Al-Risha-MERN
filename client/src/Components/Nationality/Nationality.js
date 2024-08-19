import React, { useState } from 'react';
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Company/Company.css"; // Ensure your CSS file is properly imported

// Import your images
import trashImage from "../../Assets/trash.png";
import viewImage from "../../Assets/view.png";
import pencilImage from "../../Assets/pencil.png";

const Nationality = () => {
  const [formData, setFormData] = useState({
    nationalityId: "",
    nationality: "", // Added nationality field
    status: "", // Initialize status as blank
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, status: e.target.value });
  };

  const handleAddNationality = () => {
    // Validate form data before adding
    if (formData.nationalityId && formData.nationality) {
      setNationalities([
        ...nationalities,
        {
          nationalityId: formData.nationalityId,
          nationality: formData.nationality,
          status: formData.status
        }
      ]);
      setFormData({
        nationalityId: "",
        nationality: "",
        status: "inactive"
      });
    } else {
      alert("Please fill out all fields (Nationality ID, Nationality).");
    }
  };

  const handleEdit = (nationalityId) => {
    console.log(`Editing nationality: ${nationalityId}`);
    // Implement edit functionality here
  };

  const handleDelete = (nationalityId) => {
    setNationalities(nationalities.filter(n => n.nationalityId !== nationalityId));
    console.log(`Deleting nationality: ${nationalityId}`);
    // Implement delete functionality here
  };

  const handleView = (nationalityId) => {
    console.log(`Viewing nationality details: ${nationalityId}`);
    // Implement view functionality here
  };

  // Dummy data for nationality details
  const [nationalities, setNationalities] = useState([
    {
      nationalityId: '1',
      nationality: 'Dubai',
      status: 'Active',
    },
    {
      nationalityId: '2',
      nationality: 'Pakistani',
      status: 'Inactive',
    },
    {
      nationalityId: '3',
      nationality: 'American',
      status: 'Active',
    },
    // Add more nationalities as needed
  ]);

  const NationalityRow = ({ data }) => {
    const {
      nationalityId,
      nationality,
      status,
    } = data;

    return (
      <>
        <div className="flex mt-4 items-center">
          <div className="w-1/6">{nationalityId}</div>
          <div className="w-1/6">{nationality}</div>
          <div className="w-1/6">
            <div
              className={`${
                status === 'Active' ? 'bg-green-500' : 'bg-red-600'
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
              onClick={() => handleView(nationalityId)}
            />
            <img
              src={pencilImage}
              alt="Edit"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleEdit(nationalityId)}
            />
            <img
              src={trashImage}
              alt="Delete"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleDelete(nationalityId)}
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
        <div className="projects-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Add Nationalities:</h1>
          </div>
          <div className="projects-list flex flex-col pt-6 px-10">
            {/* Nationality Form Fields */}
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
              {/* Nationality ID */}
              <div className="mb-4">
                <label htmlFor="nationalityId" className="font-semibold block mb-2">
                  Nationality ID
                </label>
                <input
                  type="text"
                  id="nationalityId"
                  onChange={handleInputChange}
                  name="nationalityId"
                  placeholder="Enter Nationality ID"
                  value={formData.nationalityId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Nationality */}
              <div className="mb-4">
                <label htmlFor="nationality" className="font-semibold block mb-2">
                  Nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  onChange={handleInputChange}
                  name="nationality"
                  placeholder="Enter Nationality Country"
                  value={formData.nationality}
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
              <button onClick={handleAddNationality} className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-blue-500 hover:bg-blue-600">
                Submit
              </button>
              {/* Cancel Button */}
              <button className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Nationalities Display Data Form  */}
        <div className="company-container h-1/2 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Nationality Details:</h1>
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
            {nationalities.map((nationality) => (
              <NationalityRow key={nationality.nationalityId} data={nationality} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nationality;
