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
import EditEmployee from "./Components/EditEmployee/EditEmployee";
import Company from "./Components/Company/Company"; 
import State from './Components/State/StateOfIssuance'; 
import Gender from "./Components/Gender/Gender";
import Shift from "./Components/Shift/Shift";
import Nationality from "./Components/Nationality/Nationality";
import Guarantor from "./Components/Guarantor/Guarantor";
import NocStatus from "./Components/NocStatus/NocStatus"; 
import JobType from "./Components/Jobtype/jobtype"; 

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
          <Route path="/jobtype" element={<JobType />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/maintain" element={<Maintain />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/displayemployee" element={<DisplayEmployee />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
          <Route path="/company" element={<Company />} />
          <Route path="/state" element={<State/>} />
          <Route path="/gender" element={<Gender />} />
          <Route path="/shifts" element={<Shift />} />
          <Route path="/nationality" element={<Nationality />} />
          <Route path="/guarantor" element={<Guarantor />} />
          <Route path="/noc-status" element={<NocStatus />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
