import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCow, faBreadSlice, faShrimp, faEgg, faSeedling, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import '../styles/DishListItem.scss';
function DishListItem(props) {
  const handleClick = function() {
    props.addDish(props.dish);
  };
  console.log(props.price);
  return (
    <div >
      <div className="dish-item-border container-size">
        <div className="side-by-side">
          <div >
            <button onClick={handleClick} className="add-button"> Add </button>
            <img src={props.image_url} className="img-size" />
            <div className="side-by-side">
            <p>${props.price}</p>
              {props.shellfish_allergen && <FontAwesomeIcon icon={faShrimp} size='2x' />}
              {props.gluten_allergen && <FontAwesomeIcon icon={faBreadSlice} size='2x' />}
              {props.dairy_allergen && <FontAwesomeIcon icon={faCow} size='2x' />}
              {props.eggs_allergen && <FontAwesomeIcon icon={faEgg} size='2x' />}
              {props.nuts_allergen && <p><strong>NUT PLACEHOLDER</strong></p>}
            </div>
          </div>
          <div>
            <h4>{props.name}</h4>
            <p>"{props.description}" - Head Chef</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishListItem;
{/* <FontAwesomeIcon icon={faHeart} size='2x' /> */ }