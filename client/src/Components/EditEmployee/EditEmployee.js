import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({
    emFirstName: "",
    emLastName: "",
    vendor: "",
    project: "",
    emDesignation: "",
    emEmail: "",
    emMobile: "",
    status: "",
    careemID: "",
    emiratesID: "",
    doj: "",
    jobType: "",
    carType: "",
    passportNo: "",
    laborCardNo: "",
    bankAcNo: "",
    salaryType: "",
    alrishaCharges: "",
    receivableFromCareem: "",
    payableToVendor: "",
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(`/api/v1/admin/${id}`);
        setEmployeeData(response.data);
      } catch (error) {
        console.error("Error fetching employee data", error);
      }
    };

    fetchEmployeeData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/v1/admin/${id}`, employeeData);
      navigate("/displayemployee");
    } catch (error) {
      console.error("Error updating employee data", error);
    }
  };

  return (
    <div>
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="emFirstName"
            value={employeeData.emFirstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="emLastName"
            value={employeeData.emLastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Vendor:</label>
          <input
            type="text"
            name="vendor"
            value={employeeData.vendor}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Project:</label>
          <input
            type="text"
            name="project"
            value={employeeData.project}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Designation:</label>
          <input
            type="text"
            name="emDesignation"
            value={employeeData.emDesignation}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="emEmail"
            value={employeeData.emEmail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            type="text"
            name="emMobile"
            value={employeeData.emMobile}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={employeeData.status}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Careem ID:</label>
          <input
            type="text"
            name="careemID"
            value={employeeData.careemID}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Emirates ID:</label>
          <input
            type="text"
            name="emiratesID"
            value={employeeData.emiratesID}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date of Joining:</label>
          <input
            type="date"
            name="doj"
            value={employeeData.doj}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Job Type:</label>
          <input
            type="text"
            name="jobType"
            value={employeeData.jobType}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Car Type:</label>
          <input
            type="text"
            name="carType"
            value={employeeData.carType}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Passport No:</label>
          <input
            type="text"
            name="passportNo"
            value={employeeData.passportNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Labor Card No:</label>
          <input
            type="text"
            name="laborCardNo"
            value={employeeData.laborCardNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Bank AC No:</label>
          <input
            type="text"
            name="bankAcNo"
            value={employeeData.bankAcNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Salary Type:</label>
          <input
            type="text"
            name="salaryType"
            value={employeeData.salaryType}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Alrisha Charges:</label>
          <input
            type="text"
            name="alrishaCharges"
            value={employeeData.alrishaCharges}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Receivable from Careem:</label>
          <input
            type="text"
            name="receivableFromCareem"
            value={employeeData.receivableFromCareem}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Payable to Vendor:</label>
          <input
            type="text"
            name="payableToVendor"
            value={employeeData.payableToVendor}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditEmployee;
