import React from "react";
import "./Features.css";
import { FaShippingFast, FaGift, FaMap } from "react-icons/fa";

const features = [
  { icon: <FaShippingFast />, title: "Worldwide Shipping", description: "Essential Skills Every Basketball Player Needs" },
  { icon: <FaGift />, title: "Secured Payment", description: "Essential Skills Every Basketball Player Needs" },
  { icon: <FaMap />, title: "30-Days Free Returns", description: "Essential Skills Every Basketball Player Needs" }
];

const Features = () => {
  return (
    <div className="features-container mt-5 py-5">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <div className="feature-icon">{feature.icon}</div>
          <div className="feature-text">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
