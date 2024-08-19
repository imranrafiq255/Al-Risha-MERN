import React from "react";
import "./SignUp.css";
import SignUpImage from "../../Assets/SignUp.jpeg";
import { useNavigate } from "react-router-dom";
// import HorizontalLogo from "../../Assets/Horizontal-logo.png";
import VerticalLogo from "../../Assets/Vertical-logo.png";
const SignUp = () => {
  const navigate = useNavigate();
  const signInNavigator = () => {
    navigate("/signin");
  };
  return (
    <>
      <div className="signup-container w-screen h-screen flex justify-center">
        <div className="left hidden lg:block lg:w-6/12 h-[88%] p-10 ">
          <img
            src={SignUpImage}
            alt=""
            className="w-full h-full object-fit rounded-3xl"
          />
        </div>
        <div className="right w-full lg:w-6/12 flex flex-col justify-center items-center">
          <div className="logo">
            <img src={VerticalLogo} alt="" className="w-64 h-64" />
          </div>
          <div className="form w-full lg:w-8/12 p-10">
            <h1 className="text-2xl font-bold">SignUp</h1>
            <h1 className="text-sm mt-3">
              Enter your name and email to register
            </h1>
            <input
              type="text"
              className=" mt-14 outline-none border-solid border-slate-600 w-full h-10 px-2 borderad border-width-custom"
              placeholder="Name"
            />
            <input
              type="email"
              className=" mt-6 outline-none border-solid border-slate-600 w-full h-10 px-2 borderad border-width-custom"
              placeholder="Email"
            />
            <input
              type="password"
              className=" mt-6 outline-none border-solid border-slate-600 w-full h-10 px-2 borderad border-width-custom"
              placeholder="Password"
            />
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className=" checkbox-label hidden-custom mt-4 cursor-pointer"
              />
              <h1 className="mt-4 font-extralight cursor-pointer">
                I agree the{" "}
                <span className=" text-base font-bold">
                  Terms and Conditions
                </span>
              </h1>
            </div>
            <button className="w-full h-12 custom-yellow-background border-none mt-8 hover:bg-sky-500 text-white btn-radius-custom">
              SIGN UP
            </button>
            <h1 className="text-center mt-4">
              Already have an account{" "}
              <span
                className="ml-1 font-bold custom-yellow-color hover:underline cursor-pointer"
                onClick={signInNavigator}
              >
                Sign In
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
