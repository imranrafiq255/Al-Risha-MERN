import React, { useState } from "react";
import "./Home.css";
import Star from "../../Assets/star.png";
import User from "../../Assets/user.png";
import Setting from "../../Assets/setting.png";
import Bell from "../../Assets/bell.png";
import Boy from "../../Assets/bell.png";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

// import Me from "../../Assets/me.jpeg";

const Home = () => {
  const [headerShowing, setHeaderShowing] = useState(false);
  return (
    <>
      <div className="home-container custom-home-background p-4 flex justify-center">
        {headerShowing ? (
          <div className=" z-10 w-2/12">
            <SideBar />
          </div>
        ) : (
          ""
        )}
        <div className="right-sidebar-container w-10/12">
          <img
            src={require("../../Assets/menu.png")}
            alt=""
            className={`w-10 h-10 cursor-pointer ${headerShowing ? "" : ""}`}
            onClick={() => setHeaderShowing(!headerShowing)}
          />
          <Header />
          {/* sales-card-container */}
          <div className="sales-card-container flex flex-wrap mt-14">
            <div className="card-1-container w-full lg:w-6/12 xl:w-4/12 2xl:w-3/12 px-2 mb-6">
              <div className="card w-full h-full bg-white rounded-lg shadow-lg relative">
                <h1 className=" text-right px-4 pt-3 font-thin">Total Users</h1>
                <h1 className=" text-right px-4 text-2xl font-extrabold">
                  5,500
                </h1>
                <div className="line w-full flex justify-center mt-7">
                  <div className="card-bottom-line w-9/12"></div>
                </div>
                <div className="progress-index mt-4 ml-5">
                  <h1>
                    <span className=" text-green-500">+10%</span>{" "}
                    <span className="font-thin">than last week</span>
                  </h1>
                </div>
                <div className="card-box w-16 h-16 bg-teal-400 bg-emerald-500 rounded-xl flex justify-center items-center absolute -top-4 left-4">
                  <img src={User} alt="" className="w-6 h-6 invert" />
                </div>
              </div>
            </div>
            <div className="card-2-container w-full lg:w-6/12 xl:w-4/12  2xl:w-3/12 px-2 mb-6">
              <div className="card w-full h-full bg-white rounded-lg shadow-lg relative">
                <h1 className=" text-right px-4 pt-3 font-thin">
                  Today's Active Users
                </h1>
                <h1 className=" text-right px-4 text-2xl font-extrabold">
                  5,400
                </h1>
                <div className="line w-full flex justify-center mt-7">
                  <div className="card-bottom-line w-9/12"></div>
                </div>
                <div className="progress-index mt-4 ml-5">
                  <h1>
                    <span className=" text-green-600">+12%</span>{" "}
                    <span className="font-thin">than last month</span>
                  </h1>
                </div>
                <div className="card-box w-16 h-16 bg-green-700 rounded-xl flex justify-center items-center absolute -top-4 left-4">
                  <img src={User} alt="" className="w-6 h-6 invert" />
                </div>
              </div>
            </div>
            <div className="card-3-container w-full lg:w-6/12 xl:w-4/12 2xl:w-3/12 px-2 mb-6">
              <div className="card w-full h-full bg-white rounded-lg shadow-lg relative">
                <h1 className=" text-right px-4 pt-3 font-thin">
                  Today Offline Users
                </h1>
                <h1 className=" text-right px-4 text-2xl font-extrabold">
                  100
                </h1>
                <div className="line w-full flex justify-center mt-7">
                  <div className="card-bottom-line w-9/12"></div>
                </div>
                <div className="progress-index mt-4 ml-5">
                  <h1>
                    <span className=" text-red-500">-5%</span>{" "}
                    <span className="font-thin">than last week</span>
                  </h1>
                </div>
                <div className="card-box w-16 h-16 bg-red-700 rounded-xl flex justify-center items-center absolute -top-4 left-4">
                  <img src={User} alt="" className="w-6 h-6 invert" />
                </div>
              </div>
            </div>
            <div className="card-4-container w-full lg:w-6/12 xl:w-4/12 2xl:w-3/12 px-2 mb-6">
              <div className="card w-full h-full bg-white rounded-lg shadow-lg relative">
                <h1 className=" text-right px-4 pt-3 font-thin">
                  Total Vendors
                </h1>
                <h1 className=" text-right px-4 text-2xl font-extrabold">
                  2,500
                </h1>
                <div className="line w-full flex justify-center mt-7">
                  <div className="card-bottom-line w-9/12"></div>
                </div>
                <div className="progress-index mt-4 ml-5">
                  <h1>
                    <span className=" text-cyan-600">+8%</span>{" "}
                    <span className="font-thin">than last month</span>
                  </h1>
                </div>
                <div className="card-box w-16 h-16 bg-yellow-500 rounded-xl flex justify-center items-center absolute -top-4 left-4">
                  <img src={User} alt="" className="w-6 h-6 invert" />
                </div>
              </div>
            </div>
          </div>
          {/* sales graph container  */}
          <div className="graph-container flex flex-wrap mt-14">
            <div className="graph-1-container w-full lg:w-6/12 xl:w-4/12 h-80 px-2 mb-14 xl:mb-1">
              <div className="graph-card bg-white w-full h-full shadow-lg rounded-lg relative">
                <div className="graph-table w-11/12 h-2/3 bg-emerald-400 absolute -top-10 left-4 rounded-xl"></div>
                <div className="flex w-full h-full flex-col">
                  <div className="temp basis-1/2"></div>
                  <div className="details basis-1/2 mt-16 ml-6">
                    <h1 className="text-lg font-semibold">Website views</h1>
                    <h1 className=" font-thin text-base">
                      Last campaign performance
                    </h1>
                    <div className="line w-full flex justify-center mt-4">
                      <div className="card-bottom-line w-9/12"></div>
                    </div>
                    <div className="campaign-timer flex gap-2 items-center mt-4">
                      <img src={Bell} alt="" className="w-2 h-2" />
                      <h1 className="font-thin">campaign sent 2 days ago</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-2-container w-full lg:w-6/12 xl:w-4/12 h-80 px-2 mb-14 xl:mb-1">
              <div className="graph-card bg-white w-full h-full shadow-lg rounded-lg relative">
                <div className="graph-table w-11/12 h-2/3 bg-green-600 absolute -top-10 left-4 rounded-xl"></div>
                <div className="flex w-full h-full flex-col">
                  <div className="temp basis-1/2"></div>
                  <div className="details basis-1/2 mt-16 ml-6">
                    <h1 className="text-lg font-semibold">Website views</h1>
                    <h1 className=" font-thin text-base">
                      Last campaign performance
                    </h1>
                    <div className="line w-full flex justify-center mt-4">
                      <div className="card-bottom-line w-9/12"></div>
                    </div>
                    <div className="campaign-timer flex gap-2 items-center mt-4">
                      <img src={Bell} alt="" className="w-2 h-2" />
                      <h1 className="font-thin">campaign sent 2 days ago</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-3-container w-full lg:w-6/12 xl:w-4/12 h-80 px-2 mb-14 xl:mb-1">
              <div className="graph-card bg-white w-full h-full shadow-lg rounded-lg relative">
                <div className="graph-table w-11/12 h-2/3 bg-red-600 absolute -top-10 left-4 rounded-xl"></div>
                <div className="flex w-full h-full flex-col">
                  <div className="temp basis-1/2"></div>
                  <div className="details basis-1/2 mt-16 ml-6">
                    <h1 className="text-lg font-semibold">Website views</h1>
                    <h1 className=" font-thin text-base">
                      Last campaign performance
                    </h1>
                    <div className="line w-full flex justify-center mt-4">
                      <div className="card-bottom-line w-9/12"></div>
                    </div>
                    <div className="campaign-timer flex gap-2 items-center mt-4">
                      <img src={Bell} alt="" className="w-2 h-2" />
                      <h1 className="font-thin">campaign sent 2 days ago</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* overview container */}
          <div className="overview-container flex flex-wrap mt-10">
            <div className="left-side w-full lg:w-10/12 2xl:w-8/12 px-3 h-96 ">
              <div className="bg-white w-full h-full shadow-lg rounded-lg px-8">
                <div className="projects w-full flex justify-between pt-6">
                  <h1 className="text-base font-semibold">Projects</h1>
                  <img src={Bell} alt="" className="w-6 h-6" />
                </div>
                <div className="30-done flex gap-2 items-center mt-3 ">
                  <img src={Bell} alt="" className="w-3 h-3" />
                  <h1>
                    <span className="font-semibold">30 done </span>{" "}
                    <span className="font-thin text-sm">This month</span>
                  </h1>
                </div>
                <div className="bottom-table flex mt-3 w-full relative">
                  <div className="left-side w-5/12 ">
                    <div className="name">
                      <h1 className="font-thin">Companies</h1>
                      <div className="flex gap-3 mt-4 items-center">
                        <img src={Bell} alt="" className="w-7 h-7" />
                        <h1 className="text-xl">Material XD Version</h1>
                      </div>
                      <div className="flex gap-3 mt-4 items-center">
                        <img src={Bell} alt="" className="w-7 h-7" />
                        <h1 className="text-xl">Material XD Version</h1>
                      </div>
                    </div>
                  </div>
                  <div className="right-side w-full lg:w-10/12 2xl:w-7/12">
                    <div className="name flex justify-between w-full">
                      <div>
                        <h1 className="font-thin">Members</h1>
                        <div className="members-list mt-4 flex relative items-center">
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-0 top-0 rounded-full border-2 border-solid border-slate-600"
                          />
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-4 top-0 rounded-full"
                          />
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-8 top-0 rounded-full"
                          />
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-12 top-0 rounded-full"
                          />
                        </div>
                        <div className="members-list mt-12 flex relative items-center">
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-0 top-0 rounded-full border-2 border-solid border-slate-600"
                          />
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-4 top-0 rounded-full"
                          />
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-8 top-0 rounded-full"
                          />
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-12 top-0 rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <h1 className="font-thin">Budget</h1>
                      </div>
                      <div>
                        <h1 className="font-thin">Compeletion</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side lg:w-2/12 2xl:w-4/12 px-3 h-96 mt-4 lg:mt-[0px] ">
              <div className="bg-white w-full h-full shadow-lg rounded-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt ipsa quidem provident est, numquam ratione a delectus?
                Possimus, eos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
