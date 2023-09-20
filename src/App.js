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
import DocotorMeeting from "./DashboardPages/DocotorMeeting";
import Emergency from "./DashboardPages/Emergency";
import CheckupHistory from "./DashboardPages/CheckupHistory";
import DoctorRecommendedByAi from "./DashboardPages/DoctorRecommendedByAi";
import Analysis from "./DashboardPages/Analysis";


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
        <Route path="/DoctorMeeting" element={<DocotorMeeting />} />
        <Route path="/Emergency" element={<Emergency />} />
        <Route path="/CheckUpHistory" element={<CheckupHistory />} />
        <Route path="/DoctorRecommendedByAi" element={<DoctorRecommendedByAi />} />
        <Route path="/Analysis" element={<Analysis />} />
      </Routes>
      

    </div>
    )
}

export default App;
