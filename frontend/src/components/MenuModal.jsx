import React, { useState } from 'react';
import "../styles/MenuModal.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'; // Include the faHeart icon
import axios from 'axios'; // Import axios for API requests

function MenuModal({ isOpen, onClose, imageUrl, title, description, price, token, dish_id, favorite_id, isFav }) {
  const [isFavorite, setIsFavorite] = useState(isFav);

  if (!isOpen) return null;

  const toggleFavorite = () => {
    if (isFavorite) {
      deleteFavorite(); // If it's a favorite, trigger deleteFavorite
    } else {
      addFavorite(); // If it's not a favorite, trigger addFavorite
    }
    setIsFavorite(!isFavorite); // Toggle the favorite state
  };

  const addFavorite = () => {
    // Make an API request to add the dish to favorites
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
        // Handle the response, maybe update the UI or show a message
      })
      .catch(error => {
        console.error('Error adding to favorites:', error);
      });
  };

  const deleteFavorite = () => {
    console.log("favoret_+_+_+_+", favorite_id);
    // Make an API request to delete the dish from favorites
    axios.delete(
      `http://localhost:3001/api/favorites/${favorite_id}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
      .then(response => {
        // Handle the response, maybe update the UI or show a message
      })
      .catch(error => {
        console.error('Error deleting from favorites:', error);
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
        <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          onClick={toggleFavorite}
          className={`heart-icon ${heartClass}`}
        />

        <button onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} /> {/* Use the FontAwesome icon */}
        </button>
      </div>
    </div>
  );
}

export default MenuModal;
