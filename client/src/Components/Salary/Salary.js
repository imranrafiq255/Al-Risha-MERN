import React, { useState } from "react";
import "../Salary/Salary.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import trashImage from "../../Assets/trash.png";
import viewImage from "../../Assets/view.png";
import pencilImage from "../../Assets/pencil.png";

const Salary = () => {
  const [salaries, setSalaries] = useState([
    {
      salaryId: "101",
      type: "Fixed",
      status: "Active",
    },
    {
      salaryId: "201",
      type: "Commission based",
      status: "Inactive",
    },
    {
      salaryId: "301",
      type: "Direct Own",
      status: "Active",
    },
    // Add more salaries as needed
  ]);

  const [formData, setFormData] = useState({
    salaryId: "",
    type: "",
    status: "", 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, status: e.target.value });
  };

  const handleSubmit = () => {
    const newSalary = {
      ...formData,
      salaryId: String(Math.floor(Math.random() * 1000)),
    };
    setSalaries([...salaries, newSalary]);
    setFormData({
      salaryId: "",
      type: "",
      status: "Active",
    });
  };

  const handleCancel = () => {
    setFormData({
      salaryId: "",
      type: "",
      status: "Active",
    });
  };

  const handleDelete = (salaryId) => {
    setSalaries(salaries.filter((salary) => salary.salaryId !== salaryId));
    console.log(`Deleting salary: ${salaryId}`);
    // Implement delete functionality here
  };

  const handleView = (salaryId) => {
    console.log(`Viewing salary details: ${salaryId}`);
    // Implement view functionality here
  };

  const handleEdit = (salaryId) => {
    console.log(`Editing salary: ${salaryId}`);
    // Implement edit functionality here
  };

  const SalaryRow = ({ data }) => {
    const { salaryId, type, status } = data;

    return (
      <>
        <div className="project-item flex mt-4 items-center">
          <div className="w-3/12">{salaryId}</div>
          <div className="w-3/12">{type}</div>
          <div className="w-2/12">
            <div
              className={`${
                status === "Active" ? "bg-green-400" : "bg-red-600"
              } text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg`}
            >
              {status}
            </div>
          </div>
          <div className="w-1/12 flex justify-end">
            <img
              src={viewImage}
              alt="View"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleView(salaryId)}
            />
            <img
              src={pencilImage}
              alt="Edit"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleEdit(salaryId)}
            />
            <img
              src={trashImage}
              alt="Delete"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleDelete(salaryId)}
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

        {/* Add New Salary Form */}
        <div className="projects-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-salary-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Add New Salary</h1>
          </div>
          <div className="projects-list flex flex-col pt-6 px-10">
            {/* Form Fields */}
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
              {/* Salary ID */}
              <div className="mb-4">
                <label htmlFor="salaryId" className="font-semibold block mb-2">
                  Salary ID
                </label>
                <input
                  type="text"
                  id="salaryId"
                  onChange={handleInputChange}
                  name="salaryId"
                  value={formData.salaryId}
                  placeholder="Enter Salary ID"
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Salary Type */}
              <div className="mb-4">
                <label htmlFor="salaryType" className="font-semibold block mb-2">
                  Salary Type
                </label>
                <input
                  type="text"
                  id="salaryType"
                  onChange={handleInputChange}
                  name="type"
                  value={formData.type}
                  placeholder="Enter Salary Type"
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Salary Status */}
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

        {/* Salaries Type Section */}
        <div className="projects-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-salary-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Salaries Type</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Salary Headings */}
            <div className="project-item flex mt-4">
              <div className="w-3/12 font-bold">Salary ID</div>
              <div className="w-3/12 font-bold">Type</div>
              <div className="w-2/12 font-bold">Status</div>
              <div className="w-1/12 font-bold">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="salary-bottom-line w-full"></div>
            </div>
            {/* Render Salary Rows */}
            {salaries.map((salary) => (
              <SalaryRow key={salary.salaryId} data={salary} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
