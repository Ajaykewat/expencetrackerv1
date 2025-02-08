import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Section3 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/576880b1-8df6-43a6-169c-5566062a1f00/public)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "30vh",
        width: "100vw",
        position: "relative",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "10px",
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "white",
              padding: 10,
              fontWeight: "700",
              fontSize: 35,
              width: "100%",
              textAlign: "center",
            }}
          >
            Take Control of Your Spending with Our Comprehensive Expenses
            Tracker!
          </div>
          <button
            style={{
              backgroundColor: "#3599db",
              padding: "15px",
              borderRadius: 15,
              border: "1px solid #3599db",
            }}
          >
            Start Tracking Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
