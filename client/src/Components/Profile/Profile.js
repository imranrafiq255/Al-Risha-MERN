import React from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

const Profile = () => {
  // Dummy user data (replace with actual user data)
  const user = {
    name: "John Doe",
    employeeType: "Fixed Salary",
    project: "Project Mackdonal", // Updated project name
    vendors: ["Vendor A", "Vendor B"],
    // Add more profile data as needed
  };

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        <div className="projects-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
        <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">My Profile</h1>
          </div>

          {/* User Profile Data */}
          <div className="profile-details flex flex-col pt-20 px-10">
            <div className="flex items-center">
              {/* User Image (replace with actual image) */}
              <div className="profile-image bg-gray-300 w-20 h-20 rounded-full flex items-center justify-center mr-6">
                <span className="text-gray-500 text-4xl">JD</span>
              </div>
              {/* User Details */}
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.employeeType}</p>
                {/* Display project name if user is assigned to a project */}
                {user.project && (
                  <p className="text-gray-600">Project: {user.project}</p>
                )}
                {/* Display vendor names if user is associated with vendors */}
                
              </div>
              
            </div>
            {/* Additional Profile Data (if needed) */}
            {/* Add more profile data as needed */}
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Profile;
