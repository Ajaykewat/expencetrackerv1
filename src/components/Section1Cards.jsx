import "./Section1.css";
const Section1Cards = ({ item, key }) => {
  return (
    <div key={key} className="notification-container">
      <div className="icon-wrapper">{item.icon}</div>
      <div className="text-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Section1Cards;