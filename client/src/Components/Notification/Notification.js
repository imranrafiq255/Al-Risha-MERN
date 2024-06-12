import React from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

const Notification = () => {
  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar />
      <div className="right-sidebar-container w-10/12">
        <Header />
        <div className="projects-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
        <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Notifications</h1>
          </div>
          {/* Add your notification data here */}
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Notification 1 */}
            <div className="project-item flex mt-4 font-bold">
              <div className="w-3/12">Notification ID</div>
              <div className="w-3/12">Title</div>
              <div className="w-3/12">Date</div>
              <div className="w-3/12">Status</div>
            </div>
            <div className="line w-full mt-4">
              <div className="vender-bottom-line w-full"></div>
            </div>
            {/* Example Notification Data 1 (Read) */}
            <div className="project-item flex mt-4">
              <div className="w-3/12">1</div>
              <div className="w-3/12">Message from Al-Nahdi Farma</div>
              <div className="w-3/12">2022-04-25</div>
              <div className="w-3/12">Read</div>
            </div>
            <div className="line w-full mt-4">
              <div className="vender-bottom-line w-full"></div>
            </div>
            {/* Example Notification Data 2 (Unread) */}
            <div className="project-item flex mt-4 ">
              <div className="w-3/12">2</div>
              <div className="w-3/12 font-bold">New Order from McDonald's</div>
              <div className="w-3/12">2022-04-26</div>
              <div className="w-3/12 font-bold">Unread</div>
            </div>
            <div className="line w-full mt-4">
              <div className="vender-bottom-line w-full"></div>
            </div>
            {/* Example Notification Data 3 (Unread) */}
            <div className="project-item flex mt-4 ">
              <div className="w-3/12">3</div>
              <div className="w-3/12 font-bold">New Delivery from Careem Foods</div>
              <div className="w-3/12">2022-04-27</div>
              <div className="w-3/12 font-bold">Unread</div>
            </div>
            <div className="line w-full mt-4">
              <div className="vender-bottom-line w-full"></div>
            </div>
            {/* Example Notification Data 4 (Read) */}
            <div className="project-item flex mt-4">
              <div className="w-3/12">4</div>
              <div className="w-3/12">Update from Project Americana</div>
              <div className="w-3/12">2022-04-28</div>
              <div className="w-3/12">Read</div>
            </div>
            <div className="line w-full mt-4">
              <div className="vender-bottom-line w-full"></div>
            </div>
            {/* Add more notification items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
