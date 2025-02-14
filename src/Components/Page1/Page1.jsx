import React from "react";
import "./Page1.css";

const Page1 = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="badge">
          <span className="badge-text">Smart Spending</span>
          <span className="badge-desc">Manage your spending effectively with Expenses Tracker 💰</span>
        </div>

        <h1 className="title">Effortlessly Track Your Expenses</h1>
        <p className="description">
          Log your daily expenses, get alerts when you're near your limits, and access comprehensive reports to stay on track.
        </p>

        <button className="cta-button">Create Your Account</button>

        <div className="users">
          <div className="user-avatars">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User 1" className="avatar"/>
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="User 2" className="avatar"/>
            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="User 3" className="avatar"/>
            <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="User 4" className="avatar"/>
            <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="User 5" className="avatar"/>
          </div>
          <p className="user-count">3,200 Users Optimizing Budgets</p>
        </div>
      </div>

      <div className="image-container">
        <img src="image.png" alt="Expense Tracker Visualization" className="background-image"/>
      </div>
    </div>
  );
};

export default Page1;
