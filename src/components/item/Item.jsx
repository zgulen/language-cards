import { useState } from "react";
import "./item.css"

const Item = ({ card }) => {
    const {name, img,options} = card
    console.log(img);
    
  return (
    <div className="card">
        <img className="cards-logo" src={img} alt= {name} />
        <h3 className="cards-title">{name}</h3>
    </div>
  )
}

export default Item