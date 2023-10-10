import React, { useState, useEffect } from "react";
import DishListItem from "./DishListItem";
import '../styles/DishList.scss';
function FavoriteList({ favorites, addDish, }) {
  // const results = favorites.find((favorite) => favorite.id === dish.id);
  // const isFavorite = results ? 1 : 0;
  return (
    <div>
      <h2>Your Favorite Dishes</h2>
      <ul>
        {favorites.map((favorite) => (
          <DishListItem
            key={favorite.id}
            name={favorite.name}
            category_id={favorite.category_id}
            description={favorite.description}
            image_url={favorite.image_url}
            isActive={favorite.isActive}
            price={favorite.price}
            quantity={favorite.quantity}
            nuts_allergen={favorite.nuts_allergen}
            dairy_allergen={favorite.dairy_allergen}
            eggs_allergen={favorite.eggs_allergen}
            gluten_allergen={favorite.gluten_allergen}
            shellfish_allergen={favorite.shellfish_allergen}
            dish={favorite} // Pass the favorite dish as a prop
            addDish={addDish}
            isFav={1}
          />
        ))}
      </ul>
    </div>
  );
}

export default FavoriteList;
