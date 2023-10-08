// import React, { createContext, useContext, useState } from 'react';

// const FavoritesContext = createContext();

// export function useFavorites() {
//   return useContext(FavoritesContext);
// }

// export function FavoritesProvider({ children }) {
//   const [favorites, setFavorites] = useState([]);

//   const addFavorite = (dish) => {
//     setFavorites([...favorites, dish]);
//   };

//   const removeFavorite = (dishId) => {
//     setFavorites(favorites.filter((dish) => dish.id !== dishId));
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// }

