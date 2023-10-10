import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DishList from './DishList';
import FavoriteList from './FavoriteList';
import "../styles/Favorite.css";

function FavoriteDishes(props) {
  const [favorites, setFavorites] = useState([]);
  const [jwtToken, setJwtToken] = useState(null);


  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`; // Include the JWT token in the header
      setJwtToken(storedToken);
    }

    getFavoriteDishes();
  }, []);



  const getFavoriteDishes = () => {
    axios.get('http://localhost:3001/api/favorites')
      .then(response => {
        // Handle the response here
        console.log('Favorite dishes:', response.data);
        if (Array.isArray(response.data)) {
          setFavorites(response.data);
        } else {
          console.error('Unexpected data structure:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching favorite dishes:', error);
      });

  };



  return (
    <div>

      <ul>

        <FavoriteList
          favorites={favorites}
          addDish={props.addDish}
          setFavorites={setFavorites}
        />



      </ul>
    </div>
  );
}
export default FavoriteDishes;