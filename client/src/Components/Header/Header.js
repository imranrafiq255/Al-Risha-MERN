import React from "react";
import Star from "../../Assets/star.png";
import Setting from "../../Assets/setting.png";
import Bell from "../../Assets/bell.png";
import Mee from "../../Assets/mee.jpeg";
const Header = () => {
  return (
    <>
      <div className="flex h-10">
        <div className="left-header basis-1/2">
          <h1 className=" text-sm">
            Pages / <span className="text-slate-600">Dashboard</span>
          </h1>
          <h1 className="text-base ml-3 text-slate-600">Dashboard</h1>
        </div>
        <div className="right-header flex basis-1/2 gap-2">
          <input
            type="text"
            className="w-5/12 h-full outline-none header-input-border-custom px-4"
            placeholder="Type something ..."
          />
          <button className="w-3/12 h-full outline-none header-btn-builder-custom px-4">
            Online Users
          </button>
          <div className="w-3/12 flex py-1">
            <div className="rating flex gap-2 w-full h-full justify-center items-center rating-left-custom-css">
              <img src={Star} alt="" className="w-4 h-4" />
              <h1>Star</h1>
            </div>
            <div className="rating flex gap-2 w-full h-full justify-center items-center rating-right-custom-css">
              <h1>10,000</h1>
            </div>
          </div>
          <div className="w-3/12 flex py-1 gap-2 items-center justify-evenly">
            <img src={Setting} alt="" className="w-4 h-4" />
            <img src={Bell} alt="" className="w-4 h-4" />
            <div className="relative w-9 h-9 border-2 border-solid border-slate-600 rounded-full overflow-hidden">
              {/* This div creates a circular shape */}
              {<img src={Mee} alt="" className="w-full h-full object-cover" />}
              {/* The image inside is stretched to cover the circular area */}
            </div>
            <h1>Log out</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
