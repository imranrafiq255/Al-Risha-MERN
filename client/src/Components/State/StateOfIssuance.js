import React, { useState } from 'react';
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "../Company/Company.css";

// Import your images
import trashImage from "../../Assets/trash.png";
import viewImage from "../../Assets/view.png";
import pencilImage from "../../Assets/pencil.png";

const StateOfIssuance = () => {
    const [formData, setFormData] = useState({
        stateId: "",
        stateName: "",
        status: "", // No default status selected initially
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleStatusChange = (e) => {
        setFormData({ ...formData, status: e.target.value });
    };

    // Dummy data for states
    const [states] = useState([
        {
            stateId: '1',
            stateName: 'California',
            status: 'Active',
        },
        {
            stateId: '2',
            stateName: 'Texas',
            status: 'Inactive',
        },
        {
            stateId: '3',
            stateName: 'New York',
            status: 'Active',
        },
        {
            stateId: '4',
            stateName: 'Abu Dhabi',
            status: 'Active',
        },
        {
            stateId: '5',
            stateName: 'Riyadh',
            status: 'Active',
        },
        {
            stateId: '6',
            stateName: 'Islamabad',
            status: 'Active',
        },
        // Add more states as needed
    ]);

    const StateRow = ({ state }) => {
        const {
            stateId,
            stateName,
            status,
        } = state;

        const handleEdit = (stateId) => {
            console.log(`Editing state: ${stateId}`);
            // Implement edit functionality here
        };

        const handleDelete = (stateId) => {
            console.log(`Deleting state: ${stateId}`);
            // Implement delete functionality here
        };

        const handleView = (stateId) => {
            console.log(`Viewing state details: ${stateId}`);
            // Implement view functionality here
        };

        return (
            <>
                <div className="flex mt-4 items-center">
                    <div className="w-1/6">{stateId}</div>
                    <div className="w-1/6">{stateName}</div>
                    <div className="w-1/6">
                        <div
                            className={`${status === 'Active' ? 'bg-green-400' : 'bg-red-600'
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
                            onClick={() => handleView(stateId)}
                        />
                        <img
                            src={pencilImage}
                            alt="Edit"
                            className="w-6 h-6 cursor-pointer mr-2"
                            onClick={() => handleEdit(stateId)}
                        />
                        <img
                            src={trashImage}
                            alt="Delete"
                            className="w-6 h-6 cursor-pointer"
                            onClick={() => handleDelete(stateId)}
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
                        <h1 className="text-white text-2xl font-bold">State of Issuance:</h1>
                    </div>
                    <div className="projects-list flex flex-col pt-6 px-10">
                        {/* State Form Fields */}
                        <div className="form-field-grid mb-1  grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
                            {/* State ID */}
                            <div className="mb-4">
                                <label htmlFor="stateId" className="font-semibold block mb-2">
                                    State ID
                                </label>
                                <input
                                    type="text"
                                    id="stateId"
                                    onChange={handleInputChange}
                                    name="stateId"
                                    placeholder="Enter State ID"
                                    value={formData.stateId}
                                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                                />
                            </div>

                            {/* State Name */}
                            <div className="mb-4">
                                <label htmlFor="stateName" className="font-semibold block mb-2">
                                    State Name
                                </label>
                                <input
                                    type="text"
                                    id="stateName"
                                    onChange={handleInputChange}
                                    name="stateName"
                                    placeholder="Enter State Name"
                                    value={formData.stateName}
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

                {/* State Display Data Form */}
                <div className="company-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
                    <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
                        <h1 className="text-white text-2xl font-bold">State Details:</h1>
                    </div>
                    {/* Placeholder for displaying state details */}
                    <div className="projects-list flex flex-col pt-20 px-10">
                        {/* State Headings */}
                        <div className="flex mt-4 font-bold">
                            <div className="w-1/6">State ID</div>
                            <div className="w-1/6">State Name</div>
                            <div className="w-1/6">Status</div>
                            <div className="w-1/6">Action</div>
                        </div>
                        <div className="line w-full mt-4">
                            <div className="company-bottom-line w-full"></div>
                        </div>
                        {states.map((state) => (
                            <StateRow key={state.stateId} state={state} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StateOfIssuance;
