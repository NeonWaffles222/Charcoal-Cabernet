// import React, { createContext, useState, useEffect } from "react";
// import axios from 'axios';

// export const favoriteContext = createContext();

// export default function FavoriteProvider(props) {
//   const [favorites, setFavorites] = useState([]);
//   const [jwtToken, setJwtToken] = useState(null);
//   const [isFavorite, setIsFavorite] = useState(isFav);


//   useEffect(() => {
//     const storedToken = localStorage.getItem('authToken');
//     console.log("stored++++", storedToken);
//     if (storedToken) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`; // Include the JWT token in the header
//       setJwtToken(storedToken);
//     }
//     getFavoriteDishes();
//   }, []);

//   const addFavorite = () => {
//     console.log("dishId+++++", dish_id);
//     axios.post(
//       'http://localhost:3001/api/favorites',
//       { dish_id: dish_id },
//       {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       }
//     )

//       .then(response => {
//         setIsFavorite(true); // Update only on success
//         alert("Added to favorites!");  // Notify user
//         getFavoriteDishes();

//       })
//       .catch(error => {
//         console.error('Error adding to favorites:', error);
//         alert("Error adding to favorites. Please try again.");
//       });
//   };

//   const deleteFavorite = () => {
//     console.log("favoret_+_+_+_+", favorite_id);
//     axios.delete(
//       `http://localhost:3001/api/favorites/${dish_id}`,
//       {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       }
//     )
//       .then(response => {
//         setIsFavorite(false); // Update only on success
//         alert("Removed from favorites!");  // Notify user
//       })
//       .catch(error => {
//         console.error('Error deleting from favorites:', error);
//         alert("Error removing from favorites. Please try again.");
//       });
//   };
//   const getFavoriteDishes = () => {
//     axios.get('http://localhost:3001/api/favorites')
//       .then(response => {
//         // Handle the response here
//         console.log('Favorite dishes:', response.data);
//         if (Array.isArray(response.data)) {
//           setFavorites(response.data);
//         } else {
//           console.error('Unexpected data structure:', response.data);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching favorite dishes:', error);
//       });

//   };

// const favoritesData = { favorites, jwtToken, addFavorite, deleteFavorite, getFavoriteDishes, isFavorite, setIsFavorite }
//   return (
//     <favoriteContext.Provider value={favoritesData}>
//       {props.children}
//     </favoriteContext.Provider>
//   )

// }