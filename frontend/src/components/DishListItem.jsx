import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCow, faBreadSlice, faShrimp, faEgg, faSeedling, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import FavoriteToggle from "./FavoriteToggle";
function DishListItem(props) {
  const handleClick = function() {
    props.addDish(props.dish);
  };

  return (
    <div className="border">
      <h1>{props.name}</h1>
      <div className="dish-card">
        <img src={props.image_url} className="img-size" />
        <div className="dish-info">
          <p>"{props.description}" - Head Chef</p>
          <div className="center-content"> {/* Wrap description */}
            <p>
              There are {props.quantity} {props.name}'s left. Don't miss out and
              add to your order now.
            </p>
          </div>
          <div className="center-content icons">
            {/* Icons */}
            <p>This dish may contain traces of the following</p>
            {props.shellfish_allergen && (
              <FontAwesomeIcon icon={faShrimp} size="2x" />
            )}
            {props.gluten_allergen && (
              <FontAwesomeIcon icon={faBreadSlice} size="2x" />
            )}
            {props.dairy_allergen && (
              <FontAwesomeIcon icon={faCow} size="2x" />
            )}
            {props.eggs_allergen && <FontAwesomeIcon icon={faEgg} size="2x" />}
            {props.nuts_allergen && <p><strong>NUT PLACEHOLDER</strong></p>}
          </div>
          <div className="center-content button">
            {/* Button */}
            <button onClick={handleClick}>Add Item to Order</button>
          </div>
          <FavoriteToggle dish_id={props.dish.id} />
        </div>
      </div>
    </div>
  );
}
export default DishListItem;