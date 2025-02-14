import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Expenses Tracker</h3>
        <p>
          This website helps people manage their daily expenses and notifies
          them when they exceed their spending limits.
        </p>
      </div>

      <div className="footer-section">
        <h3>Explore</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Help & Support</a></li>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Log In</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Features</h3>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Expenses Tracker.</p>
      </div>
    </footer>
  );
};

export default Footer;
