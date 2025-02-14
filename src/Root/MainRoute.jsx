import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Navbar from "../Components/Navbar/Navbar";
 

function MainRoute() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default MainRoute;
