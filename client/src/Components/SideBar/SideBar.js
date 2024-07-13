import React, { useState } from "react";
import Vendor from "../../Assets/vendor.png";
import Project from "../../Assets/projects.png";
import Vehicle from "../../Assets/vehicle.png";
import Salary from "../../Assets/salary.png";
import Logout from "../../Assets/logout.png";
import Signup from "../../Assets/signup.png";
import Dashboard from "../../Assets/dashboard.png";
import VerticalLogo from "../../Assets/Horizontal-logo.png";
import Bell from "../../Assets/bell.png";
import User from "../../Assets/user.png";
import Maintain from "../../Assets/maintain.png";
import Arrow from "../../Assets/arrow.png";
import Company from "../../Assets/company.png";
import State from "../../Assets/state.png";
import Gender from "../../Assets/gender.png";
import Shift from "../../Assets/shift.png";
import Nationality from "../../Assets/nationality.png";
import Guarantor from "../../Assets/guarantor.png";
import Noc from "../../Assets/noc.png"; // Import NOC icon here
import JobType from "../../Assets/jobtype.png"; // Import Job Type icon here

import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isEmployeeOpen, setEmployeeIsOpen] = useState(false);

  const dashboardNavigator = () => {
    navigate("/");
  };

  const vendersNavigator = () => {
    navigate("/venders");
  };

  const projectNavigator = () => {
    navigate("/project");
  };

  const vehicleNavigator = () => {
    navigate("/vehicle");
  };

  const jobtypeNavigator = () => {
    navigate("/jobtype");
  };

  const salaryNavigator = () => {
    navigate("/salary");
  };

  const notificationNavigator = () => {
    navigate("/notification");
  };

  const maintainNavigator = () => {
    navigate("/maintain");
  };

  const profileNavigator = () => {
    navigate("/profile");
  };

  const signOutHandler = () => {};

  const signUpNavigator = () => {
    navigate("/signup");
  };

  const maintainOptionsShower = () => {
    setIsOpen(!isOpen);
  };

  const employeeOptionsShower = () => {
    setEmployeeIsOpen(!isEmployeeOpen);
  };

  const addEmployeeNavigator = () => {
    navigate("/addemployee");
  };

  const displayEmployeeNavigator = () => {
    navigate("/displayemployee");
  };
  const companyNavigator = () => {
    navigate("/company");
  };

  const stateNavigator = () => {
    navigate("/state");
  };

  const genderNavigator = () => {
    navigate("/gender");
  };

  const shiftNavigator = () => {
    navigate("/shifts");
  };

  const nationalityNavigator = () => {
    navigate("/nationality");
  };

  const guarantorNavigator = () => {
    navigate("/guarantor");
  };

  const nocNavigator = () => {
    navigate("/noc");
  };

  return (
    <>
      <div className="relative h-screen w-2/12">
        <div className="left-sidebar fixed left-4 h-full w-2/12">
          <div className="h-full w-64 bg-slate-700 rounded-lg p-2 flex flex-col overflow-scroll">
            <div className="first p-2">
              <div className="flex items-center justify-center pb-4">
                <img src={VerticalLogo} alt="" className="w-24 h-20" />
              </div>
              <div className="bottom-line">
                <div className="line w-full bg-white h-0.5"></div>
              </div>
            </div>
            <div className="second flex flex-col"></div>
            <div
              className={`${
                location.pathname === "/"
                  ? "home-sidebar-selected-item-bg-color"
                  : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
              } dashboard flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer`}
              onClick={dashboardNavigator}
            >
              <img src={Dashboard} alt="" className="w-4 h-4 invert" />
              <h1 className="text-white">Dashboard</h1>
            </div>
            {/* Maintain */}
            <div
              className={`${
                isOpen
                  ? "bg-sky-400"
                  : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
              } notification flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer`}
              onClick={maintainOptionsShower}
            >
              <img src={Maintain} alt="" className="w-5 h-5 invert" />
              <h1 className="text-white">Maintain</h1>
              <img
                src={Arrow}
                className={`${isOpen ? "rotate-180" : ""} ml-4 w-3 h-3 invert`}
                onClick={maintainOptionsShower}
              />
            </div>
            {isOpen ? (
              <div>
                {/* Maintain Field Dropdown items */}
                <div
                  className={`${
                    location.pathname === "/company"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } profile flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer `}
                  onClick={() => navigate("/company")}
                >
                  <img src={Company} alt="" className="w-5 h-5 invert" />
                  <h1 className="text-white">Company</h1>
                </div>
                <div
                  className={`${
                    location.pathname === "/project"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } project flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer `}
                  onClick={projectNavigator}
                >
                  <img src={Project} alt="" className="w-6 h-6 invert" />
                  <h1 className="text-white">Projects</h1>
                </div>
                <div
                  className={`${
                    location.pathname === "/venders"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } vendor flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer`}
                  onClick={vendersNavigator}
                >
                  <img src={Vendor} alt="" className="w-6 h-5 invert" />
                  <h1 className="text-white">Our Vendors</h1>
                </div>
                <div
                  className={`${
                    location.pathname === "/jobtype"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } vehicle flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer hover:bg-slate-600 transition-colors duration-500 ease-in-out`}
                  onClick={jobtypeNavigator}
                >
                  <img src={JobType} alt="" className="w-7 h-7 invert" />
                  <h1 className="text-white">Job Type</h1>
                </div>
                <div
                  className={`${
                    location.pathname === "/vehicle"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } vehicle flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer hover:bg-slate-600 transition-colors duration-500 ease-in-out`}
                  onClick={vehicleNavigator}
                >
                  <img src={Vehicle} alt="" className="w-7 h-7 invert" />
                  <h1 className="text-white">Vehicle Type</h1>
                </div>

                <div
                  className={`${
                    location.pathname === "/salary"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } salary flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer`}
                  onClick={salaryNavigator}
                >
                  <img src={Salary} alt="" className="w-6 h-5 invert" />
                  <h1 className="text-white">Salaries Type</h1>
                </div>
                <div
                  className={`${
                    location.pathname === "/shifts"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } profile flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer `}
                  onClick={() => navigate("/shifts")}
                >
                  <img src={Shift} alt="" className="w-5 h-5 invert" />
                  <h1 className="text-white">Shifts</h1>
                </div>
                <div
                  className={`${
                    location.pathname === "/gender"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } profile flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer `}
                  onClick={() => navigate("/gender")}
                >
                  <img src={Gender} alt="" className="w-5 h-5 invert" />
                  <h1 className="text-white">Gender</h1>
                </div>
                <div
                  className={`${
                    location.pathname === "/nationality"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } profile flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer `}
                  onClick={() => navigate("/nationality")}
                >
                  <img src={Nationality} alt="" className="w-5 h-5 invert" />
                  <h1 className="text-white">Nationality</h1>
                </div>
                <div
                  className={`${
                    location.pathname === "/state"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } profile flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer `}
                  onClick={() => navigate("/state")}
                >
                  <img src={State} alt="" className="w-5 h-5 invert" />
                  <h1 className="text-white">State of issuance</h1>
                </div>
                <div
                  className={`${
                    location.pathname === "/guarantor"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } profile flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer `}
                  onClick={() => navigate("/guarantor")}
                >
                  <img src={Guarantor} alt="" className="w-5 h-5 invert" />
                  <h1 className="text-white">Guarantor</h1>
                </div>
                <div
                  className={`${
                    location.pathname === "/noc-status"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } profile flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer `}
                  onClick={() => navigate("/noc-status")}
                >
                  <img src={Noc} alt="" className="w-5 h-5 invert" />
                  <h1 className="text-white">NOC Status</h1>
                </div>

                {/* End of Additional Maintain dropdown Items */}
              </div>
            ) : (
              ""
            )}
            {/* Employee */}
            <div
              className={`${
                isEmployeeOpen
                  ? "bg-sky-400"
                  : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
              } notification flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer`}
              onClick={employeeOptionsShower}
            >
              <img src={Vendor} alt="" className="w-5 h-5 invert" />
              <h1 className="text-white">Employee</h1>
              <img
                src={Arrow}
                className={`${
                  isEmployeeOpen ? "rotate-180" : ""
                } ml-3 w-3 h-3 invert`}
                onClick={employeeOptionsShower}
              />
            </div>
            {isEmployeeOpen ? (
              <div>
                <div
                  className={`${
                    location.pathname === "/addemployee"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } vendor flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer`}
                  onClick={addEmployeeNavigator}
                >
                  <img src={Vendor} alt="" className="w-6 h-5 invert" />
                  <h1 className="text-white">Add Employee</h1>
                </div>
                <div
                  className={`${
                    location.pathname === "/displayemployee"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } project flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer `}
                  onClick={displayEmployeeNavigator}
                >
                  <img src={Project} alt="" className="w-6 h-6 invert" />
                  <h1 className="text-white">Search Employee</h1>
                </div>
                <div
                  className={`${
                    location.pathname === "/Reports"
                      ? "home-sidebar-selected-item-bg-color"
                      : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
                  } project flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer `}
                  onClick={displayEmployeeNavigator}
                >
                  <img src={Signup} alt="" className="w-6 h-6 invert" />
                  <h1 className="text-white">Reports</h1>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* Notifications */}
            <div
              className={`${
                location.pathname === "/notification"
                  ? "home-sidebar-selected-item-bg-color"
                  : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
              } notification flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer`}
              onClick={notificationNavigator}
            >
              <img src={Bell} alt="" className="w-5 h-5 invert" />
              <h1 className="text-white">Notifications</h1>
            </div>
            {/* Account Pages */}
            <div className="account flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer hover:bg-slate-600 transition-colors duration-500 ease-in-out">
              <h1 className="text-white">Account Pages</h1>
            </div>
            {/* My Profile */}
            <div
              className={`${
                location.pathname === "/profile"
                  ? "home-sidebar-selected-item-bg-color"
                  : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
              } profile flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer `}
              onClick={profileNavigator}
            >
              <img src={User} alt="" className="w-5 h-5 invert" />
              <h1 className="text-white">My Profile</h1>
            </div>
            {/* Sign Out */}
            <div
              className="logout flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer hover:bg-slate-600 transition-colors duration-500 ease-in-out"
              onClick={signOutHandler}
            >
              <img src={Logout} alt="" className="w-5 h-5 invert" />
              <h1 className="text-white">Sign Out</h1>
            </div>
            {/* Sign Up */}
            <div
              className={`${
                location.pathname === "/signin"
                  ? "home-sidebar-selected-item-bg-color"
                  : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
              } signin flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 cursor-pointer`}
              onClick={signUpNavigator}
            >
              <img src={Signup} alt="" className="w-4 h-4 invert" />
              <h1 className="text-white">Sign Up</h1>
            </div>
            <div className="third flex flex-col justify-end h-full mt-16">
              {/* Download Reports */}
              <div className="documentation flex justify-center items-center w-full h-12 sidebar-bottom-btn-border-color custom-home-color documentation-btn-custom-css rounded-lg cursor-pointer transition-colors ease-in-out duration-500">
                Download Reports
              </div>
              {/* Upgrade to Pro */}
              <div className="documentation flex justify-center items-center w-full h-12 sidebar-bottom-upgrade-btn-bg-color upgrade-btn-custom-css rounded-lg text-white mt-4 cursor-pointer transition-colors ease-in-out duration-500 mb-4">
                Upgrade to Pro
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
