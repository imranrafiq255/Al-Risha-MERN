import React, { useEffect, useState } from "react";
import axios from "axios";
// import { FaSearch } from "react-icons/fa";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./DisplayEmployee.css";

const DisplayEmployee = () => {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeDetailsData = async () => {
      try {
        const response = await axios.get(
          "/api/v1/employee/loadallemployeesdetails"
        );
        setEmployeeDetails(response?.data?.emplyeesDetailsData);
      } catch (error) {
        setError("Failed to fetch employee details");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployeeDetailsData();
  }, []);
  console.log(employeeDetails);
  const filteredEmployees = employeeDetails.filter(
    (employee) =>
      employee._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (employee.firstName + " " + employee.lastName)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        <div className="employees-container h-full bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-employees-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Employees</h1>
          </div>
          <div className="employees-list flex flex-col pt-20 px-10">
            <div className="search-box-container flex justify-start items-center mb-4">
              <div className="relative w-4/12">
                <input
                  type="text"
                  placeholder="Search Employees..."
                  className="w-full h-12 outline-none header-input-border-custom pl-10 pr-4 search-box"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex mt-4 font-bold">
              <div className="w-1/12">ID</div>
              <div className="w-2/12">NAME</div>
              <div className="w-2/12">DESIGNATION</div>
              <div className="w-3/12">EMAIL</div>
              <div className="w-2/12">MOBILE</div>
              <div className="w-1/12">STATUS</div>
              <div className="w-1/12">ACTIONS</div>
            </div>
            <div className="line w-full mt-4">
              <div className="employee-bottom-line w-full"></div>
            </div>
            {loading ? (
              <div className="text-center mt-10">Loading...</div>
            ) : error ? (
              <div className="text-center mt-10 text-red-500">{error}</div>
            ) : filteredEmployees.length > 0 ? (
              filteredEmployees.map((detail) => (
                <EmployeeRow
                  key={detail._id}
                  id={detail._id}
                  name={detail.firstName + " " + detail.lastName}
                  email={detail.email}
                  mobile={detail.phoneNumber || "N/A"}
                  status={detail.employeeStatus || "Offline"}
                />
              ))
            ) : (
              <div className="text-center mt-10">No data to display</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EmployeeRow = ({ id, name, designation, email, mobile, status }) => {
  const handleEdit = (id) => {
    // Handle edit action for the specific employee
    console.log(`Editing employee: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete action for the specific employee
    console.log(`Deleting employee: ${id}`);
  };

  return (
    <>
      <div className="flex mt-4 items-center">
        <div className="w-1/12">{id}</div>
        <div className="w-2/12 flex items-center">
          <img
            src="../../Assets/user-avatar.png" // Update with the correct path if necessary
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div className="flex flex-col justify-center">
            <h1>{name}</h1>
          </div>
        </div>
        <div className="w-2/12">{designation}</div>
        <div className="w-3/12">{email}</div>
        <div className="w-2/12">{mobile}</div>
        <div className="w-1/12">
          <div
            className={`${
              status === "active" ? "bg-green-600" : "bg-red-600"
            } text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg`}
          >
            {status}
          </div>
        </div>
        <div className="w-1/12 flex">
          <img
            src={require("../../Assets/pencil.png")} // Update with the correct path if necessary
            alt="Edit"
            className="w-6 h-6 cursor-pointer mr-2"
            onClick={() => handleEdit(id)}
          />
          <img
            src={require("../../Assets/trash.png")} // Update with the correct path if necessary
            alt="Delete"
            className="w-6 h-6 cursor-pointer"
            onClick={() => handleDelete(id)}
          />
        </div>
      </div>
      <div className="line w-full mt-4">
        <div className="employee-bottom-line w-full"></div>
      </div>
    </>
  );
};

export default DisplayEmployee;
