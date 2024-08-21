import React from "react";
import Star from "../../Assets/star.png";
import Setting from "../../Assets/setting.png";
import Bell from "../../Assets/bell.png";
import Mee from "../../Assets/mee.jpeg";
const Header = ({ toggleSideBarVisibility }) => {
  return (
    <>
      <div className="flex h-10 flex-wrap">
        <div className="left-header xl:basis-1/2 w-full flex items-center gap-4">
          <h1 onClick={toggleSideBarVisibility} className="cursor-pointer">
            Side bar
          </h1>
          <h1 className=" text-sm">
            Pages / <span className="text-slate-600">Dashboard</span>
          </h1>
        </div>
        <div className="right-header flex xl:basis-1/2 gap-2 xl:mt-0 mt-4">
          <input
            type="text"
            className="xl:w-5/12 w-4/12 text-xs h-full outline-none header-input-border-custom px-4"
            placeholder="Type something ..."
          />
          <button className="w-3/12 h-full text-xs outline-none header-btn-builder-custom px-4">
            Online Users
          </button>
          <div className="w-5/12 py-1 lg:flex hidden">
            <div className="rating flex gap-2 w-full h-full justify-center items-center rating-left-custom-css">
              <img src={Star} alt="" className="w-4 h-4" />
              <h1 className="text-xs">Star</h1>
            </div>
            <div className="rating flex gap-2 w-full h-full justify-center items-center rating-right-custom-css">
              <h1 className="text-xs">10,000</h1>
            </div>
          </div>
          <div className="xl:w-3/12 flex py-1 gap-2 items-center justify-evenly">
            <img src={Setting} alt="" className="w-4 h-4" />
            <img src={Bell} alt="" className="w-4 h-4" />
            <div className="relative w-9 h-9 border-2 border-solid border-slate-600 rounded-full overflow-hidden">
              {/* This div creates a circular shape */}
              {<img src={Mee} alt="" className="w-full h-full object-cover" />}
              {/* The image inside is stretched to cover the circular area */}
            </div>
            <h1 className="text-xs">Log out</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
