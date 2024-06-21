import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeRow = ({
  id, name, vendor, project, designation, email, mobile, status, careemID,
  emiratesID, doj, jobType, carType, passportNo, laborCardNo, bankAcNo,
  salaryType, alrishaCharges, receivableFromCareem, payableToVendor
}) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit-employee/${id}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/v1/employee/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };

  return (
    <>
      <div className="flex mt-4 items-center">
        <div className="w-1/12">{id}</div>
        <div className="w-2/12">{name}</div>
        <div className="w-2/12">{vendor}</div>
        <div className="w-2/12">{project}</div>
        <div className="w-2/12">{designation}</div>
        <div className="w-3/12">{email}</div>
        <div className="w-2/12">{mobile}</div>
        <div className="w-1/12">{status}</div>
        <div className="w-2/12">{careemID}</div>
        <div className="w-2/12">{emiratesID}</div>
        <div className="w-2/12">{doj}</div>
        <div className="w-2/12">{jobType}</div>
        <div className="w-2/12">{carType}</div>
        <div className="w-2/12">{passportNo}</div>
        <div className="w-2/12">{laborCardNo}</div>
        <div className="w-2/12">{bankAcNo}</div>
        <div className="w-2/12">{salaryType}</div>
        <div className="w-2/12">{alrishaCharges}</div>
        <div className="w-2/12">{receivableFromCareem}</div>
        <div className="w-2/12">{payableToVendor}</div>
        <div className="w-1/12 flex">
          <img
            src="../../Assets/pencil.png" // Update with the correct path if necessary
            alt="Edit"
            className="w-6 h-6 cursor-pointer mr-2"
            onClick={handleEdit}
          />
          <img
            src="../../Assets/trash.png" // Update with the correct path if necessary
            alt="Delete"
            className="w-6 h-6 cursor-pointer"
            onClick={handleDelete}
          />
        </div>
      </div>
      <div className="line w-full mt-4">
        <div className="employee-bottom-line w-full"></div>
      </div>
    </>
  );
};

export default EmployeeRow;
