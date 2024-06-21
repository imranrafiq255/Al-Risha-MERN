import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Venders.css";
import Plus from "../../Assets/plus.png";
import Najaf from "../../Assets/najaf.png";
import Speedo from "../../Assets/Speedo.png";
import Fixtime from "../../Assets/fixtime.png";
import PencilIcon from "../../Assets/pencil.png";
import TrashIcon from "../../Assets/trash.png";

const Vendors = () => {
  const [isShowing, setShowing] = useState(false);

  const addVenderHandler = () => {
    setShowing(!isShowing);
  };

  return (
    <>
      <div className="home-container custom-home-background w-screen h-full p-4 flex">
        <SideBar />
        <div className="right-sidebar-container w-10/12">
          <Header />
          <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
            <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
              <h1 className="text-white text-2xl font-bold">Venders</h1>
              <img
                src={Plus}
                alt=""
                className={`${
                  isShowing
                    ? " rotate-45 transition-transform duration-300 ease-in-out"
                    : "rotate-0 transition-transform duration-300 ease-in-out"
                } w-6 h-6 invert cursor-pointer`}
                onClick={addVenderHandler}
              />
            </div>
            <div className="venders-list flex flex-col pt-20 px-10">
              <div className="flex mt-4 font-bold">
                <div className="w-5/12">Vendors</div>
                
                <div className="w-7/12 flex justify-between items-center">
                  <h1>FUNCTION</h1>
                  <h1>STATUS</h1>
                  <h1>EMPLOYED</h1>
                  <h1>MODIFICATION</h1>
                </div>
              </div>
              <div className="line w-full mt-4">
                <div className="vender-bottom-line w-full"></div>
              </div>
              {/* first user data */}
              <VendorRow
                image={Najaf}
                name="Al-Najaf"
                email="alnajaf11@gmail.com"
                functionType="Manager"
                status="Online"
                employedDate="12 Dec 2014"
              />
              {/* Second user data */}
              {/* <VendorRow
                image={Speedo}
                name="Speedo"
                email="Speedo01@gmail.com"
                functionType="Manager"
                status="Offline"
                employedDate="10 Jan 2014"
              /> */}
              {/* Third user data */}
              {/* <VendorRow
                image={Fixtime}
                name="Fix-Time"
                email="Fixtime@gmail.com"
                functionType="Supervisor"
                status="Online"
                employedDate="19 Oct 2014"
              /> */}
            </div>
            {isShowing ? (
              <div className="venders-to-add-list absolute top-14 right-16 w-72 h-96 bg-slate-300 rounded-b-lg shadow-lg"></div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const VendorRow = ({
  image,
  name,
  email,
  functionType,
  status,
  employedDate,
}) => {
  const handleEdit = (vendorId) => {
    // Handle edit action for the specific vendor
    console.log(`Editing vendor with ID: ${vendorId}`);
  };

  const handleDelete = (vendorId) => {
    // Handle delete action for the specific vendor
    console.log(`Deleting vendor with ID: ${vendorId}`);
  };

  return (
    <>
      <div className="flex mt-4">
        <div className="w-5/12 flex">
          <div className="image">
            <img
              src={image}
              alt=""
              className="w-15 h-14 rounded-full object-fill"
            />
          </div>
          <div className="name flex flex-col justify-center pl-4">
            <h1>{name}</h1>
            <h1 className="email">{email}</h1>
          </div>
        </div>
        <div className="w-7/12 flex justify-between items-center">
          <div>
            <h1 className="font-bold">{functionType}</h1>
            <h1 className="font-thin">Organization</h1>
          </div>
          <div>
            <div className="bg-green-400 text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg">
              {status}
            </div>
          </div>
          <div className="employed">
            <h1>{employedDate}</h1>
          </div>
          <div className="modification-icons flex">
            <img
              src={PencilIcon}
              alt="Edit"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleEdit(name)}
            />
            <img
              src={TrashIcon}
              alt="Delete"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleDelete(name)}
            />
          </div>
        </div>
      </div>
      <div className="line w-full mt-4">
        <div className="vender-bottom-line w-full"></div>
      </div>
    </>
  );
};

export default Vendors;
