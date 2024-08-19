import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import '../Company/Company.css';

// Import your images
import trashImage from '../../Assets/trash.png';
import viewImage from '../../Assets/view.png';
import pencilImage from '../../Assets/pencil.png';

const Vehicle = () => {
  const [formData, setFormData] = useState({
    carTypeId: '',
    carTypeName: '',
    status: '', // Defaulting to "active" status
  });

  const [vehicleTypes, setVehicleTypes] = useState([
    {
      carTypeId: '1',
      carTypeName: 'Sedan',
      status: 'Active',
    },
    {
      carTypeId: '2',
      carTypeName: '7 Seater Mini Van',
      status: 'Inactive',
    },
    {
      carTypeId: '3',
      carTypeName: 'Bike',
      status: 'Active',
    },
    {
      carTypeId: '4',
      carTypeName: 'Lamborghini',
      status: 'Inactive',
    },
    // Add more vehicle types as needed
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, status: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.carTypeId) {
      // Edit existing vehicle type
      const updatedVehicleTypes = vehicleTypes.map((vehicleType) =>
        vehicleType.carTypeId === formData.carTypeId ? { ...formData } : vehicleType
      );
      setVehicleTypes(updatedVehicleTypes);
    } else {
      // Add new vehicle type
      const newVehicleType = { ...formData, carTypeId: String(vehicleTypes.length + 1) };
      setVehicleTypes([...vehicleTypes, newVehicleType]);
    }
    setFormData({
      carTypeId: '',
      carTypeName: '',
      status: 'active', // Resetting status to active
    });
  };

  const handleEdit = (carTypeId) => {
    const selectedVehicleType = vehicleTypes.find((vehicleType) => vehicleType.carTypeId === carTypeId);
    setFormData({ ...selectedVehicleType });
  };

  const handleDelete = (carTypeId) => {
    const updatedVehicleTypes = vehicleTypes.filter((vehicleType) => vehicleType.carTypeId !== carTypeId);
    setVehicleTypes(updatedVehicleTypes);
  };

  const handleCancel = () => {
    setFormData({
      carTypeId: '',
      carTypeName: '',
      status: 'active', // Resetting status to active
    });
  };

  const VehicleTypeRow = ({ vehicleType }) => {
    const { carTypeId, carTypeName, status } = vehicleType;

    const handleView = (carTypeId) => {
      console.log(`Viewing vehicle type details: ${carTypeId}`);
      // Implement view functionality here
    };

    return (
      <>
        <div className="flex mt-4 items-center">
          <div className="w-1/4">{carTypeId}</div>
          <div className="w-3/4">{carTypeName}</div>
          <div className="w-1/4">
            <div
              className={`${
                status === 'Active' ? 'bg-green-400' : 'bg-red-600'
              } text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg`}
            >
              {status}
            </div>
          </div>
          <div className="w-1/4 flex">
            <img
              src={viewImage}
              alt="View"
              className="w-7 h-8 cursor-pointer mr-2"
              onClick={() => handleView(carTypeId)}
            />
            <img
              src={pencilImage}
              alt="Edit"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleEdit(carTypeId)}
            />
            <img
              src={trashImage}
              alt="Delete"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleDelete(carTypeId)}
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
            <h1 className="text-white text-2xl font-bold">Add Vehicle Types:</h1>
          </div>
          <div className="projects-list flex flex-col pt-6 px-10">
            {/* Vehicle Type Form Fields */}
            <form onSubmit={handleSubmit}>
              <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
                {/* Car Type ID */}
                <div className="mb-4">
                  <label htmlFor="carTypeId" className="font-semibold block mb-2">
                    Car Type ID
                  </label>
                  <input
                    type="text"
                    id="carTypeId"
                    onChange={handleInputChange}
                    name="carTypeId"
                    placeholder="Enter Car Type ID"
                    value={formData.carTypeId}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>

                {/* Car Type Name */}
                <div className="mb-4">
                  <label htmlFor="carTypeName" className="font-semibold block mb-2">
                    Car Type Name
                  </label>
                  <input
                    type="text"
                    id="carTypeName"
                    onChange={handleInputChange}
                    name="carTypeName"
                    placeholder="Enter Car Type Name"
                    value={formData.carTypeName}
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
                        value="Active"
                        checked={formData.status === 'Active'}
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
                        value="Inactive"
                        checked={formData.status === 'Inactive'}
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
                <button
                  type="submit"
                  className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-blue-500 hover:bg-blue-600"
                >
                  Submit
                </button>
                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={handleCancel}
                  className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Vehicle Type Display Data Form */}
        <div className="company-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Vehicle Type Details:</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Vehicle Type Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/4">Car Type ID</div>
              <div className="w-3/4">Car Type Name</div>
              <div className="w-1/4">Status</div>
              <div className="w-1/4">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
            {vehicleTypes.map((vehicleType) => (
              <VehicleTypeRow key={vehicleType.carTypeId} vehicleType={vehicleType} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
