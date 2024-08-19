import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Project/Project.css";

import trashImage from "../../Assets/trash.png";
import viewImage from "../../Assets/view.png";
import pencilImage from "../../Assets/pencil.png";
import axios from "axios";

const Project = () => {
  const [companies, setCompanies] = useState(null);
  const loadAllCompanies = async () => {
    try {
      const response = await axios.get("/api/v1/company/load-all-companies");
      setCompanies(response?.data?.companies);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    loadAllCompanies();
  }, []);
  console.log(companies);
  // State to manage form data
  const [formData, setFormData] = useState({
    projectId: "",
    projectName: "",
    startDate: "",
    companyName: "",
    status: "", // No default status selected initially
  });

  // State to manage selected company name in dropdown
  const [selectedCompanyName, setSelectedCompanyName] = useState(
    "Select Company Name"
  );

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle company name dropdown change
  const handleCompanyNameChange = (e) => {
    setSelectedCompanyName(e.target.value);
    setFormData({ ...formData, companyName: e.target.value });
  };

  // Function to handle status change
  const handleStatusChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, status: value });
  };

  // Dummy data for projects
  const [projects] = useState([
    {
      projectId: "1",
      projectName: "McDonald's",
      startDate: "2020-06-15",
      companyName: "Speedo",
      status: "Inactive",
    },
    {
      projectId: "2",
      projectName: "KFC/ Americana",
      startDate: "2024-06-20",
      companyName: "Careem",
      status: "Active",
    },
    {
      projectId: "3",
      projectName: "Al Nahdi Pharmacy",
      startDate: "2023-09-05",
      companyName: "Direct",
      status: "Active",
    },
    {
      projectId: "4",
      projectName: "Smiles",
      startDate: "2022-05-10",
      companyName: "Dhirwat",
      status: "Inactive",
    },
  ]);

  const ProjectRow = ({ project }) => {
    const { projectId, projectName, startDate, companyName, status } = project;

    const handleEdit = (projectId) => {
      console.log(`Editing project: ${projectId}`);
      // Implement edit functionality here
    };

    const handleDelete = (projectId) => {
      console.log(`Deleting project: ${projectId}`);
      // Implement delete functionality here
    };

    const handleView = (projectId) => {
      console.log(`Viewing project details: ${projectId}`);
      // Implement view functionality here
    };

    return (
      <>
        <div className="flex mt-4 items-center">
          <div className="w-1/6">{projectId}</div>
          <div className="w-2/6">{projectName}</div>
          <div className="w-2/6">{startDate}</div>
          <div className="w-2/6">{companyName}</div>
          <div className="w-1/6">
            <div
              className={`${
                status === "Active" ? "bg-green-500" : "bg-red-600"
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
              onClick={() => handleView(projectId)}
            />
            <img
              src={pencilImage}
              alt="Edit"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleEdit(projectId)}
            />
            <img
              src={trashImage}
              alt="Delete"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleDelete(projectId)}
            />
          </div>
        </div>
        <div className="line w-full mt-4">
          <div className="projects-bottom-line w-full"></div>
        </div>
      </>
    );
  };

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        {/* Project Input form */}
        <div className="projects-container h-1/2 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-projects-bg  absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Our Projects</h1>
          </div>
          {/* Project Form Fields */}
          <div className="projects-list flex flex-col pt-6 px-10">
            {/* Project Form Grid */}
            <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
              {/* Project ID */}
              <div className="mb-4">
                <label htmlFor="projectId" className="font-semibold block mb-2">
                  Project ID
                </label>
                <input
                  type="text"
                  id="projectId"
                  onChange={handleInputChange}
                  name="projectId"
                  placeholder="Enter Project ID"
                  value={formData.projectId}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Project Name */}
              <div className="mb-4">
                <label
                  htmlFor="projectName"
                  className="font-semibold block mb-2"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  onChange={handleInputChange}
                  name="projectName"
                  placeholder="Enter Project Name"
                  value={formData.projectName}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Start Date */}
              <div className="mb-4">
                <label htmlFor="startDate" className="font-semibold block mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  onChange={handleInputChange}
                  name="startDate"
                  placeholder="Select Start Date"
                  value={formData.startDate}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                />
              </div>

              {/* Company Name Dropdown */}
              <div className="mb-4">
                <label
                  htmlFor="companyName"
                  className="font-semibold block mb-2"
                >
                  Company Name
                </label>
                <select
                  id="companyName"
                  onChange={handleCompanyNameChange}
                  name="companyName"
                  value={selectedCompanyName}
                  className="input-field px-3 py-2 w-full outline-none border-custom-class"
                >
                  <option value="Select Company Name">
                    Select Company Name
                  </option>
                  {companies && Array.isArray(companies)
                    ? companies.map((company) => (
                        <option value={company?.companyId}>
                          {company?.companyName}
                        </option>
                      ))
                    : ""}
                </select>
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

        {/* Project Display Form */}
        <div className="projects-container h-2/2 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Projects Details:</h1>
          </div>
          {/* Placeholder for displaying Projects details */}
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Projects Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/6">Project ID</div>
              <div className="w-2/6">Project Name</div>
              <div className="w-2/6">Start Date</div>
              <div className="w-2/6">Company Name</div>
              <div className="w-1/6">Status</div>
              <div className="w-1/6">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="projects-bottom-line w-full"></div>
            </div>
            {/* Render project rows */}
            {projects.map((project) => (
              <ProjectRow key={project.projectId} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
