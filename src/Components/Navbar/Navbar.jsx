import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Expenses Tracker</div>

      {/* Desktop Menu */}
      <div className="navbar-menu">
        <a href="/Login">Log In</a>
        <a href="#">Features</a>
        <a href="#">Settings</a>
        <a href="#">Support</a>
        <a href="#">About Us</a>
        <a href="#" className="navbar-button">Sign Up</a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="navbar-hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${open ? "active" : ""}`}>
        <a href="/Login">Log In</a>
        <a href="#">Features</a>
        <a href="#">Settings</a>
        <a href="#">Support</a>
        <a href="#">About Us</a>
        <a href="#" className="navbar-button">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;