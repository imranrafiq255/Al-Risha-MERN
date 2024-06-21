import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Venders from "./Components/Venders/Venders";
import Project from "./Components/Project/Project";
import Notification from "./Components/Notification/Notification";
import Maintain from "./Components/Maintain/Maintain";
import Salary from "./Components/Salary/Salary";
import Vehicle from "./Components/Vehicle/Vehicle";
import Profile from "./Components/Profile/Profile";
import AddEmployee from "./Components/AddEmployee/AddEmployee";
import DisplayEmployee from "./Components/DisplayEmployee/DisplayEmployee";
import EditEmployee from "./Components/EditEmployee/EditEmployee"; // Ensure this path is correct

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
          <Route path="/maintain" element={<Maintain />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/displayemployee" element={<DisplayEmployee />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} /> {/* Correct path */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
