import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DishList from './DishList';
import FavoriteList from './FavoriteList';
function FavoriteDishes() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/favorites')
      .then((response) => {
        console.log("++++++++", response);
        if (Array.isArray(response.data)) {
          setFavorites(response.data);
        } else {
          console.error('Unexpected data structure:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching favorites:', error);
      });
  }, []);

  return (
    <div>

      <ul>

        <FavoriteList
          favorites={favorites}

        />

        {/* // <li key={favorite.id}>
          //   <img src={favorite.image_url} alt={favorite.name} />
          //   <h3>{favorite.name}</h3>
          //   <p>{favorite.description}</p>
          //   <p>Price: ${favorite.price}</p>
          // </li> */}

      </ul>
    </div>
  );
}
export default FavoriteDishes;