import React from "react";
import DishListItem from "./DishListItem";
import '../styles/DishList.scss';
import SearchAndCheckBox from './Allergen';
import Category from './Category';
import { useState } from "react";

const DishList = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  // Filter the dishes based on the selected tab
  const filteredDishes = props.dish.dishes.filter((dish) => {
    return dish.category_id === selectedTab;
  });

  const handleTabChange = (newValue) => {
    setSelectedTab(newValue);
  };
// console.log(props)
  //When you select a tab
  const FilteredDishArray = filteredDishes.map((dish, index) => {
    return <DishListItem
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
    />;
  });
  //Need to have this because categories doesn't include an all category id
  const DishArray = props.dish.dishes.map((dish, index) => {
    return <DishListItem
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
    />;
  });




  return (
    <div>
      {/* <SearchAndCheckBox /> */}
      <Category onTabChange={handleTabChange} />
      <ul>
        {!selectedTab  ? DishArray : FilteredDishArray}
      </ul>
    </div>
  );
};

export default DishList;