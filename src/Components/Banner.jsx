import React from "react";
import "./Banner.css"; // Import CSS for styling

const Banner = () => {
  return (
    <div className="banner ">
      <div className="banner-overlay">
        <span className="banner-tag">EXCLUSIVE</span>
        <h1 className="fs-1">Essential Skills Every Basketball Player Needs</h1>
        <button className="explore-btn mt-3">Explore Now</button>
      </div>
    </div>
  );
};

export default Banner;
