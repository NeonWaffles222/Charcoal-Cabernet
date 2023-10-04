import React, { useState, useEffect } from 'react';
import Modal from './MenuModal';
import '../styles/styles.css';
import axios from 'axios';
import DishListItem from './DishListItem'; // Import your DishListItem component here

function MenuList(props) {
  const [modalOpen, setModalOpen] = useState(false);

  // Assuming you have an array of dishes in props
  const { dishes } = props;

  return (
    <div className="menu">
      <h2 className="menu-title">Menu</h2>

      <div className="menu-items">
        {dishes.map((dish, index) => (
          <div>
            <a onClick={() => setModalOpen(true)}>{dish.name}</a> <strong>- {dish.price}  </strong>
            <p>Description: {dish.description} </p>
            <Modal
              isOpen={modalOpen}
              imageUrl={dish.imageUrl}
              title={dish.title}
              description={dish.description}
              price={dish.price}
              onClose={() => setModalOpen(false)}
            />

          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;


