import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow, faBreadSlice, faShrimp, faEgg } from '@fortawesome/free-solid-svg-icons';
import { GiPeanut } from 'react-icons/gi';
import '../App.css';
import '../styles/DishListItem.scss';
import FavoriteToggle from './FavoriteToggle';

function DishListItem(props) {
  const [isFavorite, setIsFavorite] = useState(props.isFav);
  const token = localStorage.getItem('authToken');



  const handleClick = () => {
    props.addDish(props.dish);
  };

  const updateFavoriteStatus = (status) => {
    setIsFavorite(status);
  };

  // Check if props.dish is defined before rendering
  if (!props.dish || !props.dish.id) {
    return null;
  }

  return (
    <div >
      <div className="dish-item-border container-size">
        <div className="side-by-side">
          <div >
            <button onClick={handleClick} className="add-button"> <strong>Add</strong></button>
            <img src={props.image_url} className="img-size" />
            <FavoriteToggle
              dish_id={props.dish.id} // Pass the dish ID as a prop
              isFav={props.isFav} // Pass whether it's favorited or not
              onUpdate={updateFavoriteStatus} // Pass a function to update favorite status
              isFavorite={isFavorite}
              setIsFavorite={setIsFavorite}
              setFavorites={props.setFavorites}
              favorites={props.favorites}
              dish={props.dish}
            />
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
    </div>

  );
}
export default DishListItem;