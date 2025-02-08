import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Section2 = () => {
  const CardsData = [
    {
      id: 1,
      image:
        "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/d11200ec-d738-416e-1b84-69cbea24ba00/public",
      title: "Effortless Expense Logging",
      description:
        "Easily enter your daily expenses to stay organized and gain insight into your financial habits.",
    },
    {
      id: 2,
      image:
        "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a0238b44-c82f-4386-691c-96b8a6c8a000/publicContain",
      title: "Smart Budget Alerts",
      description:
        "Receive alerts tailored to your budget, empowering you to make informed financial decisions.",
    },
    {
      id: 3,
      image:
        "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a0da4338-194a-43a8-ffd1-e31abb65cd00/public",
      title: "Comprehensive Financial Reports",
      description:
        "Explore detailed insights into your spending through reports that help you understand and refine your budget.",
    },
  ];

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#B8B3B3",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "black",
            padding: 10,
            fontWeight: "700",
            fontSize: 25,
            width: "100%",
          }}
        >
          Master Your Spending with Our Expense Tracker
        </div>
        <div
          style={{
            color: "black",
            padding: 10,
            fontWeight: "200",
            fontSize: 20,
          }}
        >
          Take charge of your financial health by easily tracking daily expenses
          and setting personalized budgets. Get timely reminders when you're
          approaching your spending limits.
        </div>
      </div>

      <div
        style={{
          height: "20%",
          width: "50%",
          display: "flex",
        }}
      >
        {CardsData.map((item, index) => (
          <Cards item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

const Cards = ({ item, index }) => {
  return (
    <div
      style={{
        justifyItems: "center",
        alignItems: "center",
        flex: 1,
        padding: 20,
        border: "1px solid #f2f3f5",
        borderRadius: 10,
        position: "relative",
        backgroundColor: "#f2f3f5",
        margin: 5,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "20vh",
          width: "25vw",
          flex: 1,
        }}
      ></div>
      <div style={{ flexDirection: "column", display: "flex" }}>
        <text
          style={{
            color: "black",
            fontWeight: "700",
            fontSize: 22,
            paddingBottom: 5,
          }}
        >
          {item.title}
        </text>
        <text
          style={{
            color: "black",
            fontWeight: "400",
            fontSize: 18,
            textAlign: "justify",
            lineHeight: 1.5,
          }}
        >
          {item.description}
        </text>
      </div>

      <div style={{ position: "absolute", top: "40%", right: "2%" }}>
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "green",
            border: "0px solid #3599db",
            padding: 5,
            borderRadius: 50,
            backgroundColor: "#3599db",
          }}
        >
          <FaRegHeart color="white" size={35} style={{ alignSelf: "center" }} />
        </div>
      </div>
    </div>
  );
};
export default Section2;
