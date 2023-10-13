import React, { useState, useEffect } from 'react';
import ModalMenu from './MenuModal';
import '../styles/styles.css';
import axios from 'axios';
import MenuListItem from './MenuListItem'; // Import your MenuListItem component here
import { useCategorizeDishes } from '../hooks/useCategorizedDishes';

export default function MenuList(props) {

  const { dishes, categories } = props;

  const allMenuItems = useCategorizeDishes(dishes, categories);
  const [jwtToken, setJwtToken] = useState(null);
  const [favorites, setFavorites] = useState([]);

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
    <div className="menu">
      <h2 className="menu-title">Menu</h2>

      <div className="">
        {Object.entries(allMenuItems).map(([categoryName, categoryDishes], index) => (
          <div key={index}>
            <h3 className="menu-category">
              {categoryName}
            </h3>
            <hr />
            <div className="menu-items">

              {categoryDishes.map((dish, dishIndex) => {

                const results = favorites.find((favorite) => favorite.id === dish.id);
                const isFavorite = results ? 1 : 0;

                return <MenuListItem
                  key={dishIndex + dish.id}
                  dish={dish}
                  jwtToken={jwtToken}
                  isFavorite={isFavorite}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />;
              })}

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

