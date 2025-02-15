import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./Dashboard-Details/Dashboard"
import { useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";
import React from 'react';
import AiExpert from "./DashboardPages/AiExpert";
import SearchDoctors from "./DashboardPages/SearchDoctors";
import DocotorPrescription from "./DashboardPages/DocotorPrescription";

// import { Route, Routes } from "react-router-dom"
// import { Link } from 'react-router-dom';
// ... other imports ...



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>

        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
        } />
        <Route path="/AiExpert" element={<AiExpert />} />
        <Route path="/SearchDoctors" element={<SearchDoctors />} />
        <Route path="/DoctorPrescription" element={<DocotorPrescription />} />
      </Routes>
      

    </div>
    )
}

export default App;
