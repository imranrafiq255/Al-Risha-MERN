import React from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

const Project = () => {
  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        <div className="projects-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-projects-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Projects</h1>
          </div>
          <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Projects</h1>
          </div>
          {/* Add your project data here */}
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Project 1 */}
            <div className="project-item flex mt-4">
              <div className="w-3/12 font-bold">Project ID</div>
              <div className="w-3/12 font-bold">Project Contractor</div>
              <div className="w-3/12 font-bold">Start Date</div>
              <div className="w-3/12 font-bold">Status</div>
            </div>
            <div className="line w-full mt-4">
              <div className="vender-bottom-line w-full"></div>
            </div>
            {/* First Project Data */}
            <div className="project-item flex mt-4">
              <div className="w-3/12">1</div>
              <div className="w-3/12">McDonald's</div>
              <div className="w-3/12">2022-01-01</div>
              <div className="w-3/12">Ongoing</div>
            </div>
            <div className="line w-full mt-4">
              <div className="vender-bottom-line w-full"></div>
            </div>

            {/* Second Project Data */}
            <div className="project-item flex mt-4">
              <div className="w-3/12">2</div>
              <div className="w-3/12">American Bar & Grill</div>
              <div className="w-3/12">2022-02-15</div>
              <div className="w-3/12">Ongoing</div>
            </div>
            <div className="line w-full mt-4">
              <div className="vender-bottom-line w-full"></div>
            </div>

            {/* Third Project Data */}
            <div className="project-item flex mt-4">
              <div className="w-3/12">3</div>
              <div className="w-3/12">KFC</div>
              <div className="w-3/12">2022-03-20</div>
              <div className="w-3/12">Ongoing</div>
            </div>
            <div className="line w-full mt-4">
              <div className="vender-bottom-line w-full"></div>
            </div>

            {/* Fourth Project Data */}
            <div className="project-item flex mt-4">
              <div className="w-3/12">4</div>
              <div className="w-3/12">Careem Foods</div>
              <div className="w-3/12">2022-04-10</div>
              <div className="w-3/12">Ongoing</div>
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

export default Project;
