import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function FavoriteToggle({ dish_id, onUpdate, isFav, isFavorite, setIsFavorite, setFavorites, favorites, dish }) {

  const token = localStorage.getItem('authToken');

  const toggleFavorite = () => {
    if (favorites.filter((favorite) => favorite.id === dish_id).length > 0) {
      // Delete the favorite
      axios.delete(
        `http://localhost:3001/api/favorites/${dish_id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
        .then(response => {
          setIsFavorite(false);
          if (onUpdate) onUpdate();
          setFavorites(favorites.filter((favorite) => favorite.id !== dish_id));
          // alert("Removed from favorites!");
        })
        .catch(error => {
          console.error('Error deleting from favorites:', error);
          alert("Error removing from favorites. Please try again.");
        });
    } else {
      // Add the favorite
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
          setIsFavorite(true);
          setFavorites([...favorites, dish]);
          // alert("Added to favorites!");
        })
        .catch(error => {
          console.error('Error adding to favorites:', error);
          alert("Error adding to favorites. Please try again.");
        });
    }
  };

  const heartClass = isFavorite || isFav === 1 ? 'favorite' : '';

  return (
    <button onClick={toggleFavorite} className='fav-button-box'>
      <FontAwesomeIcon
        icon={faHeart}
        size="2x"
        className={`heart-icon ${heartClass}`}
      />
      {isFavorite || isFav === 1 ? 'Remove Favorite' : ' Add Favorite'}
    </button>
  );
}

export default FavoriteToggle;
