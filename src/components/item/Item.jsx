import { useEffect, useState } from "react";
import "./item.css"

const Item = ({ card }) => {
    const [showCard, setShowCard] = useState(true)
    const {name, img,options} = card
    console.log(img);
    useEffect(() => {
        let spinner
        if (showCard === false){
            spinner = setTimeout(() => {
                    setShowCard(!showCard)
                }, 5000);
            }
            return () => clearTimeout(spinner);
        
    },[showCard])

    const handleCard = () => {
        setShowCard(!showCard)
    }
    
  return (
    <div className="card" onClick={handleCard}>
        {
            showCard ? (<div>
        <img className="cards-logo" src={img} alt= {name} />
        <h3 className="cards-title">{name}</h3>
        </div> ): (<ul>
            {options.map((e,i)=>{
                    return(
                        <li key={i}>{e}</li>
                    )
                })
            }
        </ul>)
        }
    </div>
  )
}

export default Item