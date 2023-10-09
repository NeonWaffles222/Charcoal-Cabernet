import React, { useState } from 'react';
import "../styles/MenuModal.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'; // Include the faHeart icon
import axios from 'axios'; // Import axios for API requests
import FavoriteToggle from './FavoriteToggle';

function MenuModal({ isOpen, onClose, imageUrl, title, description, price, token, dish_id, favorite_id, isFav }) {
  const [isFavorite, setIsFavorite] = useState(isFav);
  console.log("fav+++++++", isFav);
  if (!isOpen) return null;

  const toggleFavorite = () => {
    if (isFavorite) {
      deleteFavorite();
    } else {
      addFavorite();
    }
  };

  const addFavorite = () => {
    console.log("dishId+++++", dish_id);
    axios.post(
      'http://localhost:3001/api/favorites',
      { dish_id: dish_id },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )

      .then(response => {
        setIsFavorite(true); // Update only on success
        alert("Added to favorites!");  // Notify user
        // getFavoriteDishes();

      })
      .catch(error => {
        console.error('Error adding to favorites:', error);
        alert("Error adding to favorites. Please try again.");
      });
  };

  const deleteFavorite = () => {
    console.log("favoret_+_+_+_+", favorite_id);
    axios.delete(
      `http://localhost:3001/api/favorites/${dish_id}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
      .then(response => {
        setIsFavorite(false); // Update only on success
        alert("Removed from favorites!");  // Notify user
      })
      .catch(error => {
        console.error('Error deleting from favorites:', error);
        alert("Error removing from favorites. Please try again.");
      });
  };

  const heartClass = isFavorite ? 'favorite' : ''; // Add the 'favorite' class when it's favorited

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={imageUrl} alt="Dish" />
        <h1>{title}</h1>
        <p>{description}</p>
        <strong><h2>${price}</h2></strong>

        {/* Toggleable heart icon with conditional CSS class */}
        {/* <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          onClick={toggleFavorite}
          className={`heart-icon ${heartClass}`}
        /> */}
        <FavoriteToggle
          dish_id={dish_id}

        />
        <button onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} /> {/* Use the FontAwesome icon */}
        </button>
      </div>
    </div>
  );
}

export default MenuModal;
