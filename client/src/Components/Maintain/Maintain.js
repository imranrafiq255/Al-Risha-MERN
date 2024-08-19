import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Maintain.css"; // Import Maintain.css for styling
import Plus from "../../Assets/plus.png";

// Vendor data component
const VendorData = () => {
  // Sample vendor data
  const vendors = [
    { name: "Vendor 1", email: "vendor1@example.com" },
    { name: "Vendor 2", email: "vendor2@example.com" },
    { name: "Vendor 3", email: "vendor3@example.com" }
  ];

  return (
    <div className="vendor-data">
      <h2>Vendors</h2>
      <ul>
        {vendors.map((vendor, index) => (
          <li key={index}>
            <p>Name: {vendor.name}</p>
            <p>Email: {vendor.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Maintain = () => {
  const [isShowing, setShowing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const addMaintainHandler = () => {
    setShowing(!isShowing);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="home-container custom-home-background w-screen h-full p-4 flex">
        <SideBar />
        <div className="right-sidebar-container w-10/12">
          <Header />
          <div className="maintain-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
            <div className="h-20 w-11/12 custom-maintain-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
              <h1 className="text-white text-2xl font-bold">Maintain</h1>
              <img
                src={Plus}
                alt=""
                className={`${isShowing
                    ? "rotate-45 transition-transform duration-300 ease-in-out"
                    : "rotate-0 transition-transform duration-300 ease-in-out"
                  } w-6 h-6 invert cursor-pointer`}
                onClick={addMaintainHandler}
              />
            </div>
            <div className="maintain-list flex flex-row pt-20 px-10">
              <h1 className="heading">Choose to Modify data:</h1>
              <div className="dropdown">
                <button className="dropbtn">Select Category</button>
                <div className="dropdown-content">
                  <a href="#" onClick={() => handleCategorySelect("vendors")}>1. Our Vendors</a>
                  <a href="#">2. Projects</a>
                  <a href="#">3. Vehicle Details</a>
                  <a href="#">4. Salaries Record</a>
                </div>
              </div>
            </div>

            {/* Render vendor data if selected */}
            {selectedCategory === "vendors" && <VendorData />}

            {isShowing ? (
              <div className="maintain-to-add-list absolute top-14 right-16 w-72 h-96 bg-slate-300 rounded-b-lg shadow-lg">
                {/* Content for adding Maintain goes here */}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintain;
