import React from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

const Salary = () => {
  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        <div className="projects-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Salaries Type</h1>
          </div>
          {/* Add your salary data here */}
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Fixed Salary Employees */}
            <div className="project-item flex mt-4">
              <div className="w-3/12 font-bold">Salary ID</div>
              <div className="w-3/12 font-bold">Type</div>
            </div>
            <div className="line w-full mt-4">
              <div className="vender-bottom-line w-full"></div>
            </div>
            {/* Fixed Salary Employee Data */}
            <div className="project-item flex mt-4">
              <div className="w-3/12">101</div>
              <div className="w-3/12">Fixed</div>
            </div>
            <div className="line w-full mt-4">
              <div className="vender-bottom-line w-full"></div>
            </div>
            {/* Commission Employee Data */}
            <div className="project-item flex mt-4">
              <div className="w-3/12">201</div>
              <div className="w-3/12 ">Commission based</div>
            </div>
            <div className="line w-full mt-4">
              <div className="vender-bottom-line w-full"></div>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
