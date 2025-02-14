import Section1Cards from "../components/Section1Cards";
import { FaBell, FaUserCog, FaUserClock } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import "./../components/Section1.css";

const Section1 = () => {
  const RenderSection1 = [
    {
      title: "Streamlined Expense Logging",
      description:
        "Easily document your daily expenses, ensuring that you're always aware of how much you're spending and where.",
      icon: <FaUserClock className="icon" />,
    },
    {
      title: "Budget Limit Notifications",
      description:
        "Get notified before you surpass your set limits, helping you stay on top of your finances and make well-informed decisions.",
      icon: <FaUserCog className="icon" />,
    },
    {
      title: "Comprehensive Reports",
      description:
        "Review detailed reports summarizing your financial activities, giving you insights into your spending patterns over time.",
      icon: <FaBell className="icon" />,
    },
    {
      title: "Tailored Personal Dashboard",
      description:
        "Customize your user profile and receive personalized insights that guide you towards achieving your financial objectives.",
      icon: <TiDocumentText className="icon" />,
    },
  ];

  return (
    <div className="section1Container">
      <h2>
        Take Control of Your <button>Expenses</button> Efficiently
      </h2>

      <div className="section1card">
        {RenderSection1.map((item, index) => (
          <Section1Cards key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Section1;