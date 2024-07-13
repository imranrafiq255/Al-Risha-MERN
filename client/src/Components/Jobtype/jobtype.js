import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import '../Company/Company.css';

// Import your images
import trashImage from '../../Assets/trash.png';
import viewImage from '../../Assets/view.png';
import pencilImage from '../../Assets/pencil.png';

const JobType = () => {
  const [formData, setFormData] = useState({
    jobTypeId: '',
    jobTypeName: '',
    status: '', // Defaulting to "active" status
  });

  const [jobTypes, setJobTypes] = useState([
    {
      jobTypeId: '1',
      jobTypeName: 'Car',
      status: 'Active',
    },
    {
      jobTypeId: '2',
      jobTypeName: 'Bike',
      status: 'Inactive',
    },
    
    // Add more job types as needed
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
    if (formData.jobTypeId) {
      // Edit existing job type
      const updatedJobTypes = jobTypes.map((jobType) =>
        jobType.jobTypeId === formData.jobTypeId ? { ...formData } : jobType
      );
      setJobTypes(updatedJobTypes);
    } else {
      // Add new job type
      const newJobType = { ...formData, jobTypeId: String(jobTypes.length + 1) };
      setJobTypes([...jobTypes, newJobType]);
    }
    setFormData({
      jobTypeId: '',
      jobTypeName: '',
      status: 'active', // Resetting status to active
    });
  };

  const handleEdit = (jobTypeId) => {
    const selectedJobType = jobTypes.find((jobType) => jobType.jobTypeId === jobTypeId);
    setFormData({ ...selectedJobType });
  };

  const handleDelete = (jobTypeId) => {
    const updatedJobTypes = jobTypes.filter((jobType) => jobType.jobTypeId !== jobTypeId);
    setJobTypes(updatedJobTypes);
  };

  const handleCancel = () => {
    setFormData({
      jobTypeId: '',
      jobTypeName: '',
      status: 'active', // Resetting status to active
    });
  };

  const JobTypeRow = ({ jobType }) => {
    const { jobTypeId, jobTypeName, status } = jobType;

    const handleView = (jobTypeId) => {
      console.log(`Viewing job type details: ${jobTypeId}`);
      // Implement view functionality here
    };

    return (
      <>
        <div className="flex mt-4 items-center">
          <div className="w-1/4">{jobTypeId}</div>
          <div className="w-3/4">{jobTypeName}</div>
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
              onClick={() => handleView(jobTypeId)}
            />
            <img
              src={pencilImage}
              alt="Edit"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleEdit(jobTypeId)}
            />
            <img
              src={trashImage}
              alt="Delete"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleDelete(jobTypeId)}
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
            <h1 className="text-white text-2xl font-bold">Add Job Types:</h1>
          </div>
          <div className="projects-list flex flex-col pt-6 px-10">
            {/* Job Type Form Fields */}
            <form onSubmit={handleSubmit}>
              <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
                {/* Job Type ID */}
                <div className="mb-4">
                  <label htmlFor="jobTypeId" className="font-semibold block mb-2">
                    Job Type ID
                  </label>
                  <input
                    type="text"
                    id="jobTypeId"
                    onChange={handleInputChange}
                    name="jobTypeId"
                    placeholder="Enter Job Type ID"
                    value={formData.jobTypeId}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>

                {/* Job Type Name */}
                <div className="mb-4">
                  <label htmlFor="jobTypeName" className="font-semibold block mb-2">
                    Job Type Name
                  </label>
                  <input
                    type="text"
                    id="jobTypeName"
                    onChange={handleInputChange}
                    name="jobTypeName"
                    placeholder="Enter Job Type Name"
                    value={formData.jobTypeName}
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

        {/* Job Type Display Data Form */}
        <div className="company-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Job Type Details:</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Job Type Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/4">Job Type ID</div>
              <div className="w-3/4">Job Type Name</div>
              <div className="w-1/4">Status</div>
              <div className="w-1/4">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
            {jobTypes.map((jobType) => (
              <JobTypeRow key={jobType.jobTypeId} jobType={jobType} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobType;
