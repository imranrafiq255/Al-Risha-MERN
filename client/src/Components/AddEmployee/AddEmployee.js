import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import Plus from "../../Assets/plus.png";
import Pluss from "../../Assets/pluss.png";
import Userr from "../../Assets/userr.png";
import "./AddEmployee.css"
const AddEmployee = () => {
    const [image, setImage] = useState(false)
    const imagePicker = () => {
        document.getElementById("select-image").click();

    }
    return (
        <>
            <div className="home-container custom-home-background relative w-screen h-full p-4 flex">
                <SideBar />
                <div className="right-sidebar-container w-10/12 absolute top-4 right-4">
                    <Header />

                    {/* Employee form fields */}
                    <div className="home-container custom-home-background relative w-screen h-full p-4 flex">
                    </div>
                    <div className="form-container w-full h-full flex justify-center">
                        <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                        </div>
                    </div>

                    {/* Company Information Section */}
                    <h1 className="text-4xl font-bold text-center">Al Risha Delivery Services LLC, UAE</h1>
                    <h5 className="text-2xl font-bold text-center mt-2">Human Resources</h5>
                    <h5 className="text-lg font-bold text-center mt-4">Please be advised that your employment is contingent upon
                        successful completion of this background check.</h5>
                    <h1 className="text-3xl font-bold ml-14 mt-7">BACKGROUND VERIFICATION FORM</h1>
                    {/* Company Information form fields */}
                    <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
                        <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
                            <h1 className="text-white text-2xl font-bold">Company Information</h1>
                        </div>
                        {/* Employee form fields */}
                        <div className="form-container w-full h-full flex 6/12">
                            <div className="projects-list flex flex-col pt-20 px-10 w-full">
                                <div className="form-field mb-4 flex w-full items-center gap-10">
                                    <label htmlFor="companyName" className="font-semibold block mb-2 w-1/12">
                                        Company Name:
                                    </label>
                                    <select
                                        id="companyName"
                                        className="input-field px-3 py-2 outline-none border-custom-class w-3/12"
                                        style={{ color: 'black' }} // Added inline style to set text color to black
                                    >
                                        <option value="Al-Risha">Al-Najaf</option>
                                        <option value="Al-Risha">Al-Risha</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>

                                <div className="form-field mb-4 flex w-full items-center gap-10">
                                    <label htmlFor="Vendors" className="font-semibold block mb-2 w-1/12">
                                        Vendors Name:
                                    </label>
                                    <select
                                        id="Vendors"
                                        className="input-field px-3 py-2 outline-none border-custom-class w-3/12"
                                        style={{ color: 'black' }} // Added inline style to set text color to black
                                    >
                                        <option value="Al-Najaf">Al-Najaf</option>
                                        <option value="Speedo">Speedo</option>
                                        <option value="Fix-Time">Fix-Time</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>


                                <div className="form-field mb-4 flex w-full items-center gap-10">
                                    <label htmlFor="Projects" className="font-semibold block mb-2 w-1/12">
                                        Projects:
                                    </label>
                                    <select
                                        id="Projects"
                                        className="input-field px-3 py-2 outline-none border-custom-class w-3/12"
                                        style={{ color: 'black' }} // Added inline style to set text color to black
                                    >
                                        <option value="McDonald's">McDonald's</option>
                                        <option value="American Bar & Grill">American Bar & Grill</option>
                                        <option value="KFC">KFC</option>
                                        <option value="Careem Foods">Careem Foods</option>
                                        {/* Add more vendor options as needed */}
                                    </select>
                                </div>
                                <div className="flex w-[30%] justify-end ml-20">
                                    <button className="submit-btn w-1/3 text-white py-2 mb-10 mt-4 rounded-lg text-xl">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add Employee form fields */}
                    <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
                        <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
                            <h1 className="text-white text-2xl font-bold">Add Employee</h1>
                        </div>
                        {/* Employee form fields */}
                        <div className="form-container w-full h-full flex justify-center">
                            <div className="mt-1 absolute top-24 left-30  ">
                                <div className="w-40 h-40 relative">
                                    <img src={image ? URL.createObjectURL(image) : require("../../Assets/userr.png")} alt="" className="w-full h-full rounded-full" onClick={imagePicker} />
                                    {
                                        !image && <img src={require("../../Assets/pluss.png")} alt="" className="w-8 h-8 absolute top-2 right-0" onClick={imagePicker} />
                                    }
                                    <input type="file" className="hidden" id="select-image" onChange={e => setImage(e.target.files[0])} />
                                </div>
                            </div>
                            <div className="projects-list flex flex-col pt-20 px-10 w-4/12 mt-52">
                                <div className="form-field mb-4">
                                    <label htmlFor="employeeID" className="font-semibold block mb-2">Emp_ID</label>
                                    <input type="text" id="employeeID" placeholder="System Generated" className="input-field px-3 py-2 w-full outline-none border-custom-class" readOnly />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="firstName" className="font-semibold block mb-2">First Name</label>
                                    <input type="text" id="firstName" placeholder="Enter first name" className="input-field px-3 py-2 w-full outline-none border-custom-class " />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="nationality" className="font-semibold block mb-2">Nationality</label>
                                    <select id="nationality" className="input-field px-3 py-2 w-full outline-none border-custom-class">

                                        <option value="pakistan">Pakistan</option>
                                        <option value="india">India</option>
                                        <option value="abudhabi">Abu Dhabi</option>
                                        {/* <!-- Add more options as needed --> */}
                                    </select>
                                </div>

                                <div className="form-field mb-4">
                                    <label htmlFor="dob" className="font-semibold block mb-2">Date of Birth</label>
                                    <input type="date" id="dob" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="passportNumber" className="font-semibold block mb-2">Passport Number</label>
                                    <input type="text" id="passportNumber" placeholder="Enter passport number" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="licenseNumber" className="font-semibold block mb-2">Driver’s License#</label>
                                    <input type="text" id="licenseNumber" placeholder="Enter driver's license number" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>

                                <div className="form-field mb-4">
                                    <label htmlFor="licenseExpiry" className="font-semibold block mb-2">License Expiry</label>
                                    <input type="text" id="licenseExpiry" placeholder="Enter license expiry date" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="salaryType" className="font-semibold block mb-2">Salary Type</label>
                                    <select id="salaryType" className="input-field px-3 py-2 w-full outline-none border-custom-class">
                                        <option value="fixed">Fixed</option>
                                        <option value="commission">Commission</option>
                                    </select>
                                </div>

                                <div className="form-field mb-4">
                                    <label htmlFor="employeeStatus" className="font-semibold block mb-2">Employee Status</label>
                                    <select id="employeeStatus" className="input-field px-3 py-2 w-full outline-none border-custom-class">
                                        <option value="active">Active</option>
                                        <option value="onLeave">On Leave</option>
                                        <option value="leftCompany">Left Company</option>
                                    </select>
                                </div>

                                <div className="form-field mb-4">
                                    <label htmlFor="laborCardNumber" className="font-semibold block mb-2">Labor Card Number</label>
                                    <input type="text" id="laborCardNumber" placeholder="Enter labor card number" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="emiratesIdFormat" className="font-semibold block mb-2">Emirates ID Format</label>
                                    <input type="text" id="emiratesIdFormat" placeholder="Enter Emirates ID format" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="jobType" className="font-semibold block mb-2">Job Type</label>
                                    <select id="jobType" className="input-field px-3 py-2 w-full outline-none border-custom-class">
                                        <option value="bike">Bike</option>
                                        <option value="car">Car</option>
                                    </select>
                                </div>

                            </div>
                            <div className="projects-list flex flex-col pt-20 px-10 w-4/12 mt-52">
                                <div className="form-field mb-4">
                                    <label htmlFor="emiratesID" className="font-semibold block mb-2">Emirates ID</label>
                                    <input type="text" id="emiratesID" placeholder="Enter Emirates ID" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="lastName" className="font-semibold block mb-2">Last Name</label>
                                    <input type="text" id="lastName" placeholder="Enter last name" className="input-field px-3 py-2 w-full outline-none border-custom-class " />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="gender" className="font-semibold block mb-2">Gender</label>
                                    <select id="gender" className="input-field px-3 py-2 w-full outline-none border-custom-class">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="bankAccount" className="font-semibold block mb-2">Bank A/c if any</label>
                                    <input type="text" id="bankAccount" placeholder="Enter bank account if any" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="passportIssuance" className="font-semibold block mb-2">Passport Issuance Date</label>
                                    <input type="date" id="passportIssuance" placeholder="Enter passport issuance" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>

                                <div className="form-field mb-4">
                                    <label htmlFor="licenseIssuance" className="font-semibold block mb-2">License Issuance</label>
                                    <input type="date" id="licenseIssuance" placeholder="Enter license issuance date" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>

                                <div className="form-field mb-4">
                                    <label htmlFor="workStartDate" className="font-semibold block mb-2">Since:</label>
                                    <input type="date" id="workStartDate" placeholder="Enter work start date" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>

                                <div className="form-field mb-4">
                                    <label htmlFor="receivableFromCareem" className="font-semibold block mb-2">Receivable From Careem</label>
                                    <input type="text" id="receivableFromCareem" placeholder="Enter receivable amount from Careem" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>

                                <div className="form-field mb-4">
                                    <label htmlFor="passportReceived" className="font-semibold block mb-2">Passport Received</label>
                                    <select id="passportReceived" className="input-field px-3 py-2 w-full outline-none border-custom-class">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="cardIssue" className="font-semibold block mb-2">Card Issue</label>
                                    <input type="date" id="cardIssue" placeholder="Select card issue date" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="shiftTime" className="font-semibold block mb-2">Shift Time</label>
                                    <input type="time" id="shiftTime" placeholder="Select shift time" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="carType" className="font-semibold block mb-2">Car Type</label>
                                    <select id="carType" className="input-field px-3 py-2 w-full outline-none border-custom-class">
                                        <option value="sedan">Sedan</option>
                                        <option value="mini-van">Mini Van 7 Seater</option>
                                        <option value="civic">Civic</option>
                                    </select>
                                </div>

                            </div>
                            <div className="projects-list flex flex-col pt-20 px-10 w-4/12 mt-52">
                                <div className="form-field mb-4">
                                    <label htmlFor="doJoin" className="font-semibold block mb-2">Do Join</label>
                                    <input type="date" id="doJoin" placeholder="Enter do join" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>

                                <div className="form-field mb-4">
                                    <label htmlFor="currentAddress" className="font-semibold block mb-2">Current Address</label>
                                    <input type="text" id="currentAddress" placeholder="Enter current address" className="input-field px-3 py-2 w-full outline-none border-custom-class " />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="emailAddress" className="font-semibold block mb-2">Email Address</label>
                                    <input type="text" id="emailAddress" placeholder="Enter email address" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="nativeBankAccount" className="font-semibold block mb-2">Bank A/c in Native Country if any</label>
                                    <input type="text" id="nativeBankAccount" placeholder="Enter bank account in native country if any" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="passportExpiry" className="font-semibold block mb-2">Passport Expiry</label>
                                    <input type="date" id="passportExpiry" placeholder="Enter passport expiry date" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>

                                <div className="form-field mb-4">
                                    <label htmlFor="stateOfIssuance" className="font-semibold block mb-2">State of Issuance</label>
                                    <select id="stateOfIssuance" className="input-field px-3 py-2 w-full outline-none border-custom-class">
                                        <option value="" disabled selected>Select state of issuance</option>
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
                                    <label htmlFor="alRishaCharges" className="font-semibold block mb-2">Al Risha Charges</label>
                                    <input type="text" id="alRishaCharges" placeholder="Enter Al Risha Charges" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="payableToVendor" className="font-semibold block mb-2">Payable to Vendor</label>
                                    <input type="text" id="payableToVendor" placeholder="Enter payable amount to Vendor" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="passportReturned" className="font-semibold block mb-2">Passport Returned</label>
                                    <select id="passportReturned" className="input-field px-3 py-2 w-full outline-none border-custom-class">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="cardExpiry" className="font-semibold block mb-2">Card Expiry</label>
                                    <input type="date" id="cardExpiry" placeholder="Select card expiry date" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="phoneNumber" className="font-semibold block mb-2">Phone#</label>
                                    <input type="text" id="phoneNumber" placeholder="Enter phone number" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="emergencyNumber" className="font-semibold block mb-2">Emergence #</label>
                                    <input type="text" id="emergencyNumber" placeholder="Enter emergency number" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="flex w-full justify-end">
                                    <button className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
                        <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
                            <h1 className="text-white text-2xl font-bold">Employment History</h1>
                        </div>
                        {/* Employment History */}
                        <div className="form-container w-full h-full flex justify-center">
                            <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                                <div className="form-field mb-4">
                                    <label htmlFor="employerName" className="font-semibold block mb-2">Company/Employer Name</label>
                                    <input type="text" id="employerName" placeholder="Enter company/employer name" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="employmentDates" className="font-semibold block mb-2">Dates of Employment</label>
                                    <input type="date" id="employmentDates" placeholder="Enter dates of employment" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>

                            </div>
                            <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                                <div className="form-field mb-4">
                                    <label htmlFor="positionTitle" className="font-semibold block mb-2">Position/Title</label>
                                    <input type="text" id="positionTitle" placeholder="Enter position/title" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="employerCityState" className="font-semibold block mb-2">Employer City & State</label>
                                    <input type="text" id="employerCityState" placeholder="Enter employer city & state" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>

                            </div>
                            <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                                <div className="form-field mb-4">
                                    <label htmlFor="employerContactNumber" className="font-semibold block mb-2">Employer Contact Number</label>
                                    <input type="text" id="employerContactNumber" placeholder="Enter employer contact number" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="nocStatus" className="font-semibold block mb-2">NOC Status</label>
                                    <input type="text" id="nocStatus" placeholder="Enter NOC status" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                {/* <button className="submit-btn text-white px-4 py-2 rounded-lg mb-10">Submit</button> */}
                                <div className="flex w-full justify-end">
                                    <button className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
                        <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
                            <h1 className="text-white text-2xl font-bold">Granter Detail/ References</h1>
                        </div>
                        {/* Granter Detail/ References */}
                        <div className="form-container w-full h-full flex justify-center">
                            <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                                <div className="form-field mb-4">
                                    <label htmlFor="granterName" className="font-semibold block mb-2">Name Of Granter</label>
                                    <input type="text" id="granterName" placeholder="Enter name of granter" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="residentialAddress" className="font-semibold block mb-2">Residential Address</label>
                                    <input type="text" id="residentialAddress" placeholder="Enter residential address" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="granterPhone" className="font-semibold block mb-2">Phone #</label>
                                    <input type="text" id="granterPhone" placeholder="Enter phone number" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="granterOccupation" className="font-semibold block mb-2">Occupation</label>
                                    <input type="text" id="granterOccupation" placeholder="Enter occupation" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="relationWithDA" className="font-semibold block mb-2">Relation with DA</label>
                                    <input type="text" id="relationWithDA" placeholder="Enter relation with DA" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                            </div>
                            <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                                <div className="form-field mb-4">
                                    <label htmlFor="jobAddress" className="font-semibold block mb-2">Job Address</label>
                                    <input type="text" id="jobAddress" placeholder="Enter job address" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="relationWithDA" className="font-semibold block mb-2">Relation with DA</label>
                                    <input type="text" id="relationWithDA" placeholder="Enter relation with DA" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="familyCountry" className="font-semibold block mb-2">Country</label>
                                    <input type="text" id="familyCountry" placeholder="Enter country" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="familyHeadName" className="font-semibold block mb-2">Family Head Name</label>
                                    <input type="text" id="familyHeadName" placeholder="Enter family head name" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>

                            </div>
                            <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                                <div className="form-field mb-4">
                                    <label htmlFor="familyAddress" className="font-semibold block mb-2">Home Address</label>
                                    <input type="text" id="familyAddress" placeholder="Enter home address" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="familyPhone" className="font-semibold block mb-2">Phone Number</label>
                                    <input type="text" id="familyPhone" placeholder="Enter phone number" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="homeTownCity" className="font-semibold block mb-2">Home Town City</label>
                                    <input type="text" id="homeTownCity" placeholder="Enter home town city" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="familyHeadOccupation" className="font-semibold block mb-2">Occupation of Family Head</label>
                                    <input type="text" id="familyHeadOccupation" placeholder="Enter occupation of family head" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                {/* <button className="submit-btn text-white px-4 py-2 rounded-lg mb-10">Submit</button> */}
                                <div className="flex w-full justify-end">
                                    <button className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
                        <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
                            <h1 className="text-white text-2xl font-bold">Home Town Information/Verification</h1>
                        </div>
                        {/* Home Town Information/Verification */}
                        <div className="form-container w-full h-full flex justify-center">
                            <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                                <div className="form-field mb-4">
                                    <label htmlFor="familyCountry" className="font-semibold block mb-2">Country</label>
                                    <input type="text" id="familyCountry" placeholder="Enter country" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="familyHeadName" className="font-semibold block mb-2">Family Head Name</label>
                                    <input type="text" id="familyHeadName" placeholder="Enter family head name" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="applicantSignature" className="font-semibold block mb-2">Applicant Signature & Date</label>
                                    <input type="text" id="applicantSignature" placeholder="Enter applicant signature & date" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>

                            </div>
                            <div className="projects-list flex flex-col pt-20 px-10 w-4/12">
                                <div className="form-field mb-4">
                                    <label htmlFor="familyAddress" className="font-semibold block mb-2">Home Address</label>
                                    <input type="text" id="familyAddress" placeholder="Enter home address" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="familyPhone" className="font-semibold block mb-2">Phone Number</label>
                                    <input type="text" id="familyPhone" placeholder="Enter phone number" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                            </div>
                            <div className="projects-list flex flex-col pt-20 px-10 w-4/12">

                                <div className="form-field mb-4">
                                    <label htmlFor="homeTownCity" className="font-semibold block mb-2">Home Town City</label>
                                    <input type="text" id="homeTownCity" placeholder="Enter home town city" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                <div className="form-field mb-4">
                                    <label htmlFor="familyHeadOccupation" className="font-semibold block mb-2">Occupation of Family Head</label>
                                    <input type="text" id="familyHeadOccupation" placeholder="Enter occupation of family head" className="input-field px-3 py-2 w-full outline-none border-custom-class" />
                                </div>
                                {/* <button className="submit-btn text-white px-4 py-2 rounded-lg mb-10">Submit</button> */}
                                <div className="flex w-full justify-end">
                                    <button className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddEmployee;
