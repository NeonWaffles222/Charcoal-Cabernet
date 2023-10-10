import React, { useState } from 'react';
import "../styles/MenuModal.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'; // Include the faHeart icon
import FavoriteToggle from './FavoriteToggle';
import axios from 'axios';
function MenuModal({ isOpen, onClose, imageUrl, title, description, dish_id, favorite_id, price, token }) {
  const [isFavorite, setIsFavorite] = useState(false);

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
  const getFavoriteDishes = () => {
    axios.get('http://localhost:3001/api/favorites')
      .then(response => {
        // Handle the response here
        console.log('Favorite dishes:', response.data);
        if (Array.isArray(response.data)) {
          setIsFavorite(response.data);
        } else {
          console.error('Unexpected data structure:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching favorite dishes:', error);
      });

  };

  const heartClass = isFavorite ? 'favorite' : ''; // Add the 'favorite' class when it's favorited

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-image-container">
          <img src={imageUrl} alt="Dish" />
          <h1>{title}</h1>
        </div>

        <div className="modal-description-container">
          <p>{description}</p>
          <strong><h2>${price}</h2></strong>
          <FavoriteToggle
            dish_id={dish_id} // Pass the dish_id
            onUpdate={getFavoriteDishes}
            isFav={isFavorite} // Pass whether it's favorited or not
          />
        </div>

        <button onClick={onClose}>Close Modal</button>

      </div>
    </div>
  );

}

export default MenuModal;