import React from "react";
import "./Card.css";

import Card from "./Card";



const CardContainer = () => {
  return (
    <div className="container-fluid">
     
        <div className="row">
            <div className="col-lg-6">

        <Card contentNumber={0} />
            </div>
            <div className="col-lg-6">

        <Card contentNumber={1} />
            </div>
        </div>
      
    </div>
  );
};

export default CardContainer;