import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import axios from "axios";
const DisplayEmployee = () => {
  const [employeeDetails, setEmployeeDetails] = useState(null);
  useEffect(() => {
    const fetchEmployeeDetailsData = async () => {
      try {
        const response = await axios.get(
          "/api/v1/employee/loadallemployeesdetails"
        );
        setEmployeeDetails(await response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployeeDetailsData();
  }, []);
  console.log(employeeDetails?.emplyeesDetailsData);
  return (
    <>
      <div className="home-container custom-home-background w-screen h-full p-4 flex">
        <SideBar />
        <div className="right-sidebar-container w-10/12">
          <Header />
          <div className="venders-container h-full bg-white mt-14 pb-1 rounded-lg relative shadow-lg">
            <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
              <h1 className="text-white text-2xl font-bold">
                Display Employees Data
              </h1>
            </div>
            {Array.isArray(employeeDetails?.emplyeesDetailsData) &&
            employeeDetails?.emplyeesDetailsData.length > 0
              ? employeeDetails?.emplyeesDetailsData.map((detail) => (
                  <div className="flex gap-4 mt-10">
                    <div className=" mb-20 w-full h-full flex justify-center">
                      <div className="projects-list flex flex-col pt-20 px-10 mb-10 w-4/12">
                        <div className="form-field mb-4">
                          <label
                            htmlFor="employeeID"
                            className="font-semibold block mb-2"
                          >
                            Emp_ID
                          </label>
                          <h1 className="border-custom-class">{detail?._id}</h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="emiratesID"
                            className="font-semibold block mb-2"
                          >
                            Emirates ID
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emEmiratesId}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="firstName"
                            className="font-semibold block mb-2"
                          >
                            First Name
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emFirstName}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="lastName"
                            className="font-semibold block mb-2"
                          >
                            Last Name
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emLastName}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="currentAddress"
                            className="font-semibold block mb-2"
                          >
                            Current Address
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emCurrentAddress}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="nationality"
                            className="font-semibold block mb-2"
                          >
                            Nationality & Date of Birth
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emDOB}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="gender"
                            className="font-semibold block mb-2"
                          >
                            Gender
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emGender}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="alRishaCharges"
                            className="font-semibold block mb-2"
                          >
                            Al Risha Charges
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.alRishaChargesManual}
                          </h1>
                        </div>
                      </div>
                      <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                        <div className="form-field mb-4">
                          <label
                            htmlFor="emailAddress"
                            className="font-semibold block mb-2"
                          >
                            Email Address
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emEmail}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="bankAccount"
                            className="font-semibold block mb-2"
                          >
                            Bank A/c if any
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emBankAccount}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="nativeBankAccount"
                            className="font-semibold block mb-2"
                          >
                            Bank A/c in Native Country if any
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emBankAccountNative}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="licenseNumber"
                            className="font-semibold block mb-2"
                          >
                            Driver’s License#
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emDrivingLicense}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="stateOfIssuance"
                            className="font-semibold block mb-2"
                          >
                            State of Issuance
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emStateOfIssuance}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="licenseIssuance"
                            className="font-semibold block mb-2"
                          >
                            License Issuance
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emLicenseIssueDate}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="licenseExpiry"
                            className="font-semibold block mb-2"
                          >
                            License Expiry
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emLicenseExpiryDate}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="workStartDate"
                            className="font-semibold block mb-2"
                          >
                            Since:
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emSince}
                          </h1>
                        </div>
                      </div>

                      <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                        <div className="form-field mb-4">
                          <label
                            htmlFor="passportNumber"
                            className="font-semibold block mb-2"
                          >
                            Passport Number
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emPassportNo}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="passportExpiry"
                            className="font-semibold block mb-2"
                          >
                            Passport Expiry
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emPassportExpiry}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="phoneNumber"
                            className="font-semibold block mb-2"
                          >
                            Phone#
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emPhone}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="emergencyNumber"
                            className="font-semibold block mb-2"
                          >
                            Emergence #
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emEmergence}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="salary"
                            className="font-semibold block mb-2"
                          >
                            Salary
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.emFixSalary}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="receivableFromCareem"
                            className="font-semibold block mb-2"
                          >
                            Receivable From Careem
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.receiveableFromCareem}
                          </h1>
                        </div>
                        <div className="form-field mb-4">
                          <label
                            htmlFor="payableToVendor"
                            className="font-semibold block mb-2"
                          >
                            Payable to Vendor
                          </label>
                          <h1 className="border-custom-class">
                            {detail?.payableToVender}
                          </h1>
                        </div>
                        <div className="flex justify-end">
                          <button className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : "No data to display"}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayEmployee;
