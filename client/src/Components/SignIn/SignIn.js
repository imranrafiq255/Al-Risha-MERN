import React, { useState } from "react";
import "./SignIn.css";
import Google from "../../Assets/google.png";
import Facebook from "../../Assets/facebook.png";
import Github from "../../Assets/github.png";
import { useNavigate } from "react-router-dom";
import HorizontalLogo from "../../Assets/Horizontal-logo.png";
import BgSignUpCover from "../../Assets/bg-sign-up-cover.jpeg"; // Import your background image

const SignIn = () => {
  const [isRemember, setRemember] = useState(false);
  const rememberToggleHandler = () => {
    setRemember(!isRemember);
  };
  const navigate = useNavigate();
  const signUpNavigator = () => {
    navigate("/signup");
  };

  return (
    <>
      <div
        className="signin-container h-screen w-screen background-custom flex justify-center items-center"
        style={{ backgroundImage: `url(${BgSignUpCover})` }}
      >

        <div className="form w-3/12 height-custom bg-white shadow-xl relative">
          <div className="top-of-form absolute width-custom h-36 custom-yellow-background -top-5 left-5 rounded-md flex justify-center items-center flex-col">
            <h1 className="text-white text-2xl font-bold">Sign in</h1>
            <div className="social-icons flex gap-5 mt-6">
              <img
                src={Google}
                alt=""
                className="w-5 h-5 invert cursor-pointer hover:invert-0"
              />
              <img
                src={Github}
                alt=""
                className="w-5 h-5 invert cursor-pointer hover:invert-0"
              />
              <img
                src={Facebook}
                alt=""
                className="w-5 h-5 invert cursor-pointer hover:invert-0"
              />
            </div>
          </div>
          <div className="p-7 mt-40">
            <input
              type="email"
              className=" outline-none border-solid border-slate-600 w-full h-10 px-2 borderad border-width-custom"
              placeholder="Email"
            />
            <input
              type="password"
              className=" mt-6 outline-none border-solid border-slate-600 w-full h-10 px-2 borderad border-width-custom"
              placeholder="Password"
            />
          </div>
          <div className="remember-toggle px-7 flex items-center gap-3 ">
            <div className="toggle w-10 h-4 bg-slate-700 relative rounded-3xl">
              <div
                className={`${isRemember ? "translate-x-full" : "translate-x-0"
                  } toggle-circle w-5 h-5 bg-slate-100 absolute -top-0.5 rounded-full border-slate-600 border-2 cursor-pointer transform transition-transform ease-in-out duration-300`}
                onClick={rememberToggleHandler}
              ></div>
            </div>
            <h1>Remember me</h1>
          </div>
          <div className="px-7">
            <button className="w-full h-12 custom-yellow-background border-none mt-8 hover:bg-sky-400 text-white btn-radius-custom">
              SIGN IN
            </button>
            <h1 className="text-center mt-4">
              Already have an account?{" "}
              <span
                className="ml-1 font-bold custom-yellow-color hover:underline cursor-pointer"
                onClick={signUpNavigator}
              >
                Sign Up
              </span>
            </h1>
          </div>
        </div>
        <div className="logo absolute top-20 left-28">
          <img src={HorizontalLogo} alt="" className="w-40 h-40" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
