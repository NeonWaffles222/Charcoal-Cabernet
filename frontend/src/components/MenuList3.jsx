import React from 'react';
import Modal from './MenuModal';
import '../styles/styles.css';
import axios from 'axios';
import MenuListItem from './MenuListItem'; // Import your MenuListItem component here

function MenuList(props) {
  const { dishes } = props;

  return (
    <div className="menu">
      <h2 className="menu-title">Menu</h2>

      <div className="menu-items">
        {dishes.map((dish, index) => (
          <MenuListItem key={index} dish={dish} />
        ))}
      </div>
    </div>
  );
}

export default MenuList;
