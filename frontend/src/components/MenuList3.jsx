import React from 'react';
import Modal from './MenuModal';
import '../styles/styles.css';
import axios from 'axios';
import MenuListItem from './MenuListItem'; // Import your MenuListItem component here
import { useCategorizeDishes } from '../hooks/useCategorizedDishes';
function MenuList(props) {

  const { dishes, categories } = props;

  const allMenuItems = useCategorizeDishes(dishes, categories);
  console.log(allMenuItems);
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

              {categoryDishes.map((dish, dishIndex) => (
                <MenuListItem key={dishIndex} dish={dish} />
              ))}

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default MenuList;
