import React from 'react'
import { card_data } from '../data/card_data'
import  CardContainer from "./CardContainer";
const Card = ({ contentNumber }) => {
  return (
    <>
    
    <div 
  className="card rounded-0 border-0" 
  style={{ 
    backgroundImage: card_data[contentNumber]?.image_url 
      ? `url(${card_data[contentNumber].image_url})` 
      : "none" 
  }}
>

      <div className="card-data">
        <span className="exclusive">Exclusive</span>
        <h2 className='text-center fw-bold fs-2'>{card_data[contentNumber]?.title || "Default Title"}</h2>

        <button className="shop-button">Shop Now</button>
      </div>
    </div>

    </>
  )
}

export default Card