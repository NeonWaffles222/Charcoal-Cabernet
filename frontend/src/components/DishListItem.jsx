import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow, faBreadSlice, faShrimp, faEgg } from '@fortawesome/free-solid-svg-icons';
import { GiPeanut } from 'react-icons/gi';
import '../App.css';
import '../styles/DishListItem.scss';
import FavoriteToggle from './FavoriteToggle';

function DishListItem(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const token = localStorage.getItem('authToken');

  // useEffect(() => {
  //   // Check if the dish is favorited when the component mounts
  //   if (props.dish && props.dish.id) { // Check if props.dish is defined and has an 'id'
  //     axios
  //       .get(`http://localhost:3001/api/favorites/${props.dish.id}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((response) => {
  //         setIsFavorite(response.data.length > 0); // Set isFavorite based on the response
  //       })
  //       .catch((error) => {
  //         console.error('Error checking favorite status:', error);
  //       });
  //   }
  // }, [props.dish, token]); // Run this effect whenever props.dish or token changes

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
          <div>
            <button onClick={handleClick} className="add-button"> <strong>Add</strong></button>
            <img src={props.image_url} onClick={handleClick} className="img-size cursor-for-items" />
            <div className="favorite-button">
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
            </div>
            <div className="side-by-side">
              <strong><p>${props.price}</p></strong>
              {props.shellfish_allergen && <FontAwesomeIcon icon={faShrimp} size='lg' />}
              {props.gluten_allergen && <FontAwesomeIcon icon={faBreadSlice} size='lg' />}
              {props.dairy_allergen && <FontAwesomeIcon icon={faCow} size='lg' />}
              {props.eggs_allergen && <FontAwesomeIcon icon={faEgg} size='lg' />}
              {props.nuts_allergen && <p><strong><GiPeanut /></strong></p>}
            </div>
          </div>
          <div className='dish-item-text'>
            <p className='link-font-item'>{props.name}</p>
            <p className='description-text'>{props.description}</p>
          </div>
        </div>
      </div>
    </div>

  );
}
export default DishListItem;