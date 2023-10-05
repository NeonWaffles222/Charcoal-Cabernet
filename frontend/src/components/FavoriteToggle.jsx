import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function FavoriteToggle({ dishId, token, isFavorite, onUpdate }) {
  const toggleFavorite = () => {
    if (isFavorite) {
      // Delete the favorite
      axios
        .delete(`http://localhost:3001/api/favorites/${dishId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          onUpdate(!isFavorite); // Toggle the favorite state
        })
        .catch((error) => {
          console.error('Error deleting from favorites:', error);
        });
    } else {
      // Add the favorite
      axios
        .post(
          'http://localhost:3001/api/favorites',
          { dish_id: dishId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          onUpdate(!isFavorite); // Toggle the favorite state
        })
        .catch((error) => {
          console.error('Error adding to favorites:', error);
        });
    }
  };

  return (
    <button onClick={toggleFavorite}>
      <FontAwesomeIcon icon={faHeart} size="1x" />
      {isFavorite ? ' Remove from Favorites' : ' Add to Favorites'}
    </button>
  );
}

export default FavoriteToggle;
