import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCow, faBreadSlice, faShrimp, faEgg, faSeedling, faHeart } from '@fortawesome/free-solid-svg-icons';
import { GiPeanut } from 'react-icons/gi';
import '../App.css';
import '../styles/DishListItem.scss';
import FavoriteToggle from "./FavoriteToggle";

function DishListItem(props) {
  const handleClick = function() {
    props.addDish(props.dish);
  };

  return (
    <div >
      <div className="dish-item-border container-size">
        <div className="side-by-side">
          <div >
            <button onClick={handleClick} className="add-button"> <strong>Add</strong></button>
            <img src={props.image_url} className="img-size" />
            <div className="side-by-side">
              <strong><p>${props.price}</p></strong>
              {props.shellfish_allergen && <FontAwesomeIcon icon={faShrimp} size='lg' />}
              {props.gluten_allergen && <FontAwesomeIcon icon={faBreadSlice} size='lg' />}
              {props.dairy_allergen && <FontAwesomeIcon icon={faCow} size='lg' />}
              {props.eggs_allergen && <FontAwesomeIcon icon={faEgg} size='lg' />}
              {props.nuts_allergen && <p><strong><GiPeanut /></strong></p>}
            </div>
          </div>
          <div>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <FavoriteToggle />
    </div>

  );
}
export default DishListItem;