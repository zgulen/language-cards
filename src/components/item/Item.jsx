import { useState } from "react";
import "./item.css"

const Item = ({ card }) => {
    const [showCard, setShowCard] = useState(true)
    const {name, img,options} = card
    console.log(img);
    
  return (
    <div className="card" onClick={() => setShowCard(!showCard)}>
        {
            showCard ? <div>
        <img className="cards-logo" src={img} alt= {name} />
        <h3 className="cards-title">{name}</h3>
        </div>: <ul>
            {options.map((e,i)=>{
                    return(
                        <li key={i}>{e}</li>
                    )
                })
            }
        </ul>
        }
    </div>
  )
}

export default Item