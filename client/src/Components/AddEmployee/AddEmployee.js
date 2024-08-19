import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
// import Plus from "../../Assets/plus.png";
// import Pluss from "../../Assets/pluss.png";
// import Userr from "../../Assets/userr.png";
import "./AddEmployee.css";
import axios from "axios";
import successMessage from "../ToastMessages/successMessage";
import errorMessage from "../ToastMessages/errorMessage";
import { Toaster } from "react-hot-toast";
const AddEmployee = () => {
  const [image, setImage] = useState(false);
  const [form, setForm] = useState(null);
  const imagePicker = () => {
    document.getElementById("select-image").click();
  };
  const formHanlder = (e) => {
    if (e.target.files) {
      setForm({ ...form, [e.target.name]: e.target.files[0] });
      return;
    }
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const submitEmployeeData = async () => {
    if (!form) {
      console.log("Input fields are missing!");
      errorMessage(
        "Input fields are missing! Please fill in all required fields."
      );
      return;
    }
    try {
      const response = await axios.post(
        "/api/v1/admin/addemployeedetails",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      successMessage(response.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      errorMessage(error.response.data.message);
    }
  };
  return (
    <>
      <div className="home-container custom-home-background relative w-screen h-full p-4 flex">
        <SideBar />
        <div className="right-sidebar-container w-10/12 absolute top-4 right-4">
          <Header />
          <Toaster />
          {/* Employee form fields */}
          <div className="home-container custom-home-background relative w-screen h-full p-4 flex"></div>
          <div className="form-container w-full h-full flex justify-center">
            <div className="projects-list flex flex-col pt-20 px-10 w-4/12"></div>
          </div>

          {/* Company Information Section */}
          <h1 className="text-4xl font-bold text-center">
            Al Risha Delivery Services LLC, UAE
          </h1>
          <h5 className="text-2xl font-bold text-center mt-2">
            Human Resources
          </h5>
          <h5 className="text-lg font-bold text-center mt-4">
            Please be advised that your employment is contingent upon successful
            completion of this background check.
          </h5>
          <h1 className="text-4xl font-bold ml-14 mt-7">
            BACKGROUND VERIFICATION FORM
          </h1>
          {/* Company Information form fields */}
          <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
            <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
              <h1 className="text-white text-2xl font-bold">
                Company Information
              </h1>
            </div>
            {/* Company Information 1st form fields */}
            {/* <div className="form-container w-full h-full flex 6/12">
              <div className="projects-list mb-10 mt-3 flex flex-col pt-20 px-10 w-full">
                <div className="form-field mb-4 flex w-full items-center gap-10">
                  <label
                    htmlFor="companyName"
                    className="font-semibold block mb-2 w-1/12"
                  >
                    Company Name:
                  </label>
                  <select
                    id="companyName"
                    onChange={formHanlder}
                    name={"companyName"}
                    className="input-field px-3 py-2 outline-none border-custom-class w-3/12"
                    style={{ color: "black" }} // Added inline style to set text color to black
                  >
                    <option readOnly>Select Company Name</option>
                    <option value="Al Risha Delivery Services">Al Risha Delivery Services</option>
                  </select>
                </div>
                <div className="form-field mb-4 flex w-full items-center gap-10">
                  <label
                    htmlFor="Vendors"
                    className="font-semibold block mb-2 w-1/12"
                  >
                    Vendors Name:
                  </label>
                  <select
                    id="Vendors"
                    onChange={formHanlder}
                    name={"vendorName"}
                    className="input-field px-3 py-2 outline-none border-custom-class w-3/12"
                    style={{ color: "black" }} // Added inline style to set text color to black
                  >
                    <option readOnly>Select Vendor</option>
                    <option value="Al Najah">Al Najah</option>
                    <option value="Speedoo">Speedoo</option>
                    <option value="Total Team">Total Team</option>
                    <option value="Direct">Direct</option>
                    <option value="ABC">ABC</option>
                    <option value="Dhirwat">Dhirwat</option>
                    <option value="Fixed Time">Fixed Time</option>
                  </select>
                </div>

                <div className="form-field mb-4 flex w-full items-center gap-10">
                  <label
                    htmlFor="Projects"
                    className="font-semibold block mb-2 w-1/12"
                  >
                    Projects:
                  </label>
                  <select
                    id="Projects"
                    onChange={formHanlder}
                    name={"project"}
                    className="input-field px-3 py-2 outline-none border-custom-class w-3/12"
                    style={{ color: "black" }} // Added inline style to set text color to black
                  >
                    <option readOnly>Select Project</option>
                    <option value="Amazon">Amazon</option>
                    <option value="UFG/LULU">UFG/LULU</option>
                    <option value="MacDonald">MacDonald</option>
                    <option value="KFC/ Americana">KFC/ Americana</option>
                    <option value="Al Nahdi Pharmacy">Al Nahdi Pharmacy</option>
                    <option value="Smiles">Smiles</option>
                  </select>
                </div>
              </div>
            </div> */}
            <div className="form-container w-full h-full flex flex-col md:flex-row">
              <div className="projects-list mb-10 mt-3 flex flex-col pt-20 px-10 w-full md:w-6/12">
                <div className="form-field mb-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                  <label
                    htmlFor="companyName"
                    className="font-semibold block mb-2 md:w-1/6 md:text-right" // Adjusted width and text alignment for label
                  >
                    Company Name:
                  </label>
                  <select
                    id="companyName"
                    onChange={formHanlder}
                    name={"companyName"}
                    className="input-field px-3 py-2 outline-none border-custom-class w-full md:w-2/3"
                    style={{ color: "black" }} // Added inline style to set text color to black
                  >
                    <option readOnly>Select Company Name</option>
                    <option value="Al Risha Delivery Services">
                      Al Risha Delivery Services
                    </option>
                  </select>
                </div>
                <div className="form-field mb-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                  <label
                    htmlFor="Vendors"
                    className="font-semibold block mb-2 md:w-1/6 md:text-right" // Adjusted width and text alignment for label
                  >
                    Vendors Name:
                  </label>
                  <select
                    id="Vendors"
                    onChange={formHanlder}
                    name={"vendorName"}
                    className="input-field px-3 py-2 outline-none border-custom-class w-full md:w-2/3"
                    style={{ color: "black" }} // Added inline style to set text color to black
                  >
                    <option readOnly>Select Vendor</option>
                    <option value="Al Najah">Al Najah</option>
                    <option value="Speedoo">Speedoo</option>
                    <option value="Total Team">Total Team</option>
                    <option value="Direct">Direct</option>
                    <option value="ABC">ABC</option>
                    <option value="Dhirwat">Dhirwat</option>
                    <option value="Fixed Time">Fixed Time</option>
                  </select>
                </div>

                <div className="form-field mb-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                  <label
                    htmlFor="Projects"
                    className="font-semibold block mb-2 md:w-1/6 md:text-right" // Adjusted width and text alignment for label
                  >
                    Projects:
                  </label>
                  <select
                    id="Projects"
                    onChange={formHanlder}
                    name={"project"}
                    className="input-field px-3 py-2 outline-none border-custom-class w-full md:w-2/3"
                    style={{ color: "black" }} // Added inline style to set text color to black
                  >
                    <option readOnly>Select Project</option>
                    <option value="Amazon">Amazon</option>
                    <option value="UFG/LULU">UFG/LULU</option>
                    <option value="MacDonald">MacDonald</option>
                    <option value="KFC/ Americana">KFC/ Americana</option>
                    <option value="Al Nahdi Pharmacy">Al Nahdi Pharmacy</option>
                    <option value="Smiles">Smiles</option>
                  </select>
                </div>
                {/* Zones Dropdown */}
                <div className="form-field mb-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                  <label
                    htmlFor="Zones"
                    className="font-semibold block mb-2 md:w-1/6 md:text-right"
                  >
                    Zones:
                  </label>
                  <select
                    id="Zones"
                    onChange={formHanlder}
                    name={"zone"}
                    className="input-field px-3 py-2 outline-none border-custom-class w-full md:w-2/3"
                    style={{ color: "black" }}
                  >
                    <option readonly>Select Zone</option>
                    <option value="Zone 1">Zone 1</option>
                    <option value="Zone 2">Zone 2</option>
                    <option value="Zone 3">Zone 3</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                {/* Store Locations Dropdown */}
                <div className="form-field mb-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                  <label
                    htmlFor="StoreLocations"
                    className="font-semibold block mb-2 md:w-1/6 md:text-right"
                  >
                    Store Locations:
                  </label>
                  <select
                    id="StoreLocations"
                    onChange={formHanlder}
                    name={"storeLocation"}
                    className="input-field px-3 py-2 outline-none border-custom-class w-full md:w-2/3"
                    style={{ color: "black" }}
                  >
                    <option readonly >Select Store Location</option>
                    <option value="Store 1">Store 1</option>
                    <option value="Store 2">Store 2</option>
                    <option value="Store 3">Store 3</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
            </div>
          </div>


          {/* Add Employee 2nd form fields */}
          <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
            <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
              <h1 className="text-white text-2xl font-bold">Add Employee</h1>
            </div>
            {/* Employee 2nd form fields */}
            <div className="form-container w-full h-full flex justify-center flex-wrap">
              <div className="mt-1 absolute top-24 left-30  ">
                <div className="w-40 h-40 relative">
                  <img
                    src={
                      image
                        ? URL.createObjectURL(image)
                        : require("../../Assets/userr.png")
                    }
                    alt=""
                    className="w-full h-full rounded-full"
                    onClick={imagePicker}
                  />
                  {!image && (
                    <img
                      src={require("../../Assets/pluss.png")}
                      alt=""
                      className="w-8 h-8 absolute top-2 right-0"
                      onClick={imagePicker}
                    />
                  )}
                  <input
                    type="file"
                    className="hidden"
                    id="select-image"
                    name="employeeImage"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                      formHanlder(e);
                    }}
                  />
                </div>
              </div>
              {/* Employee 1st column below of 2nd form fields  */}
              <div className="projects-list mb-14 flex flex-col pt-20 px-10 w-full xl:w-6/12 2xl:w-4/12 2xl:mt-52">
                <div className="form-field mb-4">
                  <label
                    htmlFor="employeeID"
                    className="font-semibold block mb-2"
                  >
                    Employee ID
                  </label>
                  <input
                    type="text"
                    id="employeeID"
                    onChange={formHanlder}
                    name={"employeeId"}
                    defaultValue="AR-"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>

                <div className="form-field mb-4">
                  <label
                    htmlFor="firstName"
                    className="font-semibold block mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    onChange={formHanlder}
                    name={"firstName"}
                    placeholder="Enter first name"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class "
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="workStartDate"
                    className="font-semibold block mb-2"
                  >
                    Since
                  </label>
                  <input
                    type="date"
                    id="workStartDate"
                    onChange={formHanlder}
                    name={"sinceDate"}
                    placeholder="Enter work start date"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label htmlFor="dob" className="font-semibold block mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    onChange={formHanlder}
                    name={"dob"}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="passportNumber"
                    className="font-semibold block mb-2"
                  >
                    Passport Number
                  </label>
                  <input
                    type="text"
                    id="passportNumber"
                    onChange={formHanlder}
                    name={"passportNo"}
                    placeholder="Enter passport number"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="licenseNumber"
                    className="font-semibold block mb-2"
                  >
                    Driver’s License#
                  </label>
                  <input
                    type="text"
                    id="licenseNumber"
                    onChange={formHanlder}
                    name={"driverLicense"}
                    placeholder="Enter driver's license number"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>

                <div className="form-field mb-4">
                  <label
                    htmlFor="licenseExpiry"
                    className="font-semibold block mb-2"
                  >
                    License Expiry
                  </label>
                  <input
                    type="date"
                    id="licenseExpiry"
                    onChange={formHanlder}
                    name={"licenseExpiryDate"}
                    placeholder="Enter license expiry date"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="salaryType"
                    className="font-semibold block mb-2"
                  >
                    Salary Type
                  </label>
                  <select
                    id="salaryType"
                    onChange={formHanlder}
                    name={"salaryType"}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option readOnly>Select Salary Type</option>
                    <option value="fixed">Fixed</option>
                    <option value="commission">Commission</option>
                  </select>
                </div>

                <div className="form-field mb-4">
                  <label
                    htmlFor="employeeStatus"
                    className="font-semibold block mb-2"
                  >
                    Employee Status
                  </label>
                  <select
                    id="employeeStatus"
                    onChange={formHanlder}
                    name={"employeeStatus"}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option readOnly>Select Employee Status</option>
                    <option value="Active">Active</option>
                    <option value="InActive">InActive</option>
                    <option value="On Temporary Leave">On Temporary Leave</option>
                    <option value="Left">Left</option>
                    <option value="Resigned">Resigned</option>
                    <option value="Terminated">Terminated</option>
                    <option value="Struck Off">Struck Off</option>
                  </select>
                </div>

                <div className="form-field mb-4">
                  <label
                    htmlFor="laborCardNumber"
                    className="font-semibold block mb-2"
                  >
                    Labor Card Number
                  </label>
                  <input
                    type="text"
                    id="laborCardNumber"
                    onChange={formHanlder}
                    name={"laborCardNo"}
                    placeholder="Enter labor card number"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="emiratesID"
                    className="font-semibold block mb-2"
                  >
                    Emirates ID
                  </label>
                  <input
                    type="text"
                    id="emiratesID"
                    onChange={formHanlder}
                    name={"emiratesId"}
                    placeholder="Enter Emirates ID"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label htmlFor="jobType" className="font-semibold block mb-2">
                    Job Type
                  </label>
                  <select
                    id="jobType"
                    onChange={formHanlder}
                    name={"jobType"}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option readOnly>Select Job Type</option>
                    <option value="bike">Bike</option>
                    <option value="car">Car</option>
                  </select>
                </div>
                {/* Labor Card No */}
                {/* <div className="form-field mb-4">
                  <label
                    htmlFor="laborCardNo"
                    className="font-semibold block mb-2"
                  >
                    Labor Card No:
                  </label>
                  <input
                    type="text"
                    id="laborCardNo"
                    onChange={formHanlder}
                    name="laborCardNo"
                    placeholder="Enter Labor Card No"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div> */}


              </div>
              {/* Employee 2nd column below of 2nd form fields  */}
              <div className="projects-list flex flex-col pt-20 px-10 w-full xl:w-6/12 2xl:w-4/12 2xl:mt-52">
                <div className="form-field mb-4">
                  <label
                    htmlFor="Careem ID"
                    className="font-semibold block mb-2"
                  >
                    Careem ID
                  </label>
                  <input
                    type="text"
                    id="careemid"
                    onChange={formHanlder}
                    name={"careemid"}
                    placeholder="Enter Careem ID"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="lastName"
                    className="font-semibold block mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    onChange={formHanlder}
                    name={"lastName"}
                    placeholder="Enter last name"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class "
                  />
                </div>
                <div className="form-field mb-4">
                  <label htmlFor="gender" className="font-semibold block mb-2">
                    Gender
                  </label>
                  <select
                    id="gender"
                    onChange={formHanlder}
                    name={"gender"}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option readOnly>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="bankAccount"
                    className="font-semibold block mb-2"
                  >
                    Bank A/c if any
                  </label>
                  <input
                    type="text"
                    id="bankAccount"
                    onChange={formHanlder}
                    name={"foreignBankAcc"}
                    placeholder="Enter bank account if any"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="passportIssuance"
                    className="font-semibold block mb-2"
                  >
                    Passport Issuance Date
                  </label>
                  <input
                    type="date"
                    id="passportIssuance"
                    onChange={formHanlder}
                    name={"passportIssueDate"}
                    placeholder="Enter passport issuance"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>

                <div className="form-field mb-4">
                  <label
                    htmlFor="licenseIssuance"
                    className="font-semibold block mb-2"
                  >
                    License Issuance
                  </label>
                  <input
                    type="date"
                    id="licenseIssuance"
                    onChange={formHanlder}
                    name={"licenseIssueDate"}
                    placeholder="Enter license issuance date"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="receivableFromCareem"
                    className="font-semibold block mb-2"
                  >
                    Receivable From Careem
                  </label>
                  <input
                    type="text"
                    id="receivableFromCareem"
                    onChange={formHanlder}
                    name={"receivableFromCareem"}
                    placeholder="Enter receivable amount from Careem"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>

                <div className="form-field mb-4">
                  <label
                    htmlFor="passportReceived"
                    className="font-semibold block mb-2"
                  >
                    Passport Received
                  </label>
                  <select
                    id="passportReceived"
                    onChange={formHanlder}
                    name={"passportReceived"}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option readOnly>Receive Passport?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="nationality"
                    className="font-semibold block mb-2"
                  >
                    Nationality
                  </label>
                  <select
                    id="nationality"
                    onChange={formHanlder}
                    name={"nationality"}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option readOnly>Select Nationality</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="india">India</option>
                    <option value="abudhabi">Abu Dhabi</option>
                    {/* <!-- Add more options as needed --> */}
                  </select>
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="cardIssue"
                    className="font-semibold block mb-2"
                  >
               Select Labor Card Issuance Date:
                  </label>
                  <input
                    type="date"
                    id="cardIssue"
                    onChange={formHanlder}
                    name={"cardIssue"}
                    placeholder="Select card issue date"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="shiftTime"
                    className="font-semibold block mb-2"
                  >
                    Shift Time
                  </label>
                  <select
                    id="shiftTime"
                    onChange={formHanlder}
                    name={"shiftTime"}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option value="">Select Shift Time</option>
                    <option value="09:00 to 01:00 PM">09:00 AM to 01:00 PM</option>
                    <option value="13:00 to 05:00 PM">01:00 PM to 05:00 PM</option>
                    <option value="17:00 to 09:00 AM">05:00 PM to 09:00 AM</option>
                  </select>
                </div>

                <div className="form-field mb-4">
                  <label htmlFor="carType" className="font-semibold block mb-2">
                   Vehicle Type
                  </label>
                  <select
                    id="carType"
                    onChange={formHanlder}
                    name={"carType"}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option readOnly>Select Vehicle Type</option>
                    <option value="sedan">Sedan</option>
                    <option value="mini-van">Mini Van 7 Seater</option>
                    <option value="civic">Civic</option>
                  </select>
                </div>
                {/* Labor Card Issuance Date */}
                {/* <div className="form-field mb-4">
                  <label
                    htmlFor="laborCardIssuanceDate"
                    className="font-semibold block mb-2"
                  >
                    Select Labor Card Issuance Date:
                  </label>
                  <input
                    type="date"
                    id="laborCardIssuanceDate"
                    onChange={formHanlder}
                    name="laborCardIssuanceDate"
                    placeholder="Select Issuance Date"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div> */}
              </div>
              {/* Employee 3rd column below of 2nd form fields  */}
              <div className="projects-list flex flex-col pt-20 px-10 w-full xl:w-6/12 2xl:w-4/12 2xl:mt-52">
                <div className="form-field mb-4">
                  <label htmlFor="doJoin" className="font-semibold block mb-2">
                    Date Of Joining
                  </label>
                  <input
                    type="date"
                    id="doJoin"
                    onChange={formHanlder}
                    name={"joiningDate"}
                    placeholder="Enter do joining"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>

                <div className="form-field mb-4">
                  <label
                    htmlFor="currentAddress"
                    className="font-semibold block mb-2"
                  >
                    Current Address
                  </label>
                  <input
                    type="text"
                    id="currentAddress"
                    onChange={formHanlder}
                    name={"currentAddress"}
                    placeholder="Enter current address"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class "
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="emailAddress"
                    className="font-semibold block mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="emailAddress"
                    onChange={formHanlder}
                    name={"email"}
                    placeholder="Enter email address"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="nativeBankAccount"
                    className="font-semibold block mb-2"
                  >
                    Bank A/c in Native Country if any
                  </label>
                  <input
                    type="text"
                    id="nativeBankAccount"
                    onChange={formHanlder}
                    name={"nativeBankAcc"}
                    placeholder="Enter bank account in native country if any"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="passportExpiry"
                    className="font-semibold block mb-2"
                  >
                    Passport Expiry
                  </label>
                  <input
                    type="date"
                    id="passportExpiry"
                    onChange={formHanlder}
                    name={"passportExpiryDate"}
                    placeholder="Enter passport expiry date"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>

                <div className="form-field mb-4">
                  <label
                    htmlFor="stateOfIssuance"
                    className="font-semibold block mb-2"
                  >
                    State of Issuance
                  </label>
                  <select
                    id="stateOfIssuance"
                    onChange={formHanlder}
                    name={"stateOfIssuance"}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option value="" readOnly>
                      Select state of issuance
                    </option>
                    {/* <!-- Countries --> */}
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    {/* <!-- United States --> */}
                    <optgroup label="United States">
                      <option value="Alabama">Alabama</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Arizona">Arizona</option>
                      {/* <!-- Add more states here --> */}
                    </optgroup>
                    {/* <!-- Add more countries here --> */}
                  </select>
                </div>

                <div className="form-field mb-4">
                  <label
                    htmlFor="alRishaCharges"
                    className="font-semibold block mb-2"
                  >
                    Al Risha Charges
                  </label>
                  <input
                    type="text"
                    id="alRishaCharges"
                    onChange={formHanlder}
                    name={"alRishaCharges"}
                    placeholder="Enter Al Risha Charges"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="payableToVendor"
                    className="font-semibold block mb-2"
                  >
                    Payable to Vendor
                  </label>
                  <input
                    type="text"
                    id="payableToVendor"
                    onChange={formHanlder}
                    name={"payableToVendor"}
                    placeholder="Enter payable amount to Vendor"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="passportReturned"
                    className="font-semibold block mb-2"
                  >
                    Passport Returned
                  </label>
                  <select
                    id="passportReturned"
                    onChange={formHanlder}
                    name={"passportReturned"}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option readOnly>Passport Returned?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="cardExpiry"
                    className="font-semibold block mb-2"
                  >
                    Select Labor Card Expiry Date:
                  </label>
                  <input
                    type="date"
                    id="cardExpiry"
                    onChange={formHanlder}
                    name={"cardExpiry"}
                    placeholder="Select card expiry date"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="font-semibold block mb-2"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    onChange={formHanlder}
                    name={"phoneNumber"}
                    placeholder="Enter phone number"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="emergencyNumber"
                    className="font-semibold block mb-2"
                  >
                  Contact number in Case of Emergency 
                  </label>
                  <input
                    type="text"
                    id="emergencyNumber"
                    onChange={formHanlder}
                    name={"emergenceNo"}
                    placeholder="Enter emergency number"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>

                {/* Labor Card Expiry Date */}
                {/* <div className="form-field mb-4">
                  <label
                    htmlFor="laborCardExpiryDate"
                    className="font-semibold block mb-2"
                  >
                    Select Labor Card Expiry Date:
                  </label>
                  <input
                    type="date"
                    id="laborCardExpiryDate"
                    onChange={formHanlder}
                    name="laborCardExpiryDate"
                    placeholder="Select Expiry Date"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div> */}
                {/* <div className="flex w-full justify-end">
                                    <button className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl">Submit</button>
                                </div> */}
              </div>
            </div>
          </div>
      

          {/* ... Employment History.... */}
          <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
            <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
              <h1 className="text-white text-2xl font-bold">
                Employment History
              </h1>
            </div>
            {/* Employment History */}
            <div className="form-container w-full h-full flex justify-center flex-wrap">
              {/* Employment History 1nd column below of 3rd form fields  */}
              <div className="projects-list mb-10 flex flex-col pt-20 px-10 w-full sm:w-10/12 md:w-6/12 xl:w-4/12 xl:mt-6">
                <div className="form-field mb-4">
                  <label
                    htmlFor="employerName"
                    className="font-semibold block mb-2"
                  >
                    Company (Previous work History):

                  </label>
                  <input
                    type="text"
                    id="employerName"
                    onChange={formHanlder}
                    name={"employerName"}
                    placeholder="Enter company/employer name"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="employmentDates"
                    className="font-semibold block mb-2"
                  >
                    Dates of Employment
                  </label>
                  <input
                    type="date"
                    id="employmentDates"
                    onChange={formHanlder}
                    name={"dateOfEmployment"}
                    placeholder="Enter dates of employment"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
              </div>
              <div className="projects-list flex flex-col pt-20 px-10 w-full sm:w-10/12 md:w-6/12 xl:w-4/12 xl:mt-6">
                <div className="form-field mb-4">
                  <label
                    htmlFor="positionTitle"
                    className="font-semibold block mb-2"
                  >
                    Position/Title
                  </label>
                  <input
                    type="text"
                    id="positionTitle"
                    onChange={formHanlder}
                    name={"employerPosition"}
                    placeholder="Enter position/title"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="employerCityState"
                    className="font-semibold block mb-2"
                  >
                    Employer City & State
                  </label>
                  <input
                    type="text"
                    id="employerCityState"
                    onChange={formHanlder}
                    name={"employerCity"}
                    placeholder="Enter employer city & state"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
              </div>
              <div className="projects-list flex flex-col pt-20 px-10 w-full sm:w-10/12 md:w-6/12 xl:w-4/12 xl:mt-6">
                <div className="form-field mb-4">
                  <label
                    htmlFor="employerContactNumber"
                    className="font-semibold block mb-2"
                  >
                    Employer Contact Number
                  </label>
                  <input
                    type="text"
                    id="employerContactNumber"
                    onChange={formHanlder}
                    name={"employerContact"}
                    placeholder="Enter employer contact number"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="nocStatus"
                    className="font-semibold block mb-2"
                  >
                    NOC Status
                  </label>
                  <select
                    id="nocStatus"
                    onChange={formHanlder}
                    name="employerNOCStatus"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option readonly >Select NOC Status</option>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                </div>

                {/* <button className="submit-btn text-white px-4 py-2 rounded-lg mb-10">Submit</button> */}
                {/* <div className="flex w-full justify-end">
                                    <button className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl">Submit</button>
                                </div> */}
              </div>
            </div>
          </div>

          {/*  Granter Detail/ References */}

          <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
            <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
              <h1 className="text-white text-2xl font-bold">
                Guarantor Detail/ References
              </h1>
            </div>
            {/* Granter Detail/ References */}
            <div className="form-container w-full h-full flex justify-center">
              <div className="projects-list mb-10 flex flex-col pt-20 px-10 w-4/12">
                <div className="form-field mb-4">
                  <label
                    htmlFor="granterName"
                    className="font-semibold block mb-2"
                  >
                    Name Of Guarantor
                  </label>
                  <input
                    type="text"
                    id="granterName"
                    onChange={formHanlder}
                    name={"granterName"}
                    placeholder="Enter name of granter"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="residentialAddress"
                    className="font-semibold block mb-2"
                  >
                    Residential Address
                  </label>
                  <input
                    type="text"
                    id="residentialAddress"
                    onChange={formHanlder}
                    name={"granterResidentialAddress"}
                    placeholder="Enter residential address"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="granterPhone"
                    className="font-semibold block mb-2"
                  >
                    Phone #
                  </label>
                  <input
                    type="text"
                    id="granterPhone"
                    onChange={formHanlder}
                    name={"granterPhone"}
                    placeholder="Enter phone number"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="granterOccupation"
                    className="font-semibold block mb-2"
                  >
                    Occupation
                  </label>
                  <input
                    type="text"
                    id="granterOccupation"
                    onChange={formHanlder}
                    name={"granterOccupation"}
                    placeholder="Enter occupation"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                {/* <div className="form-field mb-4">
                                    <label htmlFor="relationWithDA" className="font-semibold block mb-2">Relation with DA</label>
                                    <input type="text" id="relationWithDA" placeholder="Enter relation with DA" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div> */}
              </div>
              <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                <div className="form-field mb-4">
                  <label
                    htmlFor="jobAddress"
                    className="font-semibold block mb-2"
                  >
                    Job Address
                  </label>
                  <input
                    type="text"
                    id="jobAddress"
                    onChange={formHanlder}
                    name={"granterJobAddress"}
                    placeholder="Enter job address"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="relationWithDA"
                    className="font-semibold block mb-2"
                  >
                    Relation with DA
                  </label>
                  <input
                    type="text"
                    id="relationWithDA"
                    onChange={formHanlder}
                    name={"granterRelationWithDA"}
                    placeholder="Enter relation with DA"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="familyCountry"
                    className="font-semibold block mb-2"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="familyCountry"
                    onChange={formHanlder}
                    name={"granterCountry"}
                    placeholder="Enter country"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="familyHeadName"
                    className="font-semibold block mb-2"
                  >
                    Family Head Name
                  </label>
                  <input
                    type="text"
                    id="familyHeadName"
                    onChange={formHanlder}
                    name={"granterHomeHeadName"}
                    placeholder="Enter family head name"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
              </div>
              <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                <div className="form-field mb-4">
                  <label
                    htmlFor="familyAddress"
                    className="font-semibold block mb-2"
                  >
                    Home Address
                  </label>
                  <input
                    type="text"
                    id="familyAddress"
                    onChange={formHanlder}
                    name={"granterHomeAddress"}
                    placeholder="Enter home address"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="familyPhone"
                    className="font-semibold block mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="familyPhone"
                    onChange={formHanlder}
                    name={"granterPhoneNumber"}
                    placeholder="Enter phone number"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="homeTownCity"
                    className="font-semibold block mb-2"
                  >
                    Home Town City
                  </label>
                  <input
                    type="text"
                    id="homeTownCity"
                    onChange={formHanlder}
                    name={"granterHomeTown"}
                    placeholder="Enter home town city"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="familyHeadOccupation"
                    className="font-semibold block mb-2"
                  >
                    Occupation of Family Head
                  </label>
                  <input
                    type="text"
                    id="familyHeadOccupation"
                    onChange={formHanlder}
                    name={"granterFamilyHeadOccupation"}
                    placeholder="Enter occupation of family head"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                {/* <button className="submit-btn text-white px-4 py-2 rounded-lg mb-10">Submit</button> */}
                {/* <div className="flex w-full justify-end">
                                    <button className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl">Submit</button>
                                </div> */}
              </div>
            </div>
          </div>
          {/* Home Town Information/Verification */}
          <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
            <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
              <h1 className="text-white text-2xl font-bold">
                Home Town Information/Verification
              </h1>
            </div>
            {/* Home Town Information/Verification */}
            <div className="form-container w-full h-full flex justify-center">
              <div className="projects-list mb-10 flex flex-col pt-20 px-10 w-4/12">
                <div className="form-field mb-4">
                  <label
                    htmlFor="familyCountry"
                    className="font-semibold block mb-2"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="familyCountry"
                    onChange={formHanlder}
                    name={"country"}
                    placeholder="Enter country"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="familyHeadName"
                    className="font-semibold block mb-2"
                  >
                    Family Head Name
                  </label>
                  <input
                    type="text"
                    id="familyHeadName"
                    onChange={formHanlder}
                    name={"familyHeadName"}
                    placeholder="Enter family head name"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="applicantSignature"
                    className="font-semibold block mb-2"
                  >
                    Applicant Signature & Date
                  </label>
                  <input
                    type="text"
                    id="applicantSignature"
                    onChange={formHanlder}
                    name={"applicantSignatureAndDate"}
                    placeholder="Enter applicant signature & date"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
              </div>
              <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                <div className="form-field mb-4">
                  <label
                    htmlFor="familyAddress"
                    className="font-semibold block mb-2"
                  >
                    Home Address
                  </label>
                  <input
                    type="text"
                    id="familyAddress"
                    onChange={formHanlder}
                    name={"homeAddress"}
                    placeholder="Enter home address"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="familyPhone"
                    className="font-semibold block mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="familyPhone"
                    onChange={formHanlder}
                    name={"familyHeadPhoneNumber"}
                    placeholder="Enter phone number"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
              </div>
              <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                <div className="form-field mb-4">
                  <label
                    htmlFor="homeTownCity"
                    className="font-semibold block mb-2"
                  >
                    Home Town City
                  </label>
                  <input
                    type="text"
                    id="homeTownCity"
                    onChange={formHanlder}
                    name={"homeTownCity"}
                    placeholder="Enter home town city"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                <div className="form-field mb-4">
                  <label
                    htmlFor="familyHeadOccupation"
                    className="font-semibold block mb-2"
                  >
                    Occupation of Family Head
                  </label>
                  <input
                    type="text"
                    id="familyHeadOccupation"
                    onChange={formHanlder}
                    name={"familyHeadOccupation"}
                    placeholder="Enter occupation of family head"
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>
                {/* <button className="submit-btn text-white px-4 py-2 rounded-lg mb-10">Submit</button> */}
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button
              className="submit-btn w-1/3 text-white px-3 py-2 mb-16 mt-14 rounded-lg text-xl"
              onClick={submitEmployeeData}
            >
              Submit above all information
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
