import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FavoriteDishes() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/favorites')
      .then((response) => {
        console.log("++++++++", response);
        setFavorites(response.data);
      })
      .catch((error) => {
        console.error('Error fetching favorites:', error);
      });
  }, []);

  return (
    <div>
      <h2>Your Favorite Dishes</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteDishes;
