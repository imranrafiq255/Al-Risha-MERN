import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Venders from "./Components/Venders/Venders";
import Project from "./Components/Project/Project.js";
import Notification from "./Components/Notification/Notification";
import Maintain from "./Components/Maintain/Maintain";
import Salary from "./Components/Salary/Salary.js";
import Vehicle from "./Components/Vehicle/Vehicle.js";
import Profile from "./Components/Profile/Profile.js";
import AddEmployee from "./Components/AddEmployee/AddEmployee.js";
import DisplayEmployee from "./Components/DisplayEmployee/DisplayEmployee.js";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/venders" element={<Venders />} />
          <Route path="/project" element={<Project />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/Maintain" element={<Maintain/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addemployee" element={<AddEmployee/>} />
          <Route path="/displayemployee" element={<DisplayEmployee/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
