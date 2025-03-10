import React from "react";
import "./Vid.css"; // Import CSS for styling

const Vid = ({ videoId }) => {
  return (
    <div className="video-container mt-5">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Vid;