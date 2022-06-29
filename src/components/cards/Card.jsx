import "./card.css";
import {languages} from "../../utill/data"
import Item from "../item/Item";

const Card = ({ data }) => {
  

  return <div className="cards-area-container">
    <div className="bars"></div>
    <h1 className="language-title">Languages</h1>
    <div className="cards-container">
  {languages.map((e,i) => {
    return (
      <Item card={ e } key={i}/>
    )
  })}
    </div>
  </div>;
};

export default Card;
