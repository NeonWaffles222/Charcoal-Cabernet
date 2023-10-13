import React, { useEffect } from "react";
import DishListItem from "./DishListItem";
import '../styles/DishList.scss';
import SearchAndCheckBox from './Allergen';
import Category from './Category';
import { useState } from "react";
import Allergen from "./Allergen";
import '../styles/Allergen.scss';
import axios from "axios";

const DishList = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [favorites, setFavorites] = useState([]);



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

  useEffect(() => {
    getFavoriteDishes();
  }, []);


  // Filter the dishes based on the selected tab
  const filteredDishes = props.dish.dishes.filter((dish) => {

    return dish.category_id === selectedTab;
  });

  const handleTabChange = (newValue) => {
    setSelectedTab(newValue);
  };
  //When you select a tab
  const FilteredDishArray = filteredDishes.map((dish, index) => {
    const results = favorites.find((favorite) => favorite.id === dish.id);
    const isFavorite = results ? 1 : 0;
    return <DishListItem
      setFavorites={setFavorites}
      key={index}
      id={dish.id}
      name={dish.name}
      category_id={dish.category_id}
      description={dish.description}
      image_url={dish.image_url}
      isActive={dish.isActive}
      price={dish.price}
      quantity={dish.quantity}
      nuts_allergen={dish.nuts_allergen}
      dairy_allergen={dish.dairy_allergen}
      eggs_allergen={dish.eggs_allergen}
      gluten_allergen={dish.gluten_allergen}
      shellfish_allergen={dish.shellfish_allergen}
      dish={dish}
      addDish={props.addDish}
      isFav={isFavorite}
      favorites={favorites}

    />;
  });
  //Need to have this because categories doesn't include an all category id
  const DishArray = props.dish.dishes.map((dish, index) => {
    const results = favorites.find((favorite) => favorite.id === dish.id);
    const isFavorite = results ? 1 : 0;
    return <DishListItem
      setFavorites={setFavorites}
      key={index}
      id={dish.id}
      name={dish.name}
      category_id={dish.category_id}
      description={dish.description}
      image_url={dish.image_url}
      isActive={dish.isActive}
      price={dish.price}
      quantity={dish.quantity}
      nuts_allergen={dish.nuts_allergen}
      dairy_allergen={dish.dairy_allergen}
      eggs_allergen={dish.eggs_allergen}
      gluten_allergen={dish.gluten_allergen}
      shellfish_allergen={dish.shellfish_allergen}
      dish={dish}
      addDish={props.addDish}
      isFav={isFavorite}
      favorites={favorites}

    />;
  });




  return (
    <div>
      {/* <SearchAndCheckBox /> */}
      <Category onTabChange={handleTabChange} />
      <h3 className="allergen-warning">Dishes with these icons may contain the following allergens</h3>
      <Allergen />
      <ul className="dish-list-grid">
        {!selectedTab ? DishArray : FilteredDishArray}
      </ul>
    </div>
  );
};

export default DishList;